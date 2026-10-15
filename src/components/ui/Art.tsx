import type { CSSProperties } from "react";

export type ArtName = "house" | "wall" | "roof" | "cold" | "stage1" | "stage2" | "stage3" | "van";

type Props = {
  name: ArtName;
  viewBox: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  slice?: boolean;
};

// The mockup's drawings live in public/art.svg (about 140 KB) so they are cached
// once instead of being inlined into every page.
export function Art({ name, viewBox, label, className, style, slice }: Props) {
  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      role="img"
      aria-label={label}
      preserveAspectRatio={slice ? "xMidYMid slice" : undefined}
    >
      <use href={`/art.svg#art-${name}`} />
    </svg>
  );
}
