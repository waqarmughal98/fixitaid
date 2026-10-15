import type { IconName } from "./IconSprite";

type Props = { name: IconName; className?: string };

export function Icon({ name, className }: Props) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}
