import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { FAQAccordion } from "@/components/faqs/FAQAccordion";
import { ArrowIcon } from "@/components/graphics/Icons";
import {
  ORDER_ROUTES,
  PARENT_FAQS,
  PARENT_DELIVERY,
  SHOP_SCHOOLS,
  SHOP_STEPS,
  parentWhatsAppLink,
  shopLink,
} from "@/lib/content/parents";
import { SITE_URL, COMPANY } from "@/lib/content/company";

// Pattern: marketing landing. One job — get a parent to their school's page in
// the online shop. WhatsApp, store and school remain as the fallbacks.

export const metadata: Metadata = {
  title: "Buy School Uniforms Online in Dwarka, Delhi",
  description:
    "Order your child's school uniform online from UniformEdge: pick your school, choose sizes, and get it delivered or collect from our Dwarka store. Or order on WhatsApp.",
  alternates: { canonical: `${SITE_URL}/parents/` },
};

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For parents"
        title="Your child's school uniform, ordered online"
        description="Pick your school, choose the sizes and check out. We deliver to your door, or you collect from our Dwarka store."
        image="/images/product/girls-collection-three-ages-courtyard.webp"
        imageAlt="Three students in the same uniform programme at primary, middle and senior sizes"
        actions={
          <>
            <Button href={shopLink()} external>
              Shop uniforms
              <ArrowIcon className="h-4 w-4" />
            </Button>
            <Button href={parentWhatsAppLink()} variant="ghost" external>
              Order on WhatsApp
            </Button>
          </>
        }
      />

      <section id="schools" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Find your school"
            title="Start with your school"
            description="Each school's page lists the uniform it has approved, with prices for every size."
          />
          <AnimatedSection className="mt-10">
            <ul className="grid grid-cols-1 border-t border-navy-900/10 sm:grid-cols-2 sm:gap-x-10">
              {SHOP_SCHOOLS.map((school) => (
                <li key={school.path} className="border-b border-navy-900/10">
                  <a
                    href={shopLink(school.path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-16 items-center justify-between gap-4 py-4 text-navy-900 transition-colors hover:text-crimson-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
                  >
                    <span className="font-display text-lg leading-snug">{school.name}</span>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-ink-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-crimson-600" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-700">
              Some items are still being added to the shop. If you can&apos;t find
              what you need, or your school isn&apos;t listed,{" "}
              <a
                href={parentWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
              >
                message us on WhatsApp
              </a>
              .
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How it works" title="Four steps, start to finish" />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SHOP_STEPS.map((step, i) => (
              <AnimatedGridItem key={step.title}>
                <div className="border-t border-navy-900/15 pt-5">
                  <p className="font-display text-sm text-crimson-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-lg text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.body}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Delivery" title="What it costs and how long it takes" />
          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PARENT_DELIVERY.map((row) => (
              <div key={row.label} className="border-t border-navy-900/10 pt-5">
                <dt className="text-sm font-medium text-ink-500">{row.label}</dt>
                <dd className="mt-2 text-base leading-relaxed text-navy-900">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Other ways to order"
            title="Prefer to talk to us?"
            description="Ordering on WhatsApp, in store or through your school works just as well."
          />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ORDER_ROUTES.filter((route) => route.key !== "shop").map((route) => (
              <AnimatedGridItem key={route.key}>
                <div className="flex h-full flex-col border-t border-navy-900/10 pt-6">
                  <h3 className="font-display text-lg text-navy-900">{route.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{route.body}</p>
                  <p className="mt-4 text-xs leading-relaxed text-ink-500">{route.detail}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={parentWhatsAppLink()} variant="secondary" external>
              Order on WhatsApp
            </Button>
            <Button href={COMPANY.phoneHref} variant="ghost" external>
              Call {COMPANY.phone}
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Not sure of the size?"
            title="What helps us advise you"
          />
          <ul className="mt-8 space-y-4">
            {[
              ["Your child's school and class", "Junior and senior ranges differ, and some items only apply to certain years."],
              ["Your child's height and age", "Give us both and we'll suggest a size, or come in to be measured."],
              ["Which items you need", "Summer, winter, sports, or a single replacement garment."],
            ].map(([title, body]) => (
              <li key={title} className="flex gap-4">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-500" />
                <span>
                  <span className="font-display block text-base text-navy-900">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-700">{body}</span>
                </span>
              </li>
            ))}
          </ul>
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

      <section className="bg-navy-950 py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-2xl leading-tight text-ivory-50 sm:text-3xl">
            Ready to order?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ivory-100/75">
            Find your school in the shop and pick your sizes. If your school
            isn&apos;t listed yet, ask your school office to get in touch with us.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={shopLink()} variant="secondary" external>
              Shop uniforms
            </Button>
            <Button href="/contact" variant="ghost" className="border-ivory-50/30 text-ivory-50 hover:border-ivory-50/60">
              Point your school our way
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
