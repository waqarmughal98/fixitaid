import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { AdsConversion } from "./AdsConversion";

// Every form lands here. noindex, nofollow. This is where Google Ads counts the lead.
const URL = "/thank-you";
export const metadata = metadataFor(URL);

export default function ThankYouPage() {
  const seo = seoFor(URL);
  return (
    <>
      <AdsConversion />
      <section className="hero">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow">Request received</p>
          <h1 className="display lp">{seo.h1}</h1>
          <p className="lead">
            Thanks, we&apos;ll call you back. A real person from our Chicago team will ring you soon to ask a few questions and set a
            time.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            Water coming in, or no heat right now? Don&apos;t wait for us. Call{" "}
            <a href={site.phoneHref} style={{ color: "var(--gold)", fontWeight: 700 }}>
              {site.phone}
            </a>
            .
          </p>
          <div className="ctas" style={{ marginTop: 26 }}>
            <a className="btn gold" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn ghost" href={routes.home.href}>
              Back to the home page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
