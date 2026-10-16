import { metadataFor, seoFor } from "@/lib/seo/meta";
import { breadcrumbs, faqPage, service } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { StoryPage } from "@/components/content/StoryPage";
import { hasPlaceholder, plainText } from "@/components/content/Inline";
import type { StoryPageContent } from "@/types/content.types";

/** Metadata for a story page whose URL is fixed in its route file. */
export function storyMetadata(url: string) {
  return metadataFor(url);
}

/** Renders a service / areas page from the copy co-located with its route. */
export function StoryRoute({ content }: { content: StoryPageContent }) {
  const seo = seoFor(content.url);

  // Schema per the SEO sheet. FAQ answers that still hold a placeholder are left out of
  // the structured data (but stay on the page, highlighted).
  const faqs = content.sections
    .flatMap((s) => s.blocks)
    .filter((b) => b.type === "faq" && !hasPlaceholder(b.a))
    .map((b) => (b.type === "faq" ? { q: plainText(b.q), a: plainText(b.a) } : { q: "", a: "" }));

  const schema: object[] = [];
  if (seo.schema.includes("Service")) schema.push(service(seo.h1, content.url, seo.mainKeyword));
  // The only Offer page parsed here is the Roof Care plan, which has no confirmed price yet.
  // Add an Offer with its price once the owner sets it.
  if (seo.schema.includes("FAQPage") && faqs.length) schema.push(faqPage(faqs));
  if (seo.schema.includes("BreadcrumbList")) schema.push(breadcrumbs(content.url));

  return (
    <>
      <JsonLd data={schema} />
      <StoryPage page={content} h1={seo.h1} />
    </>
  );
}
