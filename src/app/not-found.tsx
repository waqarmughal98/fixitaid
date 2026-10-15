import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { TopBar } from "@/components/layout/TopBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata = { title: { absolute: "Page not found | Fix It Aid" }, robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <TopBar>Leak, flooded basement or no heat? Call now and a real person answers.</TopBar>
      <SiteHeader />
      <main id="main" className="page">
        <section className="hero">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">404</p>
            <h1 className="display lp">We can&apos;t find that page</h1>
            <p className="lead">It may have moved. Pick what you need, or call us and a real person will help.</p>
            <div className="ctas" style={{ marginTop: 22 }}>
              <a className="btn gold" href={site.phoneHref}>
                Call {site.phone}
              </a>
              <Link className="btn ghost" href="/">
                Home page
              </Link>
            </div>
            <div className="chips" style={{ marginTop: 26 }}>
              {[routes.moldWater, routes.roofing, routes.freeRoofCheck, routes.hvac, routes.contact].map((r) => (
                <Link className="chip" key={r.href} href={r.href}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
