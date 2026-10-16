import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  /** Width/height ratio of the crop, e.g. 4/3. */
  ratio?: number;
  /** `sizes` attribute: how wide the image is shown. */
  sizes?: string;
  /** The page's LCP image: preloaded from <head>. */
  priority?: boolean;
  /** WebP quality; default 72. Lower it for photos under a dark overlay. */
  quality?: number;
  className?: string;
  alt?: string;
};

// Responsive next/image from the self-hosted photo files, cropped to `ratio`.
// lib/image-loader.ts turns each srcset width into its pre-cut file.
export function Photo({ name, ratio = 4 / 3, sizes = "100vw", priority, quality, className, alt }: Props) {
  const p = photos[name];
  const crop = "crop" in p && p.crop === "center" ? "center" : "entropy";
  return (
    <Image
      className={className}
      src={`/images/photos/${p.id}?r=${ratio}&c=${crop}${quality ? `&q=${quality}` : ""}`}
      width={1200}
      height={Math.round(1200 / ratio)}
      sizes={sizes}
      alt={alt ?? p.alt}
      preload={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      style={{ objectPosition: "focus" in p ? p.focus : undefined }}
    />
  );
}
