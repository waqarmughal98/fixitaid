import Link from "next/link";
import { Fragment } from "react";
import { site } from "@/config/site";
import { routeLabel } from "@/lib/routes";
import { Placeholder } from "@/components/ui/Placeholder";
import { Rating } from "@/components/sections/Sections";

// Renders one line of copy from content/*.md:
//   **bold**  *italic*  [placeholder]  (link: /url)
// "(link: /url)" links "the words just before it" (copy file rule). We link the phrase back
// to the last comma, colon or sentence end; when the link follows a full stop, it becomes
// a separate link with the page name instead.

const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]|\s*\(link:\s*\/[^)]*\))/g;

function placeholderFor(text: string) {
  const label = text.slice(1, -1);
  if (/^Google rating and review count$/i.test(label)) return <Rating />;
  if (/^HVAC licence number$/i.test(label) && site.licences.hvac) return <>{site.licences.hvac}</>;
  if (/^Mold licence number$/i.test(label) && site.licences.mold) return <>{site.licences.mold}</>;
  return <Placeholder>{label}</Placeholder>;
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
        // Split "…, mold removal " into "…, " + "mold removal".
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
    else if (part.startsWith("[")) out.push(<Fragment key={i}>{placeholderFor(part)}</Fragment>);
    else if (part.startsWith("*") && part.length > 2) out.push(<em key={i}>{part.slice(1, -1)}</em>);
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
    .trim();
}

export function hasPlaceholder(text: string) {
  return /\[[^\]]+\]/.test(text);
}
