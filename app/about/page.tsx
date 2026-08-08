import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CTABand } from "@/components/sections/CTABand";
import { COMPANY } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind UniformEdge — a Delhi tailoring heritage dating back to 1995, and our approach to manufacturing school uniforms today.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A tailoring heritage, carried forward"
        description="UniformEdge builds on three decades of experience clothing Delhi's students."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <SectionHeading eyebrow="Our Story" title="Where it began" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
              <p>{COMPANY.foundingStory.origin}</p>
              <p>{COMPANY.foundingStory.growth}</p>
              <p>{COMPANY.foundingStory.relationshipNote}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-16">
            <SectionHeading
              eyebrow="Manufacturing"
              title="How we build every order"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
              <p>{COMPANY.manufacturing.ownFacility}</p>
              <p>{COMPANY.manufacturing.outsourcing}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mt-16">
            <SectionHeading eyebrow="Vision & Mission" title="What drives us" />
            <p className="font-display mt-6 text-2xl leading-snug text-navy-900">
              {COMPANY.vision.statement}
            </p>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-700">
              {COMPANY.vision.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {COMPANY.vision.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-navy-900/10 bg-white p-6"
                >
                  <dt className="font-display text-lg text-navy-900">
                    {pillar.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                    {pillar.body}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-16">
            <SectionHeading eyebrow="Leadership" title="A message from our team" />
            <blockquote className="mt-6 space-y-5 border-l-4 border-crimson-500 pl-6 text-base leading-relaxed text-ink-700">
              <p>
                We have been clothing Delhi&apos;s students since 1995, and the
                thing that has kept schools with us is not a price list — it is
                that we treat the uniform as part of the school, not as stock to
                be shipped.
              </p>
              <p>
                We would rather get the colour right before we cut than explain
                it afterwards. If you are weighing up a change of supplier, we
                are glad to talk it through honestly, including where we are not
                the right fit.
              </p>
            </blockquote>
          </AnimatedSection>
        </Container>
      </section>

      <CTABand
        title="Want to know more about how we work?"
        description="We're happy to walk you through our process, facility, and past school partnerships."
      />
    </>
  );
}
