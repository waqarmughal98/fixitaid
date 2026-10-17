import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/mold-inspection-chicago";
export const metadata = storyMetadata(URL);

export const content: StoryPageContent = {
  url: "/mold-inspection-chicago",
  slug: "mold-inspection-chicago",
  category: "mold",
  hero: {
    h1: "Mold Inspection and Testing in Chicago",
    buttons: [
      { label: "Book an inspection", href: "#lead-form", kind: "form" },
      { label: "Call (773) 987-1693", kind: "call" },
    ],
    trust: ["[Mold licence number]", "Chicago general contractor licence TGC144939", "[Google rating and review count]"],
    eyebrow: "Musty smell? Dark spots on the wall or ceiling?",
    sub: "We test the air and surfaces, find the moisture source and give you a written report with photos. You know what you are dealing with before spending a dollar on removal.",
    bridge: "The answer starts with testing, not cleaning.",
  },
  sections: [
    {
      kind: "pain",
      heading: "You can smell it but you cannot find it",
      blocks: [
        {
          type: "p",
          text: "A musty smell in the basement. Dark spots behind the bathroom vanity. A stain on the ceiling that came back after it was painted over. The question is always the same: is it mold, and how bad is it?",
        },
        {
          type: "p",
          text: "Guessing does not help. Bleaching the surface does not kill what is behind the wall. Ignoring it does not make it stop. Mold keeps growing as long as the moisture is there.",
        },
        {
          type: "p",
          text: "In Chicago basements, garden units and older 2-flats, the conditions are right all year. Humidity from concrete walls, condensation on cold pipes, slow leaks from the roof or a bathroom above.",
        },
      ],
      bridge: "Test first. Then you know what to do.",
    },
    {
      kind: "turning",
      heading: "Test first. Then you know what to do.",
      blocks: [
        {
          type: "p",
          text: "Mold removal without testing is guesswork. You do not know what is in the air, how far it spread or where the moisture is coming from. That means you might clean the wrong area, miss what is behind the wall, or spend money on removal while the source keeps feeding new growth.",
        },
        {
          type: "p",
          text: "A proper mold inspection gives you facts: air samples, surface samples, moisture readings and a written report. You know what is there, where it is, and what caused it.",
        },
        {
          type: "p",
          text: "Fix It Aid does mold inspection in Chicago, including mold testing and indoor air quality testing. We test, document and explain the results. If removal is needed, we do that too (link: /mold-removal-chicago). If the source is a roof leak, our roofing team fixes it (link: /roofing-chicago). If it is water damage, our restoration team handles it (link: /water-damage-restoration-chicago).",
        },
      ],
      bridge: "Here is what happens during an inspection.",
    },
    {
      kind: "solution",
      heading: "What a mold inspection covers",
      blocks: [
        {
          type: "ol",
          items: [
            "**Visual inspection.** We check the area you are concerned about plus common problem spots: basement walls, bathroom ceilings, window frames, attic, crawl space.",
            "**Air sampling.** We test the air to find out what is floating in the space and compare it to outdoor baseline levels.",
            "**Surface sampling.** We swab or tape-lift visible growth and send it to the lab.",
            "**Moisture readings.** We use a moisture meter on walls, floors and ceilings to find the water source.",
            "**Written report.** Lab results, photos, moisture map and our recommendation. Yours to keep.",
          ],
        },
        {
          type: "subhead",
          text: "What we inspect",
        },
        {
          type: "ul",
          items: [
            "Basements, crawl spaces and garden units",
            "Bathrooms, kitchens and laundry rooms",
            "Attics and roof lines, often tied to roof leaks (link: /roofing-chicago)",
            "Behind walls where there is a musty smell but nothing visible",
            "2-flats and condos",
          ],
        },
      ],
      bridge: "What the inspection gives you.",
    },
    {
      kind: "benefits",
      heading: "Facts, not guesses",
      blocks: [
        {
          type: "ul",
          items: [
            "**Lab-tested results.** Air and surface samples analyzed by an independent lab. You see the numbers.",
            "**Moisture source identified.** The report tells you where the water is coming from, not just where the mold is.",
            "**Written report with photos.** Use it to plan removal, share with a landlord, or give to your insurer.",
            "**No pressure to remove.** If the results come back clean, we tell you. If removal is needed, we give you a price for mold removal and you decide. (link: /mold-removal-chicago)",
            "**Cause gets fixed too.** Roof leak? Our roofing team. Water damage? Our restoration team. One company. (link: /water-damage-restoration-chicago)",
          ],
        },
      ],
      bridge: "Licensed and documented.",
    },
    {
      kind: "proof",
      heading: "Licensed for mold work in Chicago",
      blocks: [
        {
          type: "ul",
          items: [
            "Mold remediation licence: [Mold licence number]",
            "City of Chicago general contractor: TGC144939",
            "[Insured and bonded: yes or no]",
            "[Google rating and review count]",
            "[Real review 1: mold inspection, name and neighborhood]",
            "[Real review 2: basement mold concern, name and neighborhood]",
            "[Real job photos: inspection equipment, lab report sample]",
          ],
        },
      ],
      bridge: "What people ask before booking an inspection.",
    },
    {
      kind: "faq",
      heading: "Mold inspection questions",
      blocks: [
        {
          type: "faq",
          q: "How much does a mold inspection cost in Chicago?",
          a: "[Inspection price or price range.] The price covers the visual check, air samples, surface samples, moisture readings and the written report.",
        },
        {
          type: "faq",
          q: "Do I need a mold inspection or can I just clean it?",
          a: "If you can see mold on a small area, about 10 square feet or less on a hard surface, surface cleaning may be enough. If the area is larger, if the mold is behind a wall, or if you smell mold but cannot see it, an inspection tells you what you are dealing with before you spend money on removal.",
        },
        {
          type: "faq",
          q: "How long does a mold inspection take?",
          a: "[Typical time, for example \"One to two hours on site. Lab results come back in a few days.\"]",
        },
        {
          type: "faq",
          q: "Do you test for black mold?",
          a: "Yes. Our mold inspector takes air and surface samples and sends them to a lab, which identifies the mold type, including black mold (stachybotrys). You get the lab result in writing. Testing is the only way to know what you are actually dealing with.",
        },
        {
          type: "faq",
          q: "Can mold be behind a wall even if I cannot see it?",
          a: "Yes. Mold grows where moisture is. A slow pipe leak or condensation inside a wall creates the right conditions. The moisture meter and air samples help us find it without tearing the wall open.",
        },
        {
          type: "faq",
          q: "What happens if you find mold?",
          a: "We give you the lab results, explain what they mean and give you a price for removal if needed. You decide. (link: /mold-removal-chicago)",
        },
        {
          type: "faq",
          q: "Do you work in condos and 2-flats?",
          a: "Yes. Multi-unit buildings are a large part of our mold work in Chicago. We coordinate with building managers when needed.",
        },
      ],
      bridge: "Find out what is in the air.",
    },
    {
      kind: "close",
      heading: "Find out what is in the air",
      blocks: [{ type: "p", text: "Book a mold inspection. We test, document and give you a written report. You know what you are dealing with." }],
      buttons: [
        { label: "Book an inspection", href: "#lead-form", kind: "form" },
        { label: "Call (773) 987-1693", kind: "call" },
      ],
    },
  ],
};

export default function Page() {
  return <StoryRoute content={content} />;
}
