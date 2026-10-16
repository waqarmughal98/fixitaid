/**
 * One-shot: parse content/*.md and write StoryPageContent into each
 * src/app/(site)/<slug>/page.tsx (copy lives in the route file).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const FILES = ["mold-water-areas.md", "roofing.md", "hvac-about-contact.md"];
const HAND_BUILT = new Set(["/about", "/contact", "/mold-water-damage-chicago", "/free-roof-check", "/hvac-repair-chicago"]);

const CATEGORY = {
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

function kindOf(heading) {
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

function headingFrom(line) {
  const m = line.match(/H2:\s*(.+?)\s*(?:\(\d\.[^)]*\))?\s*$/);
  return m ? stripQuotes(m[1]) : undefined;
}

function stripQuotes(s) {
  return s.replace(/^"(.*)"$/, "$1").trim();
}

function isNote(p) {
  return /^(Owner note:|\*Note|\*\*Note for the owner:\*\*|\|)/.test(p);
}

function isBridgeItalic(p) {
  return /^\*[^*].*[^*]\*$/.test(p) && !p.startsWith("*Note");
}

function parseButtons(raw, ownUrl) {
  const buttons = [];
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

function labelled(line) {
  const m = line.match(/^\*\*([^*]+?):\*\*\s*(.*)$/);
  if (!m || !KNOWN_LABELS.includes(m[1])) return null;
  return { label: m[1], value: m[2].trim() };
}

function paragraphBlocks(lines, kind) {
  const blocks = [];
  const first = lines[0];

  if (kind === "faq" && /^\*\*[^*]+\?\*\*$/.test(first)) {
    return [{ type: "faq", q: first.slice(2, -2), a: lines.slice(1).join(" ") }];
  }

  const h3 = first.match(/^\*\*H3:\s*(.+?)\*\*\s*(.*)$/);
  if (h3) {
    let text = [h3[2], ...lines.slice(1)].join(" ").trim();
    let link;
    const lm = text.match(/\s*\(link:\s*(\/[^)]*)\)\s*$/);
    if (lm) {
      link = lm[1];
      text = text.slice(0, lm.index).trim();
    }
    return [{ type: "h3", title: h3[1].replace(/[.:]$/, ""), text, link }];
  }

  const group = first.match(/^\*\*([^*]+?):\*\*\s+(.+)$/);
  if (group && lines.length > 1 && !lines[1].startsWith("- ") && !/^\d+\.\s/.test(lines[1])) {
    return [{ type: "group", name: group[1], places: group[2], text: lines.slice(1).join(" ") }];
  }

  let list = null;
  let para = [];
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
      list.items.push((ul ?? ol)[1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}

function parsePage(body, url) {
  const hero = { h1: "", buttons: [], trust: [] };
  const sections = [];
  let formButton;

  const parts = body.split(/^### /m).slice(1);
  for (const part of parts) {
    const [headingLine, ...rest] = part.split("\n");
    const kind = kindOf(headingLine);
    if (!kind) continue;

    const section = kind === "hero" ? null : { kind, heading: headingFrom(headingLine), blocks: [] };
    const paragraphs = rest
      .join("\n")
      .split(/\n\s*\n/)
      .map((p) => p.split("\n").map((l) => l.trim()).filter(Boolean))
      .filter((p) => p.length);

    for (const lines of paragraphs) {
      const joined = lines.join(" ");
      if (isNote(joined)) continue;

      if (lines.length === 1 && isBridgeItalic(joined)) {
        if (section) section.bridge = joined.slice(1, -1);
        else hero.bridge = joined.slice(1, -1);
        continue;
      }

      if (joined.startsWith("**(24/7 line)**")) {
        if (!section) hero.line247 = joined.replace("**(24/7 line)**", "").trim();
        continue;
      }

      const h2 = joined.match(/^\*\*H2:\s*(.+?)\*\*$/);
      if (h2 && section) {
        section.heading = stripQuotes(h2[1]);
        continue;
      }

      const leftover = [];
      for (const line of lines) {
        const l = labelled(line);
        if (!l) {
          leftover.push(line);
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
            leftover.push(l.value);
            break;
        }
      }
      if (leftover.length && section) section.blocks.push(...paragraphBlocks(leftover, section.kind));
    }

    if (section) {
      section.blocks = section.blocks.reduce((out, b) => {
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

function toTs(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const pad1 = "  ".repeat(indent + 1);
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    return `[\n${value.map((v) => `${pad1}${toTs(v, indent + 1)},`).join("\n")}\n${pad}]`;
  }
  const keys = Object.keys(value).filter((k) => value[k] !== undefined);
  if (!keys.length) return "{}";
  return `{\n${keys.map((k) => `${pad1}${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${toTs(value[k], indent + 1)},`).join("\n")}\n${pad}}`;
}

const pages = new Map();
for (const file of FILES) {
  const text = readFileSync(path.join(ROOT, "content", file), "utf8");
  for (const chunk of text.split(/^## Page /m).slice(1)) {
    const url =
      chunk.match(/\*\*URL:\*\*\s*(\/[a-z0-9-]*)/)?.[1] ??
      chunk.match(/\|\s*URL\s*\|\s*(\/[a-z0-9-]*)/)?.[1] ??
      chunk.match(/^[^\n]*?(\/[a-z0-9-]+)/)?.[1];
    if (!url || HAND_BUILT.has(url)) continue;
    pages.set(url, parsePage(chunk, url));
  }
}

for (const [url, page] of pages) {
  const dir = path.join(ROOT, "src/app/(site)", page.slug);
  mkdirSync(dir, { recursive: true });

  const pageTsx = `import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "${url}";
export const metadata = storyMetadata(URL);

/** Page copy for ${url}. Edit the content object below. */
export const content: StoryPageContent = ${toTs(page)};

export default function Page() {
  return <StoryRoute content={content} />;
}
`;
  writeFileSync(path.join(dir, "page.tsx"), pageTsx);
  console.log("wrote", page.slug);
}

console.log("done", pages.size);
