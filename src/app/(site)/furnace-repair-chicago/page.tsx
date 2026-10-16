import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/furnace-repair-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /furnace-repair-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/furnace-repair-chicago",
  slug: "furnace-repair-chicago",
  category: "hvac",
  hero: {
    h1: "Furnace and Boiler Repair in Chicago",
    buttons: [
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
      {
        label: "Book a repair online",
        href: "#lead-form",
        kind: "form",
      },
    ],
    trust: [
      "Licensed for HVAC [HVAC licence number]",
      "Chicago GC licence TGC144939",
      "[Google rating and review count]",
    ],
    eyebrow: "No heat? Cold radiators? Banging pipes?",
    sub: "Get your heat back without guessing what it will cost. We do furnace repair across Chicago and fix steam and hot water boilers in houses and 2-flats. All makes. You approve the exact price before we start.",
    line247: "No heat right now? Call (773) 987-1693. A real person answers [24/7 phone: yes or no].",
    bridge: "Here's what we hear on most calls.",
  },
  sections: [
    {
      kind: "pain",
      heading: "The furnace is running, so why is it cold?",
      blocks: [
        {
          type: "subhead",
          text: "If you have a furnace",
        },
        {
          type: "ul",
          items: [
            "\"The thermostat says heat and nothing happens.\"",
            "\"It's blowing air, but the air is cold.\"",
            "\"It turns on, runs a minute, then shuts off. Over and over.\"",
            "\"There's a loud bang when it starts.\"",
          ],
        },
        {
          type: "subhead",
          text: "If you have a boiler and radiators",
        },
        {
          type: "ul",
          items: [
            "\"The radiators downstairs are hot and the upstairs ones are cold.\"",
            "\"The pipes bang and hiss every morning.\"",
            "\"There's water on the floor by the boiler.\"",
            "\"It keeps locking out and I keep hitting reset.\"",
          ],
        },
        {
          type: "p",
          text: "Every one of these gets worse with time. A short-cycling furnace burns through parts. A boiler that keeps losing water or locking out tends to quit on the coldest night. In a 2-flat, a no-heat night in January can freeze pipes in the unit over the basement, and a heating repair turns into a water damage job.",
        },
      ],
      bridge: "The good news is that the fix is often smaller than you fear.",
    },
    {
      kind: "turning",
      heading: "No heat usually means a failed part, not a dead furnace",
      blocks: [
        {
          type: "p",
          text: "Most furnaces and boilers stop for a reason you can name: a dirty flame sensor, a cracked igniter, a stuck pressure switch, a failed circulator pump, a low water cutoff, a radiator vent that's stuck shut. Those are repairs.",
        },
        {
          type: "p",
          text: "What makes a simple repair expensive is a technician who doesn't take the time to find it, or a company that would rather sell a system. Some of the \"Chicago furnace repair\" ads you see are suburban firms or referral sites passing your call along.",
        },
        {
          type: "p",
          text: "You get our own Chicago team. We find the part that failed, show it to you and give you a price for that repair.",
        },
      ],
      bridge: "Here's exactly how that works.",
    },
    {
      kind: "solution",
      heading: "From cold house to working heat, step by step",
      blocks: [
        {
          type: "ol",
          items: [
            "**Call or book online.** A real person answers and sets a time.",
            "**We test the system.** Furnace or boiler, we check it end to end and show you what failed.",
            "**You approve the exact price.** Before any work starts. No price, no work.",
            "**We fix it and run a full cycle.** We don't leave until the heat is on.",
          ],
        },
        {
          type: "subhead",
          text: "What we repair",
        },
        {
          type: "ul",
          items: [
            "Igniters, flame sensors and pilot assemblies",
            "Blower motors, capacitors and belts",
            "Gas valves, pressure switches and thermostats",
            "Circulator pumps, zone valves and expansion tanks on hot water boilers",
            "Low water cutoffs, sight glasses and air vents on steam boilers",
            "Radiator valves and vents that keep a room cold",
          ],
        },
        {
          type: "p",
          text: "**Tune-ups:** A furnace tune-up or boiler service before winter is the cheapest way to avoid a no-heat call in January.",
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
            "**A surprise bill.** You approve the exact price first.",
            "**An invented repair.** We show you the failed part and explain it in plain words.",
            "**Being pushed into a new furnace.** If the repair costs more than the system is worth, we say so and give you a separate price for replacement (link: /hvac-installation-chicago). You choose.",
            "**A second contractor.** If a boiler leak has soaked the basement, our water damage team (link: /water-damage-restoration-chicago) takes it from there.",
          ],
        },
      ],
      bridge: "Here's who you're letting into your home.",
    },
    {
      kind: "proof",
      heading: "A licensed Chicago contractor",
      blocks: [
        {
          type: "ul",
          items: [
            "Licensed for HVAC: [HVAC licence number]",
            "City of Chicago general contractor: TGC144939",
            "Insured and bonded: yes",
            "1-year workmanship warranty",
          ],
        },
        {
          type: "p",
          text: "[Google rating and review count]",
        },
        {
          type: "p",
          text: "[Real review 1: no-heat repair, name and neighborhood] [Real review 2: boiler or radiator repair, name and neighborhood]",
        },
        {
          type: "p",
          text: "[Real job photos: boiler rooms and furnaces we have worked on]",
        },
      ],
      bridge: "A few questions people ask before they call.",
    },
    {
      kind: "faq",
      blocks: [
        {
          type: "faq",
          q: "How much does furnace or boiler repair cost?",
          a: "Each repair is priced on its own, based on the part and the time, and you approve it before we start. Older boilers sometimes need parts that take a day or two to arrive. We tell you up front if that's the case.",
        },
        {
          type: "faq",
          q: "My furnace is not working. What should I check first?",
          a: "Make sure the thermostat is set to heat and has fresh batteries, the furnace switch (it looks like a light switch) is on, and the filter isn't clogged. Still nothing? Call us.",
        },
        {
          type: "faq",
          q: "Do you repair boilers and radiators?",
          a: "Yes. Boiler repair is a big part of our heating work in Chicago. We service steam and hot water systems and fix radiators that stay cold or bang.",
        },
        {
          type: "faq",
          q: "How long does a furnace last?",
          a: "Many gas furnaces last around 15 to 20 years with yearly service, and boilers often last longer. Age alone isn't a reason to replace. How it runs and what repairs cost matter more.",
        },
        {
          type: "faq",
          q: "Do you offer emergency furnace repair?",
          a: "Yes. Call (773) 987-1693 any time and a real person answers.",
        },
        {
          type: "faq",
          q: "What if I smell gas?",
          a: "Leave the house and call your gas company or 911 from outside. Don't try to relight the furnace. Call us once it's safe.",
        },
      ],
      bridge: "The first step takes two minutes.",
    },
    {
      kind: "close",
      heading: "Get your heat back, at a price you agree to first.",
      blocks: [
        {
          type: "p",
          text: "Call or book online. We'll find what failed, show you, and fix it once you say yes.",
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
          label: "Book a repair online",
          href: "#lead-form",
          kind: "form",
        },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
