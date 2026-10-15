import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";
import type { RouteInfo } from "@/lib/routes";

type Fact = { big: React.ReactNode; small: React.ReactNode };

type Props = {
  photo: PhotoKey;
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  facts?: Fact[];
  form?: React.ReactNode;
  crumbs?: RouteInfo[];
};

// Full-bleed photo hero. The photo is the page's first impression; the form sits on it.
export function Hero({ photo, title, lead, actions, facts, form, crumbs }: Props) {
  return (
    <section className="hero" data-hero>
      <div className="hero-media" data-hero-media>
        <Photo name={photo} ratio={16 / 9} sizes="100vw" priority className="photo" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            {crumbs && (
              <nav className="crumbs" aria-label="Breadcrumb">
                {crumbs.map((c, i) => (
                  <span key={c.href}>
                    {i < crumbs.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  </span>
                ))}
              </nav>
            )}
            <h1 className="display" data-split>
              {title}
            </h1>
            {lead && <p className="lead">{lead}</p>}
            {actions && <div className="actions">{actions}</div>}
          </div>
          {form}
        </div>
        {facts && facts.length > 0 && (
          <ul className="hero-facts">
            {facts.map((f, i) => (
              <li key={i}>
                <strong>{f.big}</strong>
                {f.small}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="scroll-cue" aria-hidden="true">
        Scroll
      </span>
    </section>
  );
}
