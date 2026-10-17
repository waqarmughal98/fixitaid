import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/water-damage-restoration-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/water-damage-restoration-chicago",
  slug: "water-damage-restoration-chicago",
  category: "mold",
  hero: {
    h1: "Water Damage Restoration in Chicago",
    buttons: [
      { label: "Call (773) 987-1693", kind: "call" },
      { label: "Book a visit online", href: "#lead-form", kind: "form" },
    ],
    trust: ["Chicago general contractor licence TGC144939", "[Mold licence number]", "[Google rating and review count]"],
    eyebrow: "Burst pipe? Ceiling leak? Water on the floor?",
    sub: "We remove the water, dry the structure and repair what got damaged. Photos and moisture readings of everything we find. You know the price before we start.",
    bridge: "The faster the water comes out, the less there is to repair.",
  },
  sections: [
    {
      kind: "pain",
      heading: "Water inside a house does damage by the hour",
      blocks: [
        {
          type: "p",
          text: "A burst pipe soaks the floor and the walls. A roof leak drips into the ceiling for weeks before anyone sees the stain. An overflow from a washing machine or water heater floods the basement. Every hour the water sits, the damage spreads.",
        },
        {
          type: "p",
          text: "Drywall absorbs water and starts to crumble. Wood subfloors swell and buckle. Insulation inside the walls holds moisture like a sponge. And within 24 to 48 hours, mold can start growing in any of those materials.",
        },
        {
          type: "p",
          text: "In a Chicago 2-flat or condo, water from one unit reaches the unit below. The ceiling, walls and floor of a unit you do not even live in can be soaked.",
        },
      ],
      bridge: "Drying the floor is not enough.",
    },
    {
      kind: "turning",
      heading: "Drying the floor is not enough",
      blocks: [
        {
          type: "p",
          text: "Mopping up the visible water is the first instinct. But water travels. It wicks up drywall, seeps under baseboards, and sits inside wall cavities where you cannot see it. A floor that looks dry can have a soaked subfloor underneath.",
        },
        {
          type: "p",
          text: "If the structure is not dried properly with commercial equipment, the moisture stays. Then you have a mold problem on top of a water problem.",
        },
        {
          type: "p",
          text: "Fix It Aid does water damage restoration across Chicago. We extract the water, set up commercial drying equipment, monitor the moisture until the structure is dry, and check for mold. If the water came from a roof leak, our roofing team fixes the roof (link: /roofing-chicago). If mold has started, our mold team removes it (link: /mold-removal-chicago). One company handles all of it.",
        },
      ],
      bridge: "Here is how we dry and repair a water-damaged home.",
    },
    {
      kind: "solution",
      heading: "Extract. Dry. Check for mold. Repair.",
      blocks: [
        {
          type: "ol",
          items: [
            "**Water extraction.** We remove standing water with pumps and extractors. Same day when possible.",
            "**Damage assessment.** Moisture readings on every wall, floor and ceiling in the affected area. Photos and a written scope of damage.",
            "**Structural drying.** Commercial dehumidifiers and air movers placed throughout the space. We monitor moisture levels daily until the structure is dry.",
            "**Mold check.** Once dry, we inspect for mold. If we find it, our mold team handles removal and clearance testing. (link: /mold-removal-chicago)",
            "**Source repair.** We fix the cause: burst pipe, leaking supply line, failed water heater, roof leak. (link: /roofing-chicago)",
            "**Rebuild.** Drywall, insulation, flooring, paint. Chicago GC licence TGC144939.",
          ],
        },
        {
          type: "subhead",
          text: "What we handle",
        },
        {
          type: "ul",
          items: [
            "Burst pipes and supply line failures",
            "Roof leaks that damaged ceilings and walls",
            "Water heater failures",
            "Washing machine and dishwasher overflows",
            "AC drain line leaks (link: /ac-repair-chicago)",
            "Toilet overflows and supply line breaks",
          ],
        },
        {
          type: "p",
          text: "For flooded basements from heavy rain or sewer backup, see flooded basement cleanup. (link: /flooded-basement-cleanup-chicago)",
        },
      ],
      bridge: "What you get when you call us instead of doing it yourself.",
    },
    {
      kind: "benefits",
      heading: "Dried right, checked for mold, repaired by a GC",
      blocks: [
        {
          type: "ul",
          items: [
            "**Documented damage.** Moisture readings and photos of everything. We document the damage with photos and a written report you can share with your insurer.",
            "**Commercial drying.** Fans and a bucket are not enough. Our dehumidifiers and air movers dry the structure, not just the surface.",
            "**Mold prevention.** We check for mold after drying. If it started, we remove it. (link: /mold-removal-chicago)",
            "**Source fixed.** We repair the pipe, the drain, the water heater or the roof leak that caused the damage.",
            "**Rebuild included.** We are a general contractor. Drywall, flooring, insulation, paint. One company from water extraction to final coat.",
          ],
        },
      ],
      bridge: "A general contractor who handles water damage.",
    },
    {
      kind: "proof",
      heading: "Licensed in Chicago for every part of the job",
      blocks: [
        {
          type: "ul",
          items: [
            "City of Chicago general contractor: TGC144939",
            "Mold remediation licence: [Mold licence number]",
            "Illinois roofing licence: 104.021107 (when a roof leak is the cause)",
            "[Insured and bonded: yes or no]",
            "[Warranty on work]",
            "[Google rating and review count]",
            "[Real review 1: burst pipe or ceiling leak, name and neighborhood]",
            "[Real review 2: water damage and mold, name and neighborhood]",
            "[Real job photos: extraction, drying equipment, before and after]",
          ],
        },
      ],
      bridge: "Questions we hear from homeowners with water damage.",
    },
    {
      kind: "faq",
      heading: "Water damage questions",
      blocks: [
        {
          type: "faq",
          q: "How much does water damage restoration cost in Chicago?",
          a: "It depends on how much area is affected, what materials are damaged and whether mold is present. A single room with wet drywall is a different job than a flooded basement with saturated subfloors. We assess the damage, give you moisture readings and photos, and price the job before we start.",
        },
        {
          type: "faq",
          q: "Is water mitigation the same as water damage restoration?",
          a: "Water mitigation is the first step: water removal and drying to stop the damage from spreading. Water damage restoration is the full job, including the repair that puts your home back together. We do both, from emergency water removal through to water damage repair.",
        },
        {
          type: "faq",
          q: "Will you help with my insurance claim?",
          a: "We document the damage with photos, moisture readings and a written report you can share with your insurer. We do not file claims or negotiate with insurance companies.",
        },
        {
          type: "faq",
          q: "How long does it take to dry a house?",
          a: "[Typical drying time, for example \"Most spaces take three to five days with commercial equipment. We monitor moisture levels daily and pull the equipment when the structure is dry.\"]",
        },
        {
          type: "faq",
          q: "Can water damage cause mold?",
          a: "Yes. Mold can start growing within 24 to 48 hours on wet materials. That is why we check for mold after drying and remove it if needed. (link: /mold-removal-chicago)",
        },
        {
          type: "faq",
          q: "My ceiling is leaking from a roof leak. Can you fix the roof too?",
          a: "Yes. Our roofing team repairs the roof. Our restoration team dries and repairs the inside. One company. (link: /roofing-chicago)",
        },
        {
          type: "faq",
          q: "My basement flooded from rain or a sewer backup. Is that the same service?",
          a: "Sewer backup and storm flooding are a different category. See flooded basement cleanup. (link: /flooded-basement-cleanup-chicago)",
        },
      ],
      bridge: "Get the water out before the damage spreads.",
    },
    {
      kind: "close",
      heading: "Get the water out before the damage spreads",
      blocks: [{ type: "p", text: "Call now. We extract the water, set up drying equipment and document the damage. You know the price before repair work starts." }],
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
