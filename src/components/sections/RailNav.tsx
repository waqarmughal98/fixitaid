"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Previous / Next controls for the swipeable service cards on phones and tablets.
// Hidden on desktop, where the rail scrolls sideways with the page instead.
export function RailNav({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const getViewport = useCallback(() => ref.current?.closest(".rail")?.querySelector<HTMLElement>(".rail-viewport") ?? null, []);

  useEffect(() => {
    const vp = getViewport();
    if (!vp) return;
    const update = () => {
      const panels = Array.from(vp.querySelectorAll<HTMLElement>(".rail-panel"));
      const base = vp.getBoundingClientRect().left;
      let best = 0;
      let bestDist = Infinity;
      panels.forEach((p, i) => {
        const d = Math.abs(p.getBoundingClientRect().left - base);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    update();
    vp.addEventListener("scroll", update, { passive: true });
    return () => vp.removeEventListener("scroll", update);
  }, [getViewport]);

  const go = (i: number) => {
    const vp = getViewport();
    if (!vp) return;
    const panels = vp.querySelectorAll<HTMLElement>(".rail-panel");
    const target = panels[Math.max(0, Math.min(count - 1, i))];
    if (!target) return;
    setActive(Math.max(0, Math.min(count - 1, i)));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = vp.scrollLeft;
    const to = from + target.getBoundingClientRect().left - vp.getBoundingClientRect().left;
    if (reduce) {
      vp.scrollLeft = to;
      return;
    }
    // Animate by hand with snapping paused, so the glide never fights the scroll-snap points.
    const start = performance.now();
    const dur = 420;
    vp.style.scrollSnapType = "none";
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      vp.scrollLeft = from + (to - from) * e;
      if (t < 1) requestAnimationFrame(step);
      else vp.style.scrollSnapType = "";
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="rail-nav" ref={ref}>
      <button type="button" className="rail-nav-btn" onClick={() => go(active - 1)} disabled={active <= 0} aria-label="Previous service">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <span className="rail-nav-count" aria-live="polite">
        {active + 1} / {count}
      </span>
      <button type="button" className="rail-nav-btn" onClick={() => go(active + 1)} disabled={active >= count - 1} aria-label="Next service">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
