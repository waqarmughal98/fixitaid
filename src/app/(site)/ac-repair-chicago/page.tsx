import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/ac-repair-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/ac-repair-chicago",
  slug: "ac-repair-chicago",
  category: "hvac",
  hero: {
    h1: "AC Repair in Chicago",
    buttons: [
      { label: "Call (773) 987-1693", kind: "call" },
      { label: "Book a repair online", href: "#lead-form", kind: "form" },
    ],
    trust: ["[HVAC licence number]", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "AC running but the house will not cool down?",
    sub: "Get cool air back without a surprise bill. We repair central air and ductless mini splits in Chicago houses, 2-flats and condos. All makes. You approve the exact price before we start.",
    line247: "AC out in a heat wave? Call (773) 987-1693. [24/7 phone: yes or no]",
    bridge: "A warm house does not mean you need a new AC.",
  },
  sections: [
    {
      kind: "pain",
      heading: "\"It is running all day and it is still 82 inside\"",
      blocks: [
        {
          type: "p",
          text: "\"The air from the vents is barely cool.\" \"The outside unit hums but the fan does not spin.\" \"There is ice on the copper line.\" \"There is water around the furnace.\" \"The mini split is blinking and will not cool.\" \"Upstairs is ten degrees hotter than downstairs.\"",
        },
        {
          type: "p",
          text: "Running a struggling AC for days does not just make you uncomfortable. A unit working against a failed part or low refrigerant can damage the compressor, which is the most expensive part of the system. And a clogged drain can quietly soak a ceiling or a basement wall.",
        },
      ],
      bridge: "A warm house does not mean you need a new AC.",
    },
    {
      kind: "turning",
      heading: "A warm house does not mean you need a new AC",
      blocks: [
        {
          type: "p",
          text: "A lot of AC calls come down to a capacitor, a contactor, a clogged drain, a dirty coil or a small refrigerant leak. Those are repairs.",
        },
        {
          type: "p",
          text: "The risk is calling a company that guesses, adds refrigerant without finding the leak, or jumps straight to \"you need a new system.\" Some ads are from companies outside the city, or referral sites that hand your call to someone else.",
        },
        {
          type: "p",
          text: "Fix It Aid does AC repair and air conditioning repair in Chicago. We find why your air conditioning is not cooling, show you, and price that repair.",
        },
      ],
      bridge: "Here is how a visit goes.",
    },
    {
      kind: "solution",
      heading: "How we get your AC cooling again",
      blocks: [
        {
          type: "ol",
          items: [
            "**Call or book online.** A real person answers and sets a time.",
            "**We check the whole system.** Outdoor unit, indoor coil, drain, refrigerant and thermostat.",
            "**You approve the exact price.** Before any work starts.",
            "**We fix it and measure the result.** We check the air temperature at the vents before and after, so you can see the difference.",
          ],
        },
        {
          type: "h3",
          title: "Central air",
          text: "Split systems with an outdoor condenser and an indoor coil. Capacitors, contactors, fan motors, refrigerant leaks, frozen coils, drain lines, thermostats.",
        },
        {
          type: "h3",
          title: "Ductless mini splits",
          text: "Common in older Chicago homes with radiator heat. Indoor heads, outdoor units, error codes and drain problems.",
        },
        {
          type: "h3",
          title: "AC service and tune-ups",
          text: "A spring check cleans the coils and catches worn parts before the first hot week. [AC tune-up price]",
        },
      ],
      bridge: "What that means once we get the AC working again.",
    },
    {
      kind: "benefits",
      heading: "What you do not have to worry about",
      blocks: [
        {
          type: "ul",
          items: [
            "**A surprise bill.** You approve the price first.",
            "**Paying for a guess.** We find the actual cause before we fix anything.",
            "**Being sold a new system you do not need.** If repair makes sense, we repair. If your AC is old and the repair is big, we give you a price for a new system as well, so you can compare. (link: /hvac-installation-chicago)",
            "**Water damage from a leaking drain.** If it has already soaked a ceiling or wall, our water damage team and mold team handle it. (link: /water-damage-restoration-chicago)",
          ],
        },
      ],
      bridge: "Here is who is coming to your door.",
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
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: AC repair, name and neighborhood]",
            "[Real review 2: mini split repair, name and neighborhood]",
          ],
        },
      ],
      bridge: "A few questions people ask first.",
    },
    {
      kind: "faq",
      heading: "AC repair questions",
      blocks: [
        {
          type: "faq",
          q: "How much does AC repair cost in Chicago?",
          a: "[Service call fee] covers the diagnosis. Repairs are priced by the part and the time, and you approve the price before we start. Rooftop condensers on 2-flats and condo buildings can take longer to reach, and we include that in the price you see.",
        },
        {
          type: "faq",
          q: "Why is my AC not cooling?",
          a: "The usual causes are a dirty filter, a failed capacitor, low refrigerant from a leak, or a frozen coil. Change the filter first. If it is still not cooling after an hour, turn it off and call us.",
        },
        {
          type: "faq",
          q: "My AC coil is frozen. What should I do?",
          a: "Turn the AC off and set the fan to \"on\" so the ice melts. Do not chip at it. Ice usually means low airflow or low refrigerant, and both need a proper check.",
        },
        {
          type: "faq",
          q: "Do you repair mini splits?",
          a: "Yes. Single head and multi head ductless systems.",
        },
        {
          type: "faq",
          q: "Do you offer emergency AC repair in Chicago?",
          a: "[24/7 phone: yes or no]",
        },
      ],
      bridge: "Get your AC cooling again, at a price you agree to first.",
    },
    {
      kind: "close",
      heading: "Get your AC cooling again, at a price you agree to first",
      blocks: [{ type: "p", text: "Call or book online. We will find out why it is not cooling and tell you the price before any work starts." }],
      buttons: [
        { label: "Call (773) 987-1693", kind: "call" },
        { label: "Book a repair online", href: "#lead-form", kind: "form" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
