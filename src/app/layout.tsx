import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { IconSprite } from "@/components/ui/IconSprite";
import { JsonLd } from "@/components/ui/JsonLd";
import { Analytics } from "@/components/layout/Analytics";
import { localBusiness } from "@/lib/seo/schema";
import { site, showPlaceholders } from "@/config/site";
import { Providers } from "./providers";
import { MotionRoot } from "@/components/motion/MotionRoot";
import "./globals.css";

// One call for both styles: Turbopack's dev server rejects a second Fraunces() loader.
// Not preloaded: headings paint at once in the size-matched fallback and swap in, which
// leaves the early bandwidth to the hero photo (the LCP element on photo-led pages).
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: false,
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#101214",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`} suppressHydrationWarning>
      <body className={showPlaceholders ? undefined : "no-ph"}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <IconSprite />
        <JsonLd data={localBusiness()} />
        <Providers>
          <MotionRoot>{children}</MotionRoot>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
