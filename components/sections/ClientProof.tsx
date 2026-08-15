import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CLIENT_PROOF } from "@/lib/content/clients";

// Replaces the crest grid. Client names and logos are withheld pending written
// permission (see lib/content/clients.ts), so this states who we supply by type
// rather than by name, and offers references on request — which is how B2B
// suppliers normally handle exactly this situation.
export function ClientProof() {
  return (
    <section className="border-y border-navy-900/10 bg-ivory-100/60 py-14">
      <Container>
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Who we supply
          </p>

          <dl className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {CLIENT_PROOF.map((item) => (
              <div key={item.label} className="text-center">
                <dt className="font-display text-lg text-navy-900">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-center text-sm text-ink-500">
            We don&apos;t publish client names or crests without their
            permission.{" "}
            <Link
              href="/contact"
              className="font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
            >
              References available on request
            </Link>
            .
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
