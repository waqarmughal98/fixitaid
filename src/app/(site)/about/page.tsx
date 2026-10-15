import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { Bridge, Rating, Reviews } from "@/components/sections/Sections";
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

      <section className="hero">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <h1 className="display lp">{seo.h1}</h1>
          <p className="lead">
            You&apos;re about to let a contractor into your home. Here&apos;s who we are, what we&apos;re licensed to do, and how we work.
          </p>
          <div className="ctas" style={{ marginTop: 22 }}>
            <a className="btn gold" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn ghost" href={routes.contact.href}>
              Contact us
            </Link>
          </div>
          <Bridge>It starts with a problem most homeowners have run into.</Bridge>
        </div>
      </section>

      <section className="band">
        <div className="wrap story">
          <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,50px)", fontWeight: 800, marginBottom: 22 }}>
            The problem we kept seeing
          </h2>
          <p className="prose">
            Water gets into a building, and the damage rarely stays in one place. It comes through the roof, runs into the ceiling,
            soaks the insulation, and weeks later there&apos;s mold.
          </p>
          <p className="prose">
            So the homeowner calls a roofer, then a water company, then a mold company, then a drywall crew. Each one fixes its
            piece. Nobody owns the whole problem, and if the leak was never really fixed, the mold comes back.
          </p>
          <Bridge>We started on the roof, so we saw this first.</Bridge>
        </div>
      </section>

      <section className="band ink">
        <div className="wrap story">
          <h2 className="display turn" style={{ fontSize: "clamp(34px,5vw,60px)" }}>
            Why we built <em>Fix It Aid this way</em>
          </h2>
          <p className="prose">
            Fix It Aid started in roofing.{" "}
            <Placeholder>Owner story: two or three sentences in the owner&apos;s own words. Who started the company, when, and why.</Placeholder>
          </p>
          <p className="prose">
            We got licensed for the rest of the job. Today Fix It Aid is a licensed roofer, a City of Chicago general contractor, a
            mold and water damage company and an HVAC contractor. One team, so the job doesn&apos;t get passed between contractors.
          </p>
          <ul className="proofs" style={{ marginTop: 20 }}>
            <li>
              <span>
                <strong>We fix the cause, not just the damage.</strong> If mold came from a roof leak, we repair the roof.
              </span>
            </li>
            <li>
              <span>
                <strong>You have one point of contact.</strong> One company, one schedule, one price.
              </span>
            </li>
            <li>
              <span>
                <strong>We catch what single trades miss.</strong> A roofer who also does mold work knows what a wet attic means.
              </span>
            </li>
          </ul>
          <p className="prose" style={{ marginTop: 18 }}>
            See our services: <Link href={routes.roofing.href}>roofing</Link>, <Link href={routes.moldRemoval.href}>mold removal</Link>,{" "}
            <Link href={routes.waterDamage.href}>water damage</Link> and <Link href={routes.hvac.href}>heating and cooling</Link>.
          </p>
          <Bridge>Here&apos;s what you can expect when you call.</Bridge>
        </div>
      </section>

      <section className="band white">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,50px)", fontWeight: 800, marginBottom: 22 }}>
            How we work
          </h2>
          <div className="answers">
            <div className="answer">
              <h3>You get the price before we start</h3>
              <p className="soft">No surprise bills.</p>
            </div>
            <div className="answer">
              <h3>A real person answers the phone</h3>
              <p className="soft">Not a call center or a referral line.</p>
            </div>
            <div className="answer">
              <h3>We show you what we find</h3>
              <p className="soft">Photos, readings and a plain explanation.</p>
            </div>
            <div className="answer">
              <h3>We work in Chicago</h3>
              <p className="soft">
                <Placeholder>Neighborhoods served</Placeholder> <Link href={routes.areas.href}>See the areas we serve</Link>
              </p>
            </div>
          </div>
          <Bridge>And here&apos;s what backs it up.</Bridge>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,50px)", fontWeight: 800, marginBottom: 22 }}>
            Our licences
          </h2>
          <table className="licence-table">
            <thead>
              <tr>
                <th scope="col">Licence</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>City of Chicago general contractor</td>
                <td>{licences.chicagoGc}</td>
              </tr>
              <tr>
                <td>Illinois roofing</td>
                <td>{licences.illinoisRoofing}</td>
              </tr>
              <tr>
                <td>Illinois roofing</td>
                <td>{licences.illinoisRoofing2Confirmed ? licences.illinoisRoofing2 : <Placeholder>{licences.illinoisRoofing2} (confirm)</Placeholder>}</td>
              </tr>
              <tr>
                <td>Mold remediation and water damage</td>
                <td>
                  <Fact value={licences.mold} label="Mold licence number" />
                </td>
              </tr>
              <tr>
                <td>HVAC</td>
                <td>
                  <Fact value={licences.hvac} label="HVAC licence number" />
                </td>
              </tr>
              <tr>
                <td>Insurance</td>
                <td>
                  {owner.insuredAndBonded === null ? (
                    <Placeholder>Insured and bonded: yes or no</Placeholder>
                  ) : owner.insuredAndBonded ? (
                    "Insured and bonded"
                  ) : (
                    "Ask us for current insurance details"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band ink">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,50px)", fontWeight: 800, marginBottom: 16 }}>
            The team
          </h2>
          {/* Team photos: real photos of the owner and crew only, with first names and roles. Hidden until they exist. */}
          <p className="lead">
            <Fact value={owner.yearsInBusiness ? `${owner.yearsInBusiness} years in business` : null} label="Years in business" /> ·{" "}
            <Rating />
          </p>
          <Reviews />
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <div>
            <h2>Got a problem in your home? Talk to the people who&apos;ll fix it.</h2>
            <p style={{ marginTop: 10, fontSize: 18 }}>Call or send a short message. A real person from our Chicago team will get back to you.</p>
          </div>
          <div className="ctas">
            <a className="btn dark" href={site.phoneHref}>
              Call {site.phone}
            </a>
            <Link className="btn ghost" href={routes.contact.href}>
              Send a message
            </Link>
          </div>
        </div>
      </section>

      <CallBar formHref={routes.contact.href} formLabel="Message us" />
    </>
  );
}
