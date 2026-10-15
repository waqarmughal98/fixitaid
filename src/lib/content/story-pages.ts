import "server-only";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Block, CtaButton, Hero, Section, SectionKind, ServiceCategory, StoryPageContent } from "@/types/content.types";

// Reads the copywriter's files in content/ (copies of 2-page-content/5b, 5c, 5d) and turns
// each "## Page" into structured content. The copy stays the single source of truth:
// to change a page, edit the markdown and rebuild.
//
// The three files use slightly different conventions; all of them are handled here:
//   section headings  "### 2 Pain and stakes: H2: ..." | "### H2: ... (2. Pain and stakes)" | "### 2. Pain and stakes" + "**Heading:**"
//   bridges           "*Italic line*" | "**Bridge:** ..."
//   team-only notes   "Owner note: ..." | "*Note: ...*" | "**Note for the owner:** ..."  (never published)

const FILES = ["mold-water-areas.md", "roofing.md", "hvac-about-contact.md"];

// Pages built by hand (mockup designs or bespoke layouts) are not parsed.
const HAND_BUILT = new Set(["/about", "/contact", "/mold-water-damage-chicago", "/free-roof-check", "/hvac-repair-chicago"]);

const CATEGORY: Record<string, ServiceCategory> = {
  "/mold-inspection-chicago": "mold",
  "/mold-removal-chicago": "mold",
  "/water-damage-restoration-chicago": "mold",
  "/flooded-basement-cleanup-chicago": "mold",
  "/roofing-chicago": "roof",
  "/roof-repair-chicago": "roof",
  "/flat-roof-repair-chicago": "roof",
  "/roof-replacement-chicago": "roof",
  "/roof-care-plan": "roof",
  "/hvac-chicago": "hvac",
  "/furnace-repair-chicago": "hvac",
  "/ac-repair-chicago": "hvac",
  "/hvac-installation-chicago": "hvac",
  "/areas-we-serve": "general",
};

const KNOWN_LABELS = ["Eyebrow", "H1", "Subheadline", "Buttons", "Trust line", "Form send button", "Bridge", "Heading", "Headline", "Text"];

function kindOf(heading: string): SectionKind | "hero" | null {
  const h = heading.toLowerCase();
  if (h.includes("hero") || h.includes("hook")) return "hero";
  if (h.includes("pain")) return "pain";
  if (h.includes("turning")) return "turning";
  if (h.includes("solution")) return "solution";
  if (h.includes("benefit")) return "benefits";
  if (h.includes("proof")) return "proof";
  if (h.includes("objection") || h.includes("faq")) return "faq";
  if (h.includes("close")) return "close";
  return null;
}

function headingFrom(line: string): string | undefined {
  const m = line.match(/H2:\s*(.+?)\s*(?:\(\d\.[^)]*\))?\s*$/);
  return m ? stripQuotes(m[1]) : undefined;
}

function stripQuotes(s: string) {
  return s.replace(/^"(.*)"$/, "$1").trim();
}

function isNote(p: string) {
  return /^(Owner note:|\*Note|\*\*Note for the owner:\*\*|\|)/.test(p);
}

function isBridgeItalic(p: string) {
  return /^\*[^*].*[^*]\*$/.test(p) && !p.startsWith("*Note");
}

export function parseButtons(raw: string, ownUrl: string): CtaButton[] {
  const buttons: CtaButton[] = [];
  const re = /\[([^\]]*?)(?:\s*\(link:\s*(\/[^)]*)\))?\]\s*(?:\(link:\s*(\/[^)]*)\))?/g;
  for (const m of raw.matchAll(re)) {
    const label = m[1].trim();
    const href = m[2] ?? m[3];
    if (/^call\b/i.test(label)) buttons.push({ label, kind: "call" });
    else if (href && href !== ownUrl) buttons.push({ label, href, kind: "link" });
    else buttons.push({ label, href: "#lead-form", kind: "form" });
  }
  return buttons;
}

function labelled(line: string): { label: string; value: string } | null {
  const m = line.match(/^\*\*([^*]+?):\*\*\s*(.*)$/);
  if (!m || !KNOWN_LABELS.includes(m[1])) return null;
  return { label: m[1], value: m[2].trim() };
}

