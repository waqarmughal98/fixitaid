import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-repair-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/roof-repair-chicago",
  slug: "roof-repair-chicago",
  category: "roof",
  hero: {
    h1: "Roof Repair in Chicago",
    buttons: [
      { label: "Get a free roof check", href: "/free-roof-check", kind: "link" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["Illinois roofing licence 104.021107", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Leaking roof? Storm damage? Missing shingles?",
    sub: "We find where the water gets in and fix it. Shingle roofs and flat roofs. You see the photos and the price before we start.",
    bridge: "Most of the time, the actual fix is smaller than you think.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Water stain on the ceiling? The leak started weeks ago.",
      blocks: [
        {
          type: "p",
          text: "You see a brown circle on the ceiling after a heavy rain. That means water got past the roof, soaked through the decking and sat there long enough to stain drywall.",
        },
        {
          type: "p",
          text: "The longer it sits, the worse it gets. Wet decking rots. Wet insulation loses its R-value. In a Chicago winter, trapped moisture freezes, expands and cracks the wood around it.",
        },
        {
          type: "p",
          text: "Wait through storm season and a small leak turns into a section of decking that needs replacing. That is a bigger job and a bigger bill.",
        },
      ],
      bridge: "Most of the time, the actual fix is smaller than you think.",
    },
    {
      kind: "turning",
      heading: "A roof leak usually comes from one spot",
      blocks: [
        {
          type: "p",
          text: "Cracked flashing around a chimney. A pipe boot with a split rubber collar. Missing shingles from a wind storm. A nail that backed out. These are repairs, not replacements.",
        },
        {
          type: "p",
          text: "The problem is knowing which one. Some roofing contractors in Chicago quote a full replacement without climbing up. Others give a price over the phone without seeing the roof.",
        },
        {
          type: "p",
          text: "We do it the other way. For roof repair Chicago homeowners can trust, we climb up, check the whole roof, take photos and show you exactly what failed. If a repair fixes it, we price the repair. If the damage is too far gone, we tell you and give you a replacement price too. (link: /roof-replacement-chicago)",
        },
      ],
      bridge: "Here is how a roof repair works with us.",
    },
    {
      kind: "solution",
      heading: "From leak to fixed roof, step by step",
      blocks: [
        {
          type: "ol",
          items: [
            "**Free roof check.** We climb up and check the entire roof, not just the spot you pointed to. (link: /free-roof-check)",
            "**Photos and findings.** We show you photos of what we found. You see the problem.",
            "**Price before work.** You approve the price. No price, no work.",
            "**We fix it.** The repair is done and we check the area again before we leave.",
          ],
        },
        {
          type: "subhead",
          text: "What we repair",
        },
        {
          type: "ul",
          items: [
            "Missing, cracked or lifted shingles",
            "Flashing around chimneys, walls and valleys",
            "Pipe boots and roof vents",
            "Storm damage from wind, hail or fallen branches",
            "Ice dam damage along eaves",
            "Flat roof leaks: TPO, EPDM, modified bitumen (link: /flat-roof-repair-chicago)",
            "Gutter repairs tied to roof leaks",
          ],
        },
      ],
      bridge: "What you get with this repair.",
    },
    {
      kind: "solution",
      heading: "Emergency roof repair in Chicago",
      blocks: [
        {
          type: "p",
          text: "Storm last night? Water coming in right now? We do emergency roof repair across Chicago. If the roof cannot be fully repaired until it dries out, we tarp it first to stop the water, then come back for the permanent fix.",
        },
        {
          type: "subhead",
          text: "Storm and emergency work we handle",
        },
        {
          type: "ul",
          items: [
            "Emergency roof tarping to stop active leaks fast",
            "Wind damage: lifted, torn or missing shingles after a storm",
            "Hail damage, with a photo report you can share with your insurer",
            "Storm damage roof inspection and a written record of what we find",
            "Ice dam removal and ice dam damage repair along the eaves",
            "Roof leak after a storm or heavy snow",
          ],
        },
        {
          type: "p",
          text: "Water coming in now? Call (773) 987-1693. We document all storm damage with photos and moisture readings, so you have a clear record to share with your insurance company if you choose to.",
        },
      ],
      bridge: "What you get with this repair.",
    },
    {
      kind: "benefits",
      heading: "No guessing. No upselling. Just the fix.",
      blocks: [
        {
          type: "ul",
          items: [
            "**You see the problem.** Photos from the roof, not a verbal description.",
            "**You approve the price first.** If the price does not work for you, we do not start.",
            "**Repair when repair makes sense.** We do not push replacement unless the repair would cost more than the roof is worth. Then we show you both prices.",
            "**Leak caused inside damage?** If water got into the ceiling, walls or attic, our water damage team dries and repairs it. If mold started, our mold team removes it. One company. (link: /water-damage-restoration-chicago)",
          ],
        },
      ],
      bridge: "Our licence numbers are public.",
    },
    {
      kind: "proof",
      heading: "A licensed Illinois roofer, not a handyman",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence: 104.021107",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: leak repair, name and neighborhood]",
            "[Real review 2: storm damage repair, name and neighborhood]",
            "[Real job photos: before and after roof repairs]",
          ],
        },
      ],
      bridge: "What homeowners ask about roof repairs.",
    },
    {
      kind: "faq",
      heading: "Roof repair questions",
      blocks: [
        {
          type: "faq",
          q: "How much does roof repair cost in Chicago?",
          a: "It depends on what failed and how much area is affected. A pipe boot replacement is a different price than a valley reflash. We check the roof for free, show you what we find, and give you the price before any work starts.",
        },
        {
          type: "faq",
          q: "Can you fix a roof leak in the rain?",
          a: "We can do a temporary patch to stop active water entry. The full repair happens when the roof is dry enough to work safely.",
        },
        {
          type: "faq",
          q: "My roof was damaged in a storm. What do I do?",
          a: "Call us for a free roof check. We document the damage with photos and a written report you can share with your insurer.",
        },
        {
          type: "faq",
          q: "How do I know if I need a repair or a full replacement?",
          a: "We check the whole roof, not just the leak. If the rest of the roof is in good shape, a repair is the right call. If the shingles are worn across the board or the decking is soft in multiple spots, replacement saves money long term. We give you both prices and explain the difference.",
        },
        {
          type: "faq",
          q: "Do you repair flat roofs?",
          a: "Yes. TPO, EPDM rubber and modified bitumen. See flat roof repair. (link: /flat-roof-repair-chicago)",
        },
        {
          type: "faq",
          q: "Do you come to my neighborhood?",
          a: "We work across the City of Chicago.",
        },
      ],
      bridge: "Stop the leak before it spreads.",
    },
    {
      kind: "close",
      heading: "Stop the leak before it spreads",
      blocks: [{ type: "p", text: "Book a free roof check. We find the problem, show you photos and give you the price." }],
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
