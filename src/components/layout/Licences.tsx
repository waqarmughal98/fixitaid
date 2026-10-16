import { site } from "@/config/site";

type Which = "gc" | "roofing" | "mold" | "hvac";

// The licence line used in footers. Mold/HVAC numbers are omitted until the owner provides them
// (we are licensed for those trades; inventing numbers is not allowed).
export function LicenceLine({ show = ["gc", "roofing", "mold", "hvac"] }: { show?: Which[] }) {
  const { licences } = site;
  const parts: React.ReactNode[] = [];
  if (show.includes("gc")) parts.push(<>Chicago GC licence {licences.chicagoGc}</>);
  if (show.includes("roofing")) {
    const second = licences.illinoisRoofing2Confirmed ? ` and ${licences.illinoisRoofing2}` : "";
    parts.push(<>Illinois roofing licence{second ? "s" : ""} {licences.illinoisRoofing}{second}</>);
  }
  if (show.includes("mold")) {
    parts.push(licences.mold ? <>Mold licence {licences.mold}</> : <>Licensed for mold remediation and water damage</>);
  }
  if (show.includes("hvac")) {
    parts.push(licences.hvac ? <>HVAC licence {licences.hvac}</> : <>Licensed for HVAC</>);
  }
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {". "}
        </span>
      ))}
    </>
  );
}