/** Turns one paragraph (consecutive non-empty lines) into blocks. */
function paragraphBlocks(lines: string[], kind: SectionKind): Block[] {
  const blocks: Block[] = [];
  const first = lines[0];

  // FAQ: "**Question?**" then the answer lines.
  if (kind === "faq" && /^\*\*[^*]+\?\*\*$/.test(first)) {
    return [{ type: "faq", q: first.slice(2, -2), a: lines.slice(1).join(" ") }];
  }

  // "**H3: Title.** text (link: /url)"
  const h3 = first.match(/^\*\*H3:\s*(.+?)\*\*\s*(.*)$/);
  if (h3) {
    let text = [h3[2], ...lines.slice(1)].join(" ").trim();
    let link: string | undefined;
    const lm = text.match(/\s*\(link:\s*(\/[^)]*)\)\s*$/);
    if (lm) {
      link = lm[1];
      text = text.slice(0, lm.index).trim();
    }
    return [{ type: "h3", title: h3[1].replace(/[.:]$/, ""), text, link }];
  }

  // Neighborhood group: "**North Side:** Rogers Park, ... [confirm list]" + a description line.
  const group = first.match(/^\*\*([^*]+?):\*\*\s+(.+)$/);
  if (group && lines.length > 1 && !lines[1].startsWith("- ") && !/^\d+\.\s/.test(lines[1])) {
    return [{ type: "group", name: group[1], places: group[2], text: lines.slice(1).join(" ") }];
  }

  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  let para: string[] = [];
  const flushPara = () => {
    if (!para.length) return;
    const text = para.join(" ");
    const sub = text.match(/^\*\*([^*]+:)\*\*$/) ?? text.match(/^([A-Z][^.!?]{2,60}:)$/);
    blocks.push(sub ? { type: "subhead", text: sub[1].replace(/:$/, "") } : { type: "p", text });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const line of lines) {
    const ul = line.match(/^- (.*)$/);
    const ol = line.match(/^\d+\.\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((ul ?? ol)![1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}

function parsePage(body: string, url: string): StoryPageContent {
  const hero: Hero = { h1: "", buttons: [], trust: [] };
  const sections: Section[] = [];
  let formButton: string | undefined;

  const parts = body.split(/^### /m).slice(1);
  for (const part of parts) {
    const [headingLine, ...rest] = part.split("\n");
    const kind = kindOf(headingLine);
    if (!kind) continue;

    const section: Section | null = kind === "hero" ? null : { kind, heading: headingFrom(headingLine), blocks: [] };
    const paragraphs = rest
      .join("\n")
      .split(/\n\s*\n/)
      .map((p) => p.split("\n").map((l) => l.trim()).filter(Boolean))
      .filter((p) => p.length);

    for (const lines of paragraphs) {
      const joined = lines.join(" ");
      if (isNote(joined)) continue;

      // Bridge in italics.
      if (lines.length === 1 && isBridgeItalic(joined)) {
        if (section) section.bridge = joined.slice(1, -1);
        else hero.bridge = joined.slice(1, -1);
        continue;
      }

      // "**(24/7 line)** ..." only shows once the owner confirms 24/7.
      if (joined.startsWith("**(24/7 line)**")) {
        if (!section) hero.line247 = joined.replace("**(24/7 line)**", "").trim();
        continue;
      }

      // "**H2: Heading**" on its own line (close sections in roofing.md).
      const h2 = joined.match(/^\*\*H2:\s*(.+?)\*\*$/);
      if (h2 && section) {
        section.heading = stripQuotes(h2[1]);
        continue;
      }

      // Labelled lines can share a paragraph ("**Buttons:**" then "**Form send button:**").
      const rest: string[] = [];
      for (const line of lines) {
        const l = labelled(line);
        if (!l) {
          rest.push(line);
          continue;
        }
        switch (l.label) {
          case "Eyebrow":
            hero.eyebrow = l.value;
            break;
          case "H1":
            hero.h1 = l.value;
            break;
          case "Subheadline":
            hero.sub = l.value;
            break;
          case "Trust line":
            hero.trust = l.value.split(/\s+·\s+/);
            break;
          case "Buttons":
            if (section) section.buttons = parseButtons(l.value, url);
            else hero.buttons = parseButtons(l.value, url);
            break;
          case "Form send button":
            formButton = l.value;
            break;
          case "Bridge":
            if (section) section.bridge = l.value;
            else hero.bridge = l.value;
            break;
          case "Heading":
          case "Headline":
            if (section) section.heading = stripQuotes(l.value);
            break;
          case "Text":
            rest.push(l.value);
            break;
        }
      }
      if (rest.length && section) section.blocks.push(...paragraphBlocks(rest, section.kind));
    }

    if (section) {
      // A question whose answer sits in the next paragraph (blank line between them).
      section.blocks = section.blocks.reduce<Block[]>((out, b) => {
        const prev = out[out.length - 1];
        if (b.type === "p" && prev?.type === "faq" && !prev.a) prev.a = b.text;
        else out.push(b);
        return out;
      }, []);
      sections.push(section);
    }
  }

  return { url, slug: url.slice(1), category: CATEGORY[url] ?? "general", hero, sections, formButton };
}

let cache: Map<string, StoryPageContent> | null = null;

export function storyPages(): Map<string, StoryPageContent> {
  if (cache) return cache;
  cache = new Map();
  for (const file of FILES) {
    const text = readFileSync(path.join(process.cwd(), "content", file), "utf8");
    for (const chunk of text.split(/^## Page /m).slice(1)) {
      const url =
        chunk.match(/\*\*URL:\*\*\s*(\/[a-z0-9-]*)/)?.[1] ??
        chunk.match(/\|\s*URL\s*\|\s*(\/[a-z0-9-]*)/)?.[1] ??
        chunk.match(/^[^\n]*?(\/[a-z0-9-]+)/)?.[1];
      if (!url || HAND_BUILT.has(url)) continue;
      cache.set(url, parsePage(chunk, url));
    }
  }
  return cache;
}

export function storyPage(slug: string) {
  return storyPages().get(`/${slug}`);
}
