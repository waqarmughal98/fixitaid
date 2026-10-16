import Link from "next/link";
import { site } from "@/config/site";
import { breadcrumbsFor, routeLabel } from "@/lib/routes";
import { sentenceCase } from "@/lib/text";
import type { PhotoKey } from "@/lib/photos";
import { Photo } from "@/components/ui/Photo";
import type { Note } from "@/components/ui/PhotoNotes";
import { LeadForm } from "@/components/lead/LeadForm";
import { CallBar } from "@/components/layout/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Report } from "@/components/sections/Report";
import { Rows, Checks, Reviews, FaqSection, CloseCta, Rating } from "@/components/sections/Sections";
import { Inline, hasPlaceholder } from "./Inline";
import type { Block, CtaButton, Section, ServiceCategory, StoryPageContent } from "@/types/content.types";

// Renders a service page from the co-located content.ts: full-bleed hero with the form on it,
// a marked-up photo at the turning point, and layouts chosen by content type.
// Bridge lines from the copy are not shown (they read as scripted).

const FORM: Record<ServiceCategory, { title: string; intro: string; options: string[] }> = {
  mold: {
    title: "Book a mold or water visit",
    intro: "We call you back to set a time. Water coming in right now? Call instead.",
    options: ["Mold or a musty smell", "Water damage or a leak", "Flooded basement", "Sewage backup"],
  },
  roof: {
    title: "Book your free roof check",
    intro: "Takes a minute. We call to set a time that works for you.",
    options: ["A leak or a ceiling stain", "Missing or damaged shingles", "Flat roof problem or ponding water", "Old roof, just want a check", "Roof Care plan"],
  },
  hvac: {
    title: "Book a heating or cooling visit",
    intro: "Tell us what's happening. We call back to set a time.",
    options: ["No heat at all", "Furnace keeps shutting off", "Boiler or radiators not heating", "AC not cooling", "Tune-up", "New system or replacement"],
  },
  general: {
    title: "Get your free Inspection",
    intro: "Four fields. We call you back to set up a visit.",
    options: ["Mold or musty smell", "Water damage or flooded basement", "Roof leak or roof check", "No heat, furnace or boiler", "AC or other HVAC"],
  },
};

// Each page gets its own pair: the hero photo and the photo at the turning point.
const PAGE_PHOTOS: Record<string, { hero: PhotoKey; turning: PhotoKey }> = {
  "/mold-inspection-chicago": { hero: "moldWall", turning: "dampBasement" },
  "/mold-removal-chicago": { hero: "gutRoom", turning: "moldWall2" },
  "/water-damage-restoration-chicago": { hero: "ceilingOpen", turning: "rebuild" },
  "/flooded-basement-cleanup-chicago": { hero: "basementDark", turning: "basementDry" },
  "/roofing-chicago": { hero: "roofer", turning: "roofCrew" },
  "/roof-repair-chicago": { hero: "rooferHarness", turning: "roofSeal" },
  "/flat-roof-repair-chicago": { hero: "flatRoof", turning: "snowRoof" },
  "/roof-replacement-chicago": { hero: "rooferDrill", turning: "roofTearOff" },
  "/roof-care-plan": { hero: "gutter", turning: "rainShingles" },
  "/hvac-chicago": { hero: "furnace", turning: "boilerValves" },
  "/furnace-repair-chicago": { hero: "boilerPipes", turning: "thermostat" },
  "/ac-repair-chicago": { hero: "acUnit", turning: "acWall" },
  "/hvac-installation-chicago": { hero: "ductwork", turning: "acLines" },
  "/areas-we-serve": { hero: "chicagoStreet", turning: "chicagoStreet2" },
};

// Marked-up notes, keyed by the photo they were drawn for. A turning photo without notes shows plain.
const PHOTO_NOTES: Partial<Record<PhotoKey, Note[]>> = {
  moldWall2: [
    { x: 38, y: 24, r: 10, title: "Dense growth up high", text: "Where the wall stayed wet longest. The water is coming from above." },
    { x: 82, y: 74, r: 9, title: "Spreading down and out", text: "Mold follows the moisture. Cleaning the surface won't stop it." },
    { x: 10, y: 56, r: 7, title: "Still dry here", text: "Moisture readings show exactly how far the wet area goes." },
  ],
  tearOff: [
    { x: 22, y: 50, r: 9, title: "The wood deck, exposed", text: "Soft or rotted boards are replaced before anything new goes on." },
    { x: 50, y: 40, r: 6, title: "Vent pipe", text: "A cracked rubber boot here is one of the most common Chicago leaks." },
    { x: 88, y: 41, r: 7, title: "The roof edge", text: "Ice dams push water under the shingles here. Ice and water shield goes on first." },
  ],
  radiators: [
    { x: 64, y: 47, r: 10, title: "Cold at the top", text: "Air trapped in a steam or hot water system. Often a quick fix." },
    { x: 45, y: 80, r: 9, title: "Cold all over", text: "The boiler, a pump or a valve is the cause. We find which one." },
  ],
};

