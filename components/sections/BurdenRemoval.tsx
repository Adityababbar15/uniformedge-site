import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";

// The strongest argument to a school is not manufacturing quality — it is that
// the uniform stops being the school's problem. We sell direct to parents once
// appointed, so the school holds no stock, handles no money and fields no
// complaints. That was previously one buried line on the site.
const STOPS = [
  {
    title: "Holding stock",
    body: "No storeroom full of sizes nobody ordered, and no cupboard of last year's blazers.",
  },
  {
    title: "Handling money",
    body: "Parents pay us directly. No uniform cash through the school office, no reconciliation.",
  },
  {
    title: "Chasing sizes",
    body: "Exchanges and mid-year replacements come to us. A parent with an outgrown blazer messages us, not you.",
  },
  {
    title: "Fielding complaints",
    body: "Fit, quality and delivery questions land with the people who can actually fix them.",
  },
];

export function BurdenRemoval() {
  return (
    <section className="bg-navy-950 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
            For schools
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory-50 sm:text-4xl">
            Appoint us, and the uniform stops being your problem
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory-100/75">
            Once a school works with us, we sell to its parents directly. The
            school sets the specification and approves the samples — and then
            hands the running of it to us.
          </p>
        </div>

        <AnimatedGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STOPS.map((item) => (
            <AnimatedGridItem key={item.title}>
              <div className="h-full rounded-2xl border border-ivory-50/10 bg-ivory-50/[0.04] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-crimson-400">
                  You stop
                </p>
                <h3 className="font-display mt-2 text-lg text-ivory-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                  {item.body}
                </p>
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>

        <AnimatedSection className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" variant="secondary">
            Talk to us about your school
          </Button>
          <p className="text-sm leading-relaxed text-ivory-100/60">
            You keep control of the specification. We take the operations.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
