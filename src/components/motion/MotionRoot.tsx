"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// One motion layer for every page, driven by data attributes in the markup, so pages stay
// server components. Nothing is hidden in the server HTML, the hero intro is CSS, and
// visitors with reduced motion get the finished page with no movement.
//
//   [data-hero]       the photo drifts on scroll (the intro is CSS)
//   [data-split]      section headings rise line by line as they enter
//   [data-words]      a statement whose words light up as you scroll past
//   [data-rail]       services pin and slide sideways with the scroll (desktop)
//   [data-story]      the leak story pins; steps advance and photos crossfade (desktop)
//   [data-report]     gold circles draw on the photo in step with the notes
//   [data-scramble]   licence numbers decode into place
//   [data-parallax]   photo frames wipe open and drift
//   [data-magnetic]   the big phone number leans toward the cursor
//
// GSAP lives in ./setup and is imported only after the page has loaded and gone idle,
// so it stays off the critical path for LCP.

type MotionContext = { revert: () => void };

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const ctxRef = useRef<MotionContext | null>(null);
  const pathRef = useRef(pathname);

  // SplitText rewrites heading DOM. Reverting in an effect cleanup runs after React has
  // already tried to removeChild the old route, which throws NotFoundError on soft
  // navigations. Revert during render, before commit.
  if (pathRef.current !== pathname) {
    pathRef.current = pathname;
    ctxRef.current?.revert();
    ctxRef.current = null;
  }

  useEffect(() => {
    let cancelled = false;
    let idle: number | undefined;
    const start = () =>
      import("./setup").then(({ startMotion }) => {
        if (cancelled || !root.current) return;
        ctxRef.current = startMotion(root.current);
      });
    const schedule = () => {
      idle = typeof requestIdleCallback === "function" ? requestIdleCallback(start, { timeout: 1500 }) : window.setTimeout(start, 200);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idle !== undefined) (typeof cancelIdleCallback === "function" ? cancelIdleCallback : window.clearTimeout)(idle);
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, [pathname]);

  return (
    <div ref={root} className="motion-root">
      {children}
    </div>
  );
}
