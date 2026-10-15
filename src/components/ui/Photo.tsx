import { photos, photoUrl, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  /** Width/height ratio of the crop, e.g. 4/3. */
  ratio?: number;
  /** `sizes` attribute: how wide the image is shown. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string;
};

const WIDTHS = [480, 800, 1200, 1600];

// Responsive <img> from the Unsplash CDN, cropped to `ratio`.
export function Photo({ name, ratio = 4 / 3, sizes = "100vw", priority, className, alt }: Props) {
  const p = photos[name];
  const h = (w: number) => Math.round(w / ratio);
  const crop = "crop" in p ? p.crop : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={photoUrl(p.id, 1200, h(1200), crop)}
      srcSet={WIDTHS.map((w) => `${photoUrl(p.id, w, h(w), crop)} ${w}w`).join(", ")}
      sizes={sizes}
      width={1200}
      height={h(1200)}
      alt={alt ?? p.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={{ objectPosition: "focus" in p ? p.focus : undefined }}
    />
  );
}
