import type { NextConfig } from "next";

// Server build so /api/lead can send mail with nodemailer. `npm start` runs `next start`.
const nextConfig: NextConfig = {
  // Photos are pre-cut WebP files (public/images/photos); the loader maps each srcset width
  // to its file, and scripts/fetch-photos.mjs downloads any width not saved yet after the build.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [480, 800, 1200, 1600],
    imageSizes: [320],
  },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
        condition: { not: "foreign" },
      },
    },
  },
};

export default nextConfig;
