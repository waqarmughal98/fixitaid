import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/flat-roof-repair-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/flat-roof-repair-chicago",
  slug: "flat-roof-repair-chicago",
  category: "roof",
  hero: {
    h1: "Flat Roof Repair in Chicago",
    buttons: [
      { label: "Get a free roof check", href: "/free-roof-check", kind: "link" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["Illinois roofing licence 104.021107", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Flat roof leaking or holding water?",
    sub: "TPO, EPDM rubber and modified bitumen repair for Chicago 2-flats, 3-flats, garages and small commercial buildings. We find the leak, show you what failed and price the fix before we start.",
    bridge: "Flat roof leaks follow a pattern. Once you know it, the repair is straightforward.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Flat roofs in Chicago take a beating",
      blocks: [
        {
          type: "p",
          text: "Water pools after every storm. Snow sits for weeks. The membrane expands and contracts with 100-degree temperature swings between summer and winter. Seams lift. Flashing pulls away from parapet walls.",
        },
        {
          type: "p",
          text: "In a 2-flat or 3-flat, a flat roof leak can drip through two floors before anyone sees it. By the time the ceiling stains, the insulation is soaked, the decking is soft and there may be mold growing in the space between.",
        },
        {
          type: "p",
          text: "Garages with flat roofs are just as exposed. The roof is lower, catches debris and often has no drainage slope at all.",
        },
      ],
      bridge: "Flat roof leaks follow a pattern. Once you know it, the repair is straightforward.",
    },
    {
      kind: "turning",
      heading: "Most flat roof leaks come from the same places",
      blocks: [
        {
          type: "p",
          text: "Lifted seams. Cracked flashing where the roof meets a wall. Punctures from foot traffic or dropped tools. Failed patches from an old repair that did not hold. Ponding water that never drains because the slope is wrong.",
        },
        {
          type: "p",
          text: "These are repairs, not replacements. But flat roof work is different from shingle work. The materials are different, the tools are different, and a bad patch makes the next leak worse.",
        },
        {
          type: "p",
          text: "Fix It Aid repairs flat roofs across Chicago. TPO, EPDM rubber and modified bitumen. We know the flat roofs on 2-flats, 3-flats and commercial buildings because we see them every week.",
        },
      ],
      bridge: "How we fix a flat roof leak.",
    },
    {
      kind: "solution",
      heading: "Find the leak. Fix the leak. Check the rest.",
      blocks: [
        {
          type: "ol",
          items: [
            "**Free roof check.** We walk the entire membrane, check every seam, drain, flashing and penetration. (link: /free-roof-check)",
            "**Photos and findings.** You see exactly what failed and where the water is getting in.",
            "**Price before work.** You approve the repair price. No surprises.",
            "**Repair with the right material.** TPO seams get heat-welded. EPDM gets bonded. Modified bitumen gets torched or cold-applied. We match the material on your roof.",
          ],
        },
        {
          type: "subhead",
          text: "What we repair",
        },
        {
          type: "ul",
          items: [
            "TPO and PVC membrane: lifted seams, punctures, flashing failures",
            "EPDM rubber roofs: seam separations, shrinkage, edge pulling",
            "Modified bitumen: blisters, splits, cap sheet failures",
            "Parapet wall flashing and coping",
            "Drain and scupper blockages causing ponding",
            "Roof-to-wall transitions on 2-flats and 3-flats",
          ],
        },
        {
          type: "p",
          text: "If the membrane is failing across the board, we give you a replacement price alongside the repair price. You compare and decide. (link: /roof-replacement-chicago)",
        },
      ],
      bridge: "Why flat roof owners choose us.",
    },
    {
      kind: "benefits",
      heading: "We do flat roofs every week. We know what holds.",
      blocks: [
        {
          type: "ul",
          items: [
            "**Material-matched repair.** We use the same material as your existing roof. A mismatched patch fails faster.",
            "**We check the whole roof, not just the leak.** Other problems show up when you look. We tell you about them now so you can plan.",
            "**Water got inside?** Our water damage team handles the ceiling, walls and insulation. One company, one call. (link: /water-damage-restoration-chicago)",
            "**Roof too far gone?** We give you both prices: repair and full replacement. You choose. (link: /roof-replacement-chicago)",
            "**Yearly maintenance option.** The Roof Care Plan catches flat roof problems before they leak. (link: /roof-care-plan)",
          ],
        },
      ],
      bridge: "We back flat roof work in writing.",
    },
    {
      kind: "proof",
      heading: "Licensed for roofing. Licensed for the rest.",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence: 104.021107",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: flat roof repair on a 2-flat, name and neighborhood]",
            "[Real review 2: commercial or garage flat roof, name and neighborhood]",
            "[Real job photos: flat roof before and after]",
          ],
        },
      ],
      bridge: "Flat roof questions we hear often.",
    },
    {
      kind: "faq",
      heading: "Flat roof repair questions",
      blocks: [
        {
          type: "faq",
          q: "How much does flat roof repair cost in Chicago?",
          a: "It depends on the membrane type, the size of the repair and what caused the leak. A seam repair is a different job than replacing failed flashing along a full parapet wall. We check the roof for free and give you the price before we start.",
        },
        {
          type: "faq",
          q: "My flat roof holds water after rain. Is that a problem?",
          a: "If water sits for more than 48 hours, it is called ponding. Ponding breaks down every membrane type over time and adds weight the structure was not designed for. We check the drains, scuppers and slope and tell you what will fix it.",
        },
        {
          type: "faq",
          q: "Can a flat roof be repaired or does it need replacing?",
          a: "If the membrane is solid overall and the leak is in one area, repair works. If the membrane is brittle, cracked in multiple spots or past its expected life, replacement usually costs less over time. We give you both prices.",
        },
        {
          type: "faq",
          q: "What flat roof materials do you work with?",
          a: "TPO, EPDM rubber, modified bitumen, PVC and built-up roofing. Most 2-flats and 3-flats in Chicago have modified bitumen or EPDM. Newer buildings often have TPO.",
        },
        {
          type: "faq",
          q: "Do you work on garage roofs?",
          a: "Yes. Garage flat roofs in Chicago are common. Same materials, same process.",
        },
        {
          type: "faq",
          q: "Do you come to my neighborhood?",
          a: "We work across the City of Chicago.",
        },
      ],
      bridge: "Get your flat roof checked for free.",
    },
    {
      kind: "close",
      heading: "Get your flat roof checked for free",
      blocks: [{ type: "p", text: "We walk the whole roof, find what is leaking and give you the price. No charge. No obligation." }],
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
