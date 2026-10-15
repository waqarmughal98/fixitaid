import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { service } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Art } from "@/components/ui/Art";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
import { TopBar } from "@/components/layout/TopBar";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/SiteFooter";
import { CallBar } from "@/components/layout/CallBar";
import { Bridge, SectionHead, Ticks, TrustStrip, Quotes, Steps, Answers, Rating, Reviews, Faq, FinalCta } from "@/components/sections/Sections";

// Ad page, noindex (the SEO version is /hvac-chicago). Heating first in the cold months;
// switch the hook to AC around May.
const URL = "/hvac-repair-chicago";
export const metadata = metadataFor(URL);

export default function HvacRepairPage() {
  const seo = seoFor(URL);
  const { owner, licences } = site;

  return (
    <>
      <JsonLd data={service("Furnace and HVAC repair in Chicago", URL, "HVAC repair")} />
      <TopBar>
        No heat? Call now.
        {owner.phone247 === true ? " We answer day and night." : owner.phone247 === null ? <> <Placeholder>If 24/7: &quot;We answer day and night.&quot;</Placeholder></> : null}
      </TopBar>
      <LandingHeader />

      <main id="main" className="page">
        {/* 1. Hook */}
        <section className="hero v-cold">
          <div className="wrap grid">
            <div>
              <p className="eyebrow">No heat? Furnace keeps shutting off? Radiators cold?</p>
              <h1 className="display lp">{seo.h1}</h1>
              <p className="lead">
                A local Chicago tech finds the problem, shows you, and gives you the price before any work starts. You say yes, then
                we fix it. No sales pitch for a new furnace you don&apos;t need.
              </p>
              <div className="ctas">
                <a className="btn gold" href={site.phoneHref}>
                  Call {site.phone}
                </a>
                <a className="btn ghost" href="#hvac-form">
                  Book a visit
                </a>
              </div>
              <Ticks
                items={[
                  <>
                    Licensed HVAC {licences.hvac ?? <Placeholder>licence no.</Placeholder>}
                  </>,
                  "Price before we start",
                  "Furnaces, boilers and radiators",
                  <Fact key="same-day" value={owner.responseTime} label="Same-day, if true" />,
                ]}
              />
            </div>
            <div className="visual after-form">
              <Art
                name="cold"
                viewBox="0 0 600 520"
                slice
                className="art lift"
                label="Illustration: a frosted window, a cold radiator and a thermostat reading 55 degrees inside"
              />
              <div className="float-chip">
                <Icon name="flame" />
                <span>
                  <b>Price before any work</b>You say yes, then we fix it
                </span>
              </div>
            </div>
            <LeadForm
              id="hvac-form"
              title="Book a heating repair"
              intro="Tell us what's happening. We call back to set a time."
              options={[
                "No heat at all",
                "Furnace keeps shutting off",
                "Boiler or radiators not heating",
                "Strange noise or smell",
                "Tune-up before winter",
                "AC problem",
              ]}
              submitLabel="Book my repair"
            />
          </div>
        </section>

        <TrustStrip
          items={[
            { title: "Price first", text: "You approve it before we start" },
            { title: "Boilers too", text: "Steam and hot water, old and new" },
            {
              title: owner.googleRating ? `★ ${owner.googleRating.rating.toFixed(1)}` : <Placeholder>★ 4.9</Placeholder>,
              text: owner.googleRating ? `${owner.googleRating.count} Google reviews` : <Placeholder>Google reviews</Placeholder>,
            },
            { title: <Fact value={owner.furnaceTuneUp} label="$X" />, text: "Furnace tune-up" },
          ]}
        />

        {/* 2. Pain */}
        <section className="band">
          <div className="wrap">
            <SectionHead
              eyebrow="Sound familiar?"
              title="The house is getting colder"
              aside={<p className="soft">And the last person you called didn&apos;t make it easier.</p>}
            />
            <Quotes
              items={[
                { icon: "cold", text: "It's 55 in the house and dropping. The kids are in coats." },
                { icon: "price", text: "The first company quoted a new furnace in ten minutes." },
                { icon: "house", text: "They gave us an 8 to 5 window and never showed." },
                { icon: "phone", text: "I called a number online and got a call center in another state." },
              ]}
            />
            <Bridge>You don&apos;t need a sales pitch. You need heat.</Bridge>
          </div>
        </section>

        {/* 3. Turning point */}
        <section className="band ink">
          <div className="wrap split">
            <div>
              <p className="eyebrow">What&apos;s usually wrong</p>
              <h2 className="display turn" style={{ fontSize: "clamp(38px,5.6vw,64px)" }}>
                Many no-heat calls are <em>one failed part.</em>
              </h2>
              <p className="lead">
                Not a dead furnace. A flame sensor, an igniter, a pressure switch, a thermostat, or a low-water cutoff on a boiler.
                Those are repairs, not replacements. We find the part, show it to you, and give you the price.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                Before you call: three quick checks
              </p>
              <ul className="list">
                <li>Is the thermostat set to heat, with fresh batteries?</li>
                <li>Is the furnace switch on and the breaker not tripped?</li>
                <li>Is the filter clogged? A dirty filter can shut a furnace down.</li>
              </ul>
              <p className="soft" style={{ marginTop: 14 }}>
                Still no heat? Call us. If you smell gas, leave the house and call your gas company first.
              </p>
            </div>
          </div>
          <div className="wrap">
            <Bridge>Here&apos;s what happens when you call.</Bridge>
          </div>
        </section>

        {/* 4. Solution */}
        <section className="band">
          <div className="wrap">
            <SectionHead
              eyebrow="How it works"
              title="Heat back on, no surprises"
              aside={<p className="soft">You know the price before we touch anything.</p>}
            />
            <Steps
              four
              style={{ borderColor: "var(--line)" }}
              items={[
                {
                  icon: "phone",
                  title: "Call or book",
                  text: (
                    <>
                      A real person asks a few questions and sets a time. <Fact value={owner.responseTime} label="Arrival window" />
                    </>
                  ),
                },
                { icon: "search", title: "Find the problem", text: "The tech checks the system and shows you what's wrong." },
                { icon: "price", title: "Price first", key: true, text: "You get the exact price. Nothing starts until you say yes." },
                { icon: "flame", title: "Fix and test", text: "We repair it, test it, and check the vent and gas safety before we leave." },
              ]}
            />
            <div className="cards" style={{ marginTop: 34 }}>
              <div className="card">
                <Icon name="flame" className="ci" />
                <h3>Furnace repair</h3>
                <p className="soft">Won&apos;t start, short-cycling, blowing cold air, noises, ignition and flame sensor problems.</p>
              </div>
              <div className="card">
                <Icon name="drop" className="ci" />
                <h3>Boiler &amp; radiators</h3>
                <p className="soft">Steam and hot water boilers, cold radiators, pressure and water level problems.</p>
              </div>
              <div className="card">
                <Icon name="wrench" className="ci" />
                <h3>Tune-ups</h3>
                <p className="soft">
                  A full check and clean before winter, so it doesn&apos;t quit on the coldest night. <Fact value={owner.furnaceTuneUp} label="$X" />
                </p>
              </div>
              <div className="card">
                <Icon name="house" className="ci" />
                <h3>Install &amp; replace</h3>
                <p className="soft">
                  When repair is no longer worth it: a furnace, boiler or AC sized for your home.{" "}
                  {site.owner.financing === null ? <Placeholder>Financing: yes or no</Placeholder> : site.owner.financing ? "Financing available." : null}
                </p>
              </div>
            </div>
            <Bridge>Here&apos;s what that means for you.</Bridge>
          </div>
        </section>

        {/* 5. Benefits */}
        <section className="band white">
          <div className="wrap">
            <SectionHead
              eyebrow="What you get"
              title="Each one answers a worry"
              aside={<p className="soft">The four things people tell us they&apos;re tired of.</p>}
            />
            <Answers
              items={[
                { fear: "A surprise bill", title: "Price first", text: "The exact price before any work. You say yes or no." },
                {
                  fear: "Being upsold",
                  title: "Repair first",
                  text: "If a part fixes it, we replace the part. We give you both prices only when replacing really makes sense.",
                },
                {
                  fear: "An old boiler nobody wants",
                  title: "Boilers too",
                  text: "Steam and hot water boilers are common in Chicago 2-flats and bungalows. We work on them.",
                },
                { fear: "A call center", title: "A local team", text: "You talk to our Chicago team, and our own tech comes to the house." },
              ]}
            />
            <Bridge>{reviewsReady ? "Don't just take our word for it." : "You probably still have a few questions."}</Bridge>
          </div>
        </section>

        {/* 6. Proof: needs real reviews; the "tech at work" photo waits for a real photo. */}
        {reviewsReady && (
          <section className="band ink">
            <div className="wrap">
              <SectionHead
                eyebrow="Proof"
                title="From Chicago homeowners"
                aside={
                  <p className="lead">
                    <Rating />
                  </p>
                }
              />
              <Reviews service="hvac" />
              <Bridge>You probably still have a few questions.</Bridge>
            </div>
          </section>
        )}

        {/* 7. Objections */}
        <section className="band">
          <Faq
            title="Heating questions"
            items={[
              {
                q: "How much does furnace repair cost?",
                a: (
                  <p>
                    Most repairs in Chicago fall between <Placeholder>$X and $Y</Placeholder>. It depends on the part and how old the
                    furnace is. You get the exact price before we start.
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
              {
                q: "Do you work on old boilers and radiators?",
                a: "Yes. If a part is no longer made, we tell you your options and the price of each.",
              },
            ]}
          />
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Bridge>The first step is one call.</Bridge>
          </div>
        </section>

        {/* 8. Close */}
        <FinalCta
          title="No heat? Talk to us now"
          text="A local Chicago tech, the price before any work, and your heat back on."
          primary={{ href: site.phoneHref, label: `Call ${site.phone}` }}
          secondary={{ href: "#hvac-form", label: "Book online", ghost: true }}
        />
      </main>

      <LandingFooter licences={["hvac", "gc"]} />
      <CallBar formHref="#hvac-form" formLabel="Book" />
    </>
  );
}
