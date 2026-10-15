import Script from "next/script";
import { analytics } from "@/config/site";

// Google tag (GA4 / Google Ads). Loads only when NEXT_PUBLIC_GTAG_ID is set.
export function Analytics() {
  if (!analytics.gtagId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gtagId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analytics.gtagId}');`}
      </Script>
    </>
  );
}
