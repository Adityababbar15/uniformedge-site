import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/content/company";

// The hero image is composed with its subjects in the right third and clean wall
// on the left, so on lg+ it runs full-bleed behind the copy. Below lg that crop
// would put text over faces, so the image drops to a band beneath the copy instead.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <Container className="relative z-10 py-16 sm:py-20 lg:py-32">
        <div className="lg:max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-crimson-400">
            {COMPANY.city} &middot; Since 1995
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-ivory-50 sm:text-5xl lg:text-6xl">
            {COMPANY.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory-100/75 sm:text-lg">
            School uniforms have been our core since 1995. From the same Delhi
            facility we also manufacture corporate, healthcare, hospitality and
            industrial uniforms — for organisations that expect tailoring
            quality, colour consistency, and a partner who stands behind every
            order.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary">
              Request a Quote
            </Button>
            <Button
              href="/products"
              variant="ghost"
              className="border-ivory-50/25 text-ivory-50 hover:border-ivory-50/60"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative h-64 w-full sm:h-80 lg:absolute lg:inset-0 lg:h-full">
        <Image
          src="/images/hero/two-students-portrait-negative-space.webp"
          alt="Two senior students in navy UniformEdge blazers, white shirts and navy ties"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[88%_center] lg:object-right"
        />
        {/* Holds the copy area dark, then falls off fast so the subjects aren't muddied. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent lg:bg-[linear-gradient(to_right,rgba(10,18,32,0.97)_0%,rgba(10,18,32,0.92)_34%,rgba(10,18,32,0.4)_56%,rgba(10,18,32,0)_74%)]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-crimson-300 backdrop-blur lg:left-auto lg:right-4">
          AI Placeholder
        </span>
      </div>
    </section>
  );
}
