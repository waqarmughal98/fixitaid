import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
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
        <div className="header-right">
          <a className="header-tel" href={site.phoneHref}>
            <Icon name="phone" />
            <span>
              <span className="t">Call </span>
              {site.phone}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
