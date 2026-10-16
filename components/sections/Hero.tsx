import { HeroImage } from "@/components/motion/HeroImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

const HEADLINE = COMPANY.tagline.split(", ");

// Pattern: marketing landing. Ivory split — type on the left, framed photograph
// on the right — so the page matches the approved editorial direction without
// painting over the wordmark. Existing tagline and body claims are unchanged.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory-50">
      <Container className="grid grid-cols-1 items-start gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:py-12">
        <div>
          <p className="hero-rise [--i:0] mb-5 text-sm font-medium text-crimson-600">
            Tailoring roots in Delhi since 1995
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl">
            {HEADLINE.map((line, i, all) => (
              <span key={line} className="hero-line">
                <span
                  className={i === 1 ? "italic" : undefined}
                  style={{ ["--i" as string]: i } as React.CSSProperties}
                >
                  {line}
                  {i < all.length - 1 ? "," : ""}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-rise [--i:1] mt-5 max-w-lg text-base leading-relaxed text-ink-700 sm:mt-6 sm:text-lg">
            School uniforms are our core, on tailoring roots going back to 1995.
            From the same Delhi facility we also manufacture corporate, healthcare,
            hospitality and industrial uniforms
            <span className="hidden sm:inline">
              {" "}
              — for organisations that expect tailoring quality, colour
              consistency, and a partner who stands behind every order
            </span>
            .
          </p>
          <div className="hero-rise [--i:2] mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Button href="/contact" variant="primary">
              Request a quote
            </Button>
            <Button href="/sectors" variant="ghost">
              Explore sectors
            </Button>
          </div>
        </div>

        <div className="hero-wipe relative order-first aspect-[4/3] overflow-hidden rounded-xl border border-navy-900/10 sm:aspect-[5/4] lg:order-none lg:aspect-[4/5]">
          <HeroImage
            src="/images/beyond-school/group-all-sectors.webp"
            alt="Seven colleagues in a blazer, scrubs, a chef jacket, coveralls and navy tees standing together"
            sizes="(min-width: 1024px) 42vw, 92vw"
            className="hero-settle object-cover object-center"
          />
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5"
      >
        <div
          className="hero-sew h-full w-full opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-crimson-500) 0 10px, transparent 10px 18px)",
          }}
        />
        <span className="hero-needle" />
      </div>
    </section>
  );
}
