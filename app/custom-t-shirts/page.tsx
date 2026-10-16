import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SITE_URL } from "@/lib/content/company";
import {
  TSHIRT_PAGE,
  TSHIRT_AUDIENCES,
  TSHIRT_PERSONALISATION,
  TSHIRT_METHODS,
  TSHIRT_METHOD_NOTE,
  TSHIRT_STEPS,
  tshirtWhatsAppLink,
} from "@/lib/content/custom-tshirts";

const url = `${SITE_URL}${TSHIRT_PAGE.path}/`;

export const metadata: Metadata = {
  title: TSHIRT_PAGE.metaTitle,
  description: TSHIRT_PAGE.metaDescription,
  alternates: { canonical: url },
  openGraph: {
    title: `${TSHIRT_PAGE.metaTitle} | UniformEdge`,
    description: TSHIRT_PAGE.metaDescription,
    url,
  },
};

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="h-full border-t border-navy-900/10 pt-6">
      <h3 className="font-display text-lg text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
    </div>
  );
}

export default function CustomTshirtsPage() {
  return (
    <>
      <PageHero
        eyebrow={TSHIRT_PAGE.eyebrow}
        title={TSHIRT_PAGE.title}
        description={TSHIRT_PAGE.summary}
        image="/images/beyond-school/team-navy-tees-outdoors.webp"
        imageAlt="Six young colleagues in navy t-shirts and cream hoodies laughing together outdoors"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Who it's for" title="For teams, events and groups" />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TSHIRT_AUDIENCES.map((a) => (
              <AnimatedGridItem key={a.title}>
                <Card {...a} />
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Personalisation" title="What we can put on it" />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TSHIRT_PERSONALISATION.map((p) => (
              <AnimatedGridItem key={p.title}>
                <Card {...p} />
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it's applied"
            title="Printed or embroidered"
            description={TSHIRT_METHOD_NOTE}
          />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TSHIRT_METHODS.map((m) => (
              <AnimatedGridItem key={m.title}>
                <Card {...m} />
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 bg-ivory-100/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Ordering" title="How to order" />
          <AnimatedSection className="mt-8">
            <ol className="space-y-6">
              {TSHIRT_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-ivory-50">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-navy-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={tshirtWhatsAppLink()} external>
                Get a quote on WhatsApp
              </Button>
              <Button href="/contact" variant="ghost">
                Use the contact form
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTABand
        title="Need T-shirts for your team or event?"
        description="Send your design, colour, sizes and quantity, and we'll come back with a quote."
      />
    </>
  );
}
