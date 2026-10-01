import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CTABand } from "@/components/sections/CTABand";
import { SITE_URL } from "@/lib/content/company";
import {
  schoolsByCity,
  HAS_PUBLISHED_SCHOOLS,
} from "@/lib/content/partner-schools";

export const metadata: Metadata = {
  title: "Partner Schools",
  description:
    "Find your school's uniform range. UniformEdge supplies schools across Delhi NCR, with a dedicated ordering page for each partner school.",
  alternates: { canonical: `${SITE_URL}/schools/` },
  // Until a school has granted written permission there is nothing here worth
  // indexing, and an empty directory ranking for "partner schools" would be a
  // thin-content signal on a young domain.
  robots: HAS_PUBLISHED_SCHOOLS ? undefined : { index: false, follow: true },
};

export default function SchoolsPage() {
  const groups = schoolsByCity();

  return (
    <>
      <PageHero
        eyebrow="Partner schools"
        title="Find your school"
        description="Each partner school has its own ordering page, showing only the garments held for that school."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {HAS_PUBLISHED_SCHOOLS ? (
            <div className="space-y-14">
              {groups.map((group) => (
                <AnimatedSection key={group.city}>
                  <h2 className="font-display text-2xl text-navy-900">
                    {group.city}
                  </h2>
                  <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.schools.map((school) => (
                      <li key={school.slug}>
                        <Link
                          href={`/schools/${school.slug}`}
                          className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 transition-colors hover:border-crimson-500/40"
                        >
                          <span className="font-display text-lg leading-snug text-navy-900">
                            {school.name}
                          </span>
                          <span className="mt-1 text-sm text-ink-500">
                            {school.locality}
                          </span>
                          <span className="mt-4 text-sm font-medium text-crimson-600 underline underline-offset-4">
                            View uniform range &rarr;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            // Honest empty state. We could list the schools we supply and get
            // traffic for their names today — but naming a school asserts a
            // commercial relationship publicly, and that needs their written
            // permission. Same gate that took the crests off the site.
            <AnimatedSection className="mx-auto max-w-2xl">
              <SectionHeading
                eyebrow="Not yet published"
                title="We don't name schools without their permission"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-700">
                <p>
                  We supply international, global and convent schools across
                  Delhi NCR. We don&apos;t list them here, because naming a
                  school publicly asserts a commercial relationship that is
                  theirs to disclose, not ours to advertise with.
                </p>
                <p>
                  As partner schools opt in, each will get its own ordering page
                  listing exactly the garments we hold for them — so parents see
                  their school&apos;s uniform and nothing else.
                </p>
                <p>
                  If you would like to speak to a school we already supply, ask
                  us and we will arrange an introduction.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Request a reference
                </Button>
                <Button href="/parents" variant="ghost">
                  For parents
                </Button>
              </div>
            </AnimatedSection>
          )}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
