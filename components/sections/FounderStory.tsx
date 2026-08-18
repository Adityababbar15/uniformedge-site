import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { COMPANY } from "@/lib/content/company";

export function FounderStory() {
  return (
    <section className="bg-ivory-100/60 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-crimson-600">
            Our Story
          </p>
          <h2 className="font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            From a Subhash Nagar shopfront to a Delhi-wide reputation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700">
            {COMPANY.foundingStory.origin} {COMPANY.foundingStory.growth}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {COMPANY.foundingStory.relationshipNote}
          </p>
          <Button href="/about" variant="ghost" className="mt-8">
            Read Our Full Story
          </Button>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
            <dl className="grid grid-cols-2 gap-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Tailoring roots
                </dt>
                <dd className="mt-2 font-display text-3xl text-navy-900">1995</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Delhi Expansion
                </dt>
                <dd className="mt-2 font-display text-3xl text-navy-900">2017</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Manufacturing
                </dt>
                <dd className="mt-2 text-lg text-navy-900">In-house, Delhi</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Founder
                </dt>
                <dd className="mt-2 text-lg text-navy-900">
                  {COMPANY.foundingStory.founderName}
                </dd>
              </div>
            </dl>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
