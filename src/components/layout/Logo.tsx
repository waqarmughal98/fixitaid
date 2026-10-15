import Image from "next/image";
import Link from "next/link";

// Brand logo (public/images/logo.png, transparent, 436x286). Gold on the dark header and footer.
export function LogoImage({ priority }: { priority?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Fix It Aid"
      width={436}
      height={286}
      priority={priority}
      className="logo-img"
    />
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link className="logo" href={href} aria-label="Fix It Aid, home">
      <LogoImage priority />
    </Link>
  );
}
