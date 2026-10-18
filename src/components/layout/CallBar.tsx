import { site } from "@/config/site";

// Sticky bar on phones: call, or jump to the page's form.
export function CallBar({ formHref, formLabel }: { formHref: string; formLabel: string }) {
  return (
    <div className="callbar">
      <a className="btn btn-white" href={site.phoneHref}>
        Call {site.phone}
      </a>
      <a className="btn btn-gold" href={formHref}>
        Book a Free Inspection
      </a>
    </div>
  );
}
