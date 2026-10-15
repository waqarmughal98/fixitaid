import { Photo } from "./Photo";
import type { PhotoKey } from "@/lib/photos";

// The "photo report" device: a photo with hand-drawn gold circles and numbered pins,
// like the marked-up photos customers get after an inspection.
// Positions are percentages of the photo at the given ratio.

export type Note = {
  /** Centre of the circle, % of width / height. */
  x: number;
  y: number;
  /** Circle radius as % of the photo width. */
  r?: number;
  title: string;
  text: React.ReactNode;
};

type Props = {
  photo: PhotoKey;
  notes: Note[];
  ratio?: number;
  sizes?: string;
  priority?: boolean;
  alt?: string;
};

// An almost-closed ellipse with a little overshoot, so it reads as drawn by hand.
function loop(cx: number, cy: number, rx: number, ry: number) {
  const sx = cx + rx * 0.96;
  const sy = cy - ry * 0.28;
  const ex = cx + rx * 0.82;
  const ey = cy - ry * 0.62;
  return `M ${sx} ${sy} A ${rx} ${ry} -6 1 1 ${ex} ${ey} L ${ex + rx * 0.22} ${ey - ry * 0.18}`;
}

export function PhotoNotes({ photo, notes, ratio = 3 / 2, sizes = "(max-width: 900px) 100vw, 640px", priority, alt }: Props) {
  const H = 100 / ratio;
  return (
    <figure className="pnote" style={{ margin: 0 }}>
      <Photo name={photo} ratio={ratio} sizes={sizes} priority={priority} className="photo" alt={alt} />
      {/* viewBox matches the photo's proportions, so circles stay round and the
          draw-on animation (pathLength) works without non-scaling strokes. */}
      <svg className="marks" viewBox={`0 0 100 ${H}`} preserveAspectRatio="none" aria-hidden="true">
        {notes.map((n, i) => {
          const r = n.r ?? 9;
          return (
            <path
              key={i}
              className="mark"
              d={loop(n.x, (n.y * H) / 100, r, r * 0.92)}
              pathLength={1}
              style={{ animationDelay: `${0.35 + i * 0.35}s` }}
            />
          );
        })}
      </svg>
      {notes.map((n, i) => {
        const r = n.r ?? 9;
        return (
          <span
            key={i}
            className="pin"
            aria-hidden="true"
            style={{ left: `${Math.min(n.x + r * 0.72, 96)}%`, top: `${Math.max(n.y - r * ratio * 0.72, 6)}%` }}
          >
            {i + 1}
          </span>
        );
      })}
    </figure>
  );
}

export function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ol className="notes">
      {notes.map((n, i) => (
        <li key={n.title}>
          <span className="n" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <b>{n.title}</b>
            <span className="muted">{n.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
