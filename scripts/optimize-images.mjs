// Converts source photos to WebP for the site.
// Usage: node scripts/optimize-images.mjs <source-dir>
// Writes <name>.webp into public/images, max 1600px wide.
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = process.argv[2];
if (!sourceDir) {
  console.error("Usage: node scripts/optimize-images.mjs <source-dir>");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "public", "images");
await mkdir(outDir, { recursive: true });

for (const file of await readdir(sourceDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const info = await sharp(path.join(sourceDir, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(path.join(outDir, name));
  console.log(`${name}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
