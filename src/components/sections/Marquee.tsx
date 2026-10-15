// A slow running line of what we fix. Decorative copy of the list is hidden from screen readers.
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) =>
    items.map((t, i) => (
      <span className="marquee-item" key={`${hidden}-${i}`} aria-hidden={hidden || undefined}>
        {t}
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M6 0 7.4 4.6 12 6 7.4 7.4 6 12 4.6 7.4 0 6 4.6 4.6Z" fill="currentColor" />
        </svg>
      </span>
    ));
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