// Proof lines that need real reviews or photos stay hidden until those exist.
const WAITS_FOR_REAL_CONTENT = /^\[(Real review|Real job photos|Sample photo report|Team photos)/i;

function trustFact(t: string): { big: React.ReactNode; small: React.ReactNode } | null {
  if (/^\[24\/7 phone/i.test(t)) {
    if (site.owner.phone247 === true) return { big: "24/7", small: "Phone answered" };
    return null;
  }
  if (/^\[Google rating/i.test(t)) return { big: <Rating />, small: null };
  // Unconfirmed bracket facts: omit (do not invent).
  if (/\[[^\]]+\]/.test(t) && !/^Licensed for mold|^Licensed for HVAC/i.test(t)) {
    // Keep "Licensed for mold remediation [Mold licence number]" as a licensed claim without the number.
    if (/Mold licence number|HVAC licence number/i.test(t)) {
      const clean = t.replace(/\s*\[[^\]]+\]/g, "").trim();
      if (!clean) return null;
      return { big: <Inline text={clean} />, small: null };
    }
    return null;
  }
  // "Illinois roofing licence 104.021107" -> big number, small label
  const m = t.match(/^(.*?)\s+([A-Z]{0,3}\d[\d.]{4,})$/);
  if (m) return { big: m[2], small: <Inline text={m[1]} /> };
  return { big: <Inline text={t} />, small: null };
}

function Blocks({ blocks, kind }: { blocks: Block[]; kind: Section["kind"] }) {
  const out: React.ReactNode[] = [];
  let h3s: Extract<Block, { type: "h3" }>[] = [];
  let groups: Extract<Block, { type: "group" }>[] = [];

  const flush = (key: number) => {
    if (h3s.length) {
      out.push(
        <div className="subservices" key={`h3-${key}`}>
          {h3s.map((h) => (
            <div key={h.title}>
              <h3 className="h3">{h.title}</h3>
              <p>
                <Inline text={h.text} />
              </p>
              {h.link && (
                <Link className="text-link" href={h.link}>
                  {routeLabel(h.link)}
                </Link>
              )}
            </div>
          ))}
        </div>,
      );
      h3s = [];
    }
    if (groups.length) {
      out.push(
        <div className="groups" key={`g-${key}`}>
          {groups.map((g) => (
            <div key={g.name}>
              <h3 className="h3">{g.name}</h3>
              <p className="places">
                <Inline text={g.places} />
              </p>
              <p className="muted">
                <Inline text={g.text} />
              </p>
            </div>
          ))}
        </div>,
      );
      groups = [];
    }
  };

  blocks.forEach((b, i) => {
    if (b.type === "h3") return void h3s.push(b);
    if (b.type === "group") return void groups.push(b);
    flush(i);
    switch (b.type) {
      case "p":
        if (WAITS_FOR_REAL_CONTENT.test(b.text)) return;
        out.push(
          <p className="prose" key={i} style={{ marginTop: 18 }}>
            <Inline text={b.text} />
          </p>,
        );
        return;
      case "subhead":
        out.push(
          <h3 className="h3" key={i} style={{ marginTop: 40 }}>
            {b.text}
          </h3>,
        );
        return;
      case "ol":
        out.push(
          <ol className="process" key={i}>
            {b.items
              .map((it) => it.replace(/\s*\[[^\]]+\]/g, "").replace(/\s{2,}/g, " ").trim())
              .filter(Boolean)
              .map((it) => (
                <li key={it}>
                  <span>
                    <Inline text={it} />
                  </span>
                </li>
              ))}
          </ol>,
        );
        return;
      case "ul": {
        if (kind === "benefits") {
          out.push(
            <Rows
              key={i}
              items={b.items.map((it) => {
                const m = it.match(/^\*\*(.+?)\*\*\s*(.*)$/);
                return { worry: m ? m[1].replace(/[,.:]$/, "") : "", answer: <Inline text={m ? m[2] : it} /> };
              })}
            />,
          );
          return;
        }
        if (kind === "proof") {
          const items = b.items
            .filter((it) => !WAITS_FOR_REAL_CONTENT.test(it))
            .filter((it) => !hasPlaceholder(it) || /licence number|Google rating/i.test(it))
            .map((it) => <Inline key={it} text={it} />);
          if (items.length) out.push(<Checks key={i} items={items} />);
          return;
        }
        out.push(
          <ul className="prose" key={i} style={{ marginTop: 16 }}>
            {b.items
              .filter((it) => !hasPlaceholder(it) || /\(link:/.test(it))
              .map((it) => (
                <li key={it}>
                  <Inline text={it} />
                </li>
              ))}
          </ul>,
        );
        return;
      }
    }
  });
  flush(blocks.length);
  return <>{out}</>;
}

function Heading({ text }: { text?: string }) {
  return (
    <h2 className="h2" data-split>
      <Inline text={text ?? ""} />
    </h2>
  );
}

function StorySection({
  section,
  label,
  turningPhoto,
  index,
}: {
  section: Section;
  label: string;
  turningPhoto: PhotoKey;
  index: number;
}) {
  const { kind } = section;
  const surface = index % 2 === 1;

  if (kind === "faq") {
    const items = section.blocks
      .filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq")
      .filter((f) => !hasPlaceholder(f.a));
    if (!items.length) return null;
    return (
      <FaqSection
        surface={surface}
        title={section.heading ?? `${label} questions`}
        items={items.map((f) => ({ q: f.q, a: <p><Inline text={f.a} /></p> }))}
      />
    );
  }

  if (kind === "close") {
    const paras = section.blocks.filter((b): b is Extract<Block, { type: "p" }> => b.type === "p");
    const primary = (section.buttons ?? []).find((b: CtaButton) => b.kind !== "call");
    return (
      <CloseCta
        title={section.heading ?? "Talk to us"}
        text={paras.map((p, i) => (
          <span key={i}>
            {i > 0 && " "}
            <Inline text={p.text} />
          </span>
        ))}
        primary={{ href: primary?.kind === "link" && primary.href ? primary.href : "#lead-form", label: primary?.label ?? "Book online" }}
      />
    );
  }

  if (kind === "turning") {
    const report = { photo: turningPhoto, notes: PHOTO_NOTES[turningPhoto] };
    if (report.notes) {
      return (
        <Report heading={<Inline text={section.heading ?? ""} />} photo={report.photo} notes={report.notes} surface={surface}>
          <div>
            <Blocks blocks={section.blocks} kind={kind} />
          </div>
        </Report>
      );
    }
    return (
      <section className={`section${surface ? " surface" : ""}`}>
        <div className="wrap grid-12" style={{ alignItems: "center" }}>
          <div className="span-5">
            <Heading text={section.heading} />
            <Blocks blocks={section.blocks} kind={kind} />
          </div>
          <div className="span-7 stick">
            <div className="frame" data-parallax style={{ aspectRatio: "3 / 2" }}>
              <Photo name={report.photo} ratio={3 / 2} sizes="(max-width: 960px) 100vw, 760px" />
            </div>
            <p className="caption">Example photo.</p>
          </div>
        </div>
      </section>
    );
  }

  // Sections with lists or cards get the full width; prose sections a heading column.
  const wide = section.blocks.some((b) => b.type === "h3" || b.type === "group" || b.type === "ol") || kind === "proof";
  if (wide) {
    return (
      <section className={`section${surface ? " surface" : ""}`}>
        <div className="wrap">
          <div style={{ maxWidth: 900 }}>
            <Heading text={section.heading} />
          </div>
          <div style={{ marginTop: 12 }}>
            {kind === "proof" && (
              <p className="lead" style={{ marginBottom: 28 }}>
                <Rating />
              </p>
            )}
            <Blocks blocks={section.blocks} kind={kind} />
          </div>
          {kind === "proof" && <Reviews />}
        </div>
      </section>
    );
  }
  return (
    <section className={`section${surface ? " surface" : ""}`}>
      <div className="wrap grid-12">
        <div className="span-5 stick">
          <Heading text={section.heading} />
        </div>
        <div className="span-7">
          <Blocks blocks={section.blocks} kind={kind} />
        </div>
      </div>
    </section>
  );
}

export function StoryPage({ page, h1 }: { page: StoryPageContent; h1: string }) {
  const { hero, category } = page;
  const photos = PAGE_PHOTOS[page.url] ?? { hero: "chicagoStreet", turning: "chicagoStreet2" };
  const form = FORM[category];
  const label = routeLabel(page.url);
  const facts = hero.trust.map(trustFact).filter((f) => f !== null).slice(0, 3);
  const primary = hero.buttons.find((b) => b.kind !== "call");

  return (
    <>
      <Hero
        photo={photos.hero}
        crumbs={breadcrumbsFor(page.url)}
        title={sentenceCase(h1)}
        lead={
          <>
            {hero.eyebrow && <strong>{hero.eyebrow} </strong>}
            {hero.sub && <Inline text={hero.sub} />}
          </>
        }
        actions={
          <>
            {primary &&
              (primary.kind === "link" && primary.href ? (
                <Link className="btn btn-gold" href={primary.href}>
                  {primary.label}
                </Link>
              ) : (
                <a className="btn btn-gold" href="#lead-form">
                  {primary.label}
                </a>
              ))}
            <a className="btn btn-ghost" href={site.phoneHref}>
              Call {site.phone}
            </a>
          </>
        }
        facts={facts}
        form={
          <LeadForm
            id="lead-form"
            title={form.title}
            intro={form.intro}
            options={form.options}
            submitLabel={page.formButton ?? (category === "roof" ? "Book my free roof check" : "Send my request")}
          />
        }
      />

      {page.sections.map((s, i) => (
        <StorySection section={s} label={label} turningPhoto={photos.turning} index={i} key={i} />
      ))}

      <CallBar formHref="#lead-form" formLabel={category === "roof" ? "Free check" : "Book"} />
    </>
  );
}
