import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AIPlaceholderBanner } from "@/components/gallery/AIPlaceholderBanner";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SCHOOL_CLIENTS } from "@/lib/content/clients";
import { CONTEXT_IMAGES } from "@/lib/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at UniformEdge uniform styles and the school partners we work with in Delhi.",
};

export default function GalleryPage() {
  const schoolsWithLogos = SCHOOL_CLIENTS.filter((c) => c.logo);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Uniform styles & school partnerships"
        description="A visual look at what we make, and who we make it for."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="In Context"
            title="The same program, worn through a school day"
            description="Uniforms photographed in classrooms, corridors and on the sports ground — where fit, layering and colour consistency actually show."
          />
          <div className="mt-6">
            <AIPlaceholderBanner />
          </div>
          <div className="mt-8">
            <ImageGrid
              images={CONTEXT_IMAGES}
              columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Uniform Styles"
            title="Looks across our range"
            description="Individual uniform combinations shot on a studio sweep, one garment set per frame."
          />
          <div className="mt-8">
            <ImageGrid />
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="School Partners"
            title="Genuine crests from schools we work with"
          />
          <AnimatedGrid className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {schoolsWithLogos.map((client) => (
              <AnimatedGridItem key={client.name}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="relative h-16 w-full">
                    <Image
                      src={client.logo!}
                      alt={`${client.name} crest`}
                      fill
                      sizes="140px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-ink-500">{client.name}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
