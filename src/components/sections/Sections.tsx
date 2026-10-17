import { site, reviewsReady } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

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

/** Licence cards. Confirmed numbers "decode" into place on scroll. Rows with no value and no fallback are skipped. */
export function Licences({ items }: { items: { value: string | null; label: string; fallback?: string }[] }) {
  const shown = items.filter((l) => l.value || l.fallback);
  if (!shown.length) return null;
  return (
    <div className="lic-cards">
      {shown.map((l) => (
        <div className="lic-card" key={l.label}>
          <span className="ico" aria-hidden="true">
            <Icon name="check" />
          </span>
          {l.value ? (
            <b className="num" data-scramble={l.value}>
              {l.value}
            </b>
          ) : (
            <b className="num">{l.fallback}</b>
          )}
          <span className="lbl">{l.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Certifications and memberships the owner has confirmed. Renders nothing while the list is empty. */
export function Certifications() {
  const list = site.certifications;
  if (!list.length) return null;
  return (
    <div className="certs">
      <p className="certs-title">Certifications and memberships</p>
      <ul>
        {list.map((c) => (
          <li key={c.name}>
            {c.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.logo} alt={c.name} loading="lazy" />
            ) : (
              <b>{c.name}</b>
            )}
            {c.note && <small>{c.note}</small>}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The two CTA types, in one place: gold Book a Free Inspection, plus the white Call button. */
export function SectionCta({ href = "#lead-form", call = true, align }: { href?: string; call?: boolean; align?: "center" }) {
  return (
    <div className={`actions sec-cta${align === "center" ? " center" : ""}`}>
      <a className="btn btn-gold" href={href}>
        Book a Free Inspection
      </a>
      {call && (
        <a className="btn btn-white" href={site.phoneHref}>
          Call Now
        </a>
      )}
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
  return (
    <>
      100+ Satisfied customers
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
        <div className="span-4 stick">
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
            Book a Free Inspection
          </a>
          {secondary && (
            <a className="btn btn-white" href={site.phoneHref}>
              Call Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/** A big statement whose words light up as you scroll past it. With `media`, the video or photo sits on the right. */
export function Statement({ children, aside, media, cta }: { children: React.ReactNode; aside?: React.ReactNode; media?: React.ReactNode; cta?: React.ReactNode }) {
  if (media) {
    return (
      <section className="section">
        <div className="wrap grid-12 statement-split">
          <div className="span-6">
            <p className="statement" data-words>
              {children}
            </p>
            {aside && <div className="statement-aside">{aside}</div>}
            {cta}
          </div>
          <div className="span-6">{media}</div>
        </div>
      </section>
    );
  }
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
