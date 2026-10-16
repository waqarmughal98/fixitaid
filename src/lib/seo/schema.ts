import { site } from "@/config/site";
import { breadcrumbsFor } from "@/lib/routes";

// Structured data rules (3-seo/4-seo-meta-tags): LocalBusiness on every page,
// Service on service pages, FAQPage only where the same FAQ is on the page,
// BreadcrumbList on sub-pages. No review stars until there are real reviews.

const businessId = `${site.url}/#business`;

export function localBusiness() {
  const { owner, licences } = site;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/og-image.jpg`,
    areaServed: { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: `City of Chicago general contractor licence ${licences.chicagoGc}` },
      { "@type": "EducationalOccupationalCredential", name: `Illinois roofing contractor licence ${licences.illinoisRoofing}` },
      ...(licences.mold ? [{ "@type": "EducationalOccupationalCredential", name: `Mold remediation licence ${licences.mold}` }] : []),
      ...(licences.hvac ? [{ "@type": "EducationalOccupationalCredential", name: `HVAC licence ${licences.hvac}` }] : []),
    ],
    ...(owner.address ? { address: owner.address } : {}),
    ...(owner.hours ? { openingHours: owner.hours } : {}),
    ...(owner.googleRating && site.reviews.length >= 3
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: owner.googleRating.rating,
            reviewCount: owner.googleRating.count,
          },
        }
      : {}),
  };
}

export function website() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url };
}

export function service(name: string, url: string, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    url: `${site.url}${url}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
  };
}

export function freeOffer(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name,
    url: `${site.url}${url}`,
    price: 0,
    priceCurrency: "USD",
    offeredBy: { "@id": businessId },
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function breadcrumbs(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsFor(url).map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.label,
      item: `${site.url}${r.href === "/" ? "/" : r.href}`,
    })),
  };
}
