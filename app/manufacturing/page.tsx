import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CTABand } from "@/components/sections/CTABand";
import { COMPANY, SITE_URL } from "@/lib/content/company";
import { QUALITY_CHECKS, FABRIC_TYPES } from "@/lib/content/catalogue";
import { PROCESS_STEPS } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "How UniformEdge manufactures school uniforms — from our own Delhi facility to trusted outsourced partners for peak-season volumes.",
  alternates: { canonical: `${SITE_URL}/manufacturing/` },
};


export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Made in Delhi, checked at every step"
        description="Direct control where it matters, flexible capacity where it counts."
        image="/images/beyond-school/production-floor-stitching.webp"
        imageAlt="Tailors stitching garments at sewing machines on a bright production floor with stacks of folded navy garments"
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <SectionHeading title="Own facility, flexible capacity" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
              <p>{COMPANY.manufacturing.ownFacility}</p>
              <p>{COMPANY.manufacturing.outsourcing}</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Waste"
            title={COMPANY.manufacturing.sustainability.heading}
          />
          <p className="mt-6 text-base leading-relaxed text-ink-700">
            {COMPANY.manufacturing.sustainability.body}
          </p>
          <p className="mt-5 rounded-xl bg-ivory-100/70 px-5 py-4 text-sm leading-relaxed text-ink-500">
            {COMPANY.manufacturing.sustainability.caveat}
          </p>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title="From consultation to delivery"
            align="center"
            className="mx-auto"
          />
          <AnimatedGrid className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((item) => (
              <AnimatedGridItem key={item.step}>
                <div className="h-full border-t border-navy-900/10 pt-6">
                  <span className="font-display text-3xl text-crimson-600">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {item.body}
                  </p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Fabric & quality"
            title="Built to survive a school year"
            description="A uniform gets washed weekly and worn hard. Fabric choice and finishing are where quality is won or lost."
          />

          <AnimatedGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FABRIC_TYPES.map((fabric) => (
              <AnimatedGridItem key={fabric.name}>
                <div className="h-full border-t border-navy-900/10 pt-6">
                  <h3 className="font-display text-lg text-navy-900">
                    {fabric.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {fabric.body}
                  </p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <AnimatedSection className="mt-12">
            <h3 className="font-display text-xl text-navy-900">
              Quality checks before delivery
            </h3>
            <ul className="mt-6 space-y-3">
              {QUALITY_CHECKS.map((check) => (
                <li key={check} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                  />
                  {check}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </Container>
      </section>

      <CTABand
        title="Curious about our facility or process?"
        description="We're glad to walk your procurement team through it in detail."
      />
    </>
  );
}
