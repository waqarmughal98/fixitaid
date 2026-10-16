import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/mold-inspection-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /mold-inspection-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/mold-inspection-chicago",
  slug: "mold-inspection-chicago",
  category: "mold",
  hero: {
    h1: "Mold Inspection and Testing in Chicago",
    buttons: [
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
      {
        label: "Book a mold inspection",
        href: "#lead-form",
        kind: "form",
      },
    ],
    trust: [
      "Chicago GC license TGC144939",
      "Licensed for mold remediation [Mold licence number]",
      "[Mold certification, for example IICRC]",
      "[Google rating and review count]",
    ],
    eyebrow: "Musty smell that won't go away?",
    sub: "You'll know what's growing, where it's coming from and what it takes to fix it. Our mold inspection ends with a written report and a straight answer, even if that answer is \"you don't need us\".",
    bridge: "Here's what most people are dealing with when they call.",
  },
  sections: [
    {
      kind: "pain",
      heading: "You can smell it. You just can't find it.",
      blocks: [
        {
          type: "p",
          text: "\"The basement smells like a wet towel.\" \"There's a gray spot behind the dresser.\" \"We bought a vintage 2-flat and I want to know what's in the walls.\" That's how most mold calls start. Not with certainty. With a feeling that something is off.",
        },
        {
          type: "p",
          text: "The hard part is the waiting. You scrub a spot and it comes back. You run a dehumidifier and the smell is still there. You read online and get ten different answers. Meanwhile, if there is mold, it keeps growing in the places you can't see: behind drywall, under carpet, above a ceiling stain.",
        },
        {
          type: "subhead",
          text: "Signs worth checking",
        },
        {
          type: "ul",
          items: [
            "A musty, earthy smell, often worse after rain",
            "Dark, green or white spots on walls, ceilings or inside closets",
            "Peeling paint, or drywall that feels soft",
            "A leak, flood or burst pipe in the past year, even one that \"dried out\"",
            "Spots that come back after you clean them",
          ],
        },
      ],
      bridge: "Most inspections stop at \"yes, you have mold\". That misses the part that matters.",
    },
    {
      kind: "turning",
      heading: "The mold isn't the real problem. The water is.",
      blocks: [
        {
          type: "p",
          text: "Mold only grows where there's moisture. Find mold without finding the water, and you're paying for half an answer. In Chicago, the water usually comes from the same few places: a roof or flashing leak, a foundation crack opened by freeze and thaw, a basement that takes on water in spring storms, a bathroom fan that vents nowhere, or a pipe leaking inside a wall.",
        },
        {
          type: "p",
          text: "Most mold companies can tell you there's mold. Most can't tell you exactly where the water gets in, and can't fix it if they do.",
        },
      ],
      bridge: "So our inspection looks for both.",
    },
    {
      kind: "solution",
      heading: "What happens during your mold inspection",
      blocks: [
        {
          type: "ol",
          items: [
            "**You call or book online.** Tell us what you're seeing or smelling. We set a time that suits you. [Response time, for example \"on site within 2 hours\"]",
            "**We walk the whole property.** Basement, attic, bathrooms, kitchen, windows, and every spot you're worried about.",
            "**We measure moisture.** Meter readings show if a wall or floor is wet right now, even when it looks dry. [Confirm: thermal camera] This is how we detect mold risk inside walls without cutting holes.",
            "**We test, if it helps.** Air and surface samples, compared with an outdoor sample, sent to [Mold testing: in-house or third-party lab]. If testing won't change the plan, we tell you and you don't pay for it.",
            "**You get a written report.** Photos, readings, what we found, the likely source and what we recommend, in plain words.",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you get that most inspections don't give you",
      blocks: [
        {
          type: "ul",
          items: [
            "**No scare tactics.** If it's a small patch you can clean yourself, we say so.",
            "**No tests you don't need.** We only take samples when the result will change what you do.",
            "**The cause, not just the mold.** You leave knowing where the water comes from. If it's the roof or flashing, we can fix it ourselves. If a pipe is the cause, we show you exactly where.",
            "**One contractor if you need work.** We're licensed for mold remediation, licensed as a Chicago general contractor and as an Illinois roofer. No handing you off.",
          ],
        },
      ],
      bridge: "Don't just take our word for it.",
    },
    {
      kind: "proof",
      heading: "Licensed in Chicago, and you can check it",
      blocks: [
        {
          type: "ul",
          items: [
            "Chicago general contractor license TGC144939",
            "Illinois roofing license 104.021107",
            "Licensed for mold remediation and water damage restoration [Mold licence number]",
            "Illinois roofing license 104.021107",
            "100+ Satisfied customers",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Mold inspection questions",
      blocks: [
        {
          type: "faq",
          q: "What does a mold inspection cost in Chicago?",
          a: "Our inspection: [Free mold inspection: yes or no, or a price]. Mold testing, if you need it: [price range]. The price depends on how many samples you need, the size of the home, and whether it's one unit or a 2-flat. You get the price before we come out.",
        },
        {
          type: "faq",
          q: "Do I need mold testing, or just an inspection?",
          a: "Often just an inspection. If the mold is visible and the cause is clear, testing adds cost without changing the plan. The EPA's own guidance says the same. Mold testing in Chicago is most useful when there's a smell but nothing visible, after water damage, before a sale, or to confirm a cleanup worked.",
        },
        {
          type: "faq",
          q: "Is black mold worse than other kinds?",
          a: "Color won't tell you the type. Many common molds look black. Black mold testing in a lab can name it. Either way, the fix is the same: remove it properly and stop the moisture.",
        },
        {
          type: "faq",
          q: "Will insurance pay for this?",
          a: "That depends on your policy, and your insurance company decides. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.",
        },
        {
          type: "faq",
          q: "How long does it take, and will you make a mess?",
          a: "[Confirm typical visit length] for most homes. We don't open walls without asking you first. Lab results take [Confirm lab turnaround time].",
        },
        {
          type: "faq",
          q: "Why is mold inspection important in Chicago?",
          a: "Older homes, basements, brick that holds water, humid summers and winters with every window shut. Damp spots are easy to miss here. An inspection catches them while the fix is small.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Stop guessing about that smell",
      blocks: [
        {
          type: "p",
          text: "Tell us where you're seeing or smelling it. We'll call you back, set a time, and you'll have a real answer and a written report. Already know it's mold? Go straight to mold removal (link: /mold-removal-chicago). Water coming in right now? See water damage help (link: /water-damage-restoration-chicago).",
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
          label: "Book a mold inspection",
          href: "#lead-form",
          kind: "form",
        },
      ],
    },
  ],
  formButton: "Request my mold inspection",
};

export default function Page() {
  return <StoryRoute content={content} />;
}
