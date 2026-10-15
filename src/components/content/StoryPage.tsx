import Link from "next/link";
import { site } from "@/config/site";
import { breadcrumbsFor, routeLabel } from "@/lib/routes";
import { LeadForm } from "@/components/lead/LeadForm";
import { CallBar } from "@/components/layout/CallBar";
import { Bridge, Ticks, Reviews, Faq } from "@/components/sections/Sections";
import { Icon } from "@/components/ui/Icon";
import { Inline } from "./Inline";
import type { Block, CtaButton, Section, ServiceCategory, StoryPageContent } from "@/types/content.types";

// Renders a page from the copy files with the mockup's visual system:
// charcoal bands for hook, turning point and proof; paper bands for detail; gold close.

const FORM: Record<ServiceCategory, { title: string; intro: string; options: string[] }> = {
  mold: {
    title: "Book a mold or water visit",
    intro: "Four quick fields. We call you back to set a time. Water coming in right now? Call instead.",
    options: ["Mold or a musty smell", "Water damage or a leak", "Flooded basement", "Sewage backup"],
  },
  roof: {
    title: "Book your free roof check",
    intro: "Takes a minute. We call to set a time that works for you.",
    options: [
      "A leak or a ceiling stain",
      "Missing or damaged shingles",
      "Flat roof problem or ponding water",
      "Old roof, just want a check",
      "Roof Care plan",
    ],
  },
  hvac: {
    title: "Book a heating or cooling visit",
    intro: "Tell us what's happening. We call back to set a time.",
    options: ["No heat at all", "Furnace keeps shutting off", "Boiler or radiators not heating", "AC not cooling", "Tune-up", "New system or replacement"],
  },
  general: {
    title: "Get a free estimate",
    intro: "Four fields. We call you back to set up a visit.",
    options: ["Mold or musty smell", "Water damage or flooded basement", "Roof leak or roof check", "No heat, furnace or boiler", "AC or other HVAC"],
  },
};

const HERO_STYLE: Record<ServiceCategory, string> = { mold: "v-mold", roof: "v-roof", hvac: "v-cold", general: "" };

const EYEBROW: Record<Section["kind"], string> = {
  pain: "Sound familiar?",
  turning: "Here's what's really going on",
  solution: "How it works",
  benefits: "What you get",
  proof: "Proof",
  faq: "Questions",
  close: "",
};

