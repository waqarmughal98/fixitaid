import "server-only";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { site } from "@/config/site";

// Titles, descriptions, H1s and robots come straight from content/seo-meta.csv
// (a copy of 3-seo/4-seo-meta-tags). Edit the CSV, not the pages.

export type SeoRow = {
  page: string;
  url: string;
  phase: string;
  mainKeyword: string;
  title: string;
  description: string;
  h1: string;
  robots: string;
  canonical: string;
  schema: string;
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (row.some((f) => f !== "")) rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) rows.push([...row, field]);
  return rows;
}

let cache: Map<string, SeoRow> | null = null;

export function seoRows(): Map<string, SeoRow> {
  if (cache) return cache;
  const [header, ...rows] = parseCsv(readFileSync(path.join(process.cwd(), "content", "seo-meta.csv"), "utf8"));
  const col = (name: string) => header.indexOf(name);
  cache = new Map(
    rows.map((r) => {
      const row: SeoRow = {
        page: r[col("page")],
        url: r[col("url")],
        phase: r[col("phase")],
        mainKeyword: r[col("main_keyword")],
        title: r[col("title_tag")],
        description: r[col("meta_description")],
        h1: r[col("h1")],
        robots: r[col("robots")],
        canonical: r[col("canonical")],
        schema: r[col("schema")],
      };
      return [row.url, row];
    }),
  );
  return cache;
}

export function seoFor(url: string): SeoRow {
  const row = seoRows().get(url);
  if (!row) throw new Error(`No SEO row for ${url} in content/seo-meta.csv`);
  return row;
}

export function isIndexable(row: SeoRow) {
  return !row.robots.toLowerCase().includes("noindex");
}

export function metadataFor(url: string): Metadata {
  const row = seoFor(url);
  const noindex = !isIndexable(row);
  const nofollow = row.robots.toLowerCase().includes("nofollow");
  return {
    title: { absolute: row.title },
    description: row.description,
    alternates: { canonical: row.canonical },
    robots: { index: !noindex, follow: !nofollow },
    openGraph: {
      title: row.title,
      description: row.description,
      url: row.canonical,
      siteName: site.legalName,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}
