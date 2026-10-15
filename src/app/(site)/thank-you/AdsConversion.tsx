"use client";

import { useEffect } from "react";
import { analytics } from "@/config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires the Google Ads conversion once per visit to /thank-you.
// Needs NEXT_PUBLIC_GTAG_ID and NEXT_PUBLIC_ADS_CONVERSION ("AW-XXXX/label").
export function AdsConversion() {
  useEffect(() => {
    if (!analytics.adsConversion) return;
    let tries = 0;
    const fire = () => {
      if (window.gtag) window.gtag("event", "conversion", { send_to: analytics.adsConversion });
      else if (tries++ < 20) setTimeout(fire, 250);
    };
    fire();
  }, []);
  return null;
}
