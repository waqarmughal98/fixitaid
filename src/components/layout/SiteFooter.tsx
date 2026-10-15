import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { Fact } from "@/components/ui/Placeholder";
import { LicenceLine } from "./Licences";
import { LogoImage } from "./Logo";

const columns = [
  {
    title: "Mold & water",
    links: [routes.moldWater, routes.moldInspection, routes.moldRemoval, routes.waterDamage, routes.floodedBasement],
  },
  {
    title: "Roofing",
    links: [routes.roofing, routes.freeRoofCheck, routes.roofRepair, routes.flatRoof, routes.roofReplacement, routes.roofCare],
  },
  {
    title: "Heating & cooling",
    links: [routes.hvac, routes.furnace, routes.ac, routes.hvacInstall],
  },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <Link className="logo footer-logo" href="/" aria-label="Fix It Aid, home">
            <LogoImage />
          </Link>
          <p style={{ marginTop: 10 }}>Mold, water damage, roofing and HVAC for Chicago homes, condos and 2-flats.</p>
          <p style={{ marginTop: 10 }}>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <Fact value={site.owner.address} label="Address to show" />
          </p>
          <ul style={{ marginTop: 12 }}>
            <li>
              <Link href={routes.areas.href}>Areas we serve</Link>
            </li>
            <li>
              <Link href={routes.about.href}>About</Link>
            </li>
            <li>
              <Link href={routes.contact.href}>Contact</Link>
            </li>
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="legal">
          <LicenceLine /> · © {new Date().getFullYear()} {site.legalName} ·{" "}
          <Link href={routes.privacy.href}>Privacy</Link>
        </p>
      </div>
    </footer>
  );
}

// Ad pages: one line, no menu links except the privacy policy (needed for Google Ads).
export function LandingFooter({ licences }: { licences: ("gc" | "roofing" | "mold" | "hvac")[] }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="legal" style={{ border: 0, padding: 0 }}>
          {site.legalName} · <LicenceLine show={licences} /> · <a href={site.phoneHref}>{site.phone}</a> ·{" "}
          <Link href={routes.privacy.href}>Privacy</Link>
        </p>
      </div>
    </footer>
  );
}
