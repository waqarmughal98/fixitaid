import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/hvac-installation-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/hvac-installation-chicago",
  slug: "hvac-installation-chicago",
  category: "hvac",
  hero: {
    h1: "Furnace and AC Installation in Chicago",
    buttons: [
      { label: "Book a free estimate", href: "#lead-form", kind: "form" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["[HVAC licence number]", "Chicago general contractor licence TGC144939", "[Financing: yes or no]"],
    eyebrow: "Replacing a furnace, boiler or AC?",
    sub: "Get a system sized for your home and a written price you can hold us to. We handle furnace replacement in Chicago, plus new boilers, central air and mini splits. No pressure to decide on the spot.",
    bridge: "The right size matters more than the brand.",
  },
  sections: [
    {
      kind: "pain",
      heading: "\"I have paid for three repairs. Do I keep fixing it?\"",
      blocks: [
        {
          type: "p",
          text: "\"The furnace needed two repairs last winter and it is making noise again.\" \"One quote said repair, another said replace, and the prices are miles apart.\" \"The back bedroom never gets warm, no matter what we do.\" \"We have radiators and no ducts. Can we even get AC?\" \"I do not want to spend this much and get the wrong system.\"",
        },
        {
          type: "p",
          text: "A new system is a big check to write, so the worry makes sense. The risk is getting it wrong: a system that is too big turns on and off all day and leaves the house clammy, and one that is too small runs nonstop and still falls behind on the coldest nights. Either way you live with it for the next 15 years or more.",
        },
      ],
      bridge: "The right size matters more than the brand.",
    },
    {
      kind: "turning",
      heading: "The right size matters more than the brand",
      blocks: [
        {
          type: "p",
          text: "Plenty of installers size a new system by copying the label on the old one. If the old one was wrong, or your house has changed (new windows, insulation, a finished attic), the new one is wrong too.",
        },
        {
          type: "p",
          text: "We size the system to the house as it is today. We look at square footage, windows, insulation, which way the house faces and how the rooms are laid out, then recommend a size and explain why.",
        },
        {
          type: "p",
          text: "And if a repair still makes more sense than replacement, we tell you. (link: /furnace-repair-chicago)",
        },
      ],
      bridge: "Here is how the process works.",
    },
    {
      kind: "solution",
      heading: "From estimate to first heat cycle",
      blocks: [
        {
          type: "ol",
          items: [
            "**We visit and measure.** We look at the current system, the space and the ducts or pipes, and ask how the house feels in winter and summer.",
            "**You get a written price.** Equipment, labor, permits and timeline, in writing.",
            "**We install it.** Furnace installation, AC installation or a mini split: we remove the old unit, install the new one and pull permits where the city requires them.",
            "**We start it up with you.** We test it together and show you the thermostat and filter.",
          ],
        },
        {
          type: "h3",
          title: "Furnaces",
          text: "Gas forced air, with new venting and thermostat where needed.",
        },
        {
          type: "h3",
          title: "Boilers",
          text: "Steam and hot water. In older Chicago homes the radiators and pipes often stay. We replace the boiler and the worn parts around it and balance the system so every room heats.",
        },
        {
          type: "h3",
          title: "Central air",
          text: "For homes with ductwork. We check the ducts and the electrical panel before we quote.",
        },
        {
          type: "h3",
          title: "Ductless mini splits",
          text: "A good fit for older houses, 2-flats and condos with radiator heat and no ducts.",
        },
      ],
      bridge: "What that means for the decision you have to make.",
    },
    {
      kind: "benefits",
      heading: "What you do not have to worry about",
      blocks: [
        {
          type: "ul",
          items: [
            "**Overpaying for the wrong system.** It is sized to your house, and we show you how we got there.",
            "**A price that grows halfway through.** The written price is the price, unless you ask for changes.",
            "**Holes nobody patches.** We are a Chicago general contractor (TGC144939). If an install needs a wall opened or a closet rebuilt, we close it up ourselves.",
            "**A rooftop unit that leaks.** Our roofing crew seals the curb and flashing on flat roofs. (link: /roofing-chicago)",
          ],
        },
      ],
      bridge: "What backs that up.",
    },
    {
      kind: "proof",
      heading: "Licensed, and in writing",
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
            "[Real review 1: furnace or boiler replacement, name and neighborhood]",
            "[Real review 2: mini split or central air install, name and neighborhood]",
            "[Real job photos: before and after installs]",
          ],
        },
      ],
      bridge: "A few questions about cost and timing.",
    },
    {
      kind: "faq",
      heading: "HVAC installation questions",
      blocks: [
        {
          type: "faq",
          q: "How much does a new furnace cost in Chicago?",
          a: "It depends on size, efficiency and how much venting or ductwork needs updating. What moves the price: the type of system, gas line or electrical work, access (basement, attic, closet or roof) and permits. You get a written price after we see the house.",
        },
        {
          type: "faq",
          q: "Do you offer financing?",
          a: "[Financing: yes or no. If yes, add the lender and terms.]",
        },
        {
          type: "faq",
          q: "What size AC do I need?",
          a: "It depends on more than square footage. Windows, insulation, sun and layout all count. We work it out on site instead of guessing from the old unit.",
        },
        {
          type: "faq",
          q: "Can you install central air in an old house in Chicago?",
          a: "Often, yes. If the house has radiators and no ducts, a ductless mini split or a high velocity system with small ducts are the common choices. We will tell you what fits.",
        },
        {
          type: "faq",
          q: "How long does an install take?",
          a: "[Typical install time, for example \"Most furnace swaps take one day.\"]",
        },
      ],
      bridge: "Get a system that fits your house, and a price in writing.",
    },
    {
      kind: "close",
      heading: "Get a system that fits your house, and a price in writing",
      blocks: [{ type: "p", text: "Book an estimate. We will measure, explain your options and leave the decision with you." }],
      buttons: [
        { label: "Book a free estimate", href: "#lead-form", kind: "form" },
        { label: "Call (773) 987-1693", kind: "call" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
