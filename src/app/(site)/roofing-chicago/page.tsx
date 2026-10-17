import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roofing-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /roofing-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/roofing-chicago",
  slug: "roofing-chicago",
  category: "roof",
  hero: {
    h1: "Chicago Roofing Company",
    buttons: [
      {
        label: "Get a free roof check",
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
      "[Google rating and review count]",
    ],
    eyebrow: "Illinois licensed roofer 104.021107",
    sub: "Leaking roof, missing shingles or a flat roof that holds water. We find the problem, show you photos and give you the price before we touch anything.",
    bridge: "The fix starts with knowing exactly what is wrong.",
  },
  sections: [
    {
      kind: "pain",
      heading: "A roof leak does not wait for a good time",
      blocks: [
        {
          type: "p",
          text: "A water stain on the ceiling means water is already inside the house. It soaks the decking, runs down the walls and sits in the insulation. In a Chicago winter, that wet wood freezes and thaws until the damage spreads.",
        },
        {
          type: "p",
          text: "Most homeowners call when they see the stain. By then the leak has been there for weeks. The longer it sits, the more it costs.",
        },
        {
          type: "p",
          text: "On a flat roof the problem is different. Water pools after every rain. The membrane lifts at the seams. In a 2-flat or 3-flat, a flat roof leak can reach two units before anyone notices.",
        },
      ],
      bridge: "The fix starts with knowing exactly what is wrong.",
    },
    {
      kind: "turning",
      heading: "Most roof problems are fixable once you find them",
      blocks: [
        {
          type: "p",
          text: "A missing shingle, cracked flashing, a failed pipe boot, a lifted seam on a flat roof. These are repairs, not full replacements.",
        },
        {
          type: "p",
          text: "The trouble is that some roofing companies in Chicago skip the inspection and jump to a quote for a new roof. A new roof costs far more than a repair. If you do not know what actually failed, you cannot tell which one you need.",
        },
        {
          type: "p",
          text: "Fix It Aid is an Illinois licensed roofer (104.021107) and a City of Chicago general contractor (TGC144939). We start with a free roof check (link: /free-roof-check). We climb up, take photos, and show you what we find. If a repair fixes it, we repair it.",
        },
      ],
      bridge: "Here is what a free roof check looks like.",
    },
    {
      kind: "solution",
      heading: "Free roof check, photos, then your decision",
      blocks: [
        {
          type: "subhead",
          text: "How it works",
        },
        {
          type: "ol",
          items: [
            "**Book a free roof check.** Call or book online. We come to you. (link: /free-roof-check)",
            "**We climb up and check everything.** Shingles, flashing, vents, flat membrane, gutters. We take photos of what we find.",
            "**You see the photos and the price.** We show you the photos, explain what needs work, and give you the price. If nothing needs work, we tell you that too.",
            "**You decide.** We only start when you say yes.",
          ],
        },
        {
          type: "h3",
          title: "Roof repair",
          text: "Leaks, missing shingles, storm damage, flashing, pipe boots.",
          link: "/roof-repair-chicago",
        },
        {
          type: "h3",
          title: "Flat roof repair",
          text: "TPO, EPDM rubber, modified bitumen. 2-flats, 3-flats, garages.",
          link: "/flat-roof-repair-chicago",
        },
        {
          type: "h3",
          title: "Roof replacement",
          text: "When repair is no longer worth it. Shingle and flat roofs.",
          link: "/roof-replacement-chicago",
        },
        {
          type: "h3",
          title: "Roof Care Plan",
          text: "Yearly inspection and small fixes for one price. Catches problems early.",
          link: "/roof-care-plan",
        },
      ],
      bridge: "What changes when you hire a licensed roofer.",
    },
    {
      kind: "benefits",
      heading: "You know the price. You see the photos. You decide.",
      blocks: [
        {
          type: "ul",
          items: [
            "**No surprise bills.** You approve the price before we pick up a tool.",
            "**No pressure to replace.** If a repair works, we repair it. We bring up replacement only when the numbers say so, and then we show you both prices.",
            "**One company for the whole problem.** If a roof leak caused water damage inside, our water damage team handles it. If there is mold, our mold team handles it. One schedule, not three contractors. (link: /water-damage-restoration-chicago)",
            "**Licensed and insured.** IL roofing licence 104.021107. Chicago GC licence TGC144939. [Insured and bonded: yes or no]",
          ],
        },
      ],
      bridge: "Check our credentials yourself.",
    },
    {
      kind: "proof",
      heading: "Licensed in Illinois, registered in Chicago",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence: 104.021107",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: roof repair, name and neighborhood]",
            "[Real review 2: flat roof, name and neighborhood]",
            "[Real review 3: roof replacement, name and neighborhood]",
            "[Real job photos]",
          ],
        },
      ],
      bridge: "Common questions about roofing in Chicago.",
    },
    {
      kind: "faq",
      heading: "Roofing questions",
      blocks: [
        {
          type: "faq",
          q: "How much does roof repair cost in Chicago?",
          a: "It depends on what failed. A simple flashing repair is different from replacing a section of decking. We check the roof for free, show you photos and give you the price before we start.",
        },
        {
          type: "faq",
          q: "Do you repair flat roofs?",
          a: "Yes. TPO, EPDM rubber and modified bitumen on 2-flats, 3-flats and garages across Chicago.",
        },
        {
          type: "faq",
          q: "Are you a licensed roofer?",
          a: "Yes. Illinois roofing licence 104.021107 and City of Chicago general contractor licence TGC144939. You can look them up.",
        },
        {
          type: "faq",
          q: "Do you work in my neighborhood?",
          a: "We work across the City of Chicago.",
        },
        {
          type: "faq",
          q: "What if the roof caused water damage or mold inside?",
          a: "We handle that too. Our water damage team dries and repairs the inside. Our mold team tests and removes mold. One company, one call.",
        },
        {
          type: "faq",
          q: "How do I know if I need a repair or a new roof?",
          a: "We check the roof for free and tell you. If a repair makes sense, we give you a repair price. If replacement makes more sense, we give you both prices and explain why.",
        },
      ],
      bridge: "Start with a free roof check.",
    },
    {
      kind: "close",
      heading: "Start with a free roof check",
      blocks: [
        {
          type: "p",
          text: "We climb up, take photos and tell you what we find. No charge. No obligation.",
        },
      ],
      buttons: [
        {
          label: "Get a free roof check",
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
