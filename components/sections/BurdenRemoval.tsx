import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { StockIcon, MoneyIcon, MeasureIcon, ChatIcon } from "@/components/graphics/Icons";

// The strongest argument to a school is not manufacturing quality — it is that
// the uniform stops being the school's problem. We sell direct to parents once
// appointed, so the school holds no stock, handles no money and fields no
// complaints. That was previously one buried line on the site.
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
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <StitchHeading
          tone="dark"
          title="Appoint us, and the uniform stops being your problem"
          description="Once a school works with us, we sell to its parents directly. The school sets the specification and approves the samples — and then hands the running of it to us."
        />

        <AnimatedGrid className="mt-14">
        <ul className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
          {STOPS.map((item) => (
            <li key={item.title}>
              <AnimatedGridItem className="border-t border-ivory-50/15 pt-6">
              <div className="flex items-center gap-3">
                <item.Icon className="h-6 w-6 shrink-0 text-crimson-400" />
                <h3 className="font-display text-xl text-ivory-50">{item.title}</h3>
              </div>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ivory-100/70">
                {item.body}
              </p>
              </AnimatedGridItem>
            </li>
          ))}
        </ul>
        </AnimatedGrid>

        <AnimatedSection className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" variant="secondary">
            Talk to us about your school
          </Button>
          <Button
            href="/school-programs"
            variant="ghost"
            className="border-ivory-50/25 text-ivory-50 hover:border-ivory-50/60"
          >
            See how programmes work
          </Button>
        </AnimatedSection>
        <p className="mt-4 text-sm leading-relaxed text-ivory-100/60">
          You keep control of the specification. We take the operations.
        </p>
      </Container>
    </section>
  );
}
