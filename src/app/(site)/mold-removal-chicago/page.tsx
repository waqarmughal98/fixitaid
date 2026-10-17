import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/mold-removal-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/mold-removal-chicago",
  slug: "mold-removal-chicago",
  category: "mold",
  hero: {
    h1: "Mold Removal in Chicago",
    buttons: [
      { label: "Book a mold inspection", href: "#lead-form", kind: "form" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["[Mold licence number]", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Mold in the basement, bathroom or attic?",
    sub: "We contain the area, remove the mold and fix the moisture source so it does not come back. Clear price before we start.",
    bridge: "Removal that works has two parts: remove the mold and stop the water.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Cleaning the surface does not fix the problem",
      blocks: [
        {
          type: "p",
          text: "You scrub the mold off the bathroom wall. It comes back in three months. You bleach the basement floor. It comes back after the next rain. Every time it returns, it is a little bigger.",
        },
        {
          type: "p",
          text: "Surface cleaning removes what you can see. It does not reach what is behind the drywall, inside the insulation or under the subfloor. And it does not stop the moisture that caused the growth in the first place.",
        },
        {
          type: "p",
          text: "In a Chicago basement, the conditions never really change. Concrete holds moisture. Humidity stays high. A slow leak can run for months before anyone notices. That is why mold keeps coming back.",
        },
      ],
      bridge: "Remove the mold. Then fix why it grew.",
    },
    {
      kind: "turning",
      heading: "Remove the mold. Then fix why it grew.",
      blocks: [
        {
          type: "p",
          text: "Most mold companies remove what is in front of them and leave. If the moisture source is a roof leak, a pipe leak or a drainage problem, the mold comes back.",
        },
        {
          type: "p",
          text: "Fix It Aid is a mold company and a general contractor. We remove the mold and fix the cause. If the moisture came from the roof, our roofing team repairs it (link: /roofing-chicago). If a pipe burst or a drain backed up, our water damage team handles the water (link: /water-damage-restoration-chicago). If the basement flooded, our basement cleanup team dries and disinfects it (link: /flooded-basement-cleanup-chicago).",
        },
        {
          type: "p",
          text: "One company. The mold gets removed and the source gets fixed in the same project.",
        },
      ],
      bridge: "Here is how mold removal works.",
    },
    {
      kind: "solution",
      heading: "Contained removal, source repair, clearance test",
      blocks: [
        {
          type: "ol",
          items: [
            "**Inspection and testing.** Air samples, surface samples and moisture readings. We find the mold and the moisture source. (link: /mold-inspection-chicago)",
            "**Containment.** We seal the work area with plastic sheeting and run negative air pressure so spores do not spread to other rooms.",
            "**Removal.** HEPA vacuuming, antimicrobial treatment, removal of affected drywall, insulation or wood where needed.",
            "**Source repair.** We fix what caused the moisture. Roof leak, pipe, drain, ventilation, whatever it is.",
            "**Clearance testing.** After removal, we test the air again. You get a written clearance report showing the levels are back to normal.",
            "**Rebuild.** New drywall, insulation and paint where we removed material. We are a general contractor, so we close it up ourselves.",
          ],
        },
        {
          type: "subhead",
          text: "What we remove mold from",
        },
        {
          type: "ul",
          items: [
            "Basements and crawl spaces",
            "Attics, often caused by roof leaks or poor ventilation",
            "Bathrooms and kitchens",
            "Behind walls and under floors",
            "2-flats, condos and multi-unit buildings",
            "Small commercial spaces",
          ],
        },
      ],
      bridge: "What makes this different from a surface cleaning.",
    },
    {
      kind: "benefits",
      heading: "The mold is gone. The cause is fixed. The air is tested.",
      blocks: [
        {
          type: "ul",
          items: [
            "**Contained removal.** Sealed work area, HEPA filtration, negative air pressure. Spores do not spread to the rest of the house.",
            "**Moisture source fixed.** We do not just remove mold. We fix the leak, the drain, the ventilation problem or whatever fed the growth.",
            "**Clearance test included.** Air sampling after removal confirms the levels are back to normal. Written report.",
            "**We rebuild what we remove.** Drywall, insulation, paint. Chicago GC licence TGC144939.",
            "**One company from start to finish.** Inspection, removal, source repair and rebuild. No subcontractors to coordinate.",
          ],
        },
      ],
      bridge: "Licensed for every part of the job.",
    },
    {
      kind: "proof",
      heading: "Licensed for mold. Licensed to build.",
      blocks: [
        {
          type: "ul",
          items: [
            "Mold remediation licence: [Mold licence number]",
            "City of Chicago general contractor: TGC144939",
            "Illinois roofing licence: 104.021107 (when the cause is a roof leak)",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: basement mold removal, name and neighborhood]",
            "[Real review 2: attic or bathroom mold, name and neighborhood]",
            "[Real job photos: containment setup, removal in progress, after clearance]",
          ],
        },
      ],
      bridge: "What homeowners ask about mold removal.",
    },
    {
      kind: "faq",
      heading: "Mold removal questions",
      blocks: [
        {
          type: "faq",
          q: "How much does mold removal cost in Chicago?",
          a: "It depends on the size of the affected area, what materials are involved (drywall, wood, concrete) and how much needs to be removed and rebuilt. We inspect first, then give you a written price. (link: /mold-inspection-chicago)",
        },
        {
          type: "faq",
          q: "Can I remove mold myself?",
          a: "On a hard surface smaller than about 10 square feet, yes, with proper protection. Larger areas, mold behind walls, mold in HVAC ducts or mold in a multi-unit building should be handled by a licensed company with containment and HEPA filtration.",
        },
        {
          type: "faq",
          q: "How long does mold removal take?",
          a: "[Typical timeline, for example \"A small bathroom job may take one to two days. A full basement can take three to five days.\"]",
        },
        {
          type: "faq",
          q: "Will the mold come back?",
          a: "Not if the moisture source is fixed. That is why we identify and repair the cause as part of every job. The clearance test confirms the air is clean after removal.",
        },
        {
          type: "faq",
          q: "Do you test before and after?",
          a: "Yes. Air samples before removal give us a baseline. Air samples after removal confirm the job is done. Both are in your written report.",
        },
        {
          type: "faq",
          q: "My landlord will not fix the mold. What can I do?",
          a: "The written inspection report and lab results document the problem. Chicago tenants have rights regarding habitability. The report gives you documented evidence.",
        },
        {
          type: "faq",
          q: "What if the mold came from a roof leak or flooding?",
          a: "We fix the roof, handle the water damage and remove the mold, all in one project. (link: /roofing-chicago)",
        },
      ],
      bridge: "Get the mold out. Fix why it grew.",
    },
    {
      kind: "close",
      heading: "Get the mold out. Fix why it grew.",
      blocks: [{ type: "p", text: "Book a mold inspection. We test, give you the results and price the removal. You decide." }],
      buttons: [
        { label: "Book a mold inspection", href: "#lead-form", kind: "form" },
        { label: "Call (773) 987-1693", kind: "call" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
