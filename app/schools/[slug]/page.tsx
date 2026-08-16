import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { FAQAccordion } from "@/components/faqs/FAQAccordion";
import {
  PUBLISHED_SCHOOLS,
  getPartnerSchool,
} from "@/lib/content/partner-schools";
import { ORDER_ROUTES, PARENT_FAQS, parentWhatsAppLink } from "@/lib/content/parents";
import { SITE_URL, COMPANY } from "@/lib/content/company";

// Only published schools get a page. Unpublished entries 404 rather than
// rendering, so a school cannot be named before it has agreed to be.
export function generateStaticParams() {
  return PUBLISHED_SCHOOLS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const school = getPartnerSchool(slug);
  if (!school) return {};

  return {
    title: `${school.name} Uniform`,
    description: `Buy the ${school.name} uniform from UniformEdge — order on WhatsApp or in store. Summer, winter, sports and accessories, with sizing help and exchanges.`,
    alternates: { canonical: `${SITE_URL}/schools/${school.slug}` },
  };
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const school = getPartnerSchool(slug);
  if (!school) notFound();

  return (
    <>
      <PageHero
        eyebrow="For Parents"
        title={`${school.name} uniform`}
        description={
          school.summary ??
          "Order your child's uniform directly from us — on WhatsApp or in store."
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <p className="text-base leading-relaxed text-ink-700">
              We are the uniform supplier for {school.name}, {school.locality}.
              You can order from us directly — you do not need to go through the
              school office.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href={parentWhatsAppLink(school.name)}
                variant="secondary"
                external
              >
                Order on WhatsApp
              </Button>
              <Button href={COMPANY.phoneHref} variant="ghost" external>
                Call {COMPANY.phone}
              </Button>
            </div>
          </AnimatedSection>

          {school.garments && school.garments.length > 0 && (
            <AnimatedSection className="mt-14">
              <SectionHeading eyebrow="What we hold" title="The uniform range" />
              <ul className="mt-6 space-y-3">
                {school.garments.map((g) => (
                  <li
                    key={g}
                    className="flex gap-3 text-base leading-relaxed text-ink-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                    />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {school.notes && school.notes.length > 0 && (
            <AnimatedSection className="mt-10 rounded-2xl border-l-4 border-crimson-500 bg-ivory-100/70 px-6 py-5">
              <h3 className="font-display text-lg text-navy-900">
                Worth knowing
              </h3>
              <ul className="mt-3 space-y-2">
                {school.notes.map((n) => (
                  <li key={n} className="text-base leading-relaxed text-navy-800">
                    {n}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How to order" title="Three ways" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ORDER_ROUTES.map((route) => (
              <div
                key={route.key}
                className="rounded-2xl border border-navy-900/10 bg-white p-7"
              >
                <h3 className="font-display text-lg text-navy-900">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {route.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Parent FAQs" />
          <div className="mt-8">
            <FAQAccordion items={PARENT_FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}
