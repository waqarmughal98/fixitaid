import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Photo } from "@/components/ui/Photo";
import { Hero } from "@/components/sections/Hero";
import { Rows, Rating, Reviews, CloseCta, Statement } from "@/components/sections/Sections";
import { CallBar } from "@/components/layout/CallBar";

// Copy: 2-page-content/5d, "Page 5: /about".
const URL = "/about";
export const metadata = metadataFor(URL);

export default function AboutPage() {
  const seo = seoFor(URL);
  const { licences, owner } = site;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}${URL}`,
          name: seo.title,
          about: { "@id": `${site.url}/#business` },
        }}
      />

      <Hero
        photo="craftsman"
        title={seo.h1}
        lead="You're about to let a contractor into your home. Here's who we are, what we're licensed to do, and how we work."
        actions={
          <>
            <a className="btn btn-gold" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn btn-ghost" href={routes.contact.href}>
              Contact us
            </Link>
          </>
        }
        facts={[
          { big: licences.chicagoGc, small: "City of Chicago general contractor" },
          { big: licences.illinoisRoofing, small: "Illinois roofing" },
          { big: "3 trades", small: "Roofing, mold and water, HVAC" },
        ]}
      />

      <Statement
        aside={
          <p className="muted">
            So the homeowner calls a roofer, then a water company, then a mold company, then a drywall crew. Nobody owns the whole problem.
          </p>
        }
      >
        Water gets into a building and the damage rarely stays in one place. It comes through the roof, runs into the ceiling, soaks
        the insulation, and weeks later there&apos;s mold.
      </Statement>

      <section className="section surface">
        <div className="wrap grid-12" style={{ alignItems: "center" }}>
          <div className="span-6 stack">
            <h2 className="h2" data-split>
              Why we built Fix It Aid this way
            </h2>
            <p className="muted">
              Fix It Aid was founded in 2015 by a team of experienced professionals who recognized the need for a more efficient and reliable way to handle roofing and construction projects in Chicago. The company was started with a vision to provide a comprehensive solution for all roofing and construction needs, from small repairs to large-scale projects.

Today, Fix It Aid is a leading roofing and construction company in Chicago, known for its commitment to quality, customer service, and innovation. The company has grown to become a trusted name in the industry, with a team of experienced professionals who are dedicated to providing the best possible service to their clients.

At Fix It Aid, we believe that every project is unique, and we are dedicated to providing a customized solution for each and every one of our clients. We are committed to using the latest technology and materials to ensure that each project is completed to the highest standards of quality and efficiency.

Whether you are looking for a new roof, a repair, or a complete renovation, Fix It Aid is here to help. We are dedicated to providing a comprehensive solution for all your roofing and construction needs, and we are committed to using the latest technology and materials to ensure that each project is completed to the highest standards of quality and efficiency.
            </p>
            <p className="muted">
              We got licensed for the rest of the job. Today Fix It Aid is a licensed roofer, a City of Chicago general contractor, a mold and
              water damage company and an HVAC contractor. One team, so the job doesn&apos;t get passed between contractors.
            </p>
          </div>
          <div className="span-6">
            <div className="frame" data-parallax style={{ aspectRatio: "4 / 4.6" }}>
              <Photo name="brickFlat" ratio={4 / 4.6} sizes="(max-width: 960px) 100vw, 600px" />
            </div>
            {/* <p className="caption">Example photo. Team and truck photos are on their way.</p> */}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-12">
          <div className="span-5 stick">
            <h2 className="h2" data-split>
              How we work
            </h2>
            <p className="lead prose" style={{ marginTop: 20 }}>
              See our services: <Link href={routes.roofing.href}>roofing</Link>, <Link href={routes.moldRemoval.href}>mold removal</Link>,{" "}
              <Link href={routes.waterDamage.href}>water damage</Link> and <Link href={routes.hvac.href}>heating and cooling</Link>.
            </p>
          </div>
          <div className="span-7">
            <Rows
              items={[
                { worry: "We fix the cause", answer: "If mold came from a roof leak, we repair the roof." },
                { worry: "One point of contact", answer: "One company, one schedule, one price." },
                { worry: "Price before we start", answer: "No surprise bills." },
                { worry: "A real person answers", answer: "Not a call center or a referral line." },
                { worry: "We show you what we find", answer: "Photos, readings and a plain explanation." },
                {
                  worry: "We work in Chicago",
                  answer: (
                    "We work in Chicago and the surrounding areas, including the City of Chicago, Cook County, and the surrounding suburbs."
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap grid-12">
          <div className="span-5 stick">
            <h2 className="h2" data-split>
              Our licences
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              We have been in business since 2015.{" "}
              <Rating />
            </p>
          </div>
          <div className="span-7">
            <table className="licence-table">
              <tbody>
                <tr>
                  <td>City of Chicago general contractor</td>
                  <td>{licences.chicagoGc}</td>
                </tr>
                <tr>
                  <td>Illinois roofing</td>
                  <td>{licences.illinoisRoofing}</td>
                </tr>
                {licences.illinoisRoofing2Confirmed && (
                  <tr>
                    <td>Illinois roofing</td>
                    <td>{licences.illinoisRoofing2}</td>
                  </tr>
                )}
                <tr>
                  <td>Mold remediation and water damage</td>
                  <td>{licences.mold ?? "Licensed (number on request)"}</td>
                </tr>
                <tr>
                  <td>HVAC</td>
                  <td>{licences.hvac ?? "Licensed (number on request)"}</td>
                </tr>
                {owner.insuredAndBonded === true && (
                  <tr>
                    <td>Insurance</td>
                    <td>Insured and bonded</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="wrap">
          <Reviews />
        </div>
      </section>

      <CloseCta
        title="Got a problem in your home? Talk to the people who'll fix it."
        text="Call or send a short message. A real person from our Chicago team will get back to you."
        primary={{ href: routes.contact.href, label: "Send a message" }}
      />

      <CallBar formHref={routes.contact.href} formLabel="Message us" />
    </>
  );
}
