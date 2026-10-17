"use client";

import { useEffect, useRef, useState } from "react";

// Autoplays muted (browsers only allow that), pauses when scrolled away, and shows an Unmute
// button. Clicking it restarts the video from the beginning with sound on.
export function VideoPlayer({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {}
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const unmute = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.loop = false;
    setMuted(false);
    v.play().catch(() => {});
  };

  return (
    <>
      <video ref={ref} muted loop playsInline preload="metadata" poster={poster} controls={!muted} aria-label={label}>
        <source src={src} type="video/mp4" />
      </video>
      {muted && (
        <button type="button" className="btn btn-gold video-sound" onClick={unmute} aria-label="Unmute and play the video from the start">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" opacity=".35" />
            <path d="M3 9v6h4l5 4V5L7 9H3z" />
            <path d="m16 9.5 5 5m0-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          Unmute
        </button>
      )}
    </>
  );
}
