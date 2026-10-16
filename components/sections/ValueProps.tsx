import { Container } from "@/components/ui/Container";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { Stitch } from "@/components/motion/Stitch";

const VALUES = [
  {
    title: "In-house manufacturing",
    body: "Our own Delhi facility gives us direct control over cutting, stitching, and quality — not a third party we simply place orders with.",
  },
  {
    title: "Flexible at scale",
    body: "When volumes call for it, we bring in trusted outsourced production partners, so peak-season demand never compromises delivery.",
  },
  {
    title: "A tailoring heritage since 1995",
    body: "Our roots trace back to a small Delhi shop in 1995 — three decades of experience in what school communities actually need.",
  },
];

export function ValueProps() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <StitchHeading title="Manufacturing built around schools, not the other way around" />
        <AnimatedGrid className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {VALUES.map((value) => (
            <AnimatedGridItem key={value.title}>
              <Stitch className="w-16" />
              <h3 className="mt-5 font-display text-xl text-navy-900">{value.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-ink-700">
                {value.body}
              </p>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Container>
    </section>
  );
}
