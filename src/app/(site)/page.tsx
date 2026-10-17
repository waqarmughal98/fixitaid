import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { website } from "@/lib/seo/schema";
import { sentenceCase } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Note } from "@/components/ui/PhotoNotes";
import { LeadForm } from "@/components/lead/LeadForm";
import { CallBar } from "@/components/layout/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ServiceRail } from "@/components/sections/ServiceRail";
import { LeakStory } from "@/components/sections/LeakStory";
import { Report } from "@/components/sections/Report";
import { Steps, Rows, Licences, Rating, Reviews, FaqSection, CloseCta, Statement, Head } from "@/components/sections/Sections";

export const metadata = metadataFor("/");

const reportNotes: Note[] = [
  { x: 78, y: 44, r: 8, title: "Plaster breaking up at the corner", text: "Water has been running down this wall for a while." },
  { x: 16, y: 70, r: 9, title: "Paint lifting across the wall", text: "Moisture is trapped behind it. That's where mold starts." },
  { x: 64, y: 82, r: 7, title: "A crack along the wet line", text: "The source is above it: the roof, flashing or a gutter. We fix that first." },
];

export default function HomePage() {
  const seo = seoFor("/");
  const { owner, licences } = site;

  return (
    <>
      <JsonLd data={website()} />

      <Hero
        photo="chicagoAerial"
        title={sentenceCase(seo.h1)}
        lead={
          <>
            <strong>One licensed crew for the leak, the damage and the mold behind it.</strong> Roofing, mold and water damage, and
            heating and cooling for Chicago homes, condos and 2-flats.
          </>
        }
        actions={
          <>
            <a className="btn btn-gold" href="#home-form">
              Book a free inspection
            </a>
            <a className="btn btn-ghost" href={site.phoneHref}>
              Call {site.phone}
            </a>
          </>
        }
        facts={[
          { big: licences.chicagoGc, small: "Chicago general contractor licence" },
          { big: licences.illinoisRoofing, small: "Illinois roofing licence" },
          { big: "$0", small: "Roof check, with photos" },
        ]}
        form={
          <LeadForm
            id="home-form"
            title="Get your free Inspection"
            intro="Four fields. We call you back to set up a visit."
            options={["Mold or musty smell", "Water damage or flooded basement", "Roof leak or roof check", "No heat, furnace or boiler", "AC or other HVAC"]}
            submitLabel="Get my free estimate"
          />
        }
      />

      <Marquee items={["Roof leaks", "Flat roofs", "Ice dams", "Mold removal", "Flooded basements", "Water damage", "Furnaces", "Steam boilers", "Radiators", "AC repair"]} />

      <Statement
        aside={
          <p className="muted">
            We hold a roofing licence, a Chicago general contractor licence and a mold and water licence, so one team owns the whole
            problem.{" "}
            <Link className="text-link" href={routes.about.href}>
              About us
            </Link>
          </p>
        }
      >
A roof leak turns into a ceiling stain. The stain turns into mold. Most Chicago homeowners call a roofer, then a mold company, then an HVAC contractor for one problem. Call one licensed team instead.
      </Statement>

      <ServiceRail
        heading="What we fix"
        intro="Three trades, one licensed team. Start with the part that's bothering you."
        items={[
          {
            photo: "moldWall",
            title: "Mold and water damage",
            text: "Mold inspection, mold removal and water damage restoration in Chicago, plus a fix for the moisture that let it grow.",
            href: routes.moldWater.href,
            links: [routes.moldInspection, routes.moldRemoval, routes.waterDamage, routes.floodedBasement],
          },
          {
            photo: "roofer",
            title: "Roofing",
            text: "A free roof check with photos, then a straight answer on repair or replace. Roof repair, flat roof repair and replacement for Chicago homes.",
            href: routes.roofing.href,
            links: [routes.freeRoofCheck, routes.roofRepair, routes.flatRoof, routes.roofReplacement, routes.roofCare],
          },
          {
            photo: "radiators",
            title: "Heating and cooling",
            text: "Furnace repair, boiler repair and AC repair across Chicago. You get the exact price before any work starts.",
            href: routes.hvac.href,
            links: [routes.furnace, routes.ac, routes.hvacInstall],
          },
        ]}
        cta={{
          title: "Book one visit. We'll find it.",
          text: "Tell us what you're seeing. We look at the whole house, not just one trade.",
          href: "#home-form",
          label: "Book a free inspection",
        }}
      />

      <LeakStory
        heading="How a small leak becomes a rebuild"
        intro="Water rarely stays where it gets in. This is the chain we see every week in Chicago homes."
        steps={[
          { photo: "rooferHarness", title: "A gap on the roof", text: "Water gets in at one spot, often flashing around a chimney, vent or wall." },
          { photo: "ceilingOpen", title: "It travels inside", text: "It runs along the rafters and soaks the insulation, then shows up on a ceiling feet away." },
          { photo: "moldWall2", title: "Mold starts", text: "Wet drywall can grow mold within days, where you can't see it." },
          { photo: "roofer", title: "One crew fixes all of it", text: "We fix the roof, dry and rebuild the inside and remove the mold. One job, one written price." },
        ]}
      />

      <Report heading="The stain is rarely where the leak is" photo="ceilingDamage" notes={reportNotes} caption="What a page of our photo report looks like. Example photo; yours shows your own home.">
        <p className="lead">
          After every inspection you get photos like this: every problem circled and explained, so you see what we see before anyone
          talks about price.
        </p>
      </Report>

      <section className="section surface">
        <div className="wrap">
          <Head title="How every job works" intro="You see what we see, you get the price in writing, and nothing starts until you say yes." />
          <Steps
            items={[
              { title: "We look", text: "We inspect, take photos and show you exactly what we found." },
              { title: "Written price", text: "Materials, labor, permits and timeline on one page." },
              { title: "The work", text: "Permits pulled when needed. One person to call the whole time." },
              {
                title: "Walkthrough",
                text: owner.warranty
                  ? `We check it with you, clean up and give you the ${owner.warranty} in writing.`
                  : "We check it with you, clean up, and leave you with the work details in writing.",
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
              Most people who call us have been burned by a contractor before, or know someone who has.
            </p>
          </div>
          <div className="span-7">
            <Rows
              items={[
                { worry: "Paying twice", answer: "The leak, the damage and the mold are fixed in one job. No second contractor and no repeat visit." },
                { worry: "Surprise bills", answer: "You see the full price before we start. If something changes, you approve it first." },
                { worry: "Being upsold", answer: "If a repair will do, that's what we quote. If you don't need anything, we tell you." },
                { worry: "Not knowing what's wrong", answer: "You see what we see: the roof, the attic, the wall, the part. You keep the photos." },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="wrap">
          <Head title="Licensed for every job we do" intro={<Rating />} />
          <Licences
            items={[
              { value: licences.chicagoGc, label: "City of Chicago general contractor" },
              { value: licences.illinoisRoofing, label: "Illinois roofing contractor" },
              { value: licences.mold, label: "Mold and water damage" },
              { value: licences.hvac, label: "HVAC" },
            ]}
          />
          <Reviews />
        </div>
      </section>

      <FaqSection
        title="Before you call"
        items={[
          {
            q: "What does it cost to come out and look?",
            a: (
              <p>
                Roof checks are free
                {owner.moldInspectionPrice ? <>. Mold inspection: {owner.moldInspectionPrice}</> : null}
                {owner.hvacServiceCall ? <>. HVAC service call: {owner.hvacServiceCall}</> : null}. You always get the price for the work
                in writing before we start.
              </p>
            ),
          },
          {
            q: "Will my insurance pay for this?",
            a: "It depends on your policy and what caused the damage. We take photos and moisture readings of all damage, so you have a clear record to share with your insurance company if you choose to.",
          },
          {
            q: "How soon can you come?",
            a: (
              <p>
                {owner.responseTime ? <>We aim to get back to you {owner.responseTime}. </> : null}
                If water is coming in right now, call instead of using the form.
              </p>
            ),
          },
          {
            q: "Which parts of Chicago do you cover?",
            a: (
              <p>
                The City of Chicago, from Rogers Park to Beverly.{" "}
                <Link className="text-link" href={routes.areas.href}>
                  See the areas we serve
                </Link>
              </p>
            ),
          },
        ]}
      />

      <CloseCta
        title="Tell us what's going on"
        text="A real person from our Chicago team calls you back, looks at the whole problem and gives you the price in writing."
        primary={{ href: "#home-form", label: "Get your free Inspection" }}
        secondary={{ href: routes.contact.href, label: "Send a message" }}
      />

      <CallBar formHref="#home-form" formLabel="Free estimate" />
    </>
  );
}
