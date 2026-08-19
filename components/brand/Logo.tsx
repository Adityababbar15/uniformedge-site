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
 *   primary-lockup   default — site header, letterheads, invoices
 *   wordmark-only    where the icon already appears on the same surface
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
  const suffix = tone === "navy" ? "" : `-${tone}`;
  return `/images/brand/logo/uniformedge-${variant}${suffix}.svg`;
}

export function Logo({
  variant = "primary-lockup",
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

/** Decorative icon. Hidden from assistive tech — it never carries meaning alone. */
export function LogoIcon({
  tone = "navy",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src("icon", tone)}
      alt=""
      aria-hidden="true"
      className={className}
      width={256}
      height={256}
      decoding="async"
    />
  );
}
