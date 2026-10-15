import type { Metadata } from "next";
import { site } from "@/config/site";
import { Placeholder } from "@/components/ui/Placeholder";

// /privacy is needed for Google Ads and the forms. It is not in the SEO sheet and had no
// copy in the handoff, so this is a plain-language draft for the owner (and a lawyer, if
// they want one) to review before launch.
export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Fix It Aid" },
  description: "How Fix It Aid uses the details you send through our website forms.",
  alternates: { canonical: `${site.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <h1 className="display" data-split>
            Privacy policy
          </h1>
          <p className="lead" style={{ marginTop: 16 }}>
            <Placeholder>Draft: owner to review before launch. Last updated date</Placeholder>
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap legal-page">
          <p>
            This policy explains what {site.legalName} (&quot;Fix It Aid&quot;, &quot;we&quot;) collects through fixitaid.com and what we do
            with it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>What you type into our forms: your name, phone number, ZIP code, the service you need, and any details you add.</li>
            <li>Basic visit data from our analytics and advertising tools, such as the pages you viewed and the ad you clicked.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To call you back about your request and to schedule and carry out the work.</li>
            <li>To see which pages and ads bring people to us, so we can improve them.</li>
          </ul>
          <p>We do not sell your details, and we do not send marketing texts or emails from a form request.</p>

          <h2>Cookies and advertising</h2>
          <p>
            We use Google Analytics and Google Ads to measure visits and form requests. These tools set cookies in your browser. You
            can block or delete cookies in your browser settings, and you can manage Google ad settings at adssettings.google.com.
          </p>

          <h2>Who we share it with</h2>
          <p>
            Only the services that help us run the website and answer you: our web host, our email provider and Google (analytics and
            ads). They may only use it to provide those services to us.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep form requests and job records for as long as we need them to do the work and meet our legal and tax obligations.{" "}
            <Placeholder>Owner: confirm how long records are kept</Placeholder>
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what details we hold about you, or ask us to correct or delete them. Call {site.phone} or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Children</h2>
          <p>Our website is for adults arranging work on a home. We do not knowingly collect details from children under 13.</p>

          <h2>Changes</h2>
          <p>If we change this policy, we will update this page and the date at the top.</p>
        </div>
      </section>
    </>
  );
}
