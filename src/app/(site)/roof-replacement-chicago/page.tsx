import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-replacement-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /roof-replacement-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/roof-replacement-chicago",
  slug: "roof-replacement-chicago",
  category: "roof",
  hero: {
    h1: "Roof Replacement in Chicago",
    buttons: [
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
    trust: [
      "Illinois roofing licence 104.021107",
      "Chicago general contractor licence TGC144939",
      "Written price before work starts",
      "[Warranty on work]",
    ],
    eyebrow: "Told you need a new roof? Get a second look first.",
    sub: "We show you photos and tell you straight whether your roof needs replacing. If it does, you get a full tear-off, a sound deck, a new roof and the permit, with the price in writing first.",
    bridge: "A new roof is one of the biggest bills a homeowner pays, so it's worth getting this right.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Do I really need a new roof, or is someone trying to sell me one?",
      blocks: [
        {
          type: "p",
          text: "Maybe one roofer said repair and another said replace. Maybe the leaks keep coming back and you're tired of paying for patches. Maybe you're selling, buying, or just looking at a 25-year-old roof and wondering how many winters it has left.",
        },
        {
          type: "p",
          text: "The fear runs both ways. Replace too early and you've spent thousands you didn't need to. Wait too long and the next storm sends water through a rotted deck into the attic, the insulation and the ceilings, and the job gets bigger and more expensive.",
        },
      ],
      bridge: "The answer depends on something most roof quotes never show you.",
    },
    {
      kind: "turning",
      heading: "Most roofers sell what they install. The deck tells the truth.",
      blocks: [
        {
          type: "p",
          text: "A company that earns its money on new roofs will tend to find a reason you need one. The honest way to decide is to look at three things: the roof's age, how much of it is damaged, and the condition of the wood deck underneath.",
        },
        {
          type: "p",
          text: "One bad area on a solid deck is usually worth repairing. (link: /roof-repair-chicago) Worn shingles everywhere, leaks in several places, soft spots or a sagging roof line usually mean replacement, because you'll keep paying for repairs that don't last.",
        },
      ],
      bridge: "So we show you the photos, and if it's time, we replace it properly.",
    },
    {
      kind: "solution",
      heading: "What a Fix It Aid roof replacement includes",
      blocks: [
        {
          type: "ol",
          items: [
            "**Free roof check and photos,** roof and attic.",
            "**Itemized written price** listing materials, work, permit and timeline.",
            "**Permit.** Most roof replacements in Chicago need a city permit. We pull it.",
            "**Protection.** We cover landscaping, siding and windows before tear-off.",
            "**Full tear-off** down to the deck, not a new layer over old problems.",
            "**Deck repair.** Rotted or soft wood replaced before anything new goes on.",
            "**Ice and water protection** along edges and valleys, where Chicago winters do the most damage, plus new underlayment and flashing.",
            "**Ventilation check,** so the new roof lasts and ice dams are less likely.",
            "**The new roof.** Asphalt shingles on pitched roofs. TPO, EPDM or modified bitumen on flat roofs. (link: /flat-roof-repair-chicago)",
            "**Cleanup and walkthrough,** including a magnet sweep for nails, and the warranty in writing. [Warranty on work]",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you get with Fix It Aid",
      blocks: [
        {
          type: "ul",
          items: [
            "**Afraid of replacing too soon?** You see the photos first. If a repair will do, we quote the repair.",
            "**Afraid of hidden rot?** Full tear-off means we see the deck and fix it before the new roof covers it.",
            "**Afraid of the damage the old roof already did?** We're also licensed for water damage and mold, so the attic, insulation and ceilings get repaired by the same team. (link: /mold-removal-chicago)",
            "**Afraid of a bill that grows?** Itemized written price before work starts. [Confirm: how deck repair beyond the estimate is priced, for example per sheet]",
          ],
        },
      ],
      bridge: "Here's who's doing the work.",
    },
    {
      kind: "proof",
      heading: "Licensed roofer and general contractor",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence 104.021107",
            "Chicago general contractor licence TGC144939",
            "We pull the permit ourselves. [Confirm: own crew or subcontractors]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: roof replacement, with name and neighborhood]",
            "[Real job photos: tear-off, deck repair, finished roof]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Roof replacement questions",
      blocks: [
        {
          type: "faq",
          q: "How much does a new roof cost in Chicago?",
          a: "A typical Chicago house or 2-flat roof replacement runs [price range]. Flat roofs [price range]. It depends on size and pitch, material, how many layers come off, how much deck needs replacing, chimneys and skylights, access for the dumpster, and the permit. [Financing: yes or no]",
        },
        {
          type: "faq",
          q: "Will my insurance cover a new roof?",
          a: "That's a question for your insurance company. We don't handle claims or promise coverage. You will get clear photos of the roof's condition, which you can share with your insurance company if you choose.",
        },
        {
          type: "faq",
          q: "How long does it take?",
          a: "Most homes take [typical days] once work starts, weather permitting. We give you the timeline in the written price.",
        },
        {
          type: "faq",
          q: "Do I need to be home, and how messy is it?",
          a: "You don't need to be home for most of the work. Tear-off is loud for a day or so. We protect the yard and clean up daily.",
        },
        {
          type: "faq",
          q: "How long does a shingle roof last in Chicago?",
          a: "It depends on the shingle, the install and the attic ventilation. Freeze and thaw, ice dams and summer heat all shorten a roof's life here. A free roof check tells you where yours stands.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Find out if you really need a new roof",
      blocks: [
        {
          type: "p",
          text: "A free roof check, photos of the deck and shingles, and a straight answer on repair versus replacement. If it's time, a written price.",
        },
        {
          type: "p",
          text: "---",
        },
      ],
      buttons: [
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
