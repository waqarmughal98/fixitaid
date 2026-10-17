import { site, reviewsReady } from "@/config/site";
import { metadataFor, seoFor } from "@/lib/seo/meta";
import { faqPage, freeOffer, service } from "@/lib/seo/schema";
import { sentenceCase } from "@/lib/text";
import { JsonLd } from "@/components/ui/JsonLd";
import { Photo } from "@/components/ui/Photo";
import type { Note } from "@/components/ui/PhotoNotes";
import { LeadForm } from "@/components/lead/LeadForm";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/SiteFooter";
import { CallBar } from "@/components/layout/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Report } from "@/components/sections/Report";
import { Marquee } from "@/components/sections/Marquee";
import { Steps, Rows, Rating, Reviews, FaqSection, CloseCta, Head, Checks, SectionCta } from "@/components/sections/Sections";

// Google Ads landing page for the roof funnel. No menu.
const URL = "/free-roof-check";
export const metadata = metadataFor(URL);

const faqs = [
  { q: "Is the roof check really free?", a: "Yes. We check the roof and attic, take photos and tell you what we found. No charge and no obligation to hire us." },
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

const notes: Note[] = [
  { x: 22, y: 50, r: 9, title: "The wood deck", text: "Soft or rotted boards get replaced before anything new goes on." },
  { x: 50, y: 40, r: 6, title: "Vent pipe", text: "A cracked rubber boot here is one of the most common Chicago leaks." },
  { x: 88, y: 41, r: 7, title: "The roof edge", text: "Ice dams push water under the shingles here. Ice and water shield goes on first." },
];

export default function FreeRoofCheckPage() {
  const seo = seoFor(URL);
  const { licences } = site;

  return (
    <>
      <JsonLd data={[service("Free roof check in Chicago", URL, "Roof inspection"), freeOffer("Free roof check", URL), faqPage(faqs)]} />
      <LandingHeader />

      <main id="main" className="page">
        <Hero
          photo="roofRunoff"
          title={sentenceCase(seo.h1)}
          lead={
            <>
              <strong>A straight answer, with photos.</strong> Water stain on the ceiling? Shingles in the yard after the last storm? We go
              up on the roof and into the attic, photograph what we find, and tell you plainly: fix it, watch it, or replace it.
            </>
          }
          actions={
            <>
              <a className="btn btn-gold" href="#roof-form">
                Book a Free Inspection
              </a>
              <a className="btn btn-white" href={site.phoneHref}>
                Call Now
              </a>
            </>
          }
          facts={[
            { big: "$0", small: "Roof inspection report with photos" },
            { big: licences.illinoisRoofing, small: "Illinois roofing licence" },
            { big: licences.chicagoGc, small: "Chicago GC, for permits" },
          ]}
          form={
            <LeadForm
              id="roof-form"
              title="Book your free roof check"
              intro="Takes a minute. We call to set a time that works for you."
              options={["A leak or a ceiling stain", "Missing or damaged shingles", "Flat roof problem or ponding water", "Old roof, just want a check", "Buying or selling a home"]}
              submitLabel="Book a Free Inspection"
            />
          }
        />

        <Marquee items={["Leaks", "Flashing", "Vent boots", "Ice dams", "Flat roofs", "Shingles", "Gutters", "Attic ventilation"]} />

        <Report heading="Most roofers sell what they install" photo="tearOff" notes={notes} caption="How we mark up what we find. Example photo of a tear-off.">
          <p className="lead">
            A roof check should tell you what your roof needs, even when the answer is nothing. Ours does. Chicago roofs freeze and thaw
            dozens of times a winter, and water travels along the rafters before it shows up on a ceiling. These are the spots we check
            first.
          </p>
          <SectionCta href="#roof-form" call={false} />
        </Report>

        <section className="section surface">
          <div className="wrap grid-12" style={{ alignItems: "center" }}>
            <div className="span-6">
              <h2 className="h2" data-split>
                What we check
              </h2>
              <div style={{ marginTop: 32 }}>
                <Checks
                  items={[
                    "Shingles: missing, curled, cracked or losing granules",
                    "Flashing around chimneys, vents and walls",
                    "Flat roofs: seams, blisters, ponding water",
                    "The attic: damp insulation, daylight, stains",
                    "Gutters that send water back under the roof",
                    "Inside: ceiling stains and signs of mold",
                  ]}
                />
              </div>
            </div>
            <div className="span-6">
              <div className="frame" data-parallax style={{ aspectRatio: "4 / 4.4" }}>
                <Photo name="ceilingDamage" ratio={4 / 4.4} sizes="(max-width: 960px) 100vw, 600px" />
              </div>
              <p className="caption">If a leak already reached the inside, our own licensed crew fixes that too. Example photo.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <Head title="From first call to a dry roof" intro="You see the photos before anyone talks about price. Then you decide." />
            <Steps
              items={[
                { title: "Free roof check", text: "On the roof and in the attic, with photos of everything we find." },
                { title: "A straight answer", key: true, text: "Fix, watch or replace, and a written price for the work you choose." },
                { title: "The work", text: "Permits pulled when needed, your yard protected, the site cleaned daily." },
                {
                  title: "Walkthrough",
                  text: (
                    <>
                      We check it with you and give you the 1-year workmanship warranty.
                    </>
                  ),
                },
              ]}
            />
            <SectionCta href="#roof-form" align="center" />
          </div>
        </section>

        <section className="section surface">
          <div className="wrap grid-12">
            <div className="span-5 stick">
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
                  { worry: "Being sold a new roof", answer: "If a repair will last, that's what we quote. You see the photos and decide." },
                  { worry: "Not seeing it yourself", answer: "Every problem photographed and explained. Yours to keep, even if you don't hire us." },
                  { worry: "An unlicensed crew", answer: `Illinois licensed roofing contractor ${licences.illinoisRoofing}, and a Chicago GC (${licences.chicagoGc}) for permits.` },
                  { worry: "The damage inside", answer: "Wet drywall, stained ceilings and mold from the leak, handled by our own licensed crew." },
                ]}
              />
            </div>
          </div>
          {reviewsReady && (
            <div className="wrap">
              <Reviews service="roof" />
            </div>
          )}
        </section>

        <FaqSection
          title="Roof questions"
          items={[
            ...faqs.slice(0, 3),
            {
              q: "My roof is leaking right now. What do I do?",
              a: (
                <p>
                  Move things away from the drip, put a bucket under it and call us.{" "}
                  We come out the same day to cover the roof with a tarp or a temporary patch, then
                  schedule the real repair.
                </p>
              ),
            },
            faqs[3],
          ]}
        />

        <CloseCta
          title="Before winter, know what's on your roof"
          text="A free roof check with photos from an Illinois licensed roofer. A straight answer, and no pressure."
          primary={{ href: "#roof-form", label: "Book my free roof check" }}
        />
      </main>

      <LandingFooter licences={["roofing", "gc"]} />
      <CallBar formHref="#roof-form" formLabel="Free check" />
    </>
  );
}
