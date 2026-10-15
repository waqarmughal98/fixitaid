import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Public_Sans } from "next/font/google";
import { IconSprite } from "@/components/ui/IconSprite";
import { JsonLd } from "@/components/ui/JsonLd";
import { Analytics } from "@/components/layout/Analytics";
import { localBusiness } from "@/lib/seo/schema";
import { site, showPlaceholders } from "@/config/site";
import { Providers } from "./providers";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
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
  themeColor: "#16181b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${publicSans.variable}`}>
      <body className={showPlaceholders ? undefined : "no-ph"}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <IconSprite />
        <JsonLd data={localBusiness()} />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
