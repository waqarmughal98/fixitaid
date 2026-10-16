import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML to `out/`, which is uploaded to the
// LiteSpeed host. public/.htaccess handles clean URLs, redirects and headers there.
const nextConfig: NextConfig = {
  output: "export",
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
      },
    },
  },
};

export default nextConfig;
