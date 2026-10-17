import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-care-plan";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/roof-care-plan",
  slug: "roof-care-plan",
  category: "roof",
  hero: {
    h1: "Roof Care Plan for Chicago Homes",
    buttons: [
      { label: "Join the Roof Care Plan", href: "#lead-form", kind: "form" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["Illinois roofing licence 104.021107", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Yearly roof check + small fixes, one price",
    sub: "A cracked shingle costs far less to fix than a section of rotten decking. The Roof Care Plan catches the small problems before they become big ones. One yearly price, no surprises.",
    bridge: "One check a year prevents most of this.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Chicago weather does not wait for your schedule",
      blocks: [
        {
          type: "p",
          text: "Spring storms rip shingles. Summer sun bakes flat roofs. Fall leaves clog gutters and trap water. Winter ice dams push water under the shingles and into the attic.",
        },
        {
          type: "p",
          text: "Most homeowners do not climb up and check. They find out about a problem when water drips through the ceiling. By then the repair is bigger and the cost is higher.",
        },
        {
          type: "p",
          text: "On a flat roof it is worse. A lifted seam or a clogged drain can sit there for a full season before it leaks into the unit below.",
        },
      ],
      bridge: "One check a year prevents most of this.",
    },
    {
      kind: "turning",
      heading: "The cheapest roof repair is the one you never need",
      blocks: [
        {
          type: "p",
          text: "Every roofer will tell you: the problems that cost the most started small. A cracked pipe boot. A nail backing out. Flashing pulling away from a wall. These are five-minute fixes if you catch them. They are major repairs if you wait a year.",
        },
        {
          type: "p",
          text: "The Roof Care Plan is a yearly inspection and minor repair rolled into one visit. A licensed roofer (IL 104.021107) climbs up, checks everything and fixes small problems on the spot. You get a written report with photos.",
        },
        {
          type: "p",
          text: "If we find something bigger, we tell you the cost separately. You decide.",
        },
      ],
      bridge: "What the plan includes.",
    },
    {
      kind: "solution",
      heading: "What you get with the Roof Care Plan",
      blocks: [
        {
          type: "subhead",
          text: "Yearly visit includes",
        },
        {
          type: "ul",
          items: [
            "Full roof inspection: shingles or membrane, flashing, vents, pipe boots, valleys, eaves",
            "Flat roof check: seams, drains, scuppers, ponding, parapet flashing",
            "Gutter cleanout and downspout check",
            "Minor repairs included: cracked sealant, a loose shingle, a small flashing fix",
            "Written report with photos emailed to you",
            "Priority scheduling if you need a repair between visits",
          ],
        },
        {
          type: "p",
          text: "What is not included: major repairs, full replacements and storm damage are quoted separately. If you need a repair, plan members get priority scheduling.",
        },
        {
          type: "p",
          text: "Price: [Roof Care Plan price per year. Different tiers for house vs. 2-flat vs. 3-flat if applicable.]",
        },
      ],
      bridge: "Why homeowners join.",
    },
    {
      kind: "benefits",
      heading: "Catch it early, fix it cheap",
      blocks: [
        {
          type: "ul",
          items: [
            "**Small problems fixed on the spot.** Loose shingles, cracked sealant, clogged gutters. Handled during the visit at no extra charge.",
            "**Written report with photos.** You see what your roof looks like. Useful for insurance records and for budgeting future work.",
            "**Priority scheduling.** If a storm hits and you need a repair, plan members go to the front of the line.",
            "**Keep your warranty valid.** Many roofing warranties require annual maintenance. This plan satisfies that requirement.",
            "**One set price per year.** No service call fees, no per-visit charges.",
          ],
        },
      ],
      bridge: "Backed by a licensed roofing company.",
    },
    {
      kind: "proof",
      heading: "A licensed roofer checks your roof, not a salesperson",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence: 104.021107",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Google rating and review count]",
            "[Real review from a Roof Care Plan member, name and neighborhood]",
            "[Sample report photo or screenshot]",
          ],
        },
      ],
      bridge: "How the Roof Care Plan works.",
    },
    {
      kind: "faq",
      heading: "Roof Care Plan questions",
      blocks: [
        {
          type: "faq",
          q: "How much does the Roof Care Plan cost?",
          a: "[Price per year. If tiered: \"Houses start at $X. 2-flats at $Y.\"]",
        },
        {
          type: "faq",
          q: "What counts as a \"minor repair\" included in the visit?",
          a: "Anything that takes less than about 30 minutes and does not require new materials beyond sealant, nails or a few shingles. Examples: resealing a pipe boot, renailing a lifted shingle, clearing a clogged scupper.",
        },
        {
          type: "faq",
          q: "What if you find a bigger problem?",
          a: "We document it with photos, explain what it is and give you a separate price. Plan members get priority scheduling. (link: /roof-repair-chicago)",
        },
        {
          type: "faq",
          q: "When do you do the yearly check?",
          a: "[Best season, for example \"We schedule it in spring or early fall so we catch winter damage and prepare for the next season.\"] You pick the date.",
        },
        {
          type: "faq",
          q: "Can I join if my roof is old?",
          a: "Yes. We do an initial check. If the roof needs repair first, we tell you. Once the roof is in working condition, the plan keeps it there.",
        },
        {
          type: "faq",
          q: "Do you cover flat roofs?",
          a: "Yes. The check includes flat roof membrane, seams, drains and parapet flashing. (link: /flat-roof-repair-chicago)",
        },
      ],
      bridge: "Lock in your yearly roof check.",
    },
    {
      kind: "close",
      heading: "Lock in your yearly roof check",
      blocks: [{ type: "p", text: "One price. One visit. Small problems fixed on the spot. Written report with photos." }],
      buttons: [
        { label: "Join the Roof Care Plan", href: "#lead-form", kind: "form" },
        { label: "Call (773) 987-1693", kind: "call" },
      ],
    },
  ],
  formButton: "Join the Roof Care Plan",
};

export default function Page() {
  return <StoryRoute content={content} />;
}
