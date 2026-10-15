// A fact the owner has not confirmed yet. `npm run check:placeholders` finds these
// (data-placeholder) in the built HTML so none can go live by accident.
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="ph" data-placeholder="">
      [{children}]
    </span>
  );
}

// Shows the confirmed value, or the placeholder label while it is still missing.
export function Fact({ value, label }: { value: React.ReactNode | null | undefined; label: string }) {
  if (value === null || value === undefined || value === "") return <Placeholder>{label}</Placeholder>;
  return <>{value}</>;
}
