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
      <section className="page-top">
        <div className="wrap" style={{ maxWidth: 1000, marginLeft: 0 }}>
          <h1 className="display" data-split>
            {seo.h1}
          </h1>
          <p className="lead" style={{ marginTop: 20 }}>
            Thanks, we&apos;ll call you back. A real person from our Chicago team will ring you soon to ask a few questions and set a
            time.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            Water coming in, or no heat right now? Don&apos;t wait for us. Call{" "}
            <a href={site.phoneHref} className="text-link">
              {site.phone}
            </a>
            .
          </p>
          <div className="actions" style={{ marginTop: 28 }}>
            <a className="btn btn-white" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn btn-ghost" href={routes.home.href}>
              Back to the home page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
