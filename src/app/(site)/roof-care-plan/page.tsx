import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-care-plan";
export const metadata = storyMetadata(URL);

/** Page copy for /roof-care-plan. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/roof-care-plan",
  slug: "roof-care-plan",
  category: "roof",
  hero: {
    h1: "Roof Care Plan for Chicago Homes",
    buttons: [
      {
        label: "Join the Roof Care plan",
        href: "/contact",
        kind: "link",
      },
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
    ],
    trust: [
      "Illinois roofing licence 104.021107",
      "Photo report after every visit",
      "[Plan price] a year",
    ],
    eyebrow: "Catch roof problems before they leak",
    sub: "Once a year a licensed roofer checks your roof, fixes the small stuff and sends you photos. One set price of [plan price] a year.",
    bridge: "Most people only think about the roof when it's already leaking.",
  },
  sections: [
    {
      kind: "pain",
      heading: "I didn't know anything was wrong until the ceiling stained.",
      blocks: [
        {
          type: "p",
          text: "That's how most roof calls start. Nobody climbs on their roof to look. Then a winter storm hits, an ice dam forms, and water shows up in the bedroom, or in a tenant's kitchen.",
        },
        {
          type: "p",
          text: "By then it's an emergency call, a bigger repair, and maybe wet insulation and drywall on top. And Chicago gives a roof a hard year: freeze and thaw opens cracks, snow sits on flat roofs for weeks, spring storms bring heavy rain, wind and sometimes hail.",
        },
      ],
      bridge: "Here's the thing about those leaks.",
    },
    {
      kind: "turning",
      heading: "Almost every big leak was a small fix first",
      blocks: [
        {
          type: "p",
          text: "A cracked vent boot. A clogged roof drain. A bit of flashing pulling loose. A few lifted shingles. Each one is a quick, cheap fix when someone spots it. Missed for a winter, it's a stained ceiling and a much bigger bill.",
        },
        {
          type: "p",
          text: "The problem isn't the roof. It's that nobody is looking at it.",
        },
      ],
      bridge: "So we look at it every year, and fix the small things while they're small.",
    },
    {
      kind: "solution",
      heading: "What the Roof Care plan includes [Owner to confirm each item]",
      blocks: [
        {
          type: "p",
          text: "**One yearly visit, [timing, for example in the fall before winter]**",
        },
        {
          type: "subhead",
          text: "On the roof",
        },
        {
          type: "ul",
          items: [
            "Check shingles or flat roof membrane for damage, wear and lifted edges",
            "Check and reseal flashing at chimneys, walls and skylights where needed",
            "Check vent pipe boots, roof vents and flat roof seams",
            "Clear roof drains, scuppers and debris, and check the gutters on the roof line",
          ],
        },
        {
          type: "subhead",
          text: "Small fixes on the same visit, no extra charge",
        },
        {
          type: "ul",
          items: [
            "Sealing small gaps and openings",
            "Resetting or replacing [up to X] loose or missing shingles",
            "Small patches on flat roofs [up to a set size]",
          ],
        },
        {
          type: "subhead",
          text: "Inside",
        },
        {
          type: "ul",
          items: [
            "A look in the attic, where we can get in, for damp insulation or daylight",
            "A check of attic ventilation",
          ],
        },
        {
          type: "subhead",
          text: "After the visit",
        },
        {
          type: "ul",
          items: [
            "A short report with photos of what we found and fixed",
            "A heads-up, with a written price, on anything that will need work in the next year or two",
          ],
        },
        {
          type: "p",
          text: "Plan extras: [Priority booking for plan members if a leak happens] [Discount on repairs outside the plan, for example X% off]",
        },
        {
          type: "subhead",
          text: "How to join",
        },
        {
          type: "ol",
          items: [
            "**Start with a free roof check** (link: /free-roof-check) so we know your roof's starting point.",
            "**Sign up** by phone or form.",
            "**Yearly visit** at a time that suits you.",
            "**Photo report** in your inbox.",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you get",
      blocks: [
        {
          type: "ul",
          items: [
            "**No more surprise leaks.** Small problems get fixed before winter turns them into big ones.",
            "**No more remembering to call a roofer.** We put it on the calendar.",
            "**A known cost.** [Plan price] a year covers the visit and the small fixes listed.",
            "**A record.** Yearly photos are useful for your own files, for a future buyer, and for keeping up with roof warranty requirements.",
            "**One team if something's already wrong.** If we find a wet ceiling, damp attic or mold from an old leak, we're licensed for water damage and mold too. (link: /water-damage-restoration-chicago)",
          ],
        },
      ],
      bridge: "Here's who comes out.",
    },
    {
      kind: "proof",
      heading: "A licensed roofer, not a handyman",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence 104.021107",
            "Chicago general contractor licence TGC144939",
            "Roofing is where Fix It Aid started",
            "[Google rating and review count]",
            "[Real review 1: Roof Care plan member or yearly check, with name and neighborhood]",
            "[Sample photo report page]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Roof Care plan questions",
      blocks: [
        {
          type: "faq",
          q: "How much does roof maintenance cost?",
          a: "[Plan price] a year per building [Owner to confirm: per house, per 2-flat, larger buildings priced separately]. Bigger repairs, storm damage and replacement aren't included. If we find any, you get photos and a written price, and you decide.",
        },
        {
          type: "faq",
          q: "Is a roof maintenance plan worth it?",
          a: "If one visit catches a cracked vent boot or a clogged drain before it leaks, it has usually paid for itself.",
        },
        {
          type: "faq",
          q: "Does the plan cover insurance work?",
          a: "No. We don't handle or promise anything on insurance claims. Your yearly photos are yours to keep and to share with your insurance company if you choose.",
        },
        {
          type: "faq",
          q: "When do you come, and do I need to be home?",
          a: "Once a year, [timing]. You don't need to be home for the roof check. If we want to look in the attic, we'll arrange a time with you.",
        },
        {
          type: "faq",
          q: "Do you offer this for condo associations and small apartment buildings?",
          a: "Yes. [Owner to confirm pricing for larger buildings.] Condo boards and property managers find the yearly photo report useful for their records.",
        },
        {
          type: "faq",
          q: "Can I cancel?",
          a: "[Owner to confirm the cancellation terms.]",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Catch it before it leaks",
      blocks: [
        {
          type: "p",
          text: "Join the Roof Care plan and let a licensed roofer check your roof every year. Not sure where your roof stands today? Start with a free roof check.",
        },
      ],
      buttons: [
        {
          label: "Join the Roof Care plan",
          href: "/contact",
          kind: "link",
        },
        {
          label: "Book a free roof check",
          href: "/free-roof-check",
          kind: "link",
        },
        {
          label: "Call (773) 987-1693",
          kind: "call",
        },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
