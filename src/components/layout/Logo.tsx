import Image from "next/image";
import Link from "next/link";

// Brand logo (public/images/logo.webp, transparent, 2x the 96px footer height). Gold on the dark header and footer.
// logo.png stays as the full-size original for schema.org and sharing.
export function LogoImage({ priority }: { priority?: boolean }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Fix It Aid"
      width={293}
      height={192}
      loading={priority ? "eager" : "lazy"}
      // never the LCP element: let the hero photo and fonts have the bandwidth first
      fetchPriority="low"
      unoptimized
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
