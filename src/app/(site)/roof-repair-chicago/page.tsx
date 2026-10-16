import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/roof-repair-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /roof-repair-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/roof-repair-chicago",
  slug: "roof-repair-chicago",
  category: "roof",
  hero: {
    h1: "Roof Repair in Chicago",
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
      "Free roof check with photos",
      "Written price before work starts",
      "[Response time]",
    ],
    eyebrow: "Roof leaking again?",
    sub: "We find where the water actually gets in and fix it there, so you're not calling a roofer again after the next storm. Shingle roofs, flat roofs and garages.",
    bridge: "If you're reading this, you've probably already got a bucket out.",
  },
  sections: [
    {
      kind: "pain",
      heading: "It's leaking again, and the last guy said he fixed it.",
      blocks: [
        {
          type: "p",
          text: "Most roof repair calls in Chicago sound like this. A brown spot on the ceiling after heavy rain. A drip that only shows up when the snow melts. A leak someone already \"fixed\" that came right back.",
        },
        {
          type: "p",
          text: "Every rain, the same questions: How much water is going into the attic? Is the drywall going to come down? Is something growing up there?",
        },
        {
          type: "p",
          text: "Those worries are fair. A small leak left for a season can soak insulation, rot the roof boards and stain every ceiling it runs across. And Chicago winters make it worse. Water gets into a gap, freezes, expands, and the gap gets bigger.",
        },
      ],
      bridge: "Most repeat leaks happen for one reason.",
    },
    {
      kind: "turning",
      heading: "The stain on your ceiling is not where the leak is",
      blocks: [
        {
          type: "p",
          text: "Water gets in at one spot and runs along the wood until it finds a way down. The stain can be several feet from the real entry point. Patch the roof above the stain and you've fixed the wrong spot.",
        },
        {
          type: "subhead",
          text: "The places that actually leak on Chicago roofs",
        },
        {
          type: "ul",
          items: [
            "**Flashing** around chimneys, skylights and walls, cracked or pulled loose",
            "**Vent pipe boots**, where the rubber collar dries out and splits",
            "**Missing or lifted shingles** after wind or hail",
            "**The roof edge**, where ice dams push water up under the shingles",
            "**Flat roof seams and drains** on 2-flats, 3-flats and garages (link: /flat-roof-repair-chicago)",
          ],
        },
      ],
      bridge: "So we trace it first, then repair it.",
    },
    {
      kind: "solution",
      heading: "How we repair your roof",
      blocks: [
        {
          type: "ol",
          items: [
            "**Free roof check.** We go on the roof and into the attic where we can, and follow the water back to where it starts. Photos of everything.",
            "**Clear price.** We show you the cause and give you a written price before we start.",
            "**The repair.** Leak repair, shingle repair, flashing repair, vent boot replacement, hail and wind damage repair, fascia repair, flat roof patching, garage roof repairs. Most repairs are done in one visit. [Confirm typical repair time]",
            "**Photos when done.** You see the finished work and know what to keep an eye on.",
          ],
        },
        {
          type: "p",
          text: "**Leaking right now?** Call (773) 987-1693. If the full repair can't be done that day, we put on a temporary cover to keep the water out, then come back for the permanent fix. [Response time] [24/7 phone: yes or no]",
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
            "**Afraid it'll leak again?** We fix the entry point, not the stain.",
            "**Afraid of being talked into a new roof?** Plenty of leaking roofs have years left. If yours does, we repair it and say so.",
            "**Afraid of what the water already did?** We're also licensed for water damage restoration and mold remediation, so we can dry out and repair the ceiling, insulation and walls too. One team, one job. (link: /water-damage-restoration-chicago)",
            "**Afraid of the bill?** Written price before work starts.",
          ],
        },
      ],
      bridge: "Here's who you're letting on your roof.",
    },
    {
      kind: "proof",
      heading: "Licensed, and you see everything we see",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence 104.021107",
            "Chicago general contractor licence TGC144939",
            "Photos before and after every repair",
            "[Google rating and review count]",
            "[Real review 1: roof leak repair, with name and neighborhood]",
            "[Real job photos: before and after of a leak repair]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Roof repair questions",
      blocks: [
        {
          type: "faq",
          q: "How much does roof repair cost in Chicago?",
          a: "Most repairs cost [price range]. Bigger ones, like re-flashing a chimney or replacing a section, run [price range]. It depends on what's causing the leak, how easy it is to reach, the roof type and pitch, and whether the wood underneath is wet or rotted.",
        },
        {
          type: "faq",
          q: "Will my insurance pay for this?",
          a: "That's between you and your insurance company, and we don't handle or promise anything on claims. We do give you clear photos of the damage and the repair, which you can share with your insurance company if you choose.",
        },
        {
          type: "faq",
          q: "Is it worth repairing an old roof?",
          a: "Often, yes. If the leak is from one spot and the rest of the roof is in fair shape, a repair can buy you years. If it's worn out everywhere or the deck is soft, replacement usually makes more sense. (link: /roof-replacement-chicago)",
        },
        {
          type: "faq",
          q: "Can you repair a roof in winter?",
          a: "Yes, most repairs. Some materials need warmer weather to seal properly, so in deep cold we may do a temporary repair and finish when the weather allows. We'll tell you up front.",
        },
        {
          type: "faq",
          q: "How do I find where my roof is leaking?",
          a: "On a rainy day, check the attic with a flashlight for wet wood or damp insulation and follow it uphill. Can't get up there? That's what the free roof check is for.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Find the leak. Fix it once.",
      blocks: [
        {
          type: "p",
          text: "We'll trace the leak, show you photos and give you a written price. Water coming in now? Call us.",
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
