import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
import { LicenceLine } from "@/components/layout/Licences";

// Copy: 2-page-content/5d, "Page 6: /contact".
const URL = "/contact";
export const metadata = metadataFor(URL);

export default function ContactPage() {
  const seo = seoFor(URL);
  const { owner } = site;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}${URL}`,
          name: seo.title,
          about: { "@id": `${site.url}/#business` },
        }}
      />

      <section className="hero">
        <div className="wrap grid">
          <div>
            <h1 className="display lp">{seo.h1}</h1>
            <p className="lead">
              Tell us what&apos;s going on. A real person from our Chicago team will get back to you. If it&apos;s urgent, call.
            </p>
            <p style={{ marginTop: 22 }}>
              <a className="tel" href={site.phoneHref} style={{ fontSize: "clamp(34px,5vw,52px)", fontFamily: "var(--f-display)", color: "var(--gold)" }}>
                {site.phone}
              </a>
            </p>
            {owner.phone247 === true && <p className="lead">Active leak, flooding or no heat? Call any time.</p>}

            <ul className="proofs" style={{ marginTop: 26, gridTemplateColumns: "1fr" }}>
              <li>
                <span>
                  <strong>Phone:</strong> <a href={site.phoneHref}>{site.phone}</a>
                  {owner.acceptsTexts === null ? (
                    <>
                      {" "}
                      <Placeholder>Can this number take texts?</Placeholder>
                    </>
                  ) : owner.acceptsTexts ? (
                    " (call or text)"
                  ) : null}
                </span>
              </li>
              <li>
                <span>
                  <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span>
                  <strong>Hours:</strong> <Fact value={owner.hours} label="hours" />
                </span>
              </li>
              <li>
                <span>
                  <strong>Address:</strong> <Fact value={owner.address} label="Address to show" />
                </span>
              </li>
              <li>
                <span>
                  <strong>Area:</strong> City of Chicago. <Link href={routes.areas.href}>See neighborhoods</Link>
                </span>
              </li>
            </ul>
            <p className="soft" style={{ marginTop: 18, fontSize: 13.5 }}>
              <LicenceLine show={["gc", "roofing"]} />
            </p>
          </div>

          <LeadForm
            id="lead-form"
            variant="full"
            title="Tell us what's happening"
            intro={
              <>
                We&apos;ll call you back <Fact value={owner.responseTime} label='Response time, for example "within one business hour"' />. We
                only use your number to reply to you.
              </>
            }
            options={[
              "Roof leak or roof repair",
              "Free roof check",
              "Mold",
              "Water damage or flooded basement",
              "Heating (furnace or boiler)",
              "Cooling (AC or mini split)",
              "New system or replacement",
              "Something else",
            ]}
            submitLabel="Send my request"
          />
        </div>
      </section>
    </>
  );
}
