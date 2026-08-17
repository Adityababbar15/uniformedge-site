import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/faqs/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { FAQS } from "@/lib/content/faqs";
import { SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about UniformEdge's manufacturing, ordering, and school uniform programs.",
  alternates: { canonical: `${SITE_URL}/faqs/` },
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Reach out directly and we'll help."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CTABand
        title="Still have questions?"
        description="Our team is happy to talk through your school's specific requirements."
      />
    </>
  );
}
