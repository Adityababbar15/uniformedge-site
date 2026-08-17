import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { COMPANY, SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with UniformEdge to discuss school uniform requirements, samples, and quotes.",
  alternates: { canonical: `${SITE_URL}/contact/` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your school's uniforms"
        description="Reach out with your requirements and we'll get back to you."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <AnimatedSection>
            <h2 className="font-display text-2xl text-navy-900">
              Get in touch
            </h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Location
                </dt>
                <dd className="mt-1 text-base text-ink-900">{COMPANY.city}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={COMPANY.phoneHref}
                    className="text-base text-ink-900 underline decoration-crimson-500/60 underline-offset-4 hover:text-navy-900"
                  >
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-base text-ink-900 underline decoration-crimson-500/60 underline-offset-4 hover:text-navy-900"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
