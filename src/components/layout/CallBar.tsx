import { site } from "@/config/site";

// Sticky bar on phones (under 560px): call, or jump to the page's form.
export function CallBar({ formHref, formLabel }: { formHref: string; formLabel: string }) {
  return (
    <div className="callbar">
      <a className="btn gold" href={site.phoneHref}>
        Call now
      </a>
      <a className="btn ghost" style={{ color: "var(--on-ink)" }} href={formHref}>
        {formLabel}
      </a>
    </div>
  );
}
