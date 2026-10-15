import { site } from "@/config/site";

// Sticky bar on phones: call, or jump to the page's form.
export function CallBar({ formHref, formLabel }: { formHref: string; formLabel: string }) {
  return (
    <div className="callbar">
      <a className="btn btn-gold" href={site.phoneHref}>
        Call now
      </a>
      <a className="btn btn-ghost" href={formHref}>
        {formLabel}
      </a>
    </div>
  );
}
