import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { SECTOR_LISTING } from "@/lib/content/sectors";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { HOME_STRIP_IMAGES } from "@/lib/content/gallery";

// Sits high on the homepage: a corporate or hospital buyer arriving from search
// needs to see themselves listed before they decide this is "the school uniform
// company" and leave.
export function SectorsBand() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sectors"
          title="Who we serve"
          description="Schools first, and — from the same facility and the same quality checks — offices, hospitals, kitchens and industrial sites. Branded apparel and business stationery are supplied alongside."
        />

        <AnimatedGrid className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTOR_LISTING.map((sector) => (
            <AnimatedGridItem key={sector.slug} className={sector.isCore ? "sm:col-span-2" : undefined}>
              <Link
                href={sector.href}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-5 transition-colors hover:border-crimson-500/50 sm:p-6"
              >
                {sector.isCore && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-crimson-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-crimson-600">
                    Core
                  </span>
                )}
                <h3 className="font-display text-lg leading-snug text-navy-900 transition-colors group-hover:text-crimson-600">
                  {sector.navLabel}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-700 sm:line-clamp-none">
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

        <div className="mt-10">
          <ImageGrid
            images={HOME_STRIP_IMAGES}
            columns="grid-cols-1 sm:grid-cols-3 [&>*:nth-child(n+2)]:hidden sm:[&>*:nth-child(n+2)]:block"
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 30vw, 92vw"
          />
        </div>
      </Container>
    </section>
  );
}
