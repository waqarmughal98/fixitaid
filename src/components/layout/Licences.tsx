import { site } from "@/config/site";
import { Fact, Placeholder } from "@/components/ui/Placeholder";

type Which = "gc" | "roofing" | "mold" | "hvac";

// The licence line used in footers.
export function LicenceLine({ show = ["gc", "roofing", "mold", "hvac"] }: { show?: Which[] }) {
  const { licences } = site;
  const parts: React.ReactNode[] = [];
  if (show.includes("gc")) parts.push(<>Chicago GC licence {licences.chicagoGc}</>);
  if (show.includes("roofing"))
    parts.push(
      <>
        Illinois roofing licences {licences.illinoisRoofing} /{" "}
        {licences.illinoisRoofing2Confirmed ? licences.illinoisRoofing2 : <Placeholder>{licences.illinoisRoofing2} (confirm)</Placeholder>}
      </>,
    );
  if (show.includes("mold"))
    parts.push(
      <>
        Mold licence <Fact value={licences.mold} label="no." />
      </>,
    );
  if (show.includes("hvac"))
    parts.push(
      <>
        HVAC licence <Fact value={licences.hvac} label="no." />
      </>,
    );
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && " · "}
          {p}
        </span>
      ))}
    </>
  );
}
