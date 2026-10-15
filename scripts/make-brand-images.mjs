// Generates the share image and icon files from the brand logo (public/images/logo.png).
// Usage: node scripts/make-brand-images.mjs
// Writes public/og-image.jpg (1200x630), public/logo.png (512x512, used in structured data)
// and src/app/apple-icon.png (180x180).
import sharp from "sharp";

const LOGO = "public/images/logo.png";
const INK = { r: 22, g: 24, b: 27, alpha: 1 };

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#16181b"/>
  <rect y="600" width="1200" height="30" fill="#e3a72f"/>
  <text x="560" y="250" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="62" fill="#f2efe8">MOLD, WATER DAMAGE,</text>
  <text x="560" y="325" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="62" fill="#f2efe8">ROOFING &amp; HVAC</text>
  <text x="560" y="400" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="62" fill="#e3a72f">IN CHICAGO</text>
  <text x="560" y="480" font-family="Arial, sans-serif" font-weight="700" font-size="40" fill="#e3a72f">(773) 987-1693</text>
</svg>`;

const logoAt = (width) => sharp(LOGO).resize({ width }).toBuffer();

await sharp(Buffer.from(og))
  .composite([{ input: await logoAt(440), left: 70, top: 170 }])
  .jpeg({ quality: 86 })
  .toFile("public/og-image.jpg");

const square = async (size, logoWidth, file) => {
  const logo = await logoAt(logoWidth);
  const { height } = await sharp(logo).metadata();
  await sharp({ create: { width: size, height: size, channels: 4, background: INK } })
    .composite([{ input: logo, left: Math.round((size - logoWidth) / 2), top: Math.round((size - height) / 2) }])
    .png()
    .toFile(file);
};

await square(512, 440, "public/logo.png");
await square(180, 160, "src/app/apple-icon.png");
console.log("Wrote public/og-image.jpg, public/logo.png, src/app/apple-icon.png");
