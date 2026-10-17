import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";
import { site } from "@/config/site";

export type RailItem = {
  photo: PhotoKey;
  title: string;
  text: string;
  href: string;
  links: { href: string; label: string }[];
  ctaLabel?: string;
};

// Services as large photo panels. On desktop the section pins and the panels slide
// sideways as you scroll; on phones it is a swipeable row with snap points.
export function ServiceRail({ heading, intro, items, cta }: { heading: string; intro: string; items: RailItem[]; cta: { title: string; text: string; href: string; label: string } }) {
  return (
    <section className="rail" data-rail aria-label={heading}>
      <div className="wrap rail-head">
        <div className="head">
          <h2 className="h2" data-split>
            {heading}
          </h2>
          <p className="lead">{intro}</p>
        </div>
      </div>
      <div className="rail-viewport">
        <div className="rail-track" data-rail-track>
          {items.map((it, i) => (
            <article className="rail-panel" key={it.href}>
              <Photo name={it.photo} ratio={4 / 3} sizes="(max-width: 960px) 84vw, 62vw" />
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <h3>
                <Link href={it.href}>{it.title}</Link>
              </h3>
              <p>{it.text}</p>
              <ul className="rail-links">
                {it.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="rail-cta">
                <a className="btn btn-gold" href={cta.href}>
                  Book a Free Inspection
                </a>
              </div>
            </article>
          ))}
          <article className="rail-panel cta">
            <span className="h3">Not sure what it is?</span>
            <div>
              <h3>{cta.title}</h3>
              <p>{cta.text}</p>
              <div className="actions" style={{ marginTop: 24 }}>
                <a className="btn btn-gold" href={cta.href}>
                  Book a Free Inspection
                </a>
                <a className="btn btn-white" href={site.phoneHref}>
                  Call Now
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="rail-progress" aria-hidden="true">
        <span data-rail-progress />
      </div>
    </section>
  );
}
