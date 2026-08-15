import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AIPlaceholderBanner } from "@/components/gallery/AIPlaceholderBanner";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { CTABand } from "@/components/sections/CTABand";
import { CONTEXT_IMAGES } from "@/lib/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at UniformEdge uniform styles across schools, corporate, healthcare, hospitality and industrial sectors.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Uniform styles across every sector"
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
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="School Partners"
            title="Who these uniforms are made for"
            description="We supply international, global and convent schools across Delhi NCR, alongside diagnostic and pathology laboratories."
          />
          <p className="mt-6 text-base leading-relaxed text-ink-700">
            We don&apos;t publish our clients&apos; names or crests without their
            written permission — a school&apos;s crest is its own mark to control,
            not ours to advertise with. If you would like to speak to a school we
            already supply, ask us and we will arrange an introduction.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Request a reference
            </Button>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
