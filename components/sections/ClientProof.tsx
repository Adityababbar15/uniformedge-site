import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { CLIENT_PROOF } from "@/lib/content/clients";

// Replaces the crest grid. Client names and logos are withheld pending written
// permission (see lib/content/clients.ts), so this states who we supply by type
// rather than by name, and offers references on request.
export function ClientProof() {
  return (
    <section className="border-t border-navy-900/10 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
          <StitchHeading
            title="Who we supply"
            description="We don't publish client names or crests without their permission. The figures below are the ones we can stand behind today."
          />
          <p className="max-w-md text-sm leading-relaxed text-ink-500 lg:text-right">
            <Link
              href="/contact"
              className="font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
            >
              References available on request
            </Link>
          </p>
        </div>

        <AnimatedSection className="mt-12">
          <dl className="grid grid-cols-1 gap-10 border-t border-navy-900/10 pt-10 sm:grid-cols-3 sm:gap-8">
            {CLIENT_PROOF.map((item) => (
              <div key={item.label} className="border-t border-navy-900/10 pt-6 sm:border-t-0 sm:pt-0">
                <dt className="font-display text-2xl text-navy-900">{item.label}</dt>
                <dd className="mt-2 max-w-xs text-sm leading-relaxed text-ink-700">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </Container>
    </section>
  );
}
