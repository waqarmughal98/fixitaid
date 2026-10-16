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
      "Free roof check with photos",
      "[Google rating and review count]",
    ],
    eyebrow: "Stain on the ceiling? Old roof? Storm last night?",
    sub: "Find out exactly what your roof needs, with photos, before you spend a dollar. Repair if it can be repaired. Replace only if it can't.",
    bridge: "Here's what's usually going on when people call us.",
  },
  sections: [
    {
      kind: "pain",
      heading: "I don't know how bad it is, and I don't know who to believe.",
      blocks: [
        {
          type: "p",
          text: "You've seen a brown ring spreading on the ceiling. Or the roof is 20-something years old and you keep hearing it \"should be done.\" Or the wind took a few shingles and now every roofing company in Chicago wants to sell you a new roof.",
        },
        {
          type: "p",
          text: "Here's the worry we hear most: \"Is this a small fix or a whole new roof, and how do I know they're telling me the truth?\"",
        },
        {
          type: "p",
          text: "Waiting doesn't make the answer cheaper. Chicago's freeze and thaw opens small gaps wider every winter. Ice dams push water under the shingles at the edge. A slow leak soaks the insulation, rots the roof boards and, left long enough, can lead to mold in the attic or ceiling.",
        },
      ],
      bridge: "So why do so many roof jobs still leave people with the same leak, or a bill they didn't need?",
    },
    {
      kind: "turning",
      heading: "The stain is not where the leak is. And most roofers sell what they install.",
      blocks: [
        {
          type: "p",
          text: "Water gets in at one spot, then runs along a rafter or roof board for several feet before it shows up on your ceiling. Patch the shingles above the stain and the leak comes back with the next storm.",
        },
        {
          type: "p",
          text: "The second problem is how roofing is sold. A company that makes its money on new roofs will tend to find you need a new roof. That's not always wrong, but you should see the proof.",
        },
      ],
      bridge: "So we do it the other way round: find the real entry point first, then show you the proof.",
    },
    {
      kind: "solution",
      heading: "Roofing services in Chicago, starting with the right diagnosis",
      blocks: [
        {
          type: "p",
          text: "As a roofing company in Chicago, we work on bungalows, frame houses, brick 2-flats and 3-flats, garages and small buildings.",
        },
        {
          type: "h3",
          title: "Roof repair and leak repair",
          text: "We trace the leak to the flashing, vent, seam or shingle where it starts.",
          link: "/roof-repair-chicago",
        },
        {
          type: "h3",
          title: "Flat roof repair",
          text: "TPO, EPDM rubber and modified bitumen, on the flat roofs found on most Chicago 2-flats and garages.",
          link: "/flat-roof-repair-chicago",
        },
        {
          type: "h3",
          title: "Roof replacement",
          text: "Full tear-off, deck check, new roof and permit, only when repair no longer makes sense.",
          link: "/roof-replacement-chicago",
        },
        {
          type: "h3",
          title: "Roof Care plan",
          text: "One yearly check and small fixes for a set price.",
          link: "/roof-care-plan",
        },
        {
          type: "subhead",
          text: "How it works",
        },
        {
          type: "ol",
          items: [
            "**Free roof check.** We go on the roof and, where we can, into the attic. We photograph everything, including attic ventilation, which is behind a lot of Chicago ice dams.",
            "**A straight answer.** We show you the photos and explain repair versus replacement in plain words.",
            "**Written price.** Itemized, before any work starts. If a City of Chicago permit is needed, we pull it.",
            "**Work and walkthrough.** We do the job, clean up, and go over it with you. 1-year workmanship warranty",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you get when you call Fix It Aid",
      blocks: [
        {
          type: "ul",
          items: [
            "**Worried about paying for a roof you don't need?** You see the photos before you see a price. If a repair will do, we say so.",
            "**Worried the leak will come back?** We fix where the water gets in, not where it shows up.",
            "**Worried about the damage inside?** Most roofers stop at the roof. We're also licensed for water damage restoration and mold remediation, so the wet ceiling, insulation and any mold get handled by the same team. (link: /water-damage-restoration-chicago)",
            "**Worried about surprise costs?** The price is in writing before we start.",
          ],
        },
      ],
      bridge: "You shouldn't have to take our word for any of that.",
    },
    {
      kind: "proof",
      heading: "Licensed, local, and on the record",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence 104.021107",
            "Chicago general contractor licence TGC144939",
            "Licensed for mold remediation and water damage restoration",
            "Roofing is where Fix It Aid started",
            "[Google rating and review count]",
            "[Real review 1: roof leak or repair, with name and neighborhood]",
            "[Real review 2: roof replacement, with name and neighborhood]",
            "[Real job photos]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Roofing questions",
      blocks: [
        {
          type: "faq",
          q: "What does a roofer cost in Chicago?",
          a: "The real number depends on the roof's size and pitch, the material, how many layers come off, the condition of the wood deck, and chimneys or skylights that need flashing. You get it in writing first.",
        },
        {
          type: "faq",
          q: "Can you deal with my insurance company?",
          a: "No. Illinois law limits what roofing contractors can do on insurance claims, so we don't handle claims or promise coverage. What you do get is clear photos of everything we find, which are yours to share with your insurance company if you choose.",
        },
        {
          type: "faq",
          q: "How soon can you come out?",
          a: "Response time: within one business hour. Leaking right now? Call instead of using the form.",
        },
        {
          type: "faq",
          q: "Will the work make a mess of my house and yard?",
          a: "We cover landscaping and siding, keep the work area tidy each day, and do a full cleanup at the end, including a magnet sweep for nails.",
        },
        {
          type: "faq",
          q: "How do I check a roofing company is licensed?",
          a: "Ask for the licence number and look it up with the state of Illinois. Ours is 104.021107.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Find out what your roof really needs",
      blocks: [
        {
          type: "p",
          text: "A free roof check, photos of what we find, and a straight answer on repair versus replacement. No pressure to book.",
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
