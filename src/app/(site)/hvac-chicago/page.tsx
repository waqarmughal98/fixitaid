import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/hvac-chicago";
export const metadata = storyMetadata(URL);

/** Page copy for /hvac-chicago. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/hvac-chicago",
  slug: "hvac-chicago",
  category: "hvac",
  hero: {
    h1: "Heating and Cooling in Chicago",
    buttons: [
      {
        label: "Call (773) 987-1693",
        kind: "call",
      },
      {
        label: "Book a visit online",
        href: "#lead-form",
        kind: "form",
      },
    ],
    trust: [
      "Licensed for HVAC [HVAC licence number]",
      "Chicago GC licence TGC144939",
      "[Google rating and review count]",
    ],
    eyebrow: "Furnace, boiler and AC repair across Chicago",
    sub: "The heat should be on and the house is still cold. Call a licensed Chicago HVAC contractor who tells you what is wrong, gives you the exact price, and only starts when you say yes.",
    line247: "No heat tonight? Call (773) 987-1693. A real person answers [24/7 phone: yes or no].",
    bridge: "If any of this sounds like your house, read on.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Cold rooms, strange noises, and a bill you can't predict",
      blocks: [
        {
          type: "p",
          text: "You turn the thermostat up and nothing changes. The furnace clicks, runs for a minute and shuts off. The radiators upstairs are hot and the ones in the back bedroom are cold. The boiler bangs every morning and you are not sure if that is normal.",
        },
        {
          type: "p",
          text: "And underneath all of it is the real worry: what is this going to cost me?",
        },
        {
          type: "p",
          text: "Waiting rarely makes it cheaper. A furnace that short-cycles wears out parts faster. A boiler losing water can lock out on the coldest night of the year. In a 2-flat over an unheated basement, a few hours without heat in January can mean frozen pipes, and then you have a second problem.",
        },
      ],
      bridge: "Here is the part most people don't hear when they call for help.",
    },
    {
      kind: "turning",
      heading: "Your heat is often one part away from working",
      blocks: [
        {
          type: "p",
          text: "Very often, a no-heat call comes down to one worn part: an igniter, a flame sensor, a pressure switch, a circulator pump. That is a repair, not a new furnace.",
        },
        {
          type: "p",
          text: "The trouble is who answers your call. Some of the HVAC ads on Google this fall are run by suburban companies, and some are referral sites that pass your number to whichever contractor is free. Neither knows your house, and a stranger with a sales target is more likely to talk about replacement than repair.",
        },
        {
          type: "p",
          text: "Fix It Aid is a Chicago company with a City of Chicago general contractor licence (TGC144939). We know the boilers, radiators and tight basements in older city homes, and we start by finding out what actually failed.",
        },
      ],
      bridge: "Here is how a visit works.",
    },
    {
      kind: "solution",
      heading: "What happens when you call",
      blocks: [
        {
          type: "ol",
          items: [
            "**You talk to a real person.** Tell us what the system is doing. We set a time.",
            "**We find what failed.** The technician tests the system and shows you the problem.",
            "**You approve the exact price.** You see it before any work starts. If you say no, we don't start.",
            "**We fix it and run it with you.** We test a full heating cycle before we leave.",
          ],
        },
        {
          type: "subhead",
          text: "What we work on",
        },
        {
          type: "ul",
          items: [
            "**Furnaces.** Repair, tune-ups and replacement, all makes. Furnace repair (link: /furnace-repair-chicago)",
            "**Steam and hot water boilers.** Common in bungalows and 2-flats. Boiler repair (link: /furnace-repair-chicago)",
            "**Central air and mini splits.** AC repair (link: /ac-repair-chicago)",
            "**New systems,** sized for your home. Installation (link: /hvac-installation-chicago)",
            "**Landlords.** One call covers every unit in your 2-flat or 3-flat. Tell us the unit count when you book.",
          ],
        },
      ],
      bridge: "Here is what that means for you.",
    },
    {
      kind: "benefits",
      heading: "No surprise bills. No sales pitch. No runaround.",
      blocks: [
        {
          type: "ul",
          items: [
            "**Worried about the price?** You approve the exact price before we pick up a tool.",
            "**Worried about being upsold?** If a repair makes sense, we repair it. We only bring up replacement when the numbers say so, and then we show you both prices.",
            "**Worried about being passed around?** You reach our own team, not a call center or a referral line.",
            "**Worried it's bigger than HVAC?** If a leaking boiler or AC drain has soaked the floor or a wall, our water damage team (link: /water-damage-restoration-chicago) handles it. One company, one schedule.",
          ],
        },
      ],
      bridge: "You don't have to take our word for it.",
    },
    {
      kind: "proof",
      heading: "Licensed in Chicago, and on the record",
      blocks: [
        {
          type: "ul",
          items: [
            "Licensed for HVAC: [HVAC licence number]",
            "City of Chicago general contractor: TGC144939",
            "Illinois roofing licence: 104.021107",
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
          text: "[Real review 1: heating repair, name and neighborhood] [Real review 2: boiler or furnace, name and neighborhood] [Real review 3: AC or install, name and neighborhood]",
        },
        {
          type: "p",
          text: "[Real job photos]",
        },
      ],
      bridge: "You probably still have a few questions.",
    },
    {
      kind: "faq",
      blocks: [
        {
          type: "faq",
          q: "How much does HVAC repair cost in Chicago?",
          a: "Repairs are priced per job, and you see the exact price before we start.",
        },
        {
          type: "faq",
          q: "Will you try to sell me a new furnace?",
          a: "No. If the system can be repaired at a fair price, we repair it. If it can't, we tell you why and give you both prices.",
        },
        {
          type: "faq",
          q: "How often should HVAC be serviced?",
          a: "Once a year for heating and once for cooling. In Chicago, book the furnace or boiler between September and November, before the first hard freeze.",
        },
        {
          type: "faq",
          q: "Do you work on old boilers and radiators?",
          a: "Yes. Steam and hot water systems in older Chicago homes and 2-flats are everyday work for us.",
        },
        {
          type: "faq",
          q: "Are you a licensed HVAC contractor in Chicago?",
          a: "Yes. HVAC licence [HVAC licence number] and Chicago general contractor licence TGC144939.",
        },
        {
          type: "faq",
          q: "Do you come to my neighborhood?",
          a: "We work across the City of Chicago. See the list (link: /areas-we-serve).",
        },
        {
          type: "faq",
          q: "What if I smell gas?",
          a: "Leave the house and call your gas company or 911 from outside. Don't switch lights on or off. Call us once the gas company says it is safe.",
        },
      ],
      bridge: "The first step is simple.",
    },
    {
      kind: "close",
      heading: "Get the heat back on, at a price you agree to first.",
      blocks: [
        {
          type: "p",
          text: "Call or book online. A real person will ask what's going on, set a time, and you'll know the price before any work starts.",
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
          label: "Book a visit online",
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
