import Image from "next/image";
import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { faqPage, freeOffer, service } from "@/lib/seo/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Art } from "@/components/ui/Art";
import { Fact, Placeholder } from "@/components/ui/Placeholder";
import { LeadForm } from "@/components/lead/LeadForm";
import { TopBar } from "@/components/layout/TopBar";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/SiteFooter";
import { CallBar } from "@/components/layout/CallBar";
import { Bridge, SectionHead, Ticks, TrustStrip, Quotes, Steps, Answers, Rating, Reviews, Faq, FinalCta } from "@/components/sections/Sections";

const URL = "/free-roof-check";
export const metadata = metadataFor(URL);

const faqs = [
  {
    q: "Is the roof check really free?",
    a: "Yes. We check the roof and attic, take photos and tell you what we found. No charge and no obligation to hire us.",
  },
  {
    q: "Should I repair or replace my roof?",
    a: "It depends on the roof's age, how much is damaged and the condition of the wood deck underneath. We show you photos and explain both options with prices, so you decide.",
  },
  {
    q: "Can you help after a storm?",
    a: "Yes. We check for hail and wind damage and photograph everything we find. You can share those photos with your insurance company if you choose to.",
  },
  {
    q: "Do I need a permit for a new roof in Chicago?",
    a: "Most roof replacements in Chicago need a permit. As a licensed contractor, we pull it for you as part of the job.",
  },
];

