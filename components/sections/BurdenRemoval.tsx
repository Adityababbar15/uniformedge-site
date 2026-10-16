import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { StockIcon, MoneyIcon, MeasureIcon, ChatIcon } from "@/components/graphics/Icons";

const STOPS = [
  {
    Icon: StockIcon,
    title: "Holding stock",
    body: "No storeroom full of sizes nobody ordered, and no cupboard of last year's blazers.",
  },
  {
    Icon: MoneyIcon,
    title: "Handling money",
    body: "Parents pay us directly. No uniform cash through the school office, no reconciliation.",
  },
  {
    Icon: MeasureIcon,
    title: "Chasing sizes",
    body: "Exchanges and mid-year replacements come to us. A parent with an outgrown blazer messages us, not you.",
  },
  {
    Icon: ChatIcon,
    title: "Fielding complaints",
    body: "Fit, quality and delivery questions land with the people who can actually fix them.",
  },
];

export function BurdenRemoval() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <StitchHeading
          title="Appoint us, and the uniform stops being your problem"
          description="Once a school works with us, we sell to its parents directly. The school sets the specification and approves the samples — and then hands the running of it to us."
        />

        <AnimatedGrid className="mt-14">
          <ul className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
            {STOPS.map((item) => (
              <li key={item.title}>
                <AnimatedGridItem className="border-t border-navy-900/10 pt-6">
                  <div className="flex items-center gap-3">
                    <item.Icon className="h-6 w-6 shrink-0 text-crimson-600" />
                    <h3 className="font-display text-xl text-navy-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink-700">
                    {item.body}
                  </p>
                </AnimatedGridItem>
              </li>
            ))}
          </ul>
        </AnimatedGrid>

        <AnimatedSection className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" variant="primary">
            Talk to us about your school
          </Button>
          <Button href="/school-programs" variant="ghost">
            See how programmes work
          </Button>
        </AnimatedSection>
        <p className="mt-4 text-sm leading-relaxed text-ink-500">
          You keep control of the specification. We take the operations.
        </p>
      </Container>
    </section>
  );
}
