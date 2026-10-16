import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { LicenceLine } from "./Licences";
import { LogoImage } from "./Logo";

const columns = [
  {
    title: "Mold and water",
    links: [routes.moldWater, routes.moldInspection, routes.moldRemoval, routes.waterDamage, routes.floodedBasement],
  },
  {
    title: "Roofing",
    links: [routes.roofing, routes.freeRoofCheck, routes.roofRepair, routes.flatRoof, routes.roofReplacement, routes.roofCare],
  },
  {
    title: "Heating and cooling",
    links: [routes.hvac, routes.furnace, routes.ac, routes.hvacInstall],
  },
  {
    title: "Company",
    links: [routes.areas, routes.about, routes.contact],
  },
];

function PhotoNotice() {
  return <p>Photos on this site are examples from Unsplash, not Fix It Aid jobs.</p>;
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <Link className="logo" href="/" aria-label="Fix It Aid, home">
            <LogoImage />
          </Link>
          <p style={{ marginTop: 16 }}>Mold, water damage, roofing and HVAC for Chicago homes, condos and 2-flats.</p>
          <p style={{ marginTop: 12 }}>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="legal">
          <p>
            <LicenceLine />
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName}. <Link href={routes.privacy.href}>Privacy</Link>
          </p>
          {/* <PhotoNotice /> */}
        </div>
      </div>
    </footer>
  );
}

// Ad pages: licences, phone and the privacy policy (needed for Google Ads). No menu.
export function LandingFooter({ licences }: { licences: ("gc" | "roofing" | "mold" | "hvac")[] }) {
  return (
    <footer className="footer">
      <div className="wrap" style={{ display: "block", paddingBlock: 32 }}>
        <div className="legal" style={{ borderTop: 0, paddingTop: 0 }}>
          <p>
            {site.legalName}. <LicenceLine show={licences} />
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>. <Link href={routes.privacy.href}>Privacy</Link>
          </p>
          <PhotoNotice />
        </div>
      </div>
    </footer>
  );
}
