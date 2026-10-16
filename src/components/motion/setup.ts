import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

// The motion layer itself. MotionRoot loads this module after the page has loaded, so GSAP
// never competes with the first paint. Anything already on screen by then is left as it is;
// only content further down gets its entrance.

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

/** Below the fold when motion starts, so it can still make an entrance. */
const offscreen = (t: Element) => t.getBoundingClientRect().top > window.innerHeight * 0.9;

export function startMotion(el: HTMLElement): gsap.Context {
  return gsap.context(() => {
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
          if (!motion) return;

          // ---------- hero ----------
          // The intro itself is CSS (globals.css), so it doesn't wait for this script.
          // Here only the photo drifts as the hero scrolls away.
          const hero = el.querySelector<HTMLElement>("[data-hero]");
          const media = hero?.querySelector<HTMLElement>("[data-hero-media] img");
          if (hero && media)
            gsap.to(media, { yPercent: 12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });

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
            if (h.closest("[data-hero], .page-top") || !offscreen(h)) return;
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
          const targets = gsap.utils.toArray<HTMLElement>(REVEAL, el).filter((t) => !t.closest("[data-hero], .page-top, .form-card") && offscreen(t));
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
            if (!offscreen(list)) return;
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
            if (offscreen(frame)) gsap.fromTo(frame, { clipPath: "inset(12% 12% 12% 12% round 16px)" }, { clipPath: "inset(0% 0% 0% 0% round 16px)", duration: 1.3, ease: "expo.inOut", scrollTrigger: { trigger: frame, start: "top 85%", once: true } });
            if (img) gsap.fromTo(img, { yPercent: -6, scale: 1.14 }, { yPercent: 6, scale: 1.14, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } });
          });
          $$(".pnote").forEach((fig) => {
            if (offscreen(fig)) gsap.from(fig, { clipPath: "inset(10% 10% 10% 10% round 16px)", duration: 1.2, ease: "expo.inOut", scrollTrigger: { trigger: fig, start: "top 88%", once: true } });
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
          if (fine) {
            $$("[data-magnetic]").forEach((m) => {
              const xTo = gsap.quickTo(m, "x", { duration: 0.6, ease: "power3" });
              const yTo = gsap.quickTo(m, "y", { duration: 0.6, ease: "power3" });
              const move = (e: MouseEvent) => {
                const r = m.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * 0.12);
                yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
              };
              const leave = () => {
                xTo(0);
                yTo(0);
              };
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
    };
  }, el);
}
