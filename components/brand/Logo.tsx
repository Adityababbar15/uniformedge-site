import { COMPANY } from "@/lib/content/company";

/**
 * Brand marks from the master logo package (brand-assets/master, served copies
 * in public/images/brand/logo).
 *
 * The wordmark is outlined vector — Jost, converted to paths — so nothing
 * re-flows if the font is missing. Never regenerate any of these from a PNG;
 * the SVGs are the masters.
 *
 * Variant use, per the package's own spec:
 *   wordmark-only    DEFAULT — the full UniformEdge name, used everywhere the
 *                    site shows a logo. The client asked for the name alone,
 *                    without the UE monogram.
 *   primary-lockup   available but unused on the site: UE monogram + name
 *   stacked          narrow columns and square placements
 *   icon             profile pictures and tags; fits an 80% circular safe zone
 *   favicon-mark     16–32px only; the E is dropped because it cannot survive
 *
 * Plain <img> rather than next/image: SVGs need no optimisation, and next/image
 * would require dangerouslyAllowSVG.
 */

const DIMS = {
  "primary-lockup": { w: 766.4, h: 146.0 },
  "wordmark-only": { w: 607.3, h: 146.0 },
  stacked: { w: 380.4, h: 289.3 },
  icon: { w: 256, h: 256 },
  "favicon-mark": { w: 256, h: 256 },
} as const;

type LogoVariant = keyof typeof DIMS;
type Tone = "navy" | "white" | "black";

function src(variant: LogoVariant, tone: Tone) {
  // "white" maps to the on-dark artwork, not the package's -white file. That
  // variant flattens the crimson accent to white too, so the mark loses its only
  // colour on a navy ground where colour is perfectly available. -white is kept
  // in the package for genuine single-colour reproduction, like embroidery.
  if (tone === "white" && variant === "wordmark-only") {
    return "/images/brand/logo/uniformedge-wordmark-only-on-dark.svg";
  }
  const suffix = tone === "navy" ? "" : `-${tone}`;
  return `/images/brand/logo/uniformedge-${variant}${suffix}.svg`;
}

export function Logo({
  variant = "wordmark-only",
  tone = "navy",
  className,
  priority,
}: {
  variant?: LogoVariant;
  tone?: Tone;
  className?: string;
  priority?: boolean;
}) {
  const { w, h } = DIMS[variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src(variant, tone)}
      alt={`${COMPANY.name} — ${COMPANY.tagline}`}
      className={className}
      width={w}
      height={h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