// Proof lines that only make sense with real reviews or photos are hidden until those exist
// (same rule as the mockup notes).
const WAITS_FOR_REAL_CONTENT = /^\[(Real review|Real job photos|Sample photo report|Team photos)/i;

function Button({ b, dark }: { b: CtaButton; dark?: boolean }) {
  if (b.kind === "call")
    return (
      <a className={dark ? "btn dark" : "btn gold"} href={site.phoneHref}>
        Call {site.phone}
      </a>
    );
  const cls = "btn ghost";
  return b.kind === "link" && b.href ? (
    <Link className={cls} href={b.href}>
      {b.label}
    </Link>
  ) : (
    <a className={cls} href="#lead-form">
      {b.label}
    </a>
  );
}

function trustItem(t: string) {
  if (/^\[24\/7 phone/i.test(t)) {
    if (site.owner.phone247 === true) return "Phone answered 24/7";
    if (site.owner.phone247 === false) return null;
  }
  return <Inline text={t} />;
}

function Blocks({ blocks, kind, ink }: { blocks: Block[]; kind: Section["kind"]; ink: boolean }) {
  const out: React.ReactNode[] = [];
  let h3s: Extract<Block, { type: "h3" }>[] = [];
  let groups: Extract<Block, { type: "group" }>[] = [];

  const flush = (key: number) => {
    if (h3s.length) {
      out.push(
        <div className="h3cards" key={`h3-${key}`}>
          {h3s.map((h) => (
            <div className="card" key={h.title} style={ink ? { background: "var(--ink-2)", borderColor: "#3a3e44" } : undefined}>
              <h3>{h.title}</h3>
              <p className="soft">
                <Inline text={h.text} />
              </p>
              {h.link && (
                <Link className="more" href={h.link}>
                  {routeLabel(h.link)} →
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
        <div className="hoods" key={`g-${key}`}>
          {groups.map((g) => (
            <div className="hood" key={g.name}>
              <h3>{g.name}</h3>
              <p className="names">
                <Inline text={g.places} />
              </p>
              <p className="soft">
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
          <p className={kind === "proof" ? "lead" : "prose"} key={i}>
            <Inline text={b.text} />
          </p>,
        );
        return;
      case "subhead":
        out.push(
          <h3 className="subhead" key={i}>
            {b.text}
          </h3>,
        );
        return;
      case "ol":
        out.push(
          <ol className="numbered" key={i}>
            {b.items.map((it) => (
              <li key={it}>
                <Inline text={it} />
              </li>
            ))}
          </ol>,
        );
        return;
      case "ul": {
        if (kind === "benefits") {
          out.push(
            <div className="answers" key={i}>
              {b.items.map((it) => {
                const m = it.match(/^\*\*(.+?)\*\*\s*(.*)$/);
                return (
                  <div className="answer" key={it}>
                    <h3>{m ? m[1].replace(/[,.:]$/, "") : ""}</h3>
                    <p className="soft">
                      <Inline text={m ? m[2] : it} />
                    </p>
                  </div>
                );
              })}
            </div>,
          );
          return;
        }
        if (kind === "proof") {
          const items = b.items.filter((it) => !WAITS_FOR_REAL_CONTENT.test(it));
          out.push(
            <ul className="proofs" key={i}>
              {items.map((it) => (
                <li key={it}>
                  <Icon name="check" />
                  <span>
                    <Inline text={it} />
                  </span>
                </li>
              ))}
            </ul>,
          );
          return;
        }
        out.push(
          <ul className="list prose" key={i}>
            {b.items.map((it) => (
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

function StorySection({ section, label }: { section: Section; label: string }) {
  const { kind } = section;
  const ink = kind === "turning" || kind === "proof";
  const band = ink ? "band ink" : kind === "benefits" || kind === "faq" ? "band white" : "band";

  if (kind === "faq") {
    const items = section.blocks.filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq");
    return (
      <section className={band}>
        <Faq title={section.heading ?? `${label} questions`} items={items.map((f) => ({ q: f.q, a: <p><Inline text={f.a} /></p> }))} />
        {section.bridge && (
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Bridge>{section.bridge}</Bridge>
          </div>
        )}
      </section>
    );
  }

  if (kind === "close") {
    const paras = section.blocks.filter((b): b is Extract<Block, { type: "p" }> => b.type === "p");
    return (
      <section className="final">
        <div className="wrap">
          <div>
            <h2>{section.heading}</h2>
            {paras.map((p, i) => (
              <p key={i} style={{ marginTop: 10, fontSize: 18 }}>
                <Inline text={p.text} />
              </p>
            ))}
          </div>
          <div className="ctas">
            {(section.buttons ?? []).map((b) => (
              <Button b={b} dark key={b.label} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={band}>
      <div className="wrap story">
        <p className="eyebrow">{EYEBROW[kind]}</p>
        {kind === "turning" ? (
          <h2 className="display turn" style={{ fontSize: "clamp(34px,5vw,60px)" }}>
            <Inline text={section.heading ?? ""} />
          </h2>
        ) : (
          <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,50px)", fontWeight: 800, marginBottom: 22 }}>
            <Inline text={section.heading ?? ""} />
          </h2>
        )}
        <Blocks blocks={section.blocks} kind={kind} ink={ink} />
        {kind === "proof" && <Reviews />}
        {section.bridge && <Bridge>{section.bridge}</Bridge>}
      </div>
    </section>
  );
}

export function StoryPage({ page, h1 }: { page: StoryPageContent; h1: string }) {
  const { hero, category } = page;
  const form = FORM[category];
  const crumbs = breadcrumbsFor(page.url);
  const label = routeLabel(page.url);
  const showLine247 = hero.line247 && site.owner.phone247 === true;

  return (
    <>
      <section className={`hero ${HERO_STYLE[category]}`}>
        <div className="wrap grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.href}>
                  {i > 0 && " / "}
                  {i < crumbs.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
            {hero.eyebrow && <p className="eyebrow">{hero.eyebrow}</p>}
            <h1 className="display lp">{h1}</h1>
            {hero.sub && (
              <p className="lead">
                <Inline text={hero.sub} />
              </p>
            )}
            <div className="ctas">
              {hero.buttons.map((b) => (
                <Button b={b} key={b.label} />
              ))}
            </div>
            <Ticks items={hero.trust.map(trustItem).filter((t) => t !== null)} />
            {showLine247 && (
              <p className="lead" style={{ marginTop: 16 }}>
                <Inline text={hero.line247!.replace(/\s*\[24\/7 phone: yes or no\]/, "")} />
              </p>
            )}
          </div>
          <LeadForm
            id="lead-form"
            className="stacked"
            title={form.title}
            intro={form.intro}
            options={form.options}
            submitLabel={page.formButton ?? (category === "roof" ? "Book my free roof check" : "Send my request")}
          />
        </div>
        {hero.bridge && (
          <div className="wrap">
            <Bridge>{hero.bridge}</Bridge>
          </div>
        )}
      </section>

      {page.sections.map((s, i) => (
        <StorySection section={s} label={label} key={i} />
      ))}

      <CallBar formHref="#lead-form" formLabel={category === "roof" ? "Free check" : "Book"} />
    </>
  );
}

