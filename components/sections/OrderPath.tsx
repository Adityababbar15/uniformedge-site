import { Container } from "@/components/ui/Container";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { Stitch } from "@/components/motion/Stitch";
import { PROCESS_STEPS } from "@/lib/content/process";

// The only numbered section on the homepage, because it is the only real
// sequence. Chalk blue is the one ground colour borrowed from the hero photograph.
export function OrderPath() {
  return (
    <section className="bg-chalk-100 py-16 sm:py-24">
      <Container>
        <StitchHeading
          title="From brief to delivery"
          description="How an order moves through our Delhi facility."
        />

        <Stitch className="mt-12 hidden md:block" />
        <AnimatedGrid className="mt-12 md:mt-8">
        <ol className="space-y-8 border-l-2 border-dashed border-crimson-500/60 pl-6 md:grid md:grid-cols-5 md:gap-8 md:space-y-0 md:border-l-0 md:pl-0">
          {PROCESS_STEPS.map((item) => (
            <li key={item.step}>
              <AnimatedGridItem>
              <p className="font-display text-3xl leading-none text-crimson-600">
                {item.step}
              </p>
              <h3 className="mt-3 font-display text-lg text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </AnimatedGridItem>
            </li>
          ))}
        </ol>
        </AnimatedGrid>
      </Container>
    </section>
  );
}
