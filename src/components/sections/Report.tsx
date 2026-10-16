import { PhotoNotes, NoteList, type Note } from "@/components/ui/PhotoNotes";
import type { PhotoKey } from "@/lib/photos";

// The "photo report" section: a marked-up photo whose circles draw as you scroll,
// with the matching notes beside it. Hover a note to find it on the photo.
export function Report({
  heading,
  children,
  photo,
  notes,
  caption = "How we mark up what we find. Example photo.",
  surface,
}: {
  heading: React.ReactNode;
  children?: React.ReactNode;
  photo: PhotoKey;
  notes: Note[];
  caption?: string;
  surface?: boolean;
}) {
  return (
    <section className={`section${surface ? " surface" : ""}`} data-report>
      <div className="wrap grid-12" style={{ alignItems: "start" }}>
        <div className="span-5 stack">
          <h2 className="h2" data-split>
            {heading}
          </h2>
          {children}
          <NoteList notes={notes} />
        </div>
        <div className="span-7 stick">
          <PhotoNotes photo={photo} notes={notes} sizes="(max-width: 960px) 100vw, 760px" />
          <p className="caption">{caption}</p>
        </div>
      </div>
    </section>
  );
}
