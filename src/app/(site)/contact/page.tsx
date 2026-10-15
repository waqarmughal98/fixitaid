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

      <section className="page-top">
        <div className="wrap grid-12" style={{ alignItems: "start" }}>
          <div className="span-6">
            <h1 className="display" data-split>
              {seo.h1}
            </h1>
            <p className="lead" style={{ marginTop: 24 }}>
              Tell us what&apos;s going on. A real person from our Chicago team will get back to you. If it&apos;s urgent, call.
            </p>
            <a className="big-tel" href={site.phoneHref} data-magnetic>
              {site.phone}
            </a>
            {owner.phone247 === true && <p className="lead">Active leak, flooding or no heat? Call any time.</p>}

            <dl className="rows" style={{ marginTop: 48 }}>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                  {owner.acceptsTexts === null ? (
                    <>
                      {" "}
                      <Placeholder>Can this number take texts?</Placeholder>
                    </>
                  ) : owner.acceptsTexts ? (
                    ", call or text"
                  ) : null}
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>
                  <Fact value={owner.hours} label="hours" />
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <Fact value={owner.address} label="Address to show" />
                </dd>
              </div>
              <div>
                <dt>Area</dt>
                <dd>
                  City of Chicago.{" "}
                  <Link className="text-link" href={routes.areas.href}>
                    See neighborhoods
                  </Link>
                </dd>
              </div>
            </dl>
            <p className="small muted" style={{ marginTop: 24 }}>
              <LicenceLine show={["gc", "roofing"]} />
            </p>
          </div>

          <div className="span-6">
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
        </div>
      </section>
    </>
  );
}
