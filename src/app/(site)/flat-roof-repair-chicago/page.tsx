import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/flat-roof-repair-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /flat-roof-repair-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/flat-roof-repair-chicago",
  slug: "flat-roof-repair-chicago",
  category: "roof",
  hero: {
    h1: "Flat Roof Repair in Chicago",
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
    ],
    eyebrow: "Water in the top-floor unit? Puddles that won't drain?",
    sub: "We repair TPO, EPDM rubber and modified bitumen roofs on Chicago 2-flats, 3-flats and garages, starting with the drains, seams and edges where flat roofs really fail.",
    bridge: "If you own a flat roof in Chicago, this will sound familiar.",
  },
  sections: [
    {
      kind: "pain",
      heading: "My tenant called. There's water coming through the ceiling again.",
      blocks: [
        {
          type: "p",
          text: "Flat roof repair in Chicago is its own kind of headache. Water doesn't run off. Snow sits for weeks. And you often don't find out there's a problem until a tenant texts you a photo of a stained ceiling.",
        },
        {
          type: "p",
          text: "You might be seeing puddles still sitting there days after rain, bubbles in the surface, seams lifting at the edges, or rubber pulling away from the parapet wall.",
        },
        {
          type: "p",
          text: "Every week it waits, more water gets under the membrane. Wet insulation under a flat roof stays wet. That's how a patch job turns into a new roof, and how a ceiling stain turns into a ceiling repair in someone's apartment.",
        },
      ],
      bridge: "Most flat roof patches don't last for one reason.",
    },
    {
      kind: "turning",
      heading: "Flat roofs rarely fail in the middle",
      blocks: [
        {
          type: "p",
          text: "Most flat roof leaks start at the edges and openings: the drain or scupper that's clogged, a seam that has opened, the spot where the roof turns up the parapet wall, or the flashing around a vent, skylight or roof hatch. Low spots that hold water slowly work their way in too.",
        },
        {
          type: "p",
          text: "A quick coat of tar over the wet spot doesn't fix any of these. And the patch has to match the roof. Rubber on TPO, or tar on EPDM, doesn't bond properly and fails again.",
        },
      ],
      bridge: "So we find the real entry point, and repair it with matching material.",
    },
    {
      kind: "solution",
      heading: "How we repair your flat roof",
      blocks: [
        {
          type: "h3",
          title: "TPO",
          text: "White single-ply membrane with heat-welded seams. We weld in new material over punctures and failed seams.",
        },
        {
          type: "h3",
          title: "EPDM (rubber roof)",
          text: "Common on Chicago 2-flats and garages. We clean, prime and patch, and reseal seams and edges where the rubber has shrunk.",
        },
        {
          type: "h3",
          title: "Modified bitumen",
          text: "Rolled roofing that cracks and blisters with age. We cut out the bad area and patch it with matching material.",
        },
        {
          type: "h3",
          title: "Older tar and gravel",
          text: "We patch these, and tell you honestly if it's at the end of its life.",
          link: "/roof-replacement-chicago",
        },
        {
          type: "subhead",
          text: "The steps",
        },
        {
          type: "ol",
          items: [
            "**Free roof check.** We walk the roof, test the drains, check seams and edges, and look at the ceiling inside. Photos of everything.",
            "**Written price,** and a straight answer if the roof is past repair.",
            "**The repair,** using material that matches your roof.",
            "**Photos when done,** so you can show your tenants or your condo board.",
          ],
        },
      ],
      bridge: "Here's what that means for you as an owner.",
    },
    {
      kind: "benefits",
      heading: "What you get with Fix It Aid",
      blocks: [
        {
          type: "ul",
          items: [
            "**Tired of the same leak?** We fix the drain, seam or edge where it starts.",
            "**Don't want to coordinate two contractors?** We fix the roof, then the ceiling in the unit below. We're licensed for roofing, general contracting, water damage and mold. (link: /water-damage-restoration-chicago)",
            "**Not sure if it's patch or replace?** Patching a roof that needs replacing wastes money. Replacing one that needs a patch wastes more. We tell you which one you have.",
            "**Need it on paper?** Written price before work, photos after.",
          ],
        },
      ],
      bridge: "Here's who's working on your building.",
    },
    {
      kind: "proof",
      heading: "Licensed and used to Chicago flat roofs",
      blocks: [
        {
          type: "ul",
          items: [
            "Illinois roofing licence 104.021107",
            "Chicago general contractor licence TGC144939",
            "Brick 2-flats, 3-flats, garages and small apartment buildings make up a big part of our roofing work",
            "[Google rating and review count]",
            "[Real review 1: flat roof job on a 2-flat or garage, with name and neighborhood]",
            "[Real job photos: flat roof before and after]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Flat roof questions",
      blocks: [
        {
          type: "faq",
          q: "What does flat roof repair cost?",
          a: "Most repairs cost [price range]. Larger work, like rebuilding around a drain or redoing a parapet edge, runs [price range]. It depends on the material, the size of the damage, whether the insulation underneath is wet, and access.",
        },
        {
          type: "faq",
          q: "Can you work with my insurance company on a flat roof leak?",
          a: "We don't handle or promise anything on insurance claims. We give you clear photos of the damage and the repair, which you can share with your insurance company if you choose.",
        },
        {
          type: "faq",
          q: "Is water sitting on my flat roof a problem?",
          a: "Water that dries within a day or two is normal. Water still there after 48 hours is called ponding, and over time it wears the roof down and finds a way in. It usually means a clogged drain or a low spot, and both can be fixed.",
        },
        {
          type: "faq",
          q: "Will you need to get into my tenant's unit?",
          a: "Only if there's interior damage to look at or repair. We'll schedule it with you so you can give your tenant notice.",
        },
        {
          type: "faq",
          q: "Can a rubber roof be repaired, or does it need replacing?",
          a: "Most EPDM roofs can be repaired if the damage is in one area. If it has shrunk badly or the seams are failing everywhere, replacement is usually the better spend. A yearly check helps you get more years out of it. (link: /roof-care-plan)",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Stop the leak before the next tenant call",
      blocks: [
        {
          type: "p",
          text: "We'll walk the roof, check the drains and seams, take photos and give you a written price. Water coming into a unit now? Call us.",
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
