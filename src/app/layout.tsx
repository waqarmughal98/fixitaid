import type { Metadata, Viewport } from "next";
import { IconSprite } from "@/components/ui/IconSprite";
import { JsonLd } from "@/components/ui/JsonLd";
import { Analytics } from "@/components/layout/Analytics";
import { localBusiness } from "@/lib/seo/schema";
import { site, showPlaceholders } from "@/config/site";
import { Providers } from "./providers";
import { MotionRoot } from "@/components/motion/MotionRoot";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
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
