// Downloads the Unsplash photo sizes the built site uses into public/images/photos.
// Runs after `next build`: it scans out/ for /images/photos/ references, fetches any file
// that isn't saved yet from Unsplash's CDN (as WebP), copies it into out/ as well, and deletes
// saved files no page uses any more.
// File names encode the request: <id>-<w>x<h>[-c][-q<n>].webp (-c = center crop, -q = quality)
// or <id>-<w>w.webp.
import { readdir, readFile, writeFile, mkdir, copyFile, access, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "out");
const saveDir = path.join(root, "public", "images", "photos");

try {
  await access(outDir);
} catch {
  console.log("No out/ directory (Next server build). Skipping photo fetch.");
  process.exit(0);
}
// Highly textured photos (mold, plaster) come back large; re-encode anything over this.
const MAX_BYTES = 300 * 1024;
const NAME = /\/images\/photos\/([0-9]+-[0-9a-f]+)-(?:(\d+)x(\d+)(-c)?|(\d+)w)(?:-q(\d+))?\.webp/g;

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* files(p);
    else if (/\.(html|txt)$/.test(entry.name)) yield p;
  }
}

const exists = (p) => access(p).then(() => true, () => false);

const wanted = new Map();
for await (const file of files(outDir)) {
  for (const m of (await readFile(file, "utf8")).matchAll(NAME)) {
    const [ref, id, w, h, center, wOnly, q] = m;
    const query = w
      ? `w=${w}&h=${h}&fit=crop${center ? "" : "&crop=entropy"}`
      : `w=${wOnly}&fit=max`;
    wanted.set(path.basename(ref), `https://images.unsplash.com/photo-${id}?${query}&q=${q ?? 72}&fm=webp`);
  }
}

await mkdir(saveDir, { recursive: true });
await mkdir(path.join(outDir, "images", "photos"), { recursive: true });

let fetched = 0;
for (const [name, url] of wanted) {
  const saved = path.join(saveDir, name);
  if (!(await exists(saved))) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} for ${url}`);
    let buf = Buffer.from(await res.arrayBuffer());
    if (buf.length > MAX_BYTES) buf = await sharp(buf).webp({ quality: 60, effort: 5 }).toBuffer();
    await writeFile(saved, buf);
    fetched++;
    console.log(`fetched ${name}`);
  }
  await copyFile(saved, path.join(outDir, "images", "photos", name));
}
let pruned = 0;
for (const name of await readdir(saveDir)) {
  if (name.endsWith(".webp") && !wanted.has(name)) {
    await unlink(path.join(saveDir, name));
    pruned++;
  }
}
console.log(`photos: ${wanted.size} used, ${fetched} downloaded, ${pruned} unused removed`);
