import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/water-damage-restoration-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /water-damage-restoration-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/water-damage-restoration-chicago",
  slug: "water-damage-restoration-chicago",
  category: "mold",
  hero: {
    h1: "Water Damage Restoration in Chicago",
    buttons: [
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
      {
        label: "Request water damage help",
        href: "#lead-form",
        kind: "form",
      },
    ],
    trust: [
      "[24/7 phone: yes or no]",
      "[Response time, for example \"on site within 2 hours\"]",
      "Licensed for water damage restoration",
      "Chicago GC license TGC144939",
    ],
    eyebrow: "Water coming through the ceiling?",
    sub: "We get the water out, dry your home properly, check for mold and stop the leak where it starts. One team from the first call to the last coat of paint.",
    bridge: "Then here's what you're really up against.",
  },
  sections: [
    {
      kind: "pain",
      heading: "The water you can see is the easy part",
      blocks: [
        {
          type: "p",
          text: "\"A pipe burst in the cold snap and the kitchen ceiling came down.\" \"The tenant upstairs let the tub overflow.\" \"After the storm there's a brown ring on the bedroom ceiling and it's getting bigger.\" Every call is different, and every one feels urgent.",
        },
        {
          type: "p",
          text: "The puddle gets mopped. The water that soaked into drywall, subfloor and insulation stays. Surfaces feel dry in a day while the inside stays wet. That's what turns into warped floors, sagging ceilings and mold weeks later. The EPA says wet materials should be dried within 24 to 48 hours to help prevent mold.",
        },
        {
          type: "subhead",
          text: "Signs of water damage in walls and ceilings",
        },
        {
          type: "ul",
          items: [
            "Brown or yellow stains that keep spreading",
            "Paint that bubbles or peels",
            "Drywall that feels soft or swollen at the bottom",
            "Floors that cup, buckle or feel spongy",
            "A musty smell that wasn't there before",
          ],
        },
      ],
      bridge: "Most water jobs go wrong for one reason.",
    },
    {
      kind: "turning",
      heading: "Drying the room doesn't stop the water",
      blocks: [
        {
          type: "p",
          text: "Most restoration companies dry things out and leave. If the water came from the roof, the next storm brings it right back, and now you're calling a roofer, then a drywall crew, then a painter.",
        },
        {
          type: "p",
          text: "The damage is only half the job. The other half is the leak. Fix It Aid is a licensed roofer, a licensed Chicago general contractor and licensed for water damage restoration, so we can deal with both.",
        },
      ],
      bridge: "So we handle the whole thing.",
    },
    {
      kind: "solution",
      heading: "How we restore your home",
      blocks: [
        {
          type: "ol",
          items: [
            "**You call.** Tell us what happened and where the water is. Response time: within one business hour",
            "**Water out.** We pump out standing water and do water extraction from carpet and pads. Wet materials that can't be saved come out.",
            "**Dry and measure.** Dehumidifiers and air movers run until the structure is dry. We take moisture readings on every visit and stop only when the numbers say dry. [Confirm equipment and typical drying days]",
            "**Check for mold and stop the leak.** We look for mold before anything is closed up (link: /mold-removal-chicago). If the roof or flashing is the cause, we fix it ourselves (link: /roof-repair-chicago). If a pipe is the cause, we show you exactly where.",
            "**Put it back.** Ceilings, walls, paint and finishes, so the room is usable again.",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you get by calling one company",
      blocks: [
        {
          type: "ul",
          items: [
            "**No mold surprise in a month.** We dry to the numbers, not to the touch.",
            "**No chasing contractors.** Ceiling water damage repair, the roof leak above it and the paint all go under one written price.",
            "**No guessing about cost.** You get a written price for the repairs before they start.",
            "**A clear record.** We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.",
          ],
        },
      ],
      bridge: "Don't just take our word for it.",
    },
    {
      kind: "proof",
      heading: "Licensed, local and easy to check",
      blocks: [
        {
          type: "ul",
          items: [
            "Licensed for water damage restoration",
            "Chicago general contractor license TGC144939 · Illinois roofing license 104.021107",
            "[Mold certification, for example IICRC]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1, about water damage, with name and neighborhood]",
            "[Real review 2, with name and neighborhood]",
            "[Real job photos: ceiling before and after, drying equipment set up]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Water damage questions",
      blocks: [
        {
          type: "faq",
          q: "What does water damage restoration cost in Chicago?",
          a: "Usually [price range]. It depends on how much got wet and for how long, whether the water was clean or dirty, what has to come out, how many days of drying it takes, and how much rebuilding you need.",
        },
        {
          type: "faq",
          q: "Does homeowners insurance cover water damage?",
          a: "It depends on your policy and on what caused the water. Your insurance company decides that. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.",
        },
        {
          type: "faq",
          q: "How long does water damage restoration take?",
          a: "Repairs come after. A small leak can be done in about a week. A flooded floor with new drywall and flooring takes longer. You get a timeline at the first visit.",
        },
        {
          type: "faq",
          q: "Can I get same-day water damage service in Chicago?",
          a: "[24/7 phone: yes or no]. [Response time, for example \"on site within 2 hours\"]. Call and we'll tell you honestly when we can be there.",
        },
        {
          type: "faq",
          q: "Do we have to move out?",
          a: "Usually not. The drying equipment is noisy for a few days, and we keep work to the rooms that got wet.",
        },
        {
          type: "faq",
          q: "Is it water damage or a flooded basement?",
          a: "If it came in through the floor drain or the foundation, see flooded basement cleanup (link: /flooded-basement-cleanup-chicago). Same team, different cleanup.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Every hour wet materials sit, the job gets bigger",
      blocks: [
        {
          type: "p",
          text: "Call (773) 987-1693 now, or send a few details and we'll call you right back. We'll get the water out, dry it properly and stop it where it starts.",
        },
        {
          type: "p",
          text: "---",
        },
      ],
      buttons: [
        {
          label: "Call (773) 987-1693",
          kind: "call",
        },
        {
          label: "Request water damage help",
          href: "#lead-form",
          kind: "form",
        },
      ],
    },
  ],
  formButton: "Get help with water damage",
};

export default function Page() {
  return <StoryRoute content={content} />;
}
