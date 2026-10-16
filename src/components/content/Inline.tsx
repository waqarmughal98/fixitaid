import Link from "next/link";
import { Fragment } from "react";
import { site } from "@/config/site";
import { routeLabel } from "@/lib/routes";
import { Rating } from "@/components/sections/Sections";

// Renders one line of copy:
//   **bold**  *italic*  [optional fact]  (link: /url)
// Unconfirmed [facts] are omitted (never invented, never shown as yellow brackets).

const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]|\s*\(link:\s*\/[^)]*\))/g;

function resolveBracket(label: string): React.ReactNode | null {
  if (/^Google rating and review count$/i.test(label)) return <Rating />;
  if (/^HVAC licence number$/i.test(label)) return site.licences.hvac;
  if (/^Mold licence number$/i.test(label)) return site.licences.mold;
  if (/^Warranty on work$/i.test(label) || /^warranty$/i.test(label)) return site.owner.warranty;
  if (/^24\/7 phone/i.test(label)) return site.owner.phone247 === true ? "24/7" : null;
  if (/^Financing: yes or no$/i.test(label)) {
    if (site.owner.financing === true) return "Financing available";
    return null;
  }
  if (/^Insured and bonded/i.test(label)) {
    if (site.owner.insuredAndBonded === true) return "Insured and bonded";
    return null;
  }
  // Everything else is an owner confirm — omit rather than invent.
  return null;
}

export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((p) => p !== "");
  const out: React.ReactNode[] = [];

  parts.forEach((part, i) => {
    const link = part.match(/^\s*\(link:\s*(\/[^)]*)\)$/);
    if (link) {
      const href = link[1];
      const prev = out[out.length - 1];
      if (typeof prev === "string") {
        const m = prev.match(/^([\s\S]*?(?:[,:;(]\s+|[.!?]\s+|^))((?:and |or )?)([^,:;.!?]+?)(\s*)$/);
        if (m && m[3].trim() && !/[.!?]\s*$/.test(prev)) {
          out[out.length - 1] = m[1] + m[2];
          out.push(
            <Link key={i} href={href}>
              {m[3]}
            </Link>,
          );
          if (m[4]) out.push(m[4]);
          return;
        }
      }
      out.push(
        <Fragment key={i}>
          {" "}
          <Link href={href} className="text-link">
            {routeLabel(href)}
          </Link>
        </Fragment>,
      );
      return;
    }
    if (part.startsWith("**")) out.push(<strong key={i}>{part.slice(2, -2)}</strong>);
    else if (part.startsWith("[")) {
      const node = resolveBracket(part.slice(1, -1));
      if (node !== null && node !== undefined && node !== "") out.push(<Fragment key={i}>{node}</Fragment>);
    } else if (part.startsWith("*") && part.length > 2) out.push(<em key={i}>{part.slice(1, -1)}</em>);
    else out.push(part);
  });

  return <>{out}</>;
}

/** Plain text of a copy line, for structured data. */
export function plainText(text: string) {
  return text
    .replace(/\s*\(link:\s*\/[^)]*\)/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function hasPlaceholder(text: string) {
  // Only treat as a blocking placeholder if resolveBracket would omit it (unconfirmed).
  return /\[[^\]]+\]/.test(text) && !/^\[Google rating and review count\]$/i.test(text.trim());
}
