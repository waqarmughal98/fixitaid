import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/flooded-basement-cleanup-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/flooded-basement-cleanup-chicago",
  slug: "flooded-basement-cleanup-chicago",
  category: "mold",
  hero: {
    h1: "Flooded Basement Cleanup in Chicago",
    buttons: [
      { label: "Call (773) 987-1693", kind: "call" },
      { label: "Book a visit online", href: "#lead-form", kind: "form" },
    ],
    trust: ["Chicago general contractor licence TGC144939", "[Mold licence number]", "[Google rating and review count]"],
    eyebrow: "Water or sewage in your basement?",
    sub: "Heavy rain, sewer backup or a failed sump pump. We pump out the water, disinfect the space and dry it so mold does not start.",
    bridge: "The first step is getting the water out, fast.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Chicago basements flood. That is not the worst part.",
      blocks: [
        {
          type: "p",
          text: "The worst part is what happens after. Standing water soaks into concrete, wood framing and drywall. Furniture, boxes and anything on the floor absorbs it. If it was a sewer backup, everything the water touched is contaminated.",
        },
        {
          type: "p",
          text: "In a garden unit, the damage hits a living space. In a 2-flat, water in the basement can affect the building's mechanicals: furnace, water heater, electrical panel.",
        },
        {
          type: "p",
          text: "And the clock is ticking. Mold can start growing on wet materials within 24 to 48 hours. A flooded basement that is not dried properly becomes a mold problem within a week.",
        },
      ],
      bridge: "A shop vac and fans will not dry a flooded basement.",
    },
    {
      kind: "turning",
      heading: "A shop vac and fans will not dry a flooded basement",
      blocks: [
        {
          type: "p",
          text: "Standing water gets pumped out easily enough. But the moisture that soaked into the concrete, the framing and the drywall does not come out with a mop. Without commercial dehumidifiers and air movers, the space stays damp for weeks.",
        },
        {
          type: "p",
          text: "And if the water was from a sewer backup, surface cleaning is not safe. Sewage water contains bacteria. Everything it touched needs to be cleaned and disinfected properly, and contaminated materials like carpet and drywall need to come out.",
        },
        {
          type: "p",
          text: "Fix It Aid handles flooded basement cleanup across Chicago. We pump, clean, disinfect and dry. If the flooding came from a sewer backup, we follow contamination protocols. If mold started, our mold team removes it (link: /mold-removal-chicago). If the sump pump failed, we tell you what it needs.",
        },
      ],
      bridge: "How we clean up a flooded basement.",
    },
    {
      kind: "solution",
      heading: "Pump. Clean. Disinfect. Dry.",
      blocks: [
        {
          type: "ol",
          items: [
            "**Water removal.** Submersible pumps and extractors get the water out.",
            "**Contamination check.** If the water is from a sewer backup, we follow contamination protocols. Contaminated materials (carpet, pad, lower drywall) come out.",
            "**Cleaning and disinfection.** Floors, walls and remaining surfaces cleaned and treated with antimicrobial agents.",
            "**Structural drying.** Commercial dehumidifiers and air movers dry the space. We monitor moisture levels daily.",
            "**Mold check.** After drying, we inspect for mold. If we find it, our mold team handles removal. (link: /mold-removal-chicago)",
            "**Rebuild.** New drywall, flooring and paint where needed. Chicago GC licence TGC144939.",
          ],
        },
        {
          type: "subhead",
          text: "What we clean up",
        },
        {
          type: "ul",
          items: [
            "Heavy rain flooding through basement walls or floor",
            "Combined sewer backup, common in older Chicago neighborhoods",
            "Sump pump failure",
            "Drain tile backup",
            "Garden unit flooding",
            "Furnace room and utility area flooding",
          ],
        },
      ],
      bridge: "Why this matters more than you think.",
    },
    {
      kind: "benefits",
      heading: "Pumped, disinfected, dried, checked for mold",
      blocks: [
        {
          type: "ul",
          items: [
            "**Fast response.** Water damage gets worse by the hour. We start extraction as soon as we arrive.",
            "**Sewer backup handled safely.** Contaminated water is a health risk. We remove affected materials and disinfect with proper agents, not household bleach.",
            "**Documented for insurance.** We photograph the damage and take moisture readings. We document the damage with photos and a written report you can share with your insurer.",
            "**Mold prevention.** We dry the space with commercial equipment and check for mold after. If it started, we remove it. (link: /mold-removal-chicago)",
            "**Rebuild included.** Drywall, flooring, paint. One company from pump-out to finished wall.",
          ],
        },
      ],
      bridge: "A licensed contractor, not a cleanup crew.",
    },
    {
      kind: "proof",
      heading: "Licensed and equipped for basement flooding",
      blocks: [
        {
          type: "ul",
          items: [
            "City of Chicago general contractor: TGC144939",
            "Mold remediation licence: [Mold licence number]",
            "[Insured and bonded: yes or no]",
            "[Google rating and review count]",
            "[Real review 1: basement flooding after heavy rain, name and neighborhood]",
            "[Real review 2: sewer backup cleanup, name and neighborhood]",
            "[Real job photos: pump-out, drying equipment, before and after]",
          ],
        },
      ],
      bridge: "Questions people ask when their basement floods.",
    },
    {
      kind: "faq",
      heading: "Flooded basement questions",
      blocks: [
        {
          type: "faq",
          q: "How much does flooded basement cleanup cost?",
          a: "It depends on how deep the water is, how large the area is and whether it is a sewer backup (contamination adds cleaning and disposal steps). We assess the damage and give you a price before repair work starts.",
        },
        {
          type: "faq",
          q: "Is sewer backup water dangerous?",
          a: "Yes. It contains bacteria and should not be cleaned with household products. We remove contaminated materials, disinfect with professional-grade agents and dry the space with commercial equipment.",
        },
        {
          type: "faq",
          q: "Will my insurance cover a flooded basement?",
          a: "Standard homeowner policies often do not cover sewer backup unless you have a rider. We document the damage with photos and a written report you can share with your insurer. Check your policy or ask your agent.",
        },
        {
          type: "faq",
          q: "How long does cleanup take?",
          a: "[Typical timeline, for example \"Water removal is usually same-day. Drying takes three to five days with commercial equipment. Rebuild time depends on what was damaged.\"]",
        },
        {
          type: "faq",
          q: "Should I worry about mold after a flood?",
          a: "Yes. Mold can start within 24 to 48 hours on wet materials. We dry the space properly and check for mold after. If it started, our mold team removes it. (link: /mold-removal-chicago)",
        },
        {
          type: "faq",
          q: "Can you help with a flooded garden unit?",
          a: "Yes. Garden units in Chicago are below grade and flood frequently. Same process: pump, clean, disinfect, dry.",
        },
      ],
      bridge: "Get the water out of your basement now.",
    },
    {
      kind: "close",
      heading: "Get the water out of your basement now",
      blocks: [{ type: "p", text: "Call us. We pump, disinfect, dry and check for mold. You know the price before we rebuild." }],
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
