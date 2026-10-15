import { site } from "@/config/site";
import { LogoImage } from "./Logo";

// Ad pages: no menu, only the logo and the phone number, so visitors call or use the form.
// The logo is not a link on purpose.
export function LandingHeader() {
  return (
    <header className="header">
      <div className="wrap">
        <span className="logo">
          <LogoImage priority />
        </span>
        <div className="right">
          <a className="tel" href={site.phoneHref}>
            <small>Talk to a real person</small>
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
