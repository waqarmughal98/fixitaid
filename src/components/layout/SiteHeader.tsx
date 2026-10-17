"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, routes } from "@/lib/routes";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || mainNav.some((n) => n.href === href && n.children.some((c) => c.href === pathname));

  return (
    <header className={`header${open ? " menu-open" : ""}`}>
      <div className="wrap">
        <Logo />
        <nav className="nav" aria-label="Main">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-right">
          <a className="header-tel" href={site.phoneHref}>
            <Icon name="phone" />
            <span>
              <span className="t">Call </span>
              {site.phone}
            </span>
          </a>
          <Link className="btn btn-gold" href={routes.contact.href}>
            Book a Free Inspection
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <nav className="mnav" id="mobile-menu" data-open={open} aria-label="Main menu">
        <ul>
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
              {item.children.length > 0 && (
                <ul className="sub">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} aria-current={pathname === c.href ? "page" : undefined}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
