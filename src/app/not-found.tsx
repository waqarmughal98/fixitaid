import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
      <SiteFooter />
    </>
  );
}
