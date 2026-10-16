// Example photos from Unsplash (free Unsplash License), served from Unsplash's CDN.
// They are stand-ins until Fix It Aid has its own job photos. README rule: never present
// them as Fix It Aid jobs. Swap `id` for a local file once real photos exist.

export type PhotoInfo = {
  id: string;
  alt: string;
  credit: string;
  /** CSS object-position, for crops. */
  focus?: string;
  /** Unsplash crop mode. "center" keeps marked-up positions stable. Default: entropy. */
  crop?: "center" | "entropy";
};

export const photos = {
  chicagoStreet: {
    id: "1654043342878-7491a4c4d098",
    alt: "A row of frame houses on a Chicago street at Kimball and Homan",
    credit: "Leo Heisenberg",
    crop: "center",
  },
  chicagoStreet2: {
    id: "1654043370706-6870b9bd5bba",
    alt: "Houses and front gardens on a Chicago side street",
    credit: "Leo Heisenberg",
  },
  chicagoAerial: {
    id: "1781636062623-1334c999d28f",
    alt: "Logan Square houses and flat roofs with the Chicago skyline behind",
    credit: "Shep McAllister",
  },
  brickFlat: {
    id: "1682978029646-60c9b8a7dcb1",
    alt: "A red brick Chicago building with a white front door",
    credit: "Gautam Krishnan",
    focus: "50% 35%",
  },
  ceilingDamage: {
    id: "1637847522219-ef24dd4445fe",
    alt: "A vintage ceiling and wall corner with water damage, crumbling plaster and peeling paint",
    credit: "Vero Eve",
  },
  ceilingOpen: {
    id: "1737739973200-61c2ae4d1272",
    alt: "A room with a damaged ceiling opened up for repair",
    credit: "Brett Jordan",
  },
  moldWall: {
    id: "1708895140733-8873a8b8ee0f",
    alt: "Black mold streaks running down a white wall",
    credit: "Hydra 4x",
  },
  moldWall2: {
    id: "1708895240122-418c6902685e",
    alt: "Mold and mildew spreading across a damp wall",
    credit: "Hydra 4x",
  },
  basementDark: {
    id: "1646184466560-f81b1e495604",
    alt: "A dark basement with pipes along the ceiling",
    credit: "Oleksandr Chernobai",
  },
  roofer: {
    id: "1633759593085-1eaeb724fc88",
    alt: "A roofer removing old shingles from a house roof",
    credit: "Zohair Mirza",
  },
  rooferHarness: {
    id: "1635424709961-f3a150459ad4",
    alt: "A roofer in a safety harness checking a shingle roof",
    credit: "Raze Solar",
    focus: "50% 30%",
  },
  rooferDrill: {
    id: "1635424824849-1b09bdcc55b1",
    alt: "A roofer fixing a shingle roof with a drill",
    credit: "Raze Solar",
  },
  tearOff: {
    id: "1634750009079-6bf7bede038b",
    alt: "A roof tear-off down to the wood deck, with roofers at work",
    credit: "Compagnons",
  },
  flatRoof: {
    id: "1770411712354-37f571ff2464",
    alt: "A flat roof with vents, looking across to apartment buildings",
    credit: "Muhammet Cengiz",
  },
  snowRoof: {
    id: "1640476750068-72c645e653cd",
    alt: "Flat roofs covered in snow seen from above",
    credit: "Simon Hurry",
  },
  radiators: {
    id: "1599028274511-e02a767949a3",
    alt: "An old cast-iron radiator under a window",
    credit: "Julian Hochgesang",
  },
  furnace: {
    id: "1676274299226-9b687b55e169",
    alt: "A technician looking into a boiler flame window",
    credit: "yahdi yasya",
    focus: "60% 50%",
  },
  acUnit: {
    id: "1718203862467-c33159fdc504",
    alt: "An air conditioner mounted on a brick wall",
    credit: "Everett Pachmann",
  },
  // Mold and water
  dampWall: {
    id: "1635260166178-41e20858d0d3",
    alt: "Paint flaking off a damp wall, with green mold spots spreading",
    credit: "Jessica Rigollot",
  },
  dampBasement: {
    id: "1710964821010-cd96202b09c4",
    alt: "Old pipes running down a damp basement wall",
    credit: "Random Thinking",
  },
  gutRoom: {
    id: "1634586648651-f1fb9ec10d90",
    alt: "A room stripped back to the walls, with props holding the ceiling and debris on the floor",
    credit: "Stefan Lehner",
  },
  peelingRoom: {
    id: "1444419988131-046ed4e5ffd6",
    alt: "An empty room with peeling ceiling paint and damaged flooring",
    credit: "Nolan Issac",
  },
  rebuild: {
    id: "1517581177682-a085bb7ffb15",
    alt: "A worker on a ladder rebuilding a room, with bare brick and new walls going in",
    credit: "Milivoj Kuhar",
  },
  basementDry: {
    id: "1782353921981-bb73a53a7482",
    alt: "A clean, dry basement with sealed walls, a painted floor and open joists",
    credit: "Josh Lemmon",
  },
  // Roofing
  roofCrew: {
    id: "1635424709845-3a85ad5e1f5e",
    alt: "Two roofers in safety harnesses working on a shingle roof",
    credit: "Raze Solar",
  },
  roofSeal: {
    id: "1635424824800-692767998d07",
    alt: "A roofer in a harness sealing a shingle roof with a caulk gun",
    credit: "Raze Solar",
  },
  roofTearOff: {
    id: "1632759145351-1d592919f522",
    alt: "A roofer tearing off old shingles on a brick house before the new roof goes on",
    credit: "Zohair Mirza",
  },
  rainShingles: {
    id: "1634853982486-c06f0e17940f",
    alt: "Rain running off a shingle roof edge",
    credit: "Luke Southern",
  },
  gutter: {
    id: "1744044155829-610dded4cead",
    alt: "A gutter full of moss and debris along a roof edge",
    credit: "Aleksi Partanen",
  },
  roofRunoff: {
    id: "1669295359803-5ec64b4c45d1",
    alt: "Water pouring off the edge of a roof in heavy rain",
    credit: "Ian Talmacs",
  },
  // HVAC
  boilerPipes: {
    id: "1751486289950-5c4898a4c773",
    alt: "Insulated heating pipes with a pressure gauge",
    credit: "Fabian Kleiser",
  },
  boilerValves: {
    id: "1618840626133-54463084a141",
    alt: "Valves and pipes on an old boiler",
    credit: "Peter Herrmann",
  },
  thermostat: {
    id: "1545259741-2ea3ebf61fa3",
    alt: "A smart thermostat on a wall set to 63 degrees",
    credit: "Dan LeFebvre",
  },
  thermostatWide: {
    id: "1545259742-b4fd8fea67e4",
    alt: "A thermostat on a plain wall set to 63 degrees",
    credit: "Dan LeFebvre",
    focus: "65% 50%",
  },
  acWall: {
    id: "1722010811002-a772b2066890",
    alt: "Two air conditioner units mounted on the side of a building",
    credit: "Muhammed Faizan Hussain",
  },
  ductwork: {
    id: "1615309662243-70f6df917b59",
    alt: "Large metal ducts running along a building",
    credit: "Compagnons",
  },
  acLines: {
    id: "1564414549740-e6dab6bc6f20",
    alt: "Ducts and refrigerant lines running to an outdoor air conditioner",
    credit: "Tom Rumble",
  },
} satisfies Record<string, PhotoInfo>;

export type PhotoKey = keyof typeof photos;

export function photoUrl(id: string, width: number, height?: number, crop: "center" | "entropy" = "entropy") {
  const size = height ? `&h=${height}&fit=crop${crop === "entropy" ? "&crop=entropy" : ""}` : "&fit=max";
  return `https://images.unsplash.com/photo-${id}?w=${width}${size}&q=72&auto=format`;
}
