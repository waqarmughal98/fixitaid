import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LicenceLine } from "@/components/layout/Licences";

export const metadata = { title: { absolute: "Page not found | Fix It Aid" }, robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <section className="page-top">
          <div className="wrap stack">
            <h1 className="display" data-split>
              We can&apos;t find that page
            </h1>
            <p className="lead">It may have moved. Pick what you need below, or call and a real person will help.</p>
            <div className="actions">
              <a className="btn btn-gold" href={site.phoneHref}>
                Call {site.phone}
              </a>
              <Link className="btn btn-ghost" href="/">
                Home page
              </Link>
            </div>
            <ul className="rail-links">
              {[routes.moldWater, routes.roofing, routes.freeRoofCheck, routes.hvac, routes.contact].map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap" style={{ display: "block", paddingBlock: 32 }}>
          <div className="legal" style={{ borderTop: 0, paddingTop: 0 }}>
            <p>
              {site.legalName}. <LicenceLine show={["gc"]} />
            </p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>. <Link href={routes.privacy.href}>Privacy</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
