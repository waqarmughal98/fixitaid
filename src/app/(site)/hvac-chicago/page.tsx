import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/hvac-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/hvac-chicago",
  slug: "hvac-chicago",
  category: "hvac",
  hero: {
    h1: "Heating and Cooling in Chicago",
    buttons: [
      { label: "Call (773) 987-1693", kind: "call" },
      { label: "Book a visit online", href: "#lead-form", kind: "form" },
    ],
    trust: ["[HVAC licence number]", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Furnace, boiler and AC repair across Chicago",
    sub: "The heat is not working and the house is cold. Call a licensed Chicago HVAC contractor who finds the problem, gives you the exact price, and starts only when you say yes.",
    line247: "No heat tonight? Call (773) 987-1693. [24/7 phone: yes or no]",
    bridge: "Most no-heat calls come down to something smaller than you expect.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Cold rooms, strange noises and a bill you cannot predict",
      blocks: [
        {
          type: "p",
          text: "The thermostat says heat and nothing happens. The furnace clicks, runs for a minute, shuts off. Radiators upstairs are hot. The back bedroom is cold. The boiler bangs every morning.",
        },
        {
          type: "p",
          text: "Underneath all of it is the real worry: what will this cost?",
        },
        {
          type: "p",
          text: "Waiting rarely makes it cheaper. A short-cycling furnace wears out parts faster. A boiler losing water can lock out on the coldest night of the year. In a 2-flat over an unheated basement, a few hours without heat in January can freeze the pipes. Then you have a second problem.",
        },
      ],
      bridge: "Your heat is often one part away from working.",
    },
    {
      kind: "turning",
      heading: "Your heat is often one part away from working",
      blocks: [
        {
          type: "p",
          text: "A no-heat call usually comes down to one worn part: an igniter, a flame sensor, a pressure switch, a circulator pump. That is a repair, not a new furnace.",
        },
        {
          type: "p",
          text: "The risk is who answers your call. Some HVAC ads on Google are run by companies outside the city, or referral sites that pass your number to whoever is free. Neither knows your house, and a stranger with a sales target is more likely to talk about replacement than repair.",
        },
        {
          type: "p",
          text: "Fix It Aid is a Chicago company with a City of Chicago general contractor licence (TGC144939). We know the boilers, radiators and tight basements in older city homes. We find what actually failed first.",
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
            "**You approve the exact price.** You see it before any work starts. If you say no, we do not start.",
            "**We fix it and run it with you.** We test a full heating cycle before we leave.",
          ],
        },
        {
          type: "h3",
          title: "Furnaces",
          text: "Repair, tune-ups and replacement, all makes.",
          link: "/furnace-repair-chicago",
        },
        {
          type: "h3",
          title: "Steam and hot water boilers",
          text: "Common in bungalows and 2-flats.",
          link: "/furnace-repair-chicago",
        },
        {
          type: "h3",
          title: "Central air and mini splits",
          text: "Diagnosis, repair and tune-ups.",
          link: "/ac-repair-chicago",
        },
        {
          type: "h3",
          title: "New systems",
          text: "Sized for your home.",
          link: "/hvac-installation-chicago",
        },
        {
          type: "p",
          text: "**Landlords.** One call covers every unit in your 2-flat or 3-flat. Tell us the unit count when you book.",
        },
      ],
      bridge: "Here is what changes once a licensed Chicago contractor is on the job.",
    },
    {
      kind: "benefits",
      heading: "No surprise bills. No sales pitch. No runaround.",
      blocks: [
        {
          type: "ul",
          items: [
            "**Worried about the price?** You approve the exact price before we pick up a tool.",
            "**Worried about being upsold?** If a repair makes sense, we repair it. We bring up replacement only when the numbers say so, and then we show you both prices.",
            "**Worried about being passed around?** You reach our own team, not a call center or a referral line.",
            "**Worried it is bigger than HVAC?** If a leaking boiler or AC drain has soaked the floor or a wall, our water damage team handles it. One company, one schedule. (link: /water-damage-restoration-chicago)",
          ],
        },
      ],
      bridge: "Our licence numbers are public record.",
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
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: heating repair, name and neighborhood]",
            "[Real review 2: boiler or furnace, name and neighborhood]",
            "[Real review 3: AC or install, name and neighborhood]",
            "[Real job photos]",
          ],
        },
      ],
      bridge: "Common questions about HVAC in Chicago.",
    },
    {
      kind: "faq",
      heading: "HVAC questions",
      blocks: [
        {
          type: "faq",
          q: "How much does HVAC repair cost in Chicago?",
          a: "[Service call fee] covers the diagnosis. Repairs are priced per job, and you see the exact price before we start. [Furnace tune-up price] for a fall tune-up.",
        },
        {
          type: "faq",
          q: "Will you try to sell me a new furnace?",
          a: "No. If the system can be repaired at a fair price, we repair it. If it cannot, we tell you why and give you both prices.",
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
          a: "We work across the City of Chicago.",
        },
        {
          type: "faq",
          q: "What if I smell gas?",
          a: "Leave the house and call your gas company or 911 from outside. Do not switch lights on or off. Call us once the gas company says it is safe.",
        },
      ],
      bridge: "Get the heat back on, at a price you agree to first.",
    },
    {
      kind: "close",
      heading: "Get the heat back on, at a price you agree to first",
      blocks: [{ type: "p", text: "Call or book online. A real person will ask what is going on, set a time, and you will know the price before any work starts." }],
      buttons: [
        { label: "Call (773) 987-1693", kind: "call" },
        { label: "Book a visit online", href: "#lead-form", kind: "form" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
