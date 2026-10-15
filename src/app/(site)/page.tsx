import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { routes } from "@/lib/routes";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { website } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Art } from "@/components/ui/Art";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
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

export const metadata = metadataFor("/");

const neighborhoods = ["Lincoln Park", "Lakeview", "Logan Square", "Portage Park", "Edgewater", "Bridgeport", "Beverly"];

export default function HomePage() {
  const seo = seoFor("/");
  const { owner, licences } = site;

  return (
    <>
      <JsonLd data={website()} />

      {/* 1. Hook */}
      <section className="hero v-home photo-bg has-form">
        <div className="wrap grid">
          <div>
            <h1 className="small">{seo.h1}</h1>
            <p className="display big">
              Stop the leak.
              <br />
              Clear the mold.
              <br />
              <em>Fix it right.</em>
            </p>
            <p className="lead">
              A roof leak turns into a ceiling stain. The stain turns into mold. Most Chicago homeowners end up calling three
              companies to deal with one problem. Call one instead. We are licensed for roofing, mold and water damage, and
              HVAC, so we fix the damage and the cause behind it.
            </p>
            <div className="ctas">
              <a className="btn gold" href="#home-form">
                Book a free inspection
              </a>
              <a className="btn ghost" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </div>
            <Ticks
              items={[
                `Chicago GC licence ${licences.chicagoGc}`,
                `IL roofing licence ${licences.illinoisRoofing}`,
                "Price in writing before any work",
                ...(owner.phone247 === true ? ["Phone answered 24/7"] : owner.phone247 === null ? [<Placeholder key="247">24/7 line: yes or no</Placeholder>] : []),
              ]}
            />
          </div>
          <div className="visual after-form">
            <div className="float-chip stack">
              <Icon name="drop" />
              <span>
                <b>A leak like this is never just a ceiling</b>We fix the roof above it, the wet drywall and any mold, in one job
              </span>
            </div>
          </div>
          <LeadForm
            id="home-form"
            title="Get a free estimate"
            intro="Four fields. We call you back to set up a visit. Water coming in right now? Call instead."
            options={[
              "Mold or musty smell",
              "Water damage or flooded basement",
              "Roof leak or roof check",
              "No heat, furnace or boiler",
              "AC or other HVAC",
            ]}
            submitLabel="Get my free estimate"
          />
        </div>
      </section>

      <TrustStrip
        items={[
          { title: licences.chicagoGc, text: "Chicago general contractor licence" },
          { title: licences.illinoisRoofing, text: "Illinois roofing licence" },
          {
            title: owner.googleRating ? `★ ${owner.googleRating.rating.toFixed(1)}` : <Placeholder>★ 4.9</Placeholder>,
            text: owner.googleRating ? `${owner.googleRating.count} Google reviews` : <Placeholder>Google rating · count</Placeholder>,
          },
          {
            title: <Fact value={owner.yearsInBusiness ? `${owner.yearsInBusiness} yrs` : null} label="X yrs" />,
            text: "Fixing Chicago homes",
          },
        ]}
      />

      {/* 2. Pain */}
      <section className="band">
        <div className="wrap">
          <SectionHead
            eyebrow="Sound familiar?"
            title="What we hear on the phone every week"
            aside={<p className="soft">Different words, same worry: it keeps getting worse, and nobody has fixed it for good.</p>}
          />
          <Quotes
            items={[
              { icon: "drop", text: "The stain on the ceiling keeps getting bigger.", note: "Roof or flashing leak" },
              { icon: "nose", text: "The basement smells musty no matter what we do.", note: "Hidden moisture, early mold" },
              { icon: "mold", text: "We had the mold cleaned. It came back.", note: "The water source was never fixed" },
              { icon: "cold", text: "The furnace quit on the coldest night of the year.", note: "Usually one failed part" },
            ]}
          />
          <Bridge>Three of those four start the same way: water getting in where it shouldn&apos;t.</Bridge>
        </div>
      </section>

      {/* 3. Stakes + turning point */}
      <section className="band ink">
        <div className="wrap">
          <p className="eyebrow">Here&apos;s what&apos;s really going on</p>
          <h2 className="display turn">
            The mold is not the problem.
            <br />
            <em>The water is.</em>
          </h2>
          <div className="split" style={{ alignItems: "start", marginBottom: 8 }}>
            <div>
              <p className="lead" style={{ marginBottom: 26 }}>
                Water gets in through a roof, flashing or a gutter. It soaks insulation and drywall where you can&apos;t see it.
                Within days, mold can start. By the time you see a stain, it has usually been wet for a while.
              </p>
              <div className="stakes col">
                <div>
                  <b>A roofer fixes the roof</b>
                  <p>But doesn&apos;t touch the wet drywall or the mold inside the wall.</p>
                </div>
                <div>
                  <b>A mold company cleans the mold</b>
                  <p>But can&apos;t repair the roof, so the leak keeps feeding it.</p>
                </div>
                <div>
                  <b>You pay both, and it comes back</b>
                  <p>Nobody owned the whole problem, so the cause was never fixed.</p>
                </div>
              </div>
            </div>
            <figure className="fig">
              <Art
                name="house"
                viewBox="0 0 640 540"
                slice
                className="art lift"
                label="Illustration: a Chicago 2-flat cut open, showing a roof leak, a ceiling stain, mold, a wet basement and a furnace"
              />
              <figcaption style={{ textAlign: "center" }}>One leak, five problems. We fix all of them.</figcaption>
            </figure>
          </div>
          <Bridge>
            That is why we hold a roofing licence, a general contractor licence and a mold and water licence, all in one company.
          </Bridge>
        </div>
      </section>

      {/* 4. Solution */}
      <section className="band">
        <div className="wrap">
          <SectionHead
            eyebrow="Pick what's in front of you"
            title="One team for all of it"
            aside={<p className="soft">Each page tells you what we check, what it usually costs and what happens next.</p>}
          />
          <div className="cards">
            <div className="card">
              <Image className="thumb" src="/images/card-mold.webp" alt="Black mold streaks on a white wall" width={800} height={471} />
              <h3>Mold or a musty smell</h3>
              <p className="soft">Testing, safe removal, and a fix for the moisture that let it grow.</p>
              <Link className="more" href={routes.moldWater.href}>
                Mold inspection and removal →
              </Link>
            </div>
            <div className="card">
              <Art name="house" viewBox="120 400 240 180" slice className="thumb" label="Illustration: water in a basement" />
              <h3>Water damage or a flood</h3>
              <p className="soft">Water out, home dried, moisture checked, then the repairs.</p>
              <Link className="more" href={routes.waterDamage.href}>
                Water damage help →
              </Link>
            </div>
            <div className="card">
              <Image className="thumb" src="/images/card-roof.webp" alt="Shingle roofs on a house" width={800} height={644} />
              <h3>Roof leak or old roof</h3>
              <p className="soft">Free roof check with photos. A straight answer on repair or replace.</p>
              <Link className="more" href={routes.roofing.href}>
                Roofing and free roof check →
              </Link>
            </div>
            <div className="card">
              <Art name="cold" viewBox="290 80 240 180" slice className="thumb" label="Illustration: thermostat reading 55 degrees" />
              <h3>No heat or AC trouble</h3>
              <p className="soft">Furnaces, boilers, radiators and AC. Price before any work.</p>
              <Link className="more" href={routes.hvac.href}>
                Heating and cooling →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 40 }} className="split">
            <div>
              <p className="eyebrow">How every job works</p>
              <h2 className="display" style={{ fontSize: "clamp(34px,4.6vw,52px)", fontWeight: 800, marginBottom: 16 }}>
                Four steps.
                <br />
                No surprises.
              </h2>
              <p className="soft" style={{ maxWidth: "52ch" }}>
                You see what we see, you get the price in writing, and nothing starts until you say yes.
              </p>
            </div>
            <Steps
              four
              style={{ gridTemplateColumns: "1fr 1fr" }}
              items={[
                { icon: "camera", title: "We look", text: "We inspect, take photos and show you exactly what we found." },
                { icon: "price", title: "Written price", text: "Materials, labor, permits and timeline on one page." },
                { icon: "wrench", title: "The work", text: "Permits pulled when needed. One person to call the whole time." },
                {
                  icon: "check",
                  title: "Walkthrough",
                  text: (
                    <>
                      We check it with you, clean up and give you the <Fact value={owner.warranty} label="warranty" /> in writing.
                    </>
                  ),
                },
              ]}
            />
          </div>
          <Bridge>Here&apos;s what that means for you.</Bridge>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="band white">
        <div className="wrap">
          <SectionHead
            eyebrow="What you're worried about"
            title="And what we do about it"
            aside={
              <p className="soft">
                Every homeowner who calls us has been burned before, or knows someone who has. These are the four things we hear
                most.
              </p>
            }
          />
          <Answers
            items={[
              { fear: "Paying twice", title: "One team fixes the cause", text: "The leak, the damage and the mold, in one job. No second contractor and no repeat visit." },
              { fear: "Surprise bills", title: "Price in writing first", text: "You see the full price before we start. If something changes, you approve it first." },
              { fear: "Being upsold", title: "Repair first", text: "If a repair will do, that's what we quote. If you don't need anything, we tell you." },
              { fear: "Not knowing what's wrong", title: "Photos of everything", text: "You see what we see: the roof, the attic, the wall, the part. You keep the photos." },
            ]}
          />
          <Bridge>Don&apos;t just take our word for it.</Bridge>
        </div>
      </section>

      {/* 6. Proof */}
      <section className="band ink">
        <div className="wrap">
          <SectionHead
            eyebrow="Proof"
            title="Licensed for every job we do"
            aside={
              <p className="lead">
                <Rating />
              </p>
            }
          />
          <LicenceGrid
            items={[
              { value: licences.chicagoGc, label: "Chicago general contractor" },
              { value: licences.illinoisRoofing, label: "Illinois roofing contractor" },
              { value: licences.mold, label: "Mold and water damage licence" },
              { value: licences.hvac, label: "HVAC licence" },
            ]}
          />
          {/* Team photo block stays hidden until there is a real photo of the owner and crew (no stock people). */}
          <Reviews />
          <Bridge>You probably still have a few questions.</Bridge>
        </div>
      </section>

      {/* 7. Objections */}
      <section className="band">
        <Faq
          title="Before you call"
          items={[
            {
              q: "What does it cost to come out and look?",
              a: (
                <p>
                  Roof checks are free. Mold inspection: <Fact value={owner.moldInspectionPrice} label="free, or from $X" />. HVAC
                  service call: <Fact value={owner.hvacServiceCall} label="$X" />. You always get the price for the work in writing
                  before we start.
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
                  <Fact value={owner.responseTime} label='Real response time, for example "same day for active leaks and no heat"' />.
                  If water is coming in right now, call instead of using the form.
                </p>
              ),
            },
            {
              q: "Which parts of Chicago do you cover?",
              a: (
                <p>
                  The City of Chicago, from Rogers Park to Beverly. <Placeholder>Owner: confirm the neighborhoods you cover</Placeholder>
                </p>
              ),
            },
          ]}
        />
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="chips" style={{ marginTop: 18 }}>
            {neighborhoods.map((n) => (
              <Link className="chip" href={routes.areas.href} key={n}>
                {n}
              </Link>
            ))}
            <Link className="chip" href={routes.areas.href}>
              All neighborhoods →
            </Link>
          </div>
          <Bridge>The first step is simple.</Bridge>
        </div>
      </section>

      {/* 8. Close */}
      <FinalCta
        title="Fix it once. Fix it right."
        text="Tell us what's going on. A real person from our Chicago team calls you back, looks at the whole problem and gives you the price in writing."
        primary={{ href: "#home-form", label: "Get a free estimate" }}
        secondary={{ href: site.phoneHref, label: site.phone }}
      />

      <CallBar formHref="#home-form" formLabel="Free estimate" />
    </>
  );
}
