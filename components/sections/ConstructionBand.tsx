import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { QUALITY_CHECKS } from "@/lib/content/catalogue";

const FRAMES = [
  {
    src: "/images/beyond-school/handshake-fabric-swatches.webp",
    alt: "Two men shaking hands over fabric swatches and folded garments in a uniform showroom",
    caption: QUALITY_CHECKS[3],
  },
  {
    src: "/images/product/navy-blazer-single-student-detail.webp",
    alt: "Navy UniformEdge school blazer with embroidered crest, photographed in detail",
    caption: QUALITY_CHECKS[2],
  },
  {
    src: "/images/campus/winter-uniform-layering-morning-courtyard.webp",
    alt: "Five students in navy blazers over knitwear with grey trousers and skirts on a winter morning",
    caption: QUALITY_CHECKS[0],
  },
] as const;

export function ConstructionBand() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <StitchHeading
          title="Material and construction"
          description="The checks we already publish on the products page — shown here against the garments and floor they describe."
        />
        <AnimatedSection className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {FRAMES.map((frame) => (
            <figure key={frame.src}>
              <EditorialImage
                src={frame.src}
                alt={frame.alt}
                sizes="(min-width: 640px) 30vw, 92vw"
                aspect="aspect-[4/5]"
              />
              <figcaption className="mt-4 text-sm leading-relaxed text-ink-700">
                {frame.caption}
              </figcaption>
            </figure>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
