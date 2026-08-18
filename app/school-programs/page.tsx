import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StakeholderSections } from "@/components/sections/StakeholderSections";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CTABand } from "@/components/sections/CTABand";
import { SITE_URL } from "@/lib/content/company";
import {
  PROGRAM_TIERS,
  ORDERING_STEPS,
  CATALOGUE_PDF,
} from "@/lib/content/catalogue";

export const metadata: Metadata = {
  title: "School Programs & Bulk Orders",
  description:
    "School uniform programs for single schools, recurring reorders, and multi-branch groups — including GeM tender-eligible supply.",
  alternates: { canonical: `${SITE_URL}/school-programs/` },
};

export default function SchoolProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="School Programs"
        title="A uniform program that fits how your school buys"
        description="Whether you're setting up a first custom uniform or consolidating across branches, the program scales to your size spread and reorder cycle."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Three ways schools work with us"
            description="Pricing depends on garment mix, order volume, and customisation scope — we quote per school rather than publishing a rate card."
          />

          <AnimatedGrid className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PROGRAM_TIERS.map((tier) => (
              <AnimatedGridItem key={tier.name}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-8">
                  <h3 className="font-display text-2xl text-navy-900">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {tier.audience}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-ink-900"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant="ghost"
                    className="mt-8 w-full"
                  >
                    Request a program quote
                  </Button>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <AnimatedSection className="mt-10">
            <p className="rounded-xl border border-navy-900/10 bg-ivory-100/60 px-6 py-5 text-sm leading-relaxed text-ink-700">
              School groups and multi-branch institutions can be supplied
              through <strong className="font-medium text-navy-900">GeM
              tender</strong> processes, with consolidated billing across
              branches.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who this answers to"
            title="Four people evaluate a uniform supplier"
            description="A uniform decision is rarely made by one person. Here is what the program means for each of them — including where we mark our own limits."
          />
          <div className="mt-12">
            <StakeholderSections />
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What changes"
            title="Compared with the arrangement most schools have now"
            description="Not a price comparison — we don't know what you pay today. This is about where the operational work sits."
          />
          <div className="mt-12">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How ordering works"
            title="From first consultation to standing reorders"
            align="center"
            className="mx-auto"
          />
          <AnimatedGrid className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ORDERING_STEPS.map((item) => (
              <AnimatedGridItem key={item.step}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-6">
                  <span className="font-display text-3xl text-crimson-600">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {item.body}
                  </p>
                  {item.planned && (
                    <p className="mt-3 rounded-lg border border-dashed border-crimson-500/60 bg-crimson-100/50 px-3 py-2 text-xs text-navy-800">
                      In development: {item.planned}
                    </p>
                  )}
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={CATALOGUE_PDF} variant="primary" external>
              Download the Catalogue (PDF)
            </Button>
            <Button href="/contact" variant="ghost">
              Speak to our team
            </Button>
          </div>
        </Container>
      </section>

      <CTABand
        title="Let's build your school's uniform program"
        description="Tell us your student strength, branch count, and reorder cycle — we'll put together a program quote."
      />
    </>
  );
}
