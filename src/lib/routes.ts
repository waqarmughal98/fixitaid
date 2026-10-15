// Every page on the site, with the short label used for links, menus and breadcrumbs.
// URLs are fixed by 3-seo/4-seo-meta-tags. Do not change them.

export type RouteInfo = { href: string; label: string; parent?: string };

export const routes = {
  home: { href: "/", label: "Home" },

  moldWater: { href: "/mold-water-damage-chicago", label: "Mold & water damage" },
  moldInspection: { href: "/mold-inspection-chicago", label: "Mold inspection", parent: "/mold-water-damage-chicago" },
  moldRemoval: { href: "/mold-removal-chicago", label: "Mold removal", parent: "/mold-water-damage-chicago" },
  waterDamage: { href: "/water-damage-restoration-chicago", label: "Water damage restoration", parent: "/mold-water-damage-chicago" },
  floodedBasement: { href: "/flooded-basement-cleanup-chicago", label: "Flooded basement cleanup", parent: "/mold-water-damage-chicago" },

  roofing: { href: "/roofing-chicago", label: "Roofing" },
  freeRoofCheck: { href: "/free-roof-check", label: "Free roof check", parent: "/roofing-chicago" },
  roofRepair: { href: "/roof-repair-chicago", label: "Roof repair", parent: "/roofing-chicago" },
  flatRoof: { href: "/flat-roof-repair-chicago", label: "Flat roof repair", parent: "/roofing-chicago" },
  roofReplacement: { href: "/roof-replacement-chicago", label: "Roof replacement", parent: "/roofing-chicago" },
  roofCare: { href: "/roof-care-plan", label: "Roof Care plan", parent: "/roofing-chicago" },

  hvac: { href: "/hvac-chicago", label: "Heating & cooling" },
  hvacRepair: { href: "/hvac-repair-chicago", label: "HVAC repair", parent: "/hvac-chicago" },
  furnace: { href: "/furnace-repair-chicago", label: "Furnace & boiler repair", parent: "/hvac-chicago" },
  ac: { href: "/ac-repair-chicago", label: "AC repair", parent: "/hvac-chicago" },
  hvacInstall: { href: "/hvac-installation-chicago", label: "HVAC installation", parent: "/hvac-chicago" },

  areas: { href: "/areas-we-serve", label: "Areas we serve" },
  about: { href: "/about", label: "About" },
  contact: { href: "/contact", label: "Contact" },
  thankYou: { href: "/thank-you", label: "Thank you" },
  privacy: { href: "/privacy", label: "Privacy" },
} satisfies Record<string, RouteInfo>;

const byHref = new Map<string, RouteInfo>(Object.values(routes).map((r) => [r.href, r]));

export function routeLabel(href: string) {
  return byHref.get(href)?.label ?? href;
}

export function breadcrumbsFor(href: string): RouteInfo[] {
  const trail: RouteInfo[] = [];
  let current = byHref.get(href);
  while (current) {
    trail.unshift(current);
    current = current.parent ? byHref.get(current.parent) : undefined;
  }
  return [routes.home, ...trail];
}

// Menu for the main site (the 3 ad pages have no menu).
export const mainNav = [
  {
    ...routes.moldWater,
    label: "Mold & Water",
    children: [routes.moldInspection, routes.moldRemoval, routes.waterDamage, routes.floodedBasement],
  },
  {
    ...routes.roofing,
    children: [routes.freeRoofCheck, routes.roofRepair, routes.flatRoof, routes.roofReplacement, routes.roofCare],
  },
  {
    ...routes.hvac,
    label: "Heating & Cooling",
    children: [routes.furnace, routes.ac, routes.hvacInstall],
  },
  { ...routes.areas, label: "Areas", children: [] },
  { ...routes.about, children: [] },
  { ...routes.contact, children: [] },
];
