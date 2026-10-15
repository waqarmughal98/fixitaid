import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { service } from "@/lib/seo/schema";
import { sentenceCase } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Note } from "@/components/ui/PhotoNotes";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/SiteFooter";
import { CallBar } from "@/components/layout/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Report } from "@/components/sections/Report";
import { Steps, Rows, Rating, Reviews, FaqSection, CloseCta, Head } from "@/components/sections/Sections";

// Ad page, noindex (the SEO version is /hvac-chicago). Heating first in the cold months;
// switch the hook to AC around May.
const URL = "/hvac-repair-chicago";
export const metadata = metadataFor(URL);

const notes: Note[] = [
  { x: 64, y: 47, r: 10, title: "Cold at the top", text: "Air trapped in a steam or hot water system. Often a quick fix." },
  { x: 45, y: 80, r: 9, title: "Cold all over", text: "The boiler, a pump or a valve is the cause. We find which one." },
];

export default function HvacRepairPage() {
  const seo = seoFor(URL);
  const { owner, licences } = site;

  return (
    <>
      <JsonLd data={service("Furnace and HVAC repair in Chicago", URL, "HVAC repair")} />
      <LandingHeader />

      <main id="main" className="page">
        <Hero
          photo="furnace"
          title={sentenceCase(seo.h1)}
          lead={
            <>
              <strong>No heat? Furnace keeps shutting off? Radiators cold?</strong> A local Chicago tech finds the problem, shows you, and
              gives you the price before any work starts. No sales pitch for a new furnace you don&apos;t need.
            </>
          }
          actions={
            <>
              <a className="btn btn-gold" href={site.phoneHref}>
                Call {site.phone}
              </a>
              <a className="btn btn-ghost" href="#hvac-form">
                Book a visit
              </a>
            </>
          }
          facts={[
            { big: licences.hvac ?? <Placeholder>licence no.</Placeholder>, small: "Licensed HVAC" },
            { big: "Price first", small: "You approve it before we start" },
            { big: "Boilers too", small: "Steam and hot water, old and new" },
          ]}
          form={
            <LeadForm
              id="hvac-form"
              title="Book a heating repair"
              intro="Tell us what's happening. We call back to set a time."
              options={["No heat at all", "Furnace keeps shutting off", "Boiler or radiators not heating", "Strange noise or smell", "Tune-up before winter", "AC problem"]}
              submitLabel="Book my repair"
            />
          }
        />

        <Report heading="Many no-heat calls are one failed part" photo="radiators" notes={notes} caption="Example photo. Steam and hot water radiators are everyday work for us.">
          <p className="lead">
            Not a dead furnace. A flame sensor, an igniter, a pressure switch, a thermostat, or a low-water cutoff on a boiler. Those are
            repairs, not replacements. We find the part, show it to you, and give you the price.
          </p>
        </Report>

        <section className="section surface">
          <div className="wrap grid-12">
            <div className="span-5">
              <h2 className="h2" data-split>
                Before you call: three quick checks
              </h2>
              <ol className="process">
                <li>
                  <span>Is the thermostat set to heat, with fresh batteries?</span>
                </li>
                <li>
                  <span>Is the furnace switch on and the breaker not tripped?</span>
                </li>
                <li>
                  <span>Is the filter clogged? A dirty filter can shut a furnace down.</span>
                </li>
              </ol>
              <p className="muted" style={{ marginTop: 20 }}>
                Still no heat? Call us. <strong style={{ color: "var(--text)" }}>If you smell gas, leave the house and call your gas company first.</strong>
              </p>
            </div>
            <div className="span-7">
              <h2 className="h2" data-split>
                What we work on
              </h2>
              <div style={{ marginTop: 28 }}>
                <Rows
                  items={[
                    { worry: "Furnaces", answer: "Won't start, short-cycling, blowing cold air, noises, ignition and flame sensor problems." },
                    { worry: "Boilers and radiators", answer: "Steam and hot water boilers, cold radiators, pressure and water level problems." },
                    {
                      worry: "Tune-ups",
                      answer: (
                        <>
                          A full check and clean before winter. <Fact value={owner.furnaceTuneUp} label="$X" />
                        </>
                      ),
                    },
                    {
                      worry: "Install and replace",
                      answer: (
                        <>
                          When repair is no longer worth it: a furnace, boiler or AC sized for your home.{" "}
                          {owner.financing === null ? <Placeholder>Financing: yes or no</Placeholder> : owner.financing ? "Financing available." : null}
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Head title="Heat back on, no surprises" intro="You know the price before we touch anything." />
            <Steps
              items={[
                {
                  title: "Call or book",
                  text: (
                    <>
                      A real person asks a few questions and sets a time. <Fact value={owner.responseTime} label="Arrival window" />
                    </>
                  ),
                },
                { title: "Find the problem", text: "The tech checks the system and shows you what's wrong." },
                { title: "Price first", key: true, text: "You get the exact price. Nothing starts until you say yes." },
                { title: "Fix and test", text: "We repair it, test it, and check the vent and gas safety before we leave." },
              ]}
            />
          </div>
        </section>

        <section className="section surface">
          <div className="wrap grid-12">
            <div className="span-5">
              <h2 className="h2" data-split>
                What you can count on
              </h2>
              <p className="lead" style={{ marginTop: 20 }}>
                <Rating />
              </p>
            </div>
            <div className="span-7">
              <Rows
                items={[
                  { worry: "A surprise bill", answer: "The exact price before any work. You say yes or no." },
                  { worry: "Being upsold", answer: "If a part fixes it, we replace the part. You only hear about replacement when it really makes sense." },
                  { worry: "An old boiler nobody wants", answer: "Steam and hot water boilers are common in Chicago 2-flats and bungalows. We work on them." },
                  { worry: "A call center", answer: "You talk to our Chicago team, and our own tech comes to the house." },
                ]}
              />
            </div>
          </div>
          {reviewsReady && (
            <div className="wrap">
              <Reviews service="hvac" />
            </div>
          )}
        </section>

        <FaqSection
          title="Heating questions"
          items={[
            {
              q: "How much does furnace repair cost?",
              a: (
                <p>
                  Most repairs in Chicago fall between <Placeholder>$X and $Y</Placeholder>. It depends on the part and how old the furnace is.
                  You get the exact price before we start.
                </p>
              ),
            },
            {
              q: "Repair or replace my furnace?",
              a: "If the furnace is under about 15 years old and the repair is a small part of the cost of a new one, repairing usually makes sense. We give you both prices and let you choose.",
            },
            {
              q: "How soon can you come?",
              a: (
                <p>
                  <Fact value={owner.responseTime} label="Owner: real arrival time and hours. Only say 24/7 if the phone is answered 24/7." />
                </p>
              ),
            },
            { q: "Do you work on old boilers and radiators?", a: "Yes. If a part is no longer made, we tell you your options and the price of each." },
          ]}
        />

        <CloseCta
          title="No heat? Talk to us now"
          text="A local Chicago tech, the price before any work, and your heat back on."
          primary={{ href: "#hvac-form", label: "Book online" }}
        />
      </main>

      <LandingFooter licences={["hvac", "gc"]} />
      <CallBar formHref="#hvac-form" formLabel="Book" />
    </>
  );
}