export default function FreeRoofCheckPage() {
  const seo = seoFor(URL);
  const { owner, licences } = site;

  return (
    <>
      <JsonLd data={[service("Free roof check in Chicago", URL, "Roof inspection"), freeOffer("Free roof check", URL), faqPage(faqs)]} />
      <TopBar>Roof leaking right now? Call and we&apos;ll tell you what to do first.</TopBar>
      <LandingHeader />

      <main id="main" className="page">
        {/* 1. Hook */}
        <section className="hero v-roof">
          <div className="wrap grid">
            <div>
              <p className="eyebrow">Illinois licensed roofer · {licences.illinoisRoofing}</p>
              <h1 className="display lp">{seo.h1}</h1>
              <p className="display" style={{ fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, color: "var(--gold)", margin: "-6px 0 18px" }}>
                A straight answer, with photos.
              </p>
              <p className="lead">
                Water stain on the ceiling? Shingles in the yard after the last storm? Or a roof nobody has looked at in years? We go
                up on the roof and into the attic, photograph what we find, and tell you plainly: fix it, watch it, or replace it.
              </p>
              <div className="ctas">
                <a className="btn gold" href="#roof-form">
                  Book my free roof check
                </a>
                <a className="btn ghost" href={site.phoneHref}>
                  Call {site.phone}
                </a>
              </div>
              <Ticks
                items={[
                  `IL roofing licence ${licences.illinoisRoofing}`,
                  `Chicago GC ${licences.chicagoGc}`,
                  "Shingle and flat roofs",
                  "Photo report you keep",
                ]}
              />
            </div>
            <div className="visual after-form">
              <div className="polaroid back" aria-hidden="true">
                <Image className="art" src="/images/roof-hero-2.webp" alt="" width={900} height={725} style={{ aspectRatio: "4/3" }} />
              </div>
              <div className="polaroid">
                <Image
                  className="art"
                  src="/images/roof-hero.webp"
                  alt="A roofer on a shingle roof checking damaged shingles"
                  width={1108}
                  height={652}
                  priority
                  style={{ aspectRatio: "600/400" }}
                />
                <p>We go up on the roof, so you don&apos;t have to</p>
              </div>
            </div>
            <LeadForm
              id="roof-form"
              title="Book your free roof check"
              intro="Takes a minute. We call to set a time that works for you."
              options={[
                "A leak or a ceiling stain",
                "Missing or damaged shingles",
                "Flat roof problem or ponding water",
                "Old roof, just want a check",
                "Buying or selling a home",
              ]}
              submitLabel="Book my free roof check"
            />
          </div>
        </section>

        <TrustStrip
          items={[
            { title: licences.illinoisRoofing, text: "Illinois roofing licence" },
            { title: "$0", text: "Roof check with photos" },
            {
              title: owner.googleRating ? `★ ${owner.googleRating.rating.toFixed(1)}` : <Placeholder>★ 4.9</Placeholder>,
              text: owner.googleRating ? `${owner.googleRating.count} Google reviews` : <Placeholder>Google reviews</Placeholder>,
            },
            { title: <Fact value={owner.warranty} label="X yr" />, text: "Workmanship warranty" },
          ]}
        />

        {/* 2. Pain */}
        <section className="band">
          <div className="wrap">
            <SectionHead
              eyebrow="Sound familiar?"
              title="Roof problems nobody has answered straight"
              aside={<p className="soft">These are the calls we get most from Chicago homeowners.</p>}
            />
            <Quotes
              items={[
                { icon: "drop", text: "The stain is in the bedroom, but nobody can find the leak." },
                { icon: "wrench", text: "We've patched it twice. It still leaks when it rains hard." },
                { icon: "price", text: "One roofer said repair. The next one said replace." },
                { icon: "cold", text: "Ice built up on the edge last winter. Now the ceiling is stained." },
              ]}
            />
            <Bridge>Every one of those has a cause you can find, if someone actually looks.</Bridge>
          </div>
        </section>

        {/* 3. Stakes */}
        <section className="band ink">
          <div className="wrap">
            <SectionHead
              eyebrow="Why it matters before winter"
              title="A small leak doesn't stay small"
              aside={<p className="lead">Chicago roofs freeze and thaw dozens of times a winter. Each cycle opens small gaps a little wider.</p>}
            />
            <div className="stakes">
              <div>
                <Art name="house" viewBox="380 40 260 195" slice className="stage" label="Illustration: roof leak" />
                <b>The water travels</b>
                <p>It runs along rafters and shows up feet away from where it gets in. That&apos;s why patches miss.</p>
              </div>
              <div>
                <Art name="house" viewBox="300 120 240 180" slice className="stage" label="Illustration: wet attic insulation" />
                <b>The attic soaks it up</b>
                <p>Wet insulation stops insulating, and wet roof deck starts to rot.</p>
              </div>
              <div>
                <Image className="stage" src="/images/roof-stake-inside.webp" alt="A ceiling that fell in after a roof leak" width={800} height={635} />
                <b>Then it&apos;s inside</b>
                <p>A ceiling stain becomes wet drywall, and wet drywall can grow mold.</p>
              </div>
            </div>
            <Bridge>So why do so many roof checks end with &quot;you need a new roof&quot;?</Bridge>
          </div>
        </section>

        {/* 4. Turning point */}
        <section className="band">
          <div className="wrap split">
            <div>
              <p className="eyebrow">The honest part</p>
              <h2 className="display turn" style={{ fontSize: "clamp(38px,5.6vw,64px)" }}>
                Most roofers sell
                <br />
                <em style={{ color: "var(--gold-deep)" }}>what they install.</em>
              </h2>
              <p className="lead">
                A roof check should tell you what your roof needs, even when the answer is nothing. Ours does. You get photos of
                every problem and a plain answer. If a repair will last, we quote the repair. And if the leak already damaged the
                inside, our own licensed crew fixes that too.
              </p>
            </div>
            <div>
              <figure className="fig" style={{ marginBottom: 22 }}>
                <Art
                  name="roof"
                  viewBox="0 0 600 520"
                  slice
                  className="art lift"
                  label="Illustration: a sample page from our roof photo report, with a flashing gap, a lifted shingle and granule loss circled"
                />
                <figcaption>Sample photo report page. Every problem circled and explained.</figcaption>
              </figure>
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                What we check
              </p>
              <ul className="list">
                <li>Shingles: missing, curled, cracked or losing granules</li>
                <li>Flashing around chimneys, vents and walls, where most leaks start</li>
                <li>Flat roofs: seams, blisters and spots where water sits</li>
                <li>The attic: damp insulation, daylight, stains on the deck</li>
                <li>Gutters and downspouts that send water back under the roof</li>
                <li>Inside: ceiling stains and signs of mold from old leaks</li>
              </ul>
            </div>
          </div>
          <div className="wrap">
            <Bridge>Here&apos;s how it works, start to finish.</Bridge>
          </div>
        </section>

        {/* 5. Solution */}
        <section className="band ink">
          <div className="wrap">
            <SectionHead
              eyebrow="How it works"
              title="From first call to a dry roof"
              aside={<p className="lead">You see the photos before anyone talks about price. Then you decide.</p>}
            />
            <Steps
              four
              items={[
                { icon: "camera", title: "Free roof check", text: "On the roof and in the attic, with photos of everything we find." },
                { icon: "price", title: "A straight answer", key: true, text: "Fix, watch or replace, and a written price for the work you choose." },
                { icon: "wrench", title: "The work", text: "Permits pulled when needed, your yard protected, the site cleaned daily." },
                {
                  icon: "check",
                  title: "Walkthrough",
                  text: (
                    <>
                      We check it with you and give you the <Fact value={owner.warranty} label="warranty" /> in writing.
                    </>
                  ),
                },
              ]}
            />
            <div className="chips" style={{ marginTop: 30 }}>
              <span className="chip">Leak repair</span>
              <span className="chip">Flat roofs: TPO, rubber, mod bit</span>
              <span className="chip">Shingle roofs</span>
              <span className="chip">Roof replacement</span>
              <span className="chip">
                Roof Care plan <Placeholder>$/yr</Placeholder>
              </span>
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
              aside={<p className="soft">What people tell us they were afraid of before they called.</p>}
            />
            <Answers
              items={[
                { fear: "Being sold a new roof", title: "Repair first", text: "If a repair will last, that's what we quote. You see the photos and decide." },
                { fear: "Not seeing it yourself", title: "Photo report you keep", text: "Every problem photographed and explained. Yours to keep, even if you don't hire us." },
                {
                  fear: "An unlicensed crew",
                  title: `Licence ${licences.illinoisRoofing}`,
                  text: `An Illinois licensed roofing contractor, and a Chicago GC (${licences.chicagoGc}) for permits.`,
                },
                { fear: "The damage inside", title: "Same team fixes it", text: "Wet drywall, stained ceilings and mold from the leak, handled by our own licensed crew." },
              ]}
            />
            <Bridge>{reviewsReady ? "Don't just take our word for it." : "You probably still have a few questions."}</Bridge>
          </div>
        </section>

        {/* 7. Proof: shown once there are real reviews; before/after blocks wait for real job photos. */}
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
              <Reviews service="roof" />
              <Bridge>You probably still have a few questions.</Bridge>
            </div>
          </section>
        )}

        {/* 8. Objections */}
        <section className="band">
          <Faq
            title="Roof questions"
            items={[
              ...faqs.slice(0, 3),
              {
                q: "My roof is leaking right now. What do I do?",
                a: (
                  <p>
                    Move things away from the drip, put a bucket under it and call us.{" "}
                    <Placeholder>If true: we come out the same day to cover the roof with a tarp or a temporary patch</Placeholder>, then
                    schedule the real repair.
                  </p>
                ),
              },
              faqs[3],
            ]}
          />
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Bridge>The first step costs nothing.</Bridge>
          </div>
        </section>

        {/* 9. Close */}
        <FinalCta
          title="Before winter, know what's on your roof"
          text="Free roof check with photos from an Illinois licensed roofer. A straight answer, and no pressure."
          primary={{ href: "#roof-form", label: "Book my free roof check" }}
          secondary={{ href: site.phoneHref, label: site.phone }}
        />
      </main>

      <LandingFooter licences={["roofing", "gc"]} />
      <CallBar formHref="#roof-form" formLabel="Free check" />
    </>
  );
}
