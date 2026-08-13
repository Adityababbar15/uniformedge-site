import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { SECTORS } from "@/lib/content/sectors";

// Sits high on the homepage: a corporate or hospital buyer arriving from search
// needs to see themselves listed before they decide this is "the school uniform
// company" and leave.
export function SectorsBand() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sectors"
          title="Who we manufacture for"
          description="Schools since 1995, and — from the same facility and the same quality checks — offices, hospitals, kitchens and industrial sites."
        />

        <AnimatedGrid className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SECTORS.map((sector) => (
            <AnimatedGridItem key={sector.slug}>
              <Link
                href={sector.href}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 transition-colors hover:border-crimson-500/50"
              >
                {sector.isCore && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-crimson-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-crimson-600">
                    Core
                  </span>
                )}
                <h3 className="font-display text-lg leading-snug text-navy-900 transition-colors group-hover:text-crimson-600">
                  {sector.navLabel}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                  {sector.summary}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 text-sm font-medium text-crimson-600"
                >
                  View range &rarr;
                </span>
              </Link>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Container>
    </section>
  );
}
