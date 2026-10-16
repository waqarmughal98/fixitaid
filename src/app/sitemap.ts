import type { MetadataRoute } from "next";
import { isIndexable, seoRows } from "@/lib/seo/meta";
import { routes } from "@/lib/routes";
import { site } from "@/config/site";

export const dynamic = "force-static";

// Hand-built pages plus every service / areas route that has a folder under (site)/.
const BUILT = new Set([
  "/",
  "/mold-water-damage-chicago",
  "/free-roof-check",
  "/hvac-repair-chicago",
  "/about",
  "/contact",
  "/privacy",
  routes.moldInspection.href,
  routes.moldRemoval.href,
  routes.waterDamage.href,
  routes.floodedBasement.href,
  routes.areas.href,
  routes.roofing.href,
  routes.roofRepair.href,
  routes.flatRoof.href,
  routes.roofReplacement.href,
  routes.roofCare.href,
  routes.hvac.href,
  routes.furnace.href,
  routes.ac.href,
  routes.hvacInstall.href,
]);

export default function sitemap(): MetadataRoute.Sitemap {
  // noindex pages (/hvac-repair-chicago, /thank-you) are left out, as the SEO sheet asks.
  const rows = [...seoRows().values()].filter((r) => BUILT.has(r.url) && isIndexable(r));
  return [
    ...rows.map((r) => ({
      url: r.canonical,
      changeFrequency: "monthly" as const,
      priority: r.url === "/" ? 1 : r.phase.startsWith("Phase 1") ? 0.8 : 0.6,
    })),
    { url: `${site.url}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
