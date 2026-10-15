import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML to `out/`, which is uploaded to the
// LiteSpeed host. public/.htaccess handles clean URLs, redirects and headers there.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
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
