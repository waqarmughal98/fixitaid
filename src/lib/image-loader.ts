"use client";

import type { ImageLoaderProps } from "next/image";
import { photoUrl } from "./photos";

// next/image loader for the static export. Photos are pre-cut files in public/images/photos,
// one per width, named by lib/photos.ts photoUrl(). The Photo component passes the crop in the
// src (`/images/photos/<id>?r=<ratio>&c=<center|entropy>[&q=<quality>]`) so each width maps to its own file.
// Anything else (the logo) is served as is.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const [path, query] = src.split("?");
  if (!path.startsWith("/images/photos/") || !query) return src;
  const params = new URLSearchParams(query);
  const ratio = Number(params.get("r"));
  const crop = params.get("c") === "center" ? "center" : "entropy";
  const quality = Number(params.get("q")) || undefined;
  return photoUrl(path.slice("/images/photos/".length), width, Math.round(width / ratio), crop, quality);
}
