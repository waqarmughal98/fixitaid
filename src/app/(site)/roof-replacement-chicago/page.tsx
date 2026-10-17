import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-replacement-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/roof-replacement-chicago",
  slug: "roof-replacement-chicago",
  category: "roof",
  hero: {
    h1: "Roof Replacement in Chicago",
    buttons: [
      { label: "Get a free roof check", href: "/free-roof-check", kind: "link" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["Illinois roofing licence 104.021107", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Shingle and flat roof replacement across Chicago",
    sub: "When fixing the old roof costs more than replacing it, you need a straight answer and a written price. We tear off the old roof, replace the decking where needed and install a new one.",
    bridge: "That is the first thing we do.",
  },
  sections: [
    {
      kind: "pain",
      heading: "\"The roofer said it needs replacing. Does it?\"",
      blocks: [
        {
          type: "p",
          text: "You had a leak fixed last year. Now there is another one on the other side. The shingles are curling. The granules are in the gutters. A roofer told you it is time for a new roof, but that is a big check to write.",
        },
        {
          type: "p",
          text: "Or you have a flat roof on a 2-flat. The patches are layered on top of each other. Every spring there is a new leak in a new spot.",
        },
        {
          type: "p",
          text: "The real question is not whether the roof is old. It is whether repair still makes financial sense. If you are paying for a repair every year, a new roof may cost less over the next ten years. But only if someone actually runs the numbers.",
        },
      ],
      bridge: "That is the first thing we do.",
    },
    {
      kind: "turning",
      heading: "We tell you whether replacement actually makes sense",
      blocks: [
        {
          type: "p",
          text: "Some roofs need replacing. Some do not. A 15-year-old roof with one bad area is a repair. A 25-year-old roof with curling shingles and soft decking in two spots is a replacement.",
        },
        {
          type: "p",
          text: "We do both. We are a roofing company, not just an installer. So we give you the honest answer: repair price and replacement price, side by side. If the repair works, take the repair. (link: /roof-repair-chicago)",
        },
        {
          type: "p",
          text: "We do not push one over the other. The numbers speak for themselves.",
        },
      ],
      bridge: "Here is what a roof replacement looks like.",
    },
    {
      kind: "solution",
      heading: "From old roof to new roof, step by step",
      blocks: [
        {
          type: "ol",
          items: [
            "**Free roof check.** We inspect the full roof and the decking underneath. (link: /free-roof-check)",
            "**Written price.** Materials, labor, permits, dumpster and timeline. In writing. No verbal estimates.",
            "**Tear-off.** We strip the old roof down to the decking. If decking is rotten, we replace it.",
            "**Install.** New underlayment, new shingles or membrane, new flashing, new vents. Everything by code.",
            "**Final walk.** We walk the roof with you (or show you photos) and clean up the property.",
          ],
        },
        {
          type: "h3",
          title: "Shingle roofs",
          text: "Architectural shingles on houses, bungalows and pitched garages.",
        },
        {
          type: "h3",
          title: "Flat roofs",
          text: "TPO, EPDM rubber and modified bitumen on 2-flats, 3-flats, garages and small commercial buildings.",
          link: "/flat-roof-repair-chicago",
        },
        {
          type: "p",
          text: "**Mixed roofs.** Pitched in the front, flat in the back. Common in Chicago. We handle both.",
        },
      ],
      bridge: "What makes this quote different from the others.",
    },
    {
      kind: "benefits",
      heading: "A written price that does not change halfway through",
      blocks: [
        {
          type: "ul",
          items: [
            "**Repair vs. replace, side by side.** We show you both prices so you can compare.",
            "**Written price, not a verbal estimate.** Materials, labor, permits and dumpster are included. The price on paper is the price you pay.",
            "**Decking replaced where needed.** We do not shingle over soft wood. We are a general contractor (TGC144939), so we handle the carpentry ourselves.",
            "**Permits pulled.** Where the city requires them, we handle permits.",
            "**Roof Care Plan after.** Once the new roof is on, a yearly check keeps the warranty valid and catches small problems early. (link: /roof-care-plan)",
          ],
        },
      ],
      bridge: "Check our credentials yourself.",
    },
    {
      kind: "proof",
      heading: "Licensed to roof and licensed to build",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence: 104.021107",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: shingle roof replacement, name and neighborhood]",
            "[Real review 2: flat roof replacement on a 2-flat, name and neighborhood]",
            "[Real job photos: full replacement before and after]",
          ],
        },
      ],
      bridge: "What to know before replacing your roof.",
    },
    {
      kind: "faq",
      heading: "Roof replacement questions",
      blocks: [
        {
          type: "faq",
          q: "How much does a new roof cost in Chicago?",
          a: "It depends on size, pitch, material, how many layers come off and how much decking needs replacing. What moves the price: steep vs. flat, shingles vs. TPO, one story vs. three, easy access vs. tight lot. We check the roof for free and give you a written price.",
        },
        {
          type: "faq",
          q: "How long does a roof replacement take?",
          a: "[Typical timeline, for example \"Most shingle roofs take two to three days. Flat roofs with insulation can take longer.\"]",
        },
        {
          type: "faq",
          q: "Do you pull permits?",
          a: "Where the City of Chicago requires a permit, we pull it. The permit number is on the final invoice.",
        },
        {
          type: "faq",
          q: "Will my new roof come with a warranty?",
          a: "[Warranty details: workmanship warranty length and manufacturer warranty length.]",
        },
        {
          type: "faq",
          q: "Should I repair or replace my roof?",
          a: "It comes down to the numbers. If the roof is mostly sound and the damage is in one area, repair is the right call. If you are paying for a repair every year, or the decking is soft in several spots, a replacement usually costs less over ten years. We check the roof for free and give you the repair price and the replacement price side by side, so the choice between repair or replace is yours, not ours.",
        },
        {
          type: "faq",
          q: "Do you offer roof replacement financing?",
          a: "[Financing: yes or no. If yes, name the lender and the terms, for example \"monthly payment plans through X\".] Either way, you get a clear written price first, with no pressure.",
        },
        {
          type: "faq",
          q: "Can I stay in the house during the work?",
          a: "Yes. It is noisy, but you do not have to leave.",
        },
        {
          type: "faq",
          q: "What if you find rotten decking?",
          a: "We replace it. The cost is in the written price if we found it during the inspection. If we find more during tear-off, we call you with the additional cost before we proceed.",
        },
        {
          type: "faq",
          q: "My roof leaked and there is water damage inside. Can you fix that too?",
          a: "Yes. Our water damage team handles the inside. If mold started, our mold team removes it. One company.",
        },
      ],
      bridge: "Find out what a new roof costs.",
    },
    {
      kind: "close",
      heading: "Find out what a new roof costs",
      blocks: [{ type: "p", text: "Book a free roof check. We inspect the roof, run the numbers and give you a written price. Repair price included if repair is an option." }],
      buttons: [
        { label: "Get a free roof check", href: "/free-roof-check", kind: "link" },
        { label: "Call (773) 987-1693", kind: "call" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
