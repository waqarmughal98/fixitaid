import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TopBar } from "@/components/layout/TopBar";

// Main site: top bar, header with menu, full footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar>Leak, flooded basement or no heat? Call now and a real person answers.</TopBar>
      <SiteHeader />
      <main id="main" className="page">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
