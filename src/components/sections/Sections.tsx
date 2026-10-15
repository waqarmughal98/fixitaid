import { site, reviewsReady } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/IconSprite";
import { Placeholder } from "@/components/ui/Placeholder";

// Building blocks of the 8-step page story (7-reference/8-competitor-copy-study).

/** The gold-arrow line that ends a section and leads into the next one. */
export function Bridge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`bridge ${className ?? ""}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {aside}
    </div>
  );
}

export function Ticks({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ticks">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export function TrustStrip({ items }: { items: { title: React.ReactNode; text: React.ReactNode }[] }) {
  return (
    <div className="trust">
      <div className="wrap">
        {items.map((it, i) => (
          <div key={i}>
            <b>{it.title}</b>
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Quotes({ items }: { items: { icon: IconName; text: string; note?: string }[] }) {
  return (
    <div className="quotes">
      {items.map((q) => (
        <div className="quote" key={q.text}>
          <Icon name={q.icon} className="qi" />
          <p>{q.text}</p>
          {q.note && <span>{q.note}</span>}
        </div>
      ))}
    </div>
  );
}

export function Steps({
  items,
  four,
  style,
}: {
  items: { icon: IconName; title: string; text: React.ReactNode; key?: boolean }[];
  four?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <ol className={`steps${four ? " four" : ""}`} style={style}>
      {items.map((s) => (
        <li key={s.title} className={s.key ? "key" : undefined}>
          <Icon name={s.icon} className="si" />
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Answers({ items }: { items: { fear: string; title: string; text: React.ReactNode }[] }) {
  return (
    <div className="answers">
      {items.map((a) => (
        <div className="answer" key={a.title}>
          <p className="fear">{a.fear}</p>
          <h3>{a.title}</h3>
          <p className="soft">{a.text}</p>
        </div>
      ))}
    </div>
  );
}

export function LicenceGrid({ items }: { items: { value: string | null; label: string; missing?: string }[] }) {
  return (
    <div className="licences">
      {items.map((l) => (
        <div key={l.label}>
          <b>{l.value ?? <Placeholder>{l.missing ?? "no."}</Placeholder>}</b>
          <span>{l.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Google rating for proof sections. */
export function Rating() {
  const r = site.owner.googleRating;
  if (!r) return <Placeholder>★ rating · count Google reviews</Placeholder>;
  return (
    <>
      ★ {r.rating.toFixed(1)} from {r.count} Google reviews
    </>
  );
}

/** Real reviews only. Hidden until there are at least 3 (rule from the mockup notes). */
export function Reviews({ service }: { service?: "roof" | "mold" | "hvac" }) {
  if (!reviewsReady) return null;
  const list = (service ? site.reviews.filter((r) => r.service === service) : site.reviews).slice(0, 3);
  const shown = list.length >= 3 ? list : site.reviews.slice(0, 3);
  return (
    <div className="reviews">
      {shown.map((r) => (
        <div className="review" key={r.name + r.text.slice(0, 20)}>
          <div className="stars" aria-label="5 stars">
            ★★★★★
          </div>
          <p>{r.text}</p>
          <p className="who">
            {r.name} · {r.neighborhood} · {r.job}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Faq({ items, title, narrow = true }: { items: { q: string; a: React.ReactNode }[]; title: string; narrow?: boolean }) {
  return (
    <div className="wrap" style={narrow ? { maxWidth: 860 } : undefined}>
      <p className="eyebrow">Questions</p>
      <h2 className="display" style={{ fontSize: "clamp(34px,4.6vw,52px)", fontWeight: 800, marginBottom: 20 }}>
        {title}
      </h2>
      {items.map((it, i) => (
        <details key={it.q} open={i === 0}>
          <summary>{it.q}</summary>
          <div className="faq-a">{typeof it.a === "string" ? <p>{it.a}</p> : it.a}</div>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: React.ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string; ghost?: boolean };
}) {
  return (
    <section className="final">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p style={{ marginTop: 10, fontSize: 18 }}>{text}</p>
        </div>
        <div className="ctas">
          <a className="btn dark" href={primary.href}>
            {primary.label}
          </a>
          {secondary &&
            (secondary.ghost ? (
              <a className="btn ghost" href={secondary.href}>
                {secondary.label}
              </a>
            ) : (
              <a className="tel" href={secondary.href} style={{ fontSize: 24 }}>
                {secondary.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
