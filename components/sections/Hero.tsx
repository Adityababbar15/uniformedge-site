import { HeroImage } from "@/components/motion/HeroImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

// The hero image is composed with its subjects in the right third and clean wall
// on the left, so on lg+ it runs full-bleed behind the copy. Below lg that crop
// would put text over faces, so the image becomes a band instead — placed ABOVE
// the copy, so a phone's first screen shows the students rather than a wall of
// text, with the headline and first button still inside 812px.
export function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-navy-950 lg:block">
      <Container className="relative z-10 py-8 sm:py-20 lg:py-32">
        <div className="lg:max-w-xl">
          <p className="hero-rise [--i:0] mb-4 text-sm font-medium text-crimson-300 sm:mb-5 sm:text-base">
            Tailoring roots in Delhi since 1995
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-ivory-50 sm:text-5xl lg:text-6xl">
            {COMPANY.tagline.split(", ").map((line, i, all) => (
              <span key={line} className="hero-line">
                <span style={{ ["--i" as string]: i } as React.CSSProperties}>
                  {line}
                  {i < all.length - 1 ? "," : ""}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-rise [--i:1] mt-4 max-w-lg text-base leading-relaxed text-ivory-100/75 sm:mt-6 sm:text-lg">
            School uniforms are our core, on tailoring roots going back to 1995. From the same Delhi
            facility we also manufacture corporate, healthcare, hospitality and
            industrial uniforms
            <span className="hidden sm:inline">
              {" "}— for organisations that expect tailoring quality, colour
              consistency, and a partner who stands behind every order
            </span>
            .
          </p>
          <div className="hero-rise [--i:2] mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Button href="/contact" variant="secondary">
              Request a quote
            </Button>
            <Button
              href="/products"
              variant="ghost"
              className="border-ivory-50/25 text-ivory-50 hover:border-ivory-50/60"
            >
              Explore products
            </Button>
          </div>
        </div>
      </Container>

      <div className="hero-wipe relative order-first h-56 w-full overflow-hidden sm:h-80 lg:absolute lg:inset-0 lg:order-none lg:h-full">
        <HeroImage
          src="/images/hero/two-students-portrait-negative-space.webp"
          alt="Two senior students in navy UniformEdge blazers, white shirts and navy ties"
          className="hero-settle object-cover object-[88%_center] lg:object-right"
        />
        {/* Holds the copy area dark, then falls off fast so the subjects aren't muddied. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent lg:bg-[linear-gradient(to_right,rgba(10,18,32,0.97)_0%,rgba(10,18,32,0.92)_34%,rgba(10,18,32,0.4)_56%,rgba(10,18,32,0)_74%)]"
        />
      </div>
      {/* A running stitch sewn along the foot of the hero. */}
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
