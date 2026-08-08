import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export function CTABand({
  title = "Ready to outfit your school?",
  description = "Tell us about your student strength, timeline, and style requirements — we'll take it from there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <AnimatedSection className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-2xl text-3xl leading-tight text-ivory-50 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ivory-100/75">
            {description}
          </p>
          <Button href="/contact" variant="secondary">
            Request a Quote
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
