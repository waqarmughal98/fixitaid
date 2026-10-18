// Business facts for every page. Source: 2-page-content/0-facts-and-voice-guide.
// Anything still `null` is not confirmed by the owner and must not be stated as a number
// or hard claim in the UI (lines are omitted or rewritten instead of showing [placeholders]).

export const site = {
  name: "Fix It Aid",
  legalName: "Fix It Aid LLC",
  url: "https://fixitaid.com",
  phone: "(773) 987-1693",
  phoneHref: "tel:+17739871693",
  phoneE164: "+1-773-987-1693",
  email: "info@fixitaid.com",
  area: "City of Chicago",

  licences: {
    chicagoGc: "TGC144939",
    illinoisRoofing: "104.021107",
    // From Waqar's draft pages. Confirmed for launch with the second Illinois roofing licence.
    illinoisRoofing2: "105.012092",
    illinoisRoofing2Confirmed: true,
    // Licensed for mold / HVAC (owner, 14 Oct); numbers not received yet — do not invent them.
    mold: null as string | null,
    hvac: null as string | null,
  },

  owner: {
    // Not confirmed as 24/7; hide every 24/7 line until this is true.
    phone247: true as boolean | null,
    responseTime: "within one business hour" as string | null,
    yearsInBusiness: null as number | null,
    insuredAndBonded: null as boolean | null,
    googleRating: null as { rating: number; count: number } | null,
    warranty: null as string | null,
    financing: null as boolean | null,
    moldInspectionPrice: null as string | null,
    hvacServiceCall: null as string | null,
    furnaceTuneUp: null as string | null,
    address: "1505 W. 46th St. Chicago, IL 60609" as string | null,
    hours: "Monday–Friday, 8am–6pm" as string | null,
    acceptsTexts: null as boolean | null,
  },

  // Real Google reviews only, word for word, with permission.
  // Review cards stay hidden until there are at least 3.
  reviews: [] as { text: string; name: string; neighborhood: string; job: string; service: "roof" | "mold" | "hvac" }[],

  // Home page video. Put the file in /public/video and set `src`, e.g. "/video/how-we-work.mp4".
  // Until then the video slot only shows while placeholders are on, never on the live site.
  video: { src: "/video/fixitaid-intro.mp4" as string | null, poster: "/video/fixitaid-intro-poster.jpg" as string | null, caption: null as string | null },

  // Certifications and memberships we can prove with paperwork. Add one only after the owner
  // confirms it, and use the logo the issuer supplies for members (put it in /public/certs).
  certifications: [
    { name: "IICRC Certified Technician", note: "Water Damage Restoration" },
  ] as { name: string; note?: string; logo?: string }[],
} as const;

export const reviewsReady = site.reviews.length >= 3;

// Show the video slot on the live site only when there is a real video.
export const showVideo = site.video.src !== null;

// Where the lead forms post. /api/lead emails leads via nodemailer (Google SMTP).
export const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/api/lead";

// Google Ads / GA4. Leave empty until the accounts exist; nothing loads without them.
export const analytics = {
  gtagId: process.env.NEXT_PUBLIC_GTAG_ID ?? "",
  adsConversion: process.env.NEXT_PUBLIC_ADS_CONVERSION ?? "",
};

// Placeholders are highlighted while the owner reviews the site.
// Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=false to hide the yellow styling.
export const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false";
