import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";

const VALUES = [
  {
    title: "In-House Manufacturing",
    body: "Our own Delhi facility gives us direct control over cutting, stitching, and quality — not a third party we simply place orders with.",
  },
  {
    title: "Flexible at Scale",
    body: "When volumes call for it, we bring in trusted outsourced production partners, so peak-season demand never compromises delivery.",
  },
  {
    title: "A Tailoring Heritage Since 1995",
    body: "Our roots trace back to a small Delhi shop in 1995 — three decades of experience in what school communities actually need.",
  },
];

export function ValueProps() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why UniformEdge"
          title="Manufacturing built around schools, not the other way around"
          align="center"
          className="mx-auto"
        />
        <AnimatedGrid className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <AnimatedGridItem key={value.title}>
              <Card className="h-full">
                <h3 className="font-display text-xl text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {value.body}
                </p>
              </Card>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </Container>
    </section>
  );
}
