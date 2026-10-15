// The SEO sheet writes H1s in Title Case ("Mold, Roofing and Heating Repair in Chicago").
// The design uses sentence case, so we display them that way. Search engines don't care
// about case, so the H1 still matches the sheet.
const KEEP = new Set(["Chicago", "Chicago's", "HVAC", "AC", "Fix", "It", "Aid", "Illinois", "TPO", "EPDM", "Roof", "Care"]);

export function sentenceCase(title: string) {
  const words = title.split(" ");
  return words
    .map((w, i) => {
      if (i === 0) return w;
      if (KEEP.has(w.replace(/[^A-Za-z']/g, ""))) return w;
      return w.toLowerCase();
    })
    .join(" ")
    .replace(/Roof care plan/i, "Roof Care plan");
}
