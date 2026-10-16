import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/mold-removal-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /mold-removal-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/mold-removal-chicago",
  slug: "mold-removal-chicago",
  category: "mold",
  hero: {
    h1: "Mold Removal in Chicago",
    buttons: [
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
      {
        label: "Get a mold removal quote",
        href: "#lead-form",
        kind: "form",
      },
    ],
    trust: [
      "Licensed for mold remediation [Mold licence number]",
      "Chicago GC license TGC144939",
      "Licensed Illinois roofer",
      "[Warranty on work]",
    ],
    eyebrow: "Mold came back after you cleaned it?",
    sub: "We remove the mold and fix the leak that's feeding it, so you pay for this once. Basements, attics, bathrooms and behind walls, with a written price before we start.",
    bridge: "If you've already tried to get rid of it, you know how this goes.",
  },
  sections: [
    {
      kind: "pain",
      heading: "You cleaned it. It came back. Now it's bigger.",
      blocks: [
        {
          type: "p",
          text: "\"I bleached it twice and it's back.\" \"The ceiling in the top-floor bedroom keeps going gray.\" \"The finished basement smells, and the drywall is spotted at the bottom.\" That's what we hear.",
        },
        {
          type: "p",
          text: "Bleach clears what you can see. It doesn't reach mold that has grown into drywall, wood or insulation. Every month it sits, more material has to come out, and a small job turns into a wall, a ceiling or a whole basement. If you're selling or renting, it turns into a disclosure problem too.",
        },
        {
          type: "subhead",
          text: "Where it shows up in Chicago homes",
        },
        {
          type: "ul",
          items: [
            "**Basements:** foundation walls, carpet and drywall after a flood or sewer backup. Basement mold removal is a big part of our work.",
            "**Attics:** roof leaks, ice dams and bath fans that blow into the attic. Attic mold removal often means new insulation.",
            "**Bathrooms, kitchens and windows:** behind tile, under sinks, and on sills soaked by winter condensation.",
          ],
        },
      ],
      bridge: "Most mold jobs fail for one reason.",
    },
    {
      kind: "turning",
      heading: "The mold isn't the problem. The water is.",
      blocks: [
        {
          type: "p",
          text: "Mold can't grow without moisture. A mold company can clean the wall perfectly, but if the roof above it still leaks, the mold is back next season and you're paying twice. That's the step most companies skip, because they can't do it. They're mold cleaners, not roofers or contractors.",
        },
        {
          type: "p",
          text: "Fix It Aid is both. We're licensed for mold remediation, licensed as a Chicago general contractor and licensed as an Illinois roofer. Roofing is where we started.",
        },
      ],
      bridge: "So we fix both: the mold and the water behind it.",
    },
    {
      kind: "solution",
      heading: "How our mold remediation works",
      blocks: [
        {
          type: "ol",
          items: [
            "**Inspect.** We find all of the mold and the moisture behind it. You get photos and readings. Not sure yet? Start with a mold inspection (link: /mold-inspection-chicago).",
            "**Contain.** We seal the area with plastic and control the air [Confirm: negative air and HEPA air scrubbers], so spores stay out of the rest of your home.",
            "**Remove.** Moldy drywall and insulation come out. Wood and surfaces we can save get HEPA-vacuumed, cleaned and treated.",
            "**Fix the source.** Roof, flashing, gutters or venting, repaired by our own licensed crew (link: /roof-repair-chicago). If a pipe is the cause, we show you exactly where.",
            "**Rebuild and check.** New drywall, paint and finishes, then a final check.",
          ],
        },
      ],
      bridge: "Here's what that means for you.",
    },
    {
      kind: "benefits",
      heading: "What you don't have to worry about",
      blocks: [
        {
          type: "ul",
          items: [
            "**Paying for it twice.** We stop the moisture, not just the stain.",
            "**Juggling three contractors.** One crew handles the mold, the roof leak and the drywall. One schedule, one written price.",
            "**A surprise bill.** You get the price in writing before work starts. If we find more behind the wall, we show you and ask before we go further.",
            "**Being upsold.** If a small area is something you can clean yourself, we tell you.",
          ],
        },
      ],
      bridge: "Don't just take our word for it.",
    },
    {
      kind: "proof",
      heading: "Check our licenses, then read what customers say",
      blocks: [
        {
          type: "ul",
          items: [
            "Licensed for mold remediation [Mold licence number]",
            "Chicago general contractor license TGC144939 · Illinois roofing license 104.021107",
            "[Mold certification, for example IICRC]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1, about mold removal, with name and neighborhood]",
            "[Real review 2, with name and neighborhood]",
            "[Real job photos: containment set up, wall opened, finished room]",
          ],
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      heading: "Mold removal questions",
      blocks: [
        {
          type: "faq",
          q: "How much does mold removal cost in Chicago?",
          a: "Most jobs fall between [price range]. The price depends on how big the area is, where it is (an open basement wall is quicker than a tight attic), what has to come out, how much the source needs repairing, and how much rebuilding you want. You get it in writing after the inspection.",
        },
        {
          type: "faq",
          q: "Does insurance cover mold removal?",
          a: "That depends on your policy and on what caused the mold. Your insurance company decides that. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.",
        },
        {
          type: "faq",
          q: "How long does it take? Can we stay home?",
          a: "Many jobs take [Confirm typical number of days]. Because the work area is sealed off, most families stay home while we work in the basement or attic. We'll tell you up front if a job is big enough that you should plan around it.",
        },
        {
          type: "faq",
          q: "Can I clean the mold myself?",
          a: "Small spots on a hard surface, yes. The EPA suggests a professional when the area is larger than about 10 square feet, when mold is inside walls or ductwork, or when it came from sewage or flood water.",
        },
        {
          type: "faq",
          q: "What causes mold in a basement?",
          a: "In Chicago, usually water through foundation cracks or window wells, a sewer backup, a failed sump pump, or damp air with no airflow. A dehumidifier helps. It won't close a crack.",
        },
        {
          type: "faq",
          q: "Do you do black mold removal?",
          a: "Yes. Black mold removal in Chicago follows the same process: contain, remove, fix the cause. Color doesn't change the job.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Get rid of the mold and the reason it's there",
      blocks: [
        {
          type: "p",
          text: "Send us a few details or a photo. We'll call you back, inspect, and give you a written price to remove the mold and stop the water. Then you pay for it once.",
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
          label: "Get a mold removal quote",
          href: "#lead-form",
          kind: "form",
        },
      ],
    },
  ],
  formButton: "Get my mold removal quote",
};

export default function Page() {
  return <StoryRoute content={content} />;
}
