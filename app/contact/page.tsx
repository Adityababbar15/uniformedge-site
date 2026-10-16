import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { COMPANY, SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact — Uniform Shop in Dwarka, New Delhi",
  description: `Visit or call UniformEdge at ${COMPANY.address.oneLine}, or get in touch about uniforms, samples and quotes.`,
  alternates: { canonical: `${SITE_URL}/contact/` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        description="Share your sector, headcount and timeline — we'll come back with a garment mix and a quote."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <AnimatedSection className="order-2 lg:order-1">
            <h2 className="font-display text-2xl text-navy-900">
              Visit or call
            </h2>
            <dl className="mt-8 space-y-6">
              <div className="border-t border-navy-900/10 pt-5">
                <dt className="text-sm font-medium text-ink-500">Office</dt>
                <dd className="mt-1 text-base text-ink-900">
                  <address className="not-italic">
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.locality}, {COMPANY.address.city}{" "}
                    {COMPANY.address.postalCode}
                  </address>
                </dd>
              </div>
              <div className="border-t border-navy-900/10 pt-5">
                <dt className="text-sm font-medium text-ink-500">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex min-h-11 items-center text-base text-ink-900 underline decoration-crimson-500/60 underline-offset-4 hover:text-navy-900"
                  >
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>
              <div className="border-t border-navy-900/10 pt-5">
                <dt className="text-sm font-medium text-ink-500">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex min-h-11 items-center text-base text-ink-900 underline decoration-crimson-500/60 underline-offset-4 hover:text-navy-900"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-navy-900/10 pt-5">
                <dt className="text-sm font-medium text-ink-500">Follow us</dt>
                <dd className="mt-2">
                  <SocialLinks />
                </dd>
              </div>
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="order-1 lg:order-2">
            <ContactForm />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
