// Launch check: lists every [placeholder] still in the built site and exits 1 if any remain.
// README rule: "No bracket may go live." Run after `npm run build`.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

const decode = (s) =>
  s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

let total = 0;
const byFact = new Map();

for await (const file of htmlFiles(outDir)) {
  const html = await readFile(file, "utf8");
  const found = [...html.matchAll(/<span class="ph" data-placeholder="">([\s\S]*?)<\/span>/g)].map((m) =>
    decode(m[1].replace(/<!-- -->/g, "").replace(/<[^>]+>/g, "")).trim(),
  );
  if (!found.length) continue;
  const page = "/" + path.relative(outDir, file).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  total += found.length;
  for (const f of found) byFact.set(f, (byFact.get(f) ?? new Set()).add(page));
}

if (!total) {
  console.log("No placeholders left. Ready to launch.");
  process.exit(0);
}

console.log(`${total} placeholders on the site (${byFact.size} different facts):\n`);
for (const [fact, pages] of [...byFact].sort((a, b) => b[1].size - a[1].size)) {
  console.log(`  ${fact}\n      ${[...pages].sort().join(", ")}`);
}
console.log("\nFill them in src/config/site.ts or the copy files in content/, then rebuild.");
process.exit(1);
