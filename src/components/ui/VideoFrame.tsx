import { site } from "@/config/site";
import { Photo } from "@/components/ui/Photo";

// The video slot beside the home page statement. With a real file it is a normal player.
// Without one it shows a clearly marked placeholder (only while placeholders are on).
export function VideoFrame() {
  const { src, poster, caption } = site.video;
  if (!src) {
    return (
      <figure style={{ margin: 0 }}>
        <div className="video-frame is-empty">
          <Photo name="chicagoAerial" ratio={16 / 10} sizes="(max-width: 960px) 100vw, 520px" className="photo" alt="" />
          <span className="play" aria-hidden="true">
            <span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="ph video-tag" data-placeholder="">
            [Video goes here. Set site.video.src in src/config/site.ts]
          </span>
        </div>
      </figure>
    );
  }
  return (
    <figure style={{ margin: 0 }}>
      <div className="video-frame">
        <video controls playsInline preload="metadata" poster={poster ?? undefined} aria-label={caption ?? "Fix It Aid video"}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {caption && <figcaption className="video-cap">{caption}</figcaption>}
    </figure>
  );
}
