import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { FAQAccordion } from "@/components/faqs/FAQAccordion";
import {
  ORDER_ROUTES,
  PARENT_FAQS,
  PARENT_DELIVERY,
  parentWhatsAppLink,
} from "@/lib/content/parents";
import { PUBLISHED_SCHOOLS } from "@/lib/content/partner-schools";
import { SITE_URL, COMPANY } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Buy School Uniforms in Dwarka, Delhi",
  description:
    "Order your child's school uniform from UniformEdge — on WhatsApp, at our shop in Dwarka, New Delhi, or through your school. Sizing help, exchanges, and mid-year replacements.",
  alternates: { canonical: `${SITE_URL}/parents/` },
};

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For parents"
        title="Getting your child's uniform"
        description="If your school works with us, you can order directly — no forms through the school office, and no waiting for the next uniform day."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Three ways to order"
            title="However suits you"
            description="There's no online checkout yet. Ordering happens on WhatsApp, in store, or through your school — whichever is easiest."
          />

          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ORDER_ROUTES.map((route) => (
              <AnimatedGridItem key={route.key}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-7">
                  <h3 className="font-display text-lg text-navy-900">
                    {route.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {route.body}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-ink-500">
                    {route.detail}
                  </p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <AnimatedSection className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={parentWhatsAppLink()} variant="secondary" external>
              Order on WhatsApp
            </Button>
            <Button href={COMPANY.phoneHref} variant="ghost" external>
              Call {COMPANY.phone}
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Delivery"
            title="What it costs and how long it takes"
          />
          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PARENT_DELIVERY.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-navy-900/10 bg-white p-6"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  {row.label}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-navy-900">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Before you message"
            title="What we'll need from you"
          />
          <ul className="mt-8 space-y-4">
            {[
              ["Your child's school", "So we can check we hold that uniform and pull the right colours."],
              ["Class or year group", "Junior and senior ranges differ, and some items only apply to certain years."],
              ["Size, or your child's height and age", "If you're unsure, give us height and age and we'll advise — or come in to be measured."],
              ["Which items you need", "Summer, winter, sports, or a single replacement garment."],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500"
                />
                <span>
                  <span className="font-display block text-base text-navy-900">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-700">
                    {body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {PUBLISHED_SCHOOLS.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Schools we supply"
              title="Find your school"
              description="Each page lists exactly what we hold for that school."
            />
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {PUBLISHED_SCHOOLS.map((school) => (
                <li key={school.slug}>
                  <Link
                    href={`/schools/${school.slug}`}
                    className="inline-block py-1 text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-t border-navy-900/10 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Parent FAQs" />
          <div className="mt-8">
            <FAQAccordion items={PARENT_FAQS} />
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-2xl leading-tight text-ivory-50 sm:text-3xl">
            Is your school not on our list?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ivory-100/75">
            We can only sell a school&apos;s uniform if that school works with
            us. If yours doesn&apos;t yet, ask your school office to get in touch
            — we&apos;ll take the whole uniform programme off their hands.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">
              Point your school our way
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
