import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { SECTOR_LISTING, type SectorCard } from "@/lib/content/sectors";
import { ArrowIcon } from "@/components/graphics/Icons";
import { cn } from "@/lib/cn";

// Close-up already on the products page — used here so the school row matches
// the editorial "construction" crops in the reference, without new artwork.
const SCHOOL_FEATURE = {
  src: "/images/product/navy-blazer-single-student-detail.webp",
  alt: "Navy UniformEdge school blazer with embroidered crest, photographed in detail",
};

function FeatureCopy({
  sector,
  featured,
}: {
  sector: SectorCard;
  featured?: boolean;
}) {
  return (
    <div className={cn("flex flex-col justify-center", featured && "lg:max-w-md")}>
      <h3
        className={cn(
          "font-display text-navy-900",
          featured ? "text-3xl sm:text-4xl" : "text-2xl",
        )}
      >
        {sector.name}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-ink-700">{sector.summary}</p>
      <Link
        href={sector.href}
        className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-crimson-600 hover:text-crimson-700"
      >
        {sector.linkLabel ?? "View range"}
        <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}

function FeaturedRow({
  sector,
  imageOnRight,
  imageSrc,
  imageAlt,
}: {
  sector: SectorCard;
  imageOnRight?: boolean;
  imageSrc: string;
  imageAlt: string;
}) {
  const image = (
    <EditorialImage
      src={imageSrc}
      alt={imageAlt}
      sizes="(min-width: 1024px) 44vw, 92vw"
      aspect="aspect-[4/3] sm:aspect-[16/10]"
      className={imageOnRight ? "order-first lg:order-none" : undefined}
    />
  );
  const copy = <FeatureCopy sector={sector} featured />;

  return (
    <AnimatedSection className="grid grid-cols-1 items-center gap-8 border-t border-navy-900/10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
      {imageOnRight ? (
        <>
          {copy}
          {image}
        </>
      ) : (
        <>
          {image}
          {copy}
        </>
      )}
    </AnimatedSection>
  );
}

export function SectorsBand() {
  const [schools, corporate, healthcare, ...rest] = SECTOR_LISTING;

  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <StitchHeading
          title="Who we serve"
          description="Schools first, and — from the same facility and the same quality checks — offices, hospitals, kitchens and industrial sites. Branded apparel and business stationery are supplied alongside."
        />

        {schools && (
          <FeaturedRow
            sector={schools}
            imageOnRight
            imageSrc={SCHOOL_FEATURE.src}
            imageAlt={SCHOOL_FEATURE.alt}
          />
        )}
        {corporate?.image && (
          <FeaturedRow
            sector={corporate}
            imageSrc={corporate.image}
            imageAlt={corporate.imageAlt ?? corporate.name}
          />
        )}
        {healthcare?.image && (
          <FeaturedRow
            sector={healthcare}
            imageOnRight
            imageSrc={healthcare.image}
            imageAlt={healthcare.imageAlt ?? healthcare.name}
          />
        )}

        <div className="grid grid-cols-1 gap-12 border-t border-navy-900/10 py-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:py-16">
          {rest.map((sector) => (
            <AnimatedSection key={sector.slug} className="flex flex-col">
              {sector.image && (
                <EditorialImage
                  src={sector.image}
                  alt={sector.imageAlt ?? sector.name}
                  sizes="(min-width: 640px) 44vw, 92vw"
                  aspect="aspect-[16/10]"
                  className="mb-6"
                />
              )}
              <FeatureCopy sector={sector} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
