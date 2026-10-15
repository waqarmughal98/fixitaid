import { notFound } from "next/navigation";
import { storyPage, storyPages } from "@/lib/content/story-pages";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { breadcrumbs, faqPage, service } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { StoryPage } from "@/components/content/StoryPage";
import { hasPlaceholder, plainText } from "@/components/content/Inline";

// Service pages and Areas, built from the copy files in content/.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...storyPages().values()].map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return metadataFor(`/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = storyPage(slug);
  if (!page) notFound();
  const seo = seoFor(page.url);

  // Schema per the SEO sheet. FAQ answers that still hold a placeholder are left out of
  // the structured data (but stay on the page, highlighted).
  const faqs = page.sections
    .flatMap((s) => s.blocks)
    .filter((b) => b.type === "faq" && !hasPlaceholder(b.a))
    .map((b) => (b.type === "faq" ? { q: plainText(b.q), a: plainText(b.a) } : { q: "", a: "" }));

  const schema: object[] = [];
  if (seo.schema.includes("Service")) schema.push(service(seo.h1, page.url, seo.mainKeyword));
  // The only Offer page parsed here is the Roof Care plan, which has no confirmed price yet.
  // Add an Offer with its price once the owner sets it.
  if (seo.schema.includes("FAQPage") && faqs.length) schema.push(faqPage(faqs));
  if (seo.schema.includes("BreadcrumbList")) schema.push(breadcrumbs(page.url));

  return (
    <>
      <JsonLd data={schema} />
      <StoryPage page={page} h1={seo.h1} />
    </>
  );
}
