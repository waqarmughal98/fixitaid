import { site, reviewsReady } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";

// Section building blocks. Each one encodes what the content is: a sequence gets numbers,
// worries and answers get two columns, licences get big figures.

export function Steps({ items }: { items: { title: string; text: React.ReactNode; key?: boolean }[] }) {
  return (
    <ol className="steps" style={{ "--n": items.length } as React.CSSProperties} data-steps>
      {items.map((s) => (
        <li key={s.title} className={s.key ? "key" : undefined}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Worry on the left, what we do on the right. */
export function Rows({ items }: { items: { worry: string; answer: React.ReactNode }[] }) {
  return (
    <dl className="rows">
      {items.map((r) => (
        <div key={r.worry}>
          <dt>{r.worry}</dt>
          <dd>{r.answer}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Licence numbers. Confirmed ones "decode" into place on scroll. */
export function Licences({ items }: { items: { value: string | null; label: string; missing?: string }[] }) {
  return (
    <div className="licences">
      {items.map((l) => (
        <div key={l.label}>
          {l.value ? (
            <b className="num" data-scramble={l.value}>
              {l.value}
            </b>
          ) : (
            <b className="num">
              <Placeholder>{l.missing ?? "no."}</Placeholder>
            </b>
          )}
          <span className="lbl">{l.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Checks({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="checks">
      {items.map((it, i) => (
        <li key={i}>
          <Icon name="check" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Rating() {
  const r = site.owner.googleRating;
  if (!r) return <Placeholder>★ rating · count Google reviews</Placeholder>;
  return (
    <>
      ★ {r.rating.toFixed(1)} from {r.count} Google reviews
    </>
  );
}

/** Real reviews only. Hidden until there are at least 3. */
export function Reviews({ service }: { service?: "roof" | "mold" | "hvac" }) {
  if (!reviewsReady) return null;
  const list = service ? site.reviews.filter((r) => r.service === service) : site.reviews;
  const shown = (list.length >= 3 ? list : site.reviews).slice(0, 3);
  return (
    <div className="reviews">
      {shown.map((r) => (
        <blockquote key={r.name + r.text.slice(0, 20)}>
          <p>{r.text}</p>
          <cite>
            {r.name}, {r.neighborhood}. {r.job}
          </cite>
        </blockquote>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="faq">
      {items.map((it, i) => (
        <details key={it.q} open={i === 0}>
          <summary>{it.q}</summary>
          <div className="answer">{typeof it.a === "string" ? <p>{it.a}</p> : it.a}</div>
        </details>
      ))}
    </div>
  );
}

/** FAQ block with its heading on the left. */
export function FaqSection({ title, items, surface }: { title: string; items: { q: string; a: React.ReactNode }[]; surface?: boolean }) {
  return (
    <section className={`section${surface ? " surface" : ""}`}>
      <div className="wrap grid-12">
        <div className="span-4">
          <h2 className="h2" data-split>
            {title}
          </h2>
        </div>
        <div className="span-8">
          <Faq items={items} />
        </div>
      </div>
    </section>
  );
}

type Cta = { href: string; label: string };

export function CloseCta({ title, text, primary, secondary }: { title: string; text: React.ReactNode; primary: Cta; secondary?: Cta }) {
  return (
    <section className="close">
      <div className="wrap">
        <h2 className="h2" data-split>
          {title}
        </h2>
        <p className="lead">{text}</p>
        <a className="big-tel" href={site.phoneHref} data-magnetic>
          {site.phone}
        </a>
        <div className="actions">
          <a className="btn btn-gold" href={primary.href}>
            {primary.label}
          </a>
          {secondary && (
            <a className="btn btn-ghost" href={secondary.href}>
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/** A big statement whose words light up as you scroll past it. */
export function Statement({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <section className="section">
      <div className="wrap grid-12" style={{ alignItems: "end" }}>
        <p className="statement span-8" data-words>
          {children}
        </p>
        {aside && <div className="span-4">{aside}</div>}
      </div>
    </section>
  );
}

/** Heading + intro row used at the top of many sections. */
export function Head({ title, intro }: { title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="head">
      <h2 className="h2" data-split>
        {title}
      </h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}
