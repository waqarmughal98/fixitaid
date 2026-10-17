import type { StoryPageContent } from "@/types/content.types";
import { StoryRoute, storyMetadata } from "@/components/content/StoryRoute";

const URL = "/areas-we-serve";
export const metadata = storyMetadata(URL);

/** Page copy for /areas-we-serve. Edit the content object below. */
export const content: StoryPageContent = {
  url: "/areas-we-serve",
  slug: "areas-we-serve",
  category: "general",
  hero: {
    h1: "Chicago Neighborhoods We Serve",
    buttons: [
      { label: "Call (773) 987-1693", kind: "call" },
      { label: "Check if we cover your street", href: "#lead-form", kind: "form" },
    ],
    trust: [
      "Chicago general contractor licence TGC144939",
      "Illinois roofing licence 104.021107",
      "[Google rating and review count]",
    ],
    eyebrow: "Need a contractor who actually works in your part of the city?",
    sub: "Fix It Aid works inside the City of Chicago, across Cook County, from Rogers Park to Beverly. Mold, water damage, roofing, heating and cooling, from one licensed local team.",
    bridge: "Here is why that matters.",
  },
  sections: [
    {
      kind: "pain",
      heading: "The company that answers is not always local",
      blocks: [
        {
          type: "p",
          text: "You search for help in Chicago and call the first number. It turns out to be a lead service, or a crew from somewhere outside the city. They cannot come until Thursday. When they do, they do not know a 2-flat's flat roof or a boiler from 1950, and the quote reflects it.",
        },
      ],
      bridge: "The real issue is not distance. It is who handles what.",
    },
    {
      kind: "turning",
      heading: "Chicago problems rarely stay in one trade",
      blocks: [
        {
          type: "p",
          text: "A roof leak in a 2-flat becomes a ceiling stain, then wet drywall, then mold. A spring storm floods the basement and soaks the furnace. Most companies handle one piece and send you looking for the next.",
        },
      ],
      bridge: "So we cover the whole chain, in every neighborhood below.",
    },
    {
      kind: "solution",
      heading: "Where we work",
      blocks: [
        {
          type: "group",
          name: "North Side and lakefront",
          places: "Rogers Park, Edgewater, Uptown, Lake View, Lincoln Park",
          text: "Courtyard buildings, vintage 2-flats and condos. We do roof repair in Edgewater and Rogers Park, often on older flat roofs where a small flashing leak turns into a stain two floors down, and AC repair in Lincoln Park and Lakeview when summer heat hits.",
        },
        {
          type: "group",
          name: "Northwest Side",
          places: "Logan Square, Avondale, Irving Park, Albany Park, Portage Park, Jefferson Park, Norwood Park",
          text: "Bungalows, brick 2-flats and finished basements. People call us as a roofer in Logan Square and Avondale, and for furnace repair in Portage Park and Jefferson Park once the cold arrives. Storm flooding is common here too. (link: /flooded-basement-cleanup-chicago)",
        },
        {
          type: "group",
          name: "West Side",
          places: "West Town, Humboldt Park, Austin",
          text: "Greystones, frame houses and a lot of rehab work. As a roofer in West Town, Humboldt Park and Austin, we see roofs patched many times over, and the damp and mold that follow. (link: /mold-removal-chicago)",
        },
        {
          type: "group",
          name: "Southwest Side",
          places: "Pilsen, Little Village, Brighton Park, Garfield Ridge",
          text: "Workers' cottages, 2-flats and bungalows with garden units. We are a roofer in Pilsen and Little Village for leaks and replacements, and we clean up water damage in lower units. (link: /water-damage-restoration-chicago)",
        },
        {
          type: "group",
          name: "South Side",
          places: "Bridgeport, Beverly, Mount Greenwood",
          text: "Larger homes in Beverly and Mount Greenwood, tight rows of frame and brick houses in Bridgeport. Roof repair in Beverly and Bridgeport, roof replacement when it's time, and heating work before winter. (link: /roof-replacement-chicago)",
        },
        {
          type: "subhead",
          text: "What we do in every neighborhood",
        },
        {
          type: "ul",
          items: [
            "Mold inspection (link: /mold-inspection-chicago) and mold removal (link: /mold-removal-chicago)",
            "Water damage restoration (link: /water-damage-restoration-chicago) and flooded basement cleanup (link: /flooded-basement-cleanup-chicago)",
            "Roof repair (link: /roof-repair-chicago), flat roofs (link: /flat-roof-repair-chicago), replacement (link: /roof-replacement-chicago) and a free roof check (link: /free-roof-check)",
            "Furnace and boiler repair (link: /furnace-repair-chicago), AC repair (link: /ac-repair-chicago) and new systems (link: /hvac-installation-chicago)",
          ],
        },
      ],
      bridge: "Here is what that means for you.",
    },
    {
      kind: "benefits",
      heading: "One number for the whole house",
      blocks: [
        {
          type: "ul",
          items: [
            "**One team from roof to basement.** We follow the problem wherever it goes.",
            "**People who know Chicago housing.** 2-flats, flat roofs, old boilers, basements that take water.",
            "**A written price before work starts,** for every job.",
          ],
        },
      ],
      bridge: "See for yourself.",
    },
    {
      kind: "proof",
      heading: "Licensed by the City of Chicago",
      blocks: [
        {
          type: "ul",
          items: [
            "Chicago general contractor licence TGC144939",
            "Illinois roofing licence 104.021107",
            "Licensed for mold remediation, water damage restoration and HVAC",
            "[Google rating and review count]",
            "[Real review 1, 2 and 3, each naming the neighborhood and the job]",
          ],
        },
      ],
      bridge: "A few questions about our service area.",
    },
    {
      kind: "faq",
      heading: "Area questions",
      blocks: [
        {
          type: "faq",
          q: "My neighborhood is not listed. Can you still help?",
          a: "Probably. If you are inside the City of Chicago, call (773) 987-1693 and ask.",
        },
        {
          type: "faq",
          q: "Do you work in the suburbs?",
          a: "No. We work inside the City of Chicago only.",
        },
        {
          type: "faq",
          q: "Is there a travel charge?",
          a: "No. We do not charge for travel inside our service area.",
        },
        {
          type: "faq",
          q: "How fast can you get to me?",
          a: "We will call you back within one business hour. For a roof leak or water in the basement, call instead of using the form.",
        },
      ],
      bridge: "In Chicago? We can help.",
    },
    {
      kind: "close",
      heading: "In Chicago? We can help.",
      blocks: [{ type: "p", text: "Tell us your ZIP code and what's going on. We'll call you back and set a time." }],
      buttons: [
        { label: "Call (773) 987-1693", kind: "call" },
        { label: "Book a visit", href: "#lead-form", kind: "form" },
      ],
    },
  ],
  formButton: "Check my area",
};

export default function Page() {
  return <StoryRoute content={content} />;
}
