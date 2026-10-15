import type { MetadataRoute } from "next";
import { isIndexable, seoRows } from "@/lib/seo/meta";
import { storyPages } from "@/lib/content/story-pages";
import { site } from "@/config/site";

export const dynamic = "force-static";

// Every page that is built and indexable. noindex pages (/hvac-repair-chicago, /thank-you)
// are left out, as the SEO sheet asks. /reviews has no copy yet, so it is not built.
const BUILT = new Set(["/", "/mold-water-damage-chicago", "/free-roof-check", "/about", "/contact", "/privacy"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const story = new Set(storyPages().keys());
  const rows = [...seoRows().values()].filter((r) => (BUILT.has(r.url) || story.has(r.url)) && isIndexable(r));
  return [
    ...rows.map((r) => ({
      url: r.canonical,
      changeFrequency: "monthly" as const,
      priority: r.url === "/" ? 1 : r.phase.startsWith("Phase 1") ? 0.8 : 0.6,
    })),
    { url: `${site.url}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
