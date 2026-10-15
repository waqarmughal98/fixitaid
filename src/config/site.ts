// Business facts for every page. Source: 2-page-content/0-facts-and-voice-guide.
// Anything still `null` is not confirmed by the owner. It renders as a highlighted
// [placeholder] and `npm run check:placeholders` fails the launch check until it is filled.

export const site = {
  name: "Fix It Aid",
  legalName: "Fix It Aid LLC",
  url: "https://fixitaid.com",
  phone: "(773) 987-1693",
  phoneHref: "tel:+17739871693",
  phoneE164: "+1-773-987-1693",
  email: "fixitaidllc@gmail.com",
  area: "City of Chicago",

  licences: {
    chicagoGc: "TGC144939",
    illinoisRoofing: "104.021107",
    // From Waqar's draft only. Shown with "(confirm)" until the owner confirms it.
    illinoisRoofing2: "105.012092",
    illinoisRoofing2Confirmed: false,
    mold: null as string | null,
    hvac: null as string | null,
  },

  // Owner facts still missing (README "Owner facts still missing").
  owner: {
    phone247: null as boolean | null,
    responseTime: null as string | null,
    yearsInBusiness: null as number | null,
    insuredAndBonded: null as boolean | null,
    googleRating: null as { rating: number; count: number } | null,
    warranty: null as string | null,
    financing: null as boolean | null,
    moldInspectionPrice: null as string | null,
    hvacServiceCall: null as string | null,
    furnaceTuneUp: null as string | null,
    address: null as string | null,
    hours: null as string | null,
    acceptsTexts: null as boolean | null,
  },

  // Real Google reviews only, word for word, with permission.
  // Review cards stay hidden until there are at least 3.
  reviews: [] as { text: string; name: string; neighborhood: string; job: string; service: "roof" | "mold" | "hvac" }[],
} as const;

export const reviewsReady = site.reviews.length >= 3;

// Where the lead forms post. The current host runs /quote.php (PHP 8.1).
export const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/quote.php";

// Google Ads / GA4. Leave empty until the accounts exist; nothing loads without them.
export const analytics = {
  gtagId: process.env.NEXT_PUBLIC_GTAG_ID ?? "",
  adsConversion: process.env.NEXT_PUBLIC_ADS_CONVERSION ?? "",
};

// Placeholders are highlighted while the owner reviews the site.
// Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=false to hide the yellow styling.
export const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false";
