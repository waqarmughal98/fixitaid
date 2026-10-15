import Image from "next/image";
import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { breadcrumbs, faqPage, service } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Art } from "@/components/ui/Art";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
import { TopBar } from "@/components/layout/TopBar";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/SiteFooter";
import { CallBar } from "@/components/layout/CallBar";
import {
  Bridge,
  SectionHead,
  Ticks,
  TrustStrip,
  Quotes,
  Steps,
  Answers,
  LicenceGrid,
  Rating,
  Reviews,
  Faq,
  FinalCta,
} from "@/components/sections/Sections";

const URL = "/mold-water-damage-chicago";
export const metadata = metadataFor(URL);

const insurance =
  "It depends on your policy and the cause. Sudden events like a burst pipe are covered more often than slow leaks. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.";

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
            {
              q: "Do I need to leave my home?",
              a: "Usually not. We seal off the work area so you can keep living in the rest of the house. For large jobs or sewage cleanup, we tell you honestly if it's better to stay somewhere else for a few days.",
            },
            {
              q: "Will the mold come back?",
              a: "Mold needs moisture. Once the water source is fixed and the area is dry, it has nothing to grow on. That's why we fix the source as part of the job, not as a separate referral.",
            },
          ]),
        ]}
      />
      <TopBar>Water coming in right now? Shut off the water if you can, then call us.</TopBar>
      <LandingHeader />

      <main id="main" className="page">
        {/* 1. Hook */}
        <section className="hero v-mold">
          <div className="wrap grid">
            <div>
              <p className="eyebrow">Musty smell won&apos;t go away? Mold back after you cleaned it?</p>
              <h1 className="display lp">{seo.h1}</h1>
              <p className="lead">
                The smell, the spots on the drywall, the stain that keeps growing. They nearly always start with water. We find
                where it gets in, fix it, then remove the mold and rebuild, so you are not paying for the same problem twice.
              </p>
              <div className="ctas">
                <a className="btn gold" href={site.phoneHref}>
                  Call {site.phone}
                </a>
                <a className="btn ghost" href="#mold-form">
                  Book an inspection
                </a>
              </div>
              <Ticks
                items={[
                  <>
                    Licensed for mold and water work{licences.mold ? ` ${licences.mold}` : <> <Placeholder>licence no.</Placeholder></>}
                  </>,
                  "Licensed roofer in-house",
                  "Price in writing before we start",
                  <Fact key="rt" value={owner.responseTime} label="On site within X hours" />,
                ]}
              />
            </div>
            <div className="visual after-form">
              <Image
                className="art lift"
                src="/images/mold-hero.webp"
                alt="Dark mold streaks running down a wall where water has been"
                width={734}
                height={432}
                priority
                style={{ aspectRatio: "600/560" }}
              />
              <div className="float-chip">
                <Icon name="search" />
                <span>
                  <b>We find the water first</b>Moisture meter and thermal camera on every job
                </span>
              </div>
            </div>
            <LeadForm
              id="mold-form"
              title="Book a mold or water inspection"
              intro={
                <>
                  Four quick fields. We call you back to set a time.{" "}
                  <Fact value={owner.moldInspectionPrice} label='Free inspection: yes, or "from $X"' />
                </>
              }
              options={["Mold or a musty smell", "Water damage or a leak", "Flooded basement", "Sewage backup"]}
              submitLabel="Book my inspection"
            />
          </div>
        </section>

        <TrustStrip
          items={[
            { title: "Fix the source", text: "Licensed roofer and contractor in-house" },
            { title: "Photo record", text: "Of all the damage we find" },
            {
              title: owner.googleRating ? `★ ${owner.googleRating.rating.toFixed(1)}` : <Placeholder>★ 4.9</Placeholder>,
              text: owner.googleRating ? `${owner.googleRating.count} Google reviews` : <Placeholder>Google reviews</Placeholder>,
            },
            owner.phone247 === true
              ? { title: "24/7", text: "Emergency line" }
              : { title: <Placeholder>24/7</Placeholder>, text: <Placeholder>Emergency line, if true</Placeholder> },
          ]}
        />

        {/* 2. Pain */}
        <section className="band">
          <div className="wrap">
            <SectionHead
              eyebrow="You've probably already tried"
              title="And it still came back"
              aside={
                <p className="soft">
                  If any of these sound like your house, you&apos;re not doing anything wrong. You&apos;re treating what you can see.
                </p>
              }
            />
            <Quotes
              items={[
                { icon: "mold", text: "I sprayed bleach on it. Two months later it was back." },
                { icon: "nose", text: "We run a dehumidifier all summer. The basement still smells." },
                { icon: "roller", text: "We painted over the stain. Now it's coming through the paint." },
                { icon: "trash", text: "A company cleaned it and left. Nobody asked why it was wet." },
              ]}
            />
            <Bridge>Here&apos;s what is happening behind the wall while you wait.</Bridge>
          </div>
        </section>

        {/* 3. Stakes */}
        <section className="band ink">
          <div className="wrap">
            <SectionHead
              eyebrow="Why waiting costs more"
              title="Small and visible today. Bigger behind the wall."
              aside={
                <p className="lead">
                  The EPA says wet materials should be dried within 24 to 48 hours to stop mold from growing. A slow leak can keep a
                  wall wet for months before you see anything.
                </p>
              }
            />
            <div className="stakes">
              {[
                { art: "stage1" as const, title: "Week 1", text: "A wet spot you can clean, and a leak that's still easy to find." },
                { art: "stage2" as const, title: "Month 1", text: "Drywall and insulation hold the water. Mold grows where you can't see it." },
                { art: "stage3" as const, title: "Month 6", text: "Now it's drywall, insulation and sometimes framing. A cleaning job became a rebuild." },
              ].map((s) => (
                <div key={s.title}>
                  <Art name={s.art} viewBox="0 0 200 150" className="stage" label={`Illustration: the wall at ${s.title.toLowerCase()}`} />
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <Bridge>Most mold jobs fail for one reason.</Bridge>
          </div>
        </section>

        {/* 4. Turning point */}
        <section className="band">
          <div className="wrap">
            <p className="eyebrow">The real reason it comes back</p>
            <h2 className="display turn">
              The mold is not the problem.
              <br />
              <em style={{ color: "var(--gold-deep)" }}>The water is.</em>
            </h2>
            <div className="split" style={{ marginBottom: 24 }}>
              <p className="lead">
                Clean the mold without stopping the water and it grows back. Most mold companies can clean. Very few can climb on
                the roof and fix the flashing that&apos;s letting the water in. We can, because we are also a licensed roofer and
                general contractor.
              </p>
              <Art
                name="wall"
                viewBox="250 40 350 300"
                slice
                className="art"
                style={{ maxHeight: 360 }}
                label="Illustration: water running down from above, mold in the wet zone, and a moisture meter reading"
              />
            </div>
            <div className="comparewrap">
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
                    ["Puts the drywall and paint back", "Often not, you hire someone else", `Yes, GC licence ${licences.chicagoGc}`],
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
            <Bridge>So we fix both. Here&apos;s how it works on your job.</Bridge>
          </div>
        </section>

        {/* 5. Solution */}
        <section className="band ink">
          <div className="wrap">
            <SectionHead
              eyebrow="How it works"
              title={
                <>
                  Remove the mold.
                  <br />
                  Fix why it grew.
                </>
              }
              aside={<p className="lead">Step 4 is the one most mold companies skip, because they can&apos;t do it.</p>}
            />
            <Steps
              items={[
                { icon: "search", title: "Inspect & test", text: "Moisture meter, thermal camera and samples. We find the mold, the water and where it comes from." },
                { icon: "shield", title: "Contain", text: "Plastic walls and air filters keep spores in the work area, not the rest of your home." },
                { icon: "trash", title: "Remove & dry", text: "Damaged materials out. Surfaces HEPA-vacuumed and treated. Everything dried and measured." },
                {
                  icon: "roof",
                  title: "Fix the source",
                  key: true,
                  text: "Roof, flashing or gutters repaired by our own crew. If a pipe is the cause, we show you exactly where.",
                },
                {
                  icon: "roller",
                  title: "Rebuild",
                  text: (
                    <>
                      Drywall, paint and floors put back so the room is normal again. <Placeholder>Clearance test: yes or no</Placeholder>
                    </>
                  ),
                },
              ]}
            />
            <div className="chips" style={{ marginTop: 30 }}>
              {[
                "Mold inspection & testing",
                "Mold removal",
                "Water damage",
                "Flooded basements",
                "Sewage backup cleanup",
                "Attic mold from roof leaks",
              ].map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <Bridge>Here&apos;s what that means for you.</Bridge>
          </div>
        </section>

        {/* 6. Benefits */}
        <section className="band white">
          <div className="wrap">
            <SectionHead
              eyebrow="What you get"
              title="Each one answers a worry"
              aside={<p className="soft">These are the four things people tell us they&apos;re afraid of before they call.</p>}
            />
            <Answers
              items={[
                { fear: "What's in the wall", title: "You know before you pay", text: "Moisture readings and photos show you exactly what's wet, what's growing and where the water comes from." },
                { fear: "Being scared into a big job", title: "No scare tactics", text: "If it's a small spot you can clean yourself, we tell you how. We quote only what the readings show." },
                { fear: "Surprise bills", title: "Price in writing", text: "The full price before we start. If we find more once a wall is open, you approve it first." },
                {
                  fear: "It coming back",
                  title: "Pay once",
                  text: (
                    <>
                      The water source is fixed in the same job, so the mold has nothing to grow on. <Fact value={owner.warranty} label="Warranty" />
                    </>
                  ),
                },
              ]}
            />
            <Bridge>Don&apos;t just take our word for it.</Bridge>
          </div>
        </section>

        {/* 7. Proof */}
        <section className="band ink">
          <div className="wrap">
            <SectionHead
              eyebrow="Proof"
              title={reviewsReady ? "From Chicago homeowners" : "Licensed for the whole job"}
              aside={
                <p className="lead">
                  <Rating />
                </p>
              }
            />
            <LicenceGrid
              items={[
                { value: licences.mold, label: "Mold and water damage licence" },
                { value: licences.illinoisRoofing, label: "Illinois roofing licence" },
                { value: licences.chicagoGc, label: "Chicago general contractor" },
                { value: null, label: "Certification, if any", missing: "IICRC?" },
              ]}
            />
            {/* Before/after photos stay hidden until there are real Fix It Aid job photos (customer's OK). */}
            <Reviews service="mold" />
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <SectionHead
              eyebrow="Cost"
              title="What it usually costs"
              aside={
                <p className="soft">
                  We show prices because hiding them makes people nervous. Your exact price comes in writing after we look.
                </p>
              }
            />
            <div className="price">
              <div className="card">
                <p className="eyebrow">Mold inspection</p>
                <b>
                  <Fact value={owner.moldInspectionPrice} label="Free / $X to $Y" />
                </b>
                <p className="soft">Depends on how many samples you need. Other Chicago companies charge about $300 to $500 with testing.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Mold removal or water damage</p>
                <b>
                  <Placeholder>$X to $Y typical</Placeholder>
                </b>
                <p className="soft">Depends on the size of the area, what has to come out and what caused it.</p>
              </div>
            </div>
            <Bridge>You probably still have a few questions.</Bridge>
          </div>
        </section>

        {/* 8. Objections */}
        <section className="band white">
          <Faq
            title="Mold and water questions"
            items={[
              {
                q: "How much will this cost me?",
                a: (
                  <p>
                    It depends on the size of the area and what caused it. You get a written price after the inspection, before any
                    work starts. <Placeholder>Typical range once confirmed</Placeholder>
                  </p>
                ),
              },
              { q: "Is it covered by insurance?", a: insurance },
              {
                q: "How fast can you come out?",
                a: (
                  <p>
                    <Fact value={owner.responseTime} label='Real response time, for example "same day for active water, within 2 days for mold checks"' />.
                    If water is coming in, call instead of using the form.
                  </p>
                ),
              },
              {
                q: "Do I need to leave my home?",
                a: "Usually not. We seal off the work area so you can keep living in the rest of the house. For large jobs or sewage cleanup, we tell you honestly if it's better to stay somewhere else for a few days.",
              },
              {
                q: "Will the mold come back?",
                a: "Mold needs moisture. Once the water source is fixed and the area is dry, it has nothing to grow on. That's why we fix the source as part of the job, not as a separate referral.",
              },
            ]}
          />
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Bridge>The first step is one phone call.</Bridge>
          </div>
        </section>

        {/* 9. Close */}
        <FinalCta
          title="Find the water. Fix it once."
          text="A real person answers, asks a few questions and tells you what happens next. The price is in writing before we start."
          primary={{ href: site.phoneHref, label: `Call ${site.phone}` }}
          secondary={{ href: "#mold-form", label: "Book online", ghost: true }}
        />
      </main>

      <LandingFooter licences={["gc", "mold"]} />
      <CallBar formHref="#mold-form" formLabel="Book" />
    </>
  );
}
