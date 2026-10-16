import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { COMPANY } from "@/lib/content/company";

export function FounderStory() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <StitchHeading title="From a Subhash Nagar shopfront to a Delhi-wide reputation" />
          <p className="mt-6 text-base leading-relaxed text-ink-700">
            {COMPANY.foundingStory.origin} {COMPANY.foundingStory.growth}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {COMPANY.foundingStory.relationshipNote}
          </p>
          <Button href="/about" variant="ghost" className="mt-8">
            Read our full story
          </Button>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-navy-900/10 pt-10">
            <div>
              <dt className="text-sm text-ink-500">Tailoring roots</dt>
              <dd className="mt-2 font-display text-3xl text-navy-900">1995</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-500">Delhi expansion</dt>
              <dd className="mt-2 font-display text-3xl text-navy-900">2017</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-500">Manufacturing</dt>
              <dd className="mt-2 font-display text-2xl text-navy-900">In-house, Delhi</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-500">Founder</dt>
              <dd className="mt-2 font-display text-2xl text-navy-900">
                {COMPANY.foundingStory.founderName}
              </dd>
            </div>
          </dl>
        </AnimatedSection>
      </Container>
    </section>
  );
}
