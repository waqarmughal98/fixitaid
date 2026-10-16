"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, ScrambleTextPlugin);

// One motion layer for every page, driven by data attributes in the markup, so pages stay
// server components. Nothing is hidden in the server HTML: the inline script in the root
// layout hides only the hero until this runs (2.5s fallback), and visitors with reduced
// motion get the finished page with no movement.
//
//   [data-hero]       headline lines rise from a mask, photo settles from a slow zoom, form lifts in
//   [data-split]      section headings rise line by line as they enter
//   [data-words]      a statement whose words light up as you scroll past
//   [data-rail]       services pin and slide sideways with the scroll (desktop)
//   [data-story]      the leak story pins; steps advance and photos crossfade (desktop)
//   [data-report]     gold circles draw on the photo in step with the notes
//   [data-scramble]   licence numbers decode into place
//   [data-parallax]   photo frames wipe open and drift
//   [data-magnetic]   the big phone number leans toward the cursor

const EASE = "power3.out";

const REVEAL = [
  ".section .lead",
  ".section .prose",
  ".section .stack > p",
  ".statement + * , .section .span-4 > .muted",
  ".rows > div",
  ".steps > li",
  ".licences > div",
  ".faq details",
  ".checks li",
  "ol.process > li",
  ".subservices > div",
  ".groups > div",
  ".timeline > div",
  ".prices > div",
  ".compare-wrap",
  ".reviews blockquote",
  ".rail-head .lead",
  ".close .lead",
  ".close .big-tel",
  ".close .actions",
  ".caption",
].join(", ");

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const ctxRef = useRef<gsap.Context | null>(null);
  const pathRef = useRef(pathname);

  // SplitText rewrites heading DOM. useGSAP's revert runs in a layout-effect cleanup,
  // which is after React has already tried to removeChild the old route — that throws
  // NotFoundError on soft navigations. Revert during render, before commit.
  if (pathRef.current !== pathname) {
    pathRef.current = pathname;
    ctxRef.current?.revert();
    ctxRef.current = null;
  }

  useGSAP(
    (ctx, contextSafe) => {
      ctxRef.current = ctx;
      const html = document.documentElement;
      const el = root.current;
      if (!el) return;
      const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = el) => Array.from(scope.querySelectorAll<T>(sel) as NodeListOf<T>);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 961px) and (prefers-reduced-motion: no-preference)",
          fine: "(pointer: fine) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { motion, desktop, fine } = ctx.conditions as { motion: boolean; desktop: boolean; fine: boolean };
          if (!motion) {
            html.classList.remove("motion-pending");
            return;
          }

          // ---------- hero ----------
          const hero = el.querySelector<HTMLElement>("[data-hero]");
          if (hero) {
            const h1 = hero.querySelector<HTMLElement>("[data-split]");
            const media = hero.querySelector<HTMLElement>("[data-hero-media] img");
            const tl = gsap.timeline({ defaults: { ease: EASE } });
            if (media) tl.fromTo(media, { scale: 1.22 }, { scale: 1.06, duration: 2.4, ease: "expo.out" }, 0);
            if (h1) {
              const split = SplitText.create(h1, { type: "lines", mask: "lines", linesClass: "line" });
              tl.from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.1, ease: "expo.out" }, 0.15);
            }
            tl.from($$(".crumbs, .lead, .actions", hero), { opacity: 0, y: 24, duration: 0.8, stagger: 0.08 }, 0.45);
            tl.from(hero.querySelector(".form-card"), { opacity: 0, y: 48, duration: 1, ease: "expo.out" }, 0.55);
            tl.from($$(".hero-facts li", hero), { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, 0.8);
            // the photo drifts as the hero scrolls away
            if (media)
              gsap.to(media, { yPercent: 12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
          }

          // utility pages: same headline treatment without a photo
          const top = el.querySelector<HTMLElement>(".page-top [data-split]");
          if (top) {
            const split = SplitText.create(top, { type: "lines", mask: "lines", linesClass: "line" });
            gsap.from(split.lines, { yPercent: 110, duration: 1.1, stagger: 0.1, ease: "expo.out", delay: 0.1 });
            gsap.from(el.querySelectorAll(".page-top .lead"), { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: EASE });
          }
          html.classList.remove("motion-pending");

          // Pinned sections first: they add scroll length, so every trigger after them
          // must be measured with that length already in place.
          // ---------- services rail ----------
          $$("[data-rail]").forEach((rail) => {
            const track = rail.querySelector<HTMLElement>("[data-rail-track]");
            const bar = rail.querySelector<HTMLElement>("[data-rail-progress]");
            const panels = $$(".rail-panel", rail);
            if (!track) return;
            if (desktop) {
              const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
              const tween = gsap.to(track, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                  trigger: rail,
                  start: "top top",
                  end: () => `+=${distance()}`,
                  pin: true,
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                  onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
                },
              });
              // each panel's photo drifts against the slide
              panels.forEach((panel) => {
                const img = panel.querySelector("img");
                if (img)
                  gsap.fromTo(img, { xPercent: 6 }, { xPercent: -6, ease: "none", scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left right", end: "right left", scrub: true } });
              });
            }
            gsap.from(panels, { opacity: 0, y: 60, duration: 1, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: track, start: "top 85%", once: true } });
          });

          // ---------- leak story ----------
          $$("[data-story]").forEach((story) => {
            const steps = $$("[data-story-step]", story);
            const shots = $$("[data-story-shot]", story);
            const pin = story.querySelector<HTMLElement>(".story-pin");
            if (!desktop || !pin || shots.length < 2) return;
            story.classList.add("is-pinning");
            const setActive = (i: number) => steps.forEach((s, j) => s.classList.toggle("is-active", i === j));
            setActive(0);
            gsap.set(shots.slice(1), { opacity: 0, scale: 1.08 });
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: story,
                start: "top top",
                end: `+=${(shots.length - 1) * 85}%`,
                pin: pin,
                scrub: 0.6,
                onUpdate: (self) => setActive(Math.min(steps.length - 1, Math.round(self.progress * (steps.length - 1)))),
              },
            });
            shots.forEach((shot, i) => {
              if (i === 0) return;
              tl.to(shot, { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" }).to(shots[i - 1], { scale: 0.96, duration: 1, ease: "power2.inOut" }, "<");
            });
            ctx.add(() => () => story.classList.remove("is-pinning"));
          });

          // ---------- section headings rise line by line ----------
          $$("[data-split]").forEach((h) => {
            if (h.closest("[data-hero], .page-top")) return;
            const split = SplitText.create(h, { type: "lines", mask: "lines", linesClass: "line" });
            // headings inside pinned sections measure from the section, which is not moved by its own pin
            const pinned = h.closest<HTMLElement>("[data-story], [data-rail]");
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1,
              stagger: 0.08,
              ease: "expo.out",
              scrollTrigger: pinned ? { trigger: pinned, start: "top 75%", once: true } : { trigger: h, start: "top 86%", once: true },
            });
          });

          // ---------- statement: words light up with the scroll ----------
          $$("[data-words]").forEach((p) => {
            const split = SplitText.create(p, { type: "words" });
            gsap.fromTo(
              split.words,
              { opacity: 0.16 },
              { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: p, start: "top 78%", end: "bottom 42%", scrub: 0.5 } },
            );
          });

          // ---------- batched fade-up reveals ----------
          const targets = gsap.utils.toArray<HTMLElement>(REVEAL, el).filter((t) => !t.closest("[data-hero], .page-top, .form-card"));
          if (targets.length) {
            gsap.set(targets, { opacity: 0, y: 28 });
            ScrollTrigger.batch(targets, {
              start: "top 90%",
              once: true,
              onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.07, ease: EASE, overwrite: true }),
            });
          }

          // process steps: connector lines grow after each number
          $$("[data-steps]").forEach((list) => {
            const lis = $$("li", list);
            gsap.set(lis, { "--line": 0 });
            ScrollTrigger.create({
              trigger: list,
              start: "top 80%",
              once: true,
              onEnter: () => gsap.to(lis, { "--line": 1, duration: 0.7, stagger: 0.16, delay: 0.3, ease: "power2.inOut" }),
            });
          });

          // ---------- photo frames wipe open and drift ----------
          $$("[data-parallax]").forEach((frame) => {
            const img = frame.querySelector("img");
            gsap.fromTo(frame, { clipPath: "inset(12% 12% 12% 12% round 16px)" }, { clipPath: "inset(0% 0% 0% 0% round 16px)", duration: 1.3, ease: "expo.inOut", scrollTrigger: { trigger: frame, start: "top 85%", once: true } });
            if (img) gsap.fromTo(img, { yPercent: -6, scale: 1.14 }, { yPercent: 6, scale: 1.14, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } });
          });
          $$(".pnote").forEach((fig) => {
            gsap.from(fig, { clipPath: "inset(10% 10% 10% 10% round 16px)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: fig, start: "top 88%", once: true } });
          });

          // ---------- photo report: circles draw with the scroll ----------
          $$("[data-report]").forEach((report) => {
            const marks = $$<SVGPathElement>(".mark", report);
            const pins = $$(".pin", report);
            const notes = $$(".notes li", report);
            const figure = report.querySelector(".pnote");
            gsap.set(marks, { strokeDashoffset: 1 });
            gsap.set(pins, { scale: 0 });
            gsap.set(notes, { opacity: 0.3 });
            const tl = gsap.timeline({ scrollTrigger: { trigger: figure ?? report, start: "top 75%", end: "bottom 55%", scrub: 0.6 } });
            marks.forEach((m, i) => {
              tl.to(m, { strokeDashoffset: 0, duration: 1, ease: "none" })
                .to(pins[i], { scale: 1, duration: 0.3, ease: "back.out(2)" }, "-=0.25")
                .to(notes[i], { opacity: 1, duration: 0.3 }, "<");
            });
          });

          // ---------- licence numbers decode ----------
          $$("[data-scramble]").forEach((n) => {
            const value = n.dataset.scramble ?? n.textContent ?? "";
            ScrollTrigger.create({
              trigger: n,
              start: "top 88%",
              once: true,
              onEnter: () => gsap.to(n, { duration: 1.4, scrambleText: { text: value, chars: "0123456789", revealDelay: 0.3, speed: 0.6 }, ease: "none" }),
            });
          });

          // ---------- magnetic phone number ----------
          if (fine && contextSafe) {
            $$("[data-magnetic]").forEach((m) => {
              const xTo = gsap.quickTo(m, "x", { duration: 0.6, ease: "power3" });
              const yTo = gsap.quickTo(m, "y", { duration: 0.6, ease: "power3" });
              const move = contextSafe((e: MouseEvent) => {
                const r = m.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * 0.12);
                yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
              });
              const leave = contextSafe(() => {
                xTo(0);
                yTo(0);
              });
              m.addEventListener("mousemove", move);
              m.addEventListener("mouseleave", leave);
              ctx.add(() => () => {
                m.removeEventListener("mousemove", move);
                m.removeEventListener("mouseleave", leave);
              });
            });
          }
        },
      );

      // ---------- header: transparent over the hero, solid after; hides going down ----------
      const header = el.querySelector<HTMLElement>(".header");
      const hasHero = !!el.querySelector("[data-hero]");
      let headerTrigger: ScrollTrigger | undefined;
      if (header) {
        header.classList.toggle("is-scrolled", !hasHero || window.scrollY > 40);
        headerTrigger = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const y = self.scroll();
            const menuOpen = header.classList.contains("menu-open");
            header.classList.toggle("is-scrolled", !hasHero || y > 40);
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            header.classList.toggle("is-hidden", !reduce && !menuOpen && y > 480 && self.direction === 1);
          },
        });
      }

      // hovering or focusing a note highlights its circle (with or without motion)
      const cleanups: (() => void)[] = [];
      $$("[data-report]").forEach((report) => {
        const marks = $$(".mark", report);
        const pins = $$(".pin", report);
        const notes = $$(".notes li", report);
        notes.forEach((li, i) => {
          li.tabIndex = 0;
          const on = () => {
            report.classList.add("has-focus");
            [marks, pins, notes].forEach((group) => group.forEach((n, j) => n.classList.toggle("on", i === j)));
          };
          const off = () => {
            report.classList.remove("has-focus");
            [...marks, ...pins, ...notes].forEach((n) => n.classList.remove("on"));
          };
          li.addEventListener("mouseenter", on);
          li.addEventListener("mouseleave", off);
          li.addEventListener("focusin", on);
          li.addEventListener("focusout", off);
          cleanups.push(() => {
            li.removeEventListener("mouseenter", on);
            li.removeEventListener("mouseleave", off);
            li.removeEventListener("focusin", on);
            li.removeEventListener("focusout", off);
          });
        });
      });

      // keep triggers in page order, and re-measure once fonts settle line breaks
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => {
        cleanups.forEach((c) => c());
        headerTrigger?.kill();
        mm.revert();
        if (ctxRef.current === ctx) ctxRef.current = null;
      };
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root} className="motion-root">
      {children}
    </div>
  );
}
