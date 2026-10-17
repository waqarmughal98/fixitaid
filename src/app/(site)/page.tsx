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
            <strong>Roof leak, mold or water damage, no heat, no AC.</strong> One licensed Chicago crew finds the cause, shows you
            photos, and gives you the price in writing before anyone picks up a tool.
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
            We hold a roofing licence, a Chicago general contractor licence and a mold and water licence, so one team owns the
            whole problem, start to finish.{" "}
            <Link className="text-link" href={routes.about.href}>
              About us
            </Link>
          </p>
        }
      >
A roof leak turns into a ceiling stain. The stain turns into mold. Most people call a roofer, then a mold company, then an HVAC contractor to fix one problem. We do all three ourselves, so you make one call and get one price.
      </Statement>

      <ServiceRail
        heading="What we fix"
        intro="Three trades, one licensed Chicago crew. Pick the one that's bothering you right now."
        items={[
          {
            photo: "moldWall",
            title: "Mold and water damage",
            text: "Mold inspection with a written report, mold removal that's actually contained, and water damage restoration that dries the house out, not just the surface. We also fix what let the water in.",
            href: routes.moldWater.href,
            links: [routes.moldInspection, routes.moldRemoval, routes.waterDamage, routes.floodedBasement],
          },
          {
            photo: "roofer",
            title: "Roofing",
            text: "A free roof check with photos first, then a straight answer: repair it or replace it. Roof repair, flat roof repair and full roof replacement for Chicago bungalows, 2-flats and greystones.",
            href: routes.roofing.href,
            links: [routes.freeRoofCheck, routes.roofRepair, routes.flatRoof, routes.roofReplacement, routes.roofCare],
          },
          {
            photo: "radiators",
            title: "Heating and cooling",
            text: "Furnace repair, boiler repair and AC repair, on steam, hot water and forced air systems across Chicago. You get the exact price before we start, not after.",
            href: routes.hvac.href,
            links: [routes.furnace, routes.ac, routes.hvacInstall],
          },
        ]}
        cta={{
          title: "Not sure which one you need?",
          text: "Tell us what you're seeing. We look at the whole house, not just one trade, and tell you straight what's actually wrong.",
          href: "#home-form",
          label: "Book a free inspection",
        }}
      />

      <LeakStory
        heading="How a small leak turns into a big bill"
        intro="This is the chain we see every week in Chicago homes. Catching it early is the difference between a repair and a rebuild."
        steps={[
          { photo: "rooferHarness", title: "A gap opens on the roof", text: "Water finds one weak spot, often the flashing around a chimney, vent pipe or wall." },
          { photo: "ceilingOpen", title: "It travels before you see it", text: "It runs along the rafters and soaks the insulation, then shows up on a ceiling feet from where it actually got in." },
          { photo: "moldWall2", title: "Mold starts in days", text: "Wet drywall and insulation can start growing mold within 48 to 72 hours, usually somewhere you can't see it yet." },
          { photo: "roofer", title: "One crew closes it out", text: "We fix the roof, dry and rebuild the inside, and remove the mold. One job, one written price, no handoff between contractors." },
        ]}
      />

      <Report heading="The stain is rarely where the leak actually is" photo="ceilingDamage" notes={reportNotes} caption="What a page of our photo report looks like. Example photo; yours shows your own home.">
        <p className="lead">
          Every inspection ends with a photo report like this one: each problem marked and explained in plain language, so you
          see exactly what we see before anyone talks about price.
        </p>
      </Report>

      <section className="section surface">
        <div className="wrap">
          <Head title="How every job works" intro="You see what we see, you get the price in writing, and nothing starts until you say yes." />
          <Steps
            items={[
              { title: "We look", text: "We inspect the problem, take photos, and show you exactly what we found before we say a word about cost." },
              { title: "Written price", text: "Materials, labor, permits and timeline, on one page. No verbal quotes, no surprises later." },
              { title: "The work", text: "Permits pulled when the job needs them. One person on our team you call the whole way through." },
              {
                title: "Walkthrough",
                text: owner.warranty
                  ? `We walk the job with you, clean up after ourselves, and give you the ${owner.warranty} in writing.`
                  : "We walk the job with you, clean up after ourselves, and leave you with the work details in writing.",
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
              Most people who call us have been burned by a contractor before, or know someone who has. Here is what we do
              differently.
            </p>
          </div>
          <div className="span-7">
            <Rows
              items={[
                { worry: "Paying twice", answer: "The leak, the damage and the mold get fixed in one job by one crew. No second contractor, no repeat visit, no blaming the other guy." },
                { worry: "Surprise bills", answer: "You see the full written price before we touch anything. If something changes once we open the wall or the roof, you approve it first, in writing." },
                { worry: "Being upsold", answer: "If a repair will do the job, that's what we quote. If you don't need anything done, we tell you that too, even if it costs us the sale." },
                { worry: "Not knowing what's actually wrong", answer: "You see what we see: the roof deck, the attic, the wall cavity, the part that failed. We explain it in plain words and you keep every photo." },
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
                A roof check is free, no strings attached
                {owner.moldInspectionPrice ? <>. Mold inspection: {owner.moldInspectionPrice}</> : null}
                {owner.hvacServiceCall ? <>. HVAC service call: {owner.hvacServiceCall}</> : null}. Either way, you get the full
                written price for any actual work before we start.
              </p>
            ),
          },
          {
            q: "Will my insurance pay for this?",
            a: "That depends on your policy and what caused the damage, so we can't promise an answer. What we can do is document everything: photos, moisture readings, a written report, so you have a clear record to share with your insurance company if you choose to file a claim.",
          },
          {
            q: "How soon can you come out?",
            a: (
              <p>
                {owner.responseTime ? <>We aim to get back to you {owner.responseTime}. </> : null}
                If water is actively coming in right now, call us instead of filling out the form.
              </p>
            ),
          },
          {
            q: "Which parts of Chicago do you cover?",
            a: (
              <p>
                The City of Chicago only, from Rogers Park down to Beverly. We don't work the suburbs.{" "}
                <Link className="text-link" href={routes.areas.href}>
                  See the full list of areas we serve
                </Link>
                .
              </p>
            ),
          },
        ]}
      />

      <CloseCta
        title="Tell us what's going on"
        text="A real person from our Chicago team calls you back, looks at the whole problem, not just the symptom, and gives you the price in writing before any work starts."
        primary={{ href: "#home-form", label: "Get your free Inspection" }}
        secondary={{ href: routes.contact.href, label: "Send a message" }}
      />

      <CallBar formHref="#home-form" formLabel="Free estimate" />
    </>
  );
}
