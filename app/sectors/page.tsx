import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CTABand } from "@/components/sections/CTABand";
import { SECTORS } from "@/lib/content/sectors";
import { SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "UniformEdge manufactures uniforms for schools, corporate teams, healthcare, F&B and hospitality, and industrial sites — from our own facility in Delhi.",
  alternates: { canonical: `${SITE_URL}/sectors` },
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="One cutting floor, five very different jobs"
        description="Schools are our core sector, and the one our tailoring roots come from. The same manufacturing discipline now dresses offices, hospitals, kitchens and factories."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title="Uniforms specified to the sector, not to a template"
            description="A scrub set, a chef coat and a school blazer fail in completely different ways. Each range below is built around what actually goes wrong in that environment."
          />

          <AnimatedGrid className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <AnimatedGridItem key={sector.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
                  <div className="relative aspect-[16/9] bg-ivory-100">
                    {sector.image ? (
                      <>
                        <Image
                          src={sector.image}
                          alt={sector.imageAlt ?? sector.name}
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"
                          className="object-cover"
                        />
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-500">
                        Photography pending
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    {sector.isCore && (
                      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-crimson-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-crimson-600">
                        Our core business
                      </span>
                    )}
                    <h2 className="font-display text-xl text-navy-900">
                      <Link
                        href={sector.href}
                        className="transition-colors hover:text-crimson-600"
                      >
                        {sector.name}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                      {sector.summary}
                    </p>
                    <Link
                      href={sector.href}
                      className="mt-6 inline-block py-1 text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
                    >
                      {sector.isCore ? "See the school range" : `${sector.navLabel} uniforms`}{" "}
                      &rarr;
                    </Link>
                  </div>
                </article>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 bg-ivory-100/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="What carries across"
              title="The same four things, whoever wears it"
            />
            <ul className="mt-8 space-y-5">
              {[
                ["Colour matched to your palette", "Not the nearest available shade — matched from a physical swatch or Pantone reference before cutting, so reorders match what is already in circulation."],
                ["Branding done properly", "Your crest or logo digitised into an embroidery-ready file rather than approximated."],
                ["Checked before it ships", "Colourfastness and shrink-control testing before bulk cutting, and reinforced stitching at the points that actually fail."],
                ["A standing programme", "One relationship year to year, so a new joiner or a replacement garment is a phone call, not a fresh sourcing exercise."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                  />
                  <span>
                    <span className="font-display block text-lg text-navy-900">
                      {title}
                    </span>
                    <span className="mt-1 block text-base leading-relaxed text-ink-700">
                      {body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </Container>
      </section>

      <CTABand
        title="Not sure which range fits?"
        description="Tell us your sector, headcount and what your teams do all day — we'll tell you what we'd specify and why."
      />
    </>
  );
}
