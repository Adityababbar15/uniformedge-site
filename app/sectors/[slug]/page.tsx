import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { SUB_SECTORS, getSector } from "@/lib/content/sectors";
import { SITE_URL } from "@/lib/content/company";
import {
  CATALOGUE_PDF,
} from "@/lib/content/catalogue";

export function generateStaticParams() {
  return SUB_SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};

  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: { canonical: `${SITE_URL}/sectors/${sector.slug}` },
    openGraph: {
      title: `${sector.metaTitle} | UniformEdge`,
      description: sector.metaDescription,
      url: `${SITE_URL}/sectors/${sector.slug}`,
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector || sector.isCore) notFound();

  const others = SUB_SECTORS.filter((s) => s.slug !== sector.slug);

  return (
    <>
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.title}
        description={sector.summary}
      />

      {sector.image && (
        <Container className="max-w-5xl">
          <figure className="relative -mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-navy-900/10 shadow-lg shadow-navy-950/10">
            <Image
              src={sector.image}
              alt={sector.imageAlt ?? sector.name}
              fill
              priority
              sizes="(min-width: 1120px) 1120px, 92vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-crimson-300 backdrop-blur">
              AI Placeholder
            </span>
          </figure>
        </Container>
      )}

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <div className="space-y-5 text-base leading-relaxed text-ink-700">
              {sector.intro.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The range"
            title="What we make for this sector"
          />
          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sector.garments.map((g) => (
              <AnimatedGridItem key={g.name}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-6">
                  <h3 className="font-display text-lg text-navy-900">{g.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {g.detail}
                  </p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Your identity"
            title="A uniform that looks like it belongs to you"
          />
          <AnimatedSection className="mt-6">
            <p className="text-base leading-relaxed text-ink-700">
              {sector.identity}
            </p>
          </AnimatedSection>

          <div className="mt-14">
            <SectionHeading
              eyebrow="How the programme runs"
              title="Organised so the work sits with us"
              description="Uniform is rarely anyone's main job on your side. This is how we keep it off your desk."
            />
            <AnimatedSection className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {sector.delivery.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-navy-900/10 bg-white p-6"
                >
                  <h3 className="font-display text-lg text-navy-900">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {d.body}
                  </p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="What matters here"
            title="Where this sector is different"
            description="Every uniform sector fails in its own way. These are the decisions that carry the most weight in this one."
          />
          <AnimatedSection className="mt-10 space-y-8">
            {sector.considerations.map((c, i) => (
              <div key={c.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="font-display shrink-0 text-2xl leading-none text-crimson-600"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-700">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-12 rounded-2xl border-l-4 border-crimson-500 bg-ivory-100/70 px-6 py-5">
            <h3 className="font-display text-lg text-navy-900">Fabric</h3>
            <p className="mt-2 text-base leading-relaxed text-navy-800">
              {sector.fabricNote}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button
              href={CATALOGUE_PDF}
              variant="ghost"
              external
            >
              "Download the Catalogue (PDF)"
            </Button>
          </AnimatedSection>
          <p className="mt-3 text-xs leading-relaxed text-ink-500">
            Our published catalogue currently covers the school range. Ask us for
            {" "}
            {sector.navLabel.toLowerCase()} samples and specifications directly.
          </p>
        </Container>
      </section>

      <section className="border-t border-navy-900/10 bg-ivory-100/60 py-14">
        <Container>
          <h2 className="font-display text-xl text-navy-900">Other sectors we serve</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="inline-block py-1 text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/products"
                className="inline-block py-1 text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
              >
                School Uniforms
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <CTABand title={sector.ctaTitle} description={sector.ctaBody} />
    </>
  );
}
