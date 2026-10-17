import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { breadcrumbs, faqPage, service } from "@/lib/seo/schema";
import { sentenceCase } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Note } from "@/components/ui/PhotoNotes";
import { LeadForm } from "@/components/lead/LeadForm";
import { CallBar } from "@/components/layout/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Report } from "@/components/sections/Report";
import { Steps, Rows, Licences, Rating, Reviews, FaqSection, CloseCta, Head } from "@/components/sections/Sections";

// Main mold & water page (also used for ads). Site header + footer from (site)/layout.
const URL = "/mold-water-damage-chicago";
export const metadata = metadataFor(URL);

const insurance =
  "It depends on your policy and the cause. Sudden events like a burst pipe are covered more often than slow leaks. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.";
const leave =
  "Usually not. We seal off the work area so you can keep living in the rest of the house. For large jobs or sewage cleanup, we tell you honestly if it's better to stay somewhere else for a few days.";
const comeBack =
  "Mold needs moisture. Once the water source is fixed and the area is dry, it has nothing to grow on. That's why we fix the source as part of the job, not as a separate referral.";

const notes: Note[] = [
  { x: 38, y: 24, r: 10, title: "Dense growth up high", text: "Where the wall stayed wet longest. The water is coming from above." },
  { x: 82, y: 74, r: 9, title: "Spreading down and out", text: "Mold follows the moisture. Bleach on the surface won't stop it." },
  { x: 10, y: 56, r: 7, title: "Still dry here", text: "Moisture readings show exactly how far the wet area goes, so nothing extra comes out." },
];

