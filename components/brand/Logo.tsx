import { COMPANY } from "@/lib/content/company";

// Logo assets live in public/images/brand/. The wordmark text has been converted
// to vector outlines, so it renders identically without depending on Arial being
// installed. Plain <img> rather than next/image — SVGs need no optimisation and
// next/image would require dangerouslyAllowSVG.

type LogoProps = {
  variant?: "navy" | "white";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "navy", className, priority }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={
        variant === "white"
          ? "/images/brand/wordmark-white.svg"
          : "/images/brand/wordmark.svg"
      }
      alt={`${COMPANY.name} — ${COMPANY.tagline}`}
      className={className}
      width={1290}
      height={235}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function LogoIcon({
  variant = "navy",
  className,
}: {
  variant?: "navy" | "white";
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={
        variant === "white"
          ? "/images/brand/white-icon.svg"
          : "/images/brand/standalone-icon.svg"
      }
      alt=""
      aria-hidden="true"
      className={className}
      width={700}
      height={600}
      decoding="async"
    />
  );
}
