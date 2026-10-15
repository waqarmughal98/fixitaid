import { Photo } from "@/components/ui/Photo";
import type { PhotoKey } from "@/lib/photos";

export type StoryStep = { photo: PhotoKey; title: string; text: string };

// How a small leak becomes a rebuild, told in four frames. On desktop the section pins:
// scrolling moves through the steps and the photo changes with them. On phones it is a
// simple list.
export function LeakStory({ heading, intro, steps }: { heading: string; intro: React.ReactNode; steps: StoryStep[] }) {
  return (
    <section className="story section surface" data-story style={{ paddingBlock: 0 }}>
      <div className="wrap story-pin">
        <div>
          <h2 className="h2" data-split>
            {heading}
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            {intro}
          </p>
          <ol className="story-steps">
            {steps.map((s, i) => (
              <li key={s.title} data-story-step>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="story-media" aria-hidden="true">
          {steps.map((s, i) => (
            <div className="shot" key={s.title} data-story-shot>
              <Photo name={s.photo} ratio={4 / 3.3} sizes="(max-width: 960px) 100vw, 680px" alt="" />
              <span className="stage">
                <b>{String(i + 1).padStart(2, "0")}</b>
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
