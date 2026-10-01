import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { SECTOR_LISTING } from "@/lib/content/sectors";
import { SectorIcon, ArrowIcon } from "@/components/graphics/Icons";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { HOME_STRIP_IMAGES } from "@/lib/content/gallery";
import { cn } from "@/lib/cn";

// Sits high on the homepage: a corporate or hospital buyer arriving from search
// needs to see themselves listed before they decide this is "the school uniform
// company" and leave. A ruled list rather than a grid of cards — seven equal
// cards say "all of these matter equally", and Schools is the core business.
export function SectorsBand() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <StitchHeading
          title="Who we serve"
          description="Schools first, and — from the same facility and the same quality checks — offices, hospitals, kitchens and industrial sites. Branded apparel and business stationery are supplied alongside."
        />

        <AnimatedGrid className="mt-12">
        <ul className="border-t border-navy-900/15">
          {SECTOR_LISTING.map((sector) => (
            <li key={sector.slug} className="border-b border-navy-900/15">
              <AnimatedGridItem>
              <Link
                href={sector.href}
                className="group grid grid-cols-[1.75rem_1fr] items-start gap-x-4 gap-y-1 px-1 py-5 transition-colors hover:bg-ivory-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-crimson-500 sm:grid-cols-[2rem_13rem_1fr_auto] sm:items-center sm:gap-x-8 sm:px-3 sm:py-6"
              >
                <SectorIcon
                  slug={sector.slug}
                  className="row-span-3 mt-1 h-6 w-6 text-navy-800 sm:row-span-1 sm:mt-0"
                />
                <span
                  className={cn(
                    "col-start-2 font-display text-navy-900 transition-colors group-hover:text-crimson-600 sm:col-start-auto",
                    sector.isCore ? "text-2xl" : "text-xl",
                  )}
                >
                  {sector.navLabel}
                </span>
                <span className="col-start-2 text-sm leading-relaxed text-ink-700 sm:col-start-auto">
                  {sector.summary}
                </span>
                <span className="col-start-2 mt-1 inline-flex items-center gap-2 text-sm font-medium text-crimson-600 sm:col-start-auto sm:mt-0">
                  {sector.linkLabel ?? "View range"}
                  <ArrowIcon
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                  />
                </span>
              </Link>
              </AnimatedGridItem>
            </li>
          ))}
        </ul>
        </AnimatedGrid>

        <div className="mt-12">
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