export default function MoldWaterPage() {
  const seo = seoFor(URL);
  const { owner, licences } = site;

  return (
    <>
      <JsonLd
        data={[
          service("Mold and water damage help in Chicago", URL, "Mold remediation and water damage restoration"),
          breadcrumbs(URL),
          faqPage([
            { q: "Is it covered by insurance?", a: insurance },
            { q: "Do I need to leave my home?", a: leave },
            { q: "Will the mold come back?", a: comeBack },
          ]),
        ]}
      />

      <Hero
          photo="dampWall"
          title={sentenceCase(seo.h1)}
          lead={
            <>
              <strong>Musty smell won&apos;t go away? Mold back after you cleaned it?</strong> It nearly always starts with water. We find
              where it gets in, fix it, then remove the mold and rebuild, so you pay for it once.
            </>
          }
          actions={
            <>
              <a className="btn btn-gold" href={site.phoneHref}>
                Call {site.phone}
              </a>
              <a className="btn btn-ghost" href="#mold-form">
                Book an inspection
              </a>
            </>
          }
          facts={[
            { big: licences.mold ?? "Licensed", small: "Mold and water" },
            { big: licences.illinoisRoofing, small: "Licensed roofer, in-house" },
            { big: "1 price", small: "In writing, before we start" },
          ]}
          form={
            <LeadForm
              id="mold-form"
              title="Book a mold or water inspection"
              intro={
                <>
                  We call you back to set a time
                  {owner.moldInspectionPrice ? <> ({owner.moldInspectionPrice})</> : null}.
                </>
              }
              options={["Mold or a musty smell", "Water damage or a leak", "Flooded basement", "Sewage backup"]}
              submitLabel="Book my inspection"
            />
          }
        />

        <Report heading="The mold is not the problem. The water is." photo="moldWall2" notes={notes}>
          <p className="lead">
            Clean the mold without stopping the water and it grows back. Most mold companies can clean. Very few can climb on the roof and
            fix the flashing that&apos;s letting the water in. As a Chicago mold remediation and water damage restoration company, we can, because we&apos;re also a licensed roofer and general contractor.
          </p>
        </Report>

        <section className="section surface">
          <div className="wrap">
            <Head
              title="Waiting makes it bigger"
              intro="The EPA says wet materials should be dried within 24 to 48 hours to stop mold from growing. A slow leak can keep a wall wet for months before you see anything."
            />
            <div className="timeline">
              <div>
                <span className="num">Week 1</span>
                <p>A wet spot you can clean, and a leak that&apos;s still easy to find.</p>
              </div>
              <div>
                <span className="num">Month 1</span>
                <p>Drywall and insulation hold the water. Mold grows where you can&apos;t see it.</p>
              </div>
              <div>
                <span className="num">Month 6</span>
                <p>Now it&apos;s drywall, insulation and sometimes framing. A cleaning job has become a rebuild.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Head title="What a cleaning-only company leaves out" />
            <div className="compare-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th scope="col">What gets done</th>
                    <th scope="col">A cleaning-only mold company</th>
                    <th scope="col" className="us">
                      Fix It Aid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Removes the mold", "Yes", "Yes"],
                    ["Finds where the water comes in", "Sometimes points it out", "Yes, on every job"],
                    ["Repairs the roof, flashing or gutters", "No, you hire a roofer", `Yes, licensed roofer ${licences.illinoisRoofing}`],
                    ["Puts the drywall and paint back", "Often not", `Yes, GC licence ${licences.chicagoGc}`],
                    ["Contractors you manage", "2 or 3", "1"],
                    ["Price", "Separate quotes and bills", "One written price"],
                  ].map(([row, them, us]) => (
                    <tr key={row}>
                      <th scope="row">{row}</th>
                      <td className={them === "Yes" ? undefined : "no"}>{them}</td>
                      <td className="us">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="wrap">
            <Head title="How it works" intro="Step 4 is the one most mold companies skip, because they can't do it." />
            <Steps
              items={[
                { title: "Inspect and test", text: "Moisture meter, thermal camera and samples. We find the mold, the water and where it comes from." },
                { title: "Contain", text: "Plastic walls and air filters keep spores in the work area, not the rest of your home." },
                { title: "Remove and dry", text: "Damaged materials out. Surfaces HEPA-vacuumed and treated. Everything dried and measured." },
                { title: "Fix the source", key: true, text: "Roof, flashing or gutters repaired by our own crew. If a pipe is the cause, we show you where." },
                {
                  title: "Rebuild",
                  text: (
                    <>
                      Drywall, paint and floors put back.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>

        <section className="section">
          <div className="wrap grid-12">
            <div className="span-5 stick">
              <h2 className="h2" data-split>
                What you can count on
              </h2>
              <p className="lead" style={{ marginTop: 20 }}>
                The things people tell us they&apos;re afraid of before they call.
              </p>
            </div>
            <div className="span-7">
              <Rows
                items={[
                  { worry: "What's in the wall", answer: "Moisture readings and photos show exactly what's wet, what's growing and where the water comes from." },
                  { worry: "Being scared into a big job", answer: "If it's a small spot you can clean yourself, we tell you how. We quote only what the readings show." },
                  { worry: "Surprise bills", answer: "The full price before we start. If we find more once a wall is open, you approve it first." },
                  {
                    worry: "It coming back",
                    answer: (
                      <>
                        The water source is fixed in the same job, so the mold has nothing to grow on.
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section surface">
          <div className="wrap">
            <Head title={reviewsReady ? "From Chicago homeowners" : "Licensed for the whole job"} intro={<Rating />} />
            <Licences
              items={[
                { value: licences.mold, label: "Mold and water damage licence" },
                { value: licences.illinoisRoofing, label: "Illinois roofing licence" },
                { value: licences.chicagoGc, label: "Chicago general contractor" },
              ]}
            />
            <Reviews service="mold" />
            <div className="prices" style={{ marginTop: 56 }}>
              <div>
                <h3 className="h3">Mold inspection</h3>
                <b className="num">{owner.moldInspectionPrice ?? "Written price"}</b>
                <p className="muted">
                  {owner.moldInspectionPrice
                    ? "Depends on how many samples you need. Other Chicago companies charge about $300 to $500 with testing."
                    : "You get the inspection price before we come out. Other Chicago companies often charge about $300 to $500 with testing."}
                </p>
              </div>
              <div>
                <h3 className="h3">Mold removal or water damage</h3>
                <b className="num">Written price</b>
                <p className="muted">Depends on the size of the area, what has to come out and what caused it. Your exact price comes in writing.</p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          title="Mold and water questions"
          items={[
            {
              q: "How much will this cost me?",
              a: (
                <p>
                  It depends on the size of the area and what caused it. You get a written price after the inspection, before any work
                  starts.
                </p>
              ),
            },
            { q: "Is it covered by insurance?", a: insurance },
            {
              q: "How fast can you come out?",
              a: (
                <p>
                  Response time: within one business hour.
                  If water is coming in, call instead of using the form.
                </p>
              ),
            },
            { q: "Do I need to leave my home?", a: leave },
            { q: "Will the mold come back?", a: comeBack },
          ]}
        />

      <CloseCta
        title="Find the water. Fix it once."
        text="A real person answers, asks a few questions and tells you what happens next. The price is in writing before we start."
        primary={{ href: "#mold-form", label: "Book online" }}
      />

      <CallBar formHref="#mold-form" formLabel="Book" />
    </>
  );
}
