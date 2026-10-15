// Google Ads landing pages: each page renders its own top bar, a header with no menu,
// and a one-line footer, so the only actions are calling or sending the form.
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
