import { site } from "@/config/site";

export function TopBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>{children}</span>
        <a href={site.phoneHref}>{site.phone}</a>
      </div>
    </div>
  );
}
