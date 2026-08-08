import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { AIPlaceholderBanner } from "@/components/gallery/AIPlaceholderBanner";
import { CTABand } from "@/components/sections/CTABand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { PRODUCT_CATEGORIES } from "@/lib/content/products";
import {
  CATALOGUE_ITEMS,
  COLOUR_SWATCHES,
  FABRIC_TYPES,
  SIZE_CHART,
  CATALOGUE_PDF,
} from "@/lib/content/catalogue";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore UniformEdge's school uniform categories — shirts, blazers, sportswear, senior formal wear, and more, manufactured in Delhi.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A full uniform wardrobe, tailored per school"
        description="Every category below is manufactured to your school's specification — colours, crests, and sizing included."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <AIPlaceholderBanner />

          <AnimatedGrid className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <AnimatedGridItem key={category.slug}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-ivory-100">
                    {category.images[0] ? (
                      <>
                        <Image
                          src={category.images[0]}
                          alt={`AI-generated placeholder image representing the ${category.name} category, pending real photoshoot`}
                          fill
                          sizes="(min-width: 1024px) 360px, 90vw"
                          className="object-cover"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-crimson-300 backdrop-blur">
                          AI Placeholder
                        </span>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-500">
                        Product photography pending
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl text-navy-900">
                      {category.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                      {category.description}
                    </p>
                  </div>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="primary">
              Request a Quote for Your School
            </Button>
            <Button href={CATALOGUE_PDF} variant="ghost" external>
              Download the Catalogue (PDF)
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Full product list"
            title="Every item available under the program"
            description="Fabric and sizing notes for each garment. Use this as a quick reference when planning a school order."
          />
          <AnimatedSection className="mt-10 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                UniformEdge full product list with SKU, category, fabric options and size range
              </caption>
              <thead>
                <tr className="border-b border-navy-900/10 bg-ivory-100/70">
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">SKU</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Item</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Category</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Fabric options</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Sizes</th>
                </tr>
              </thead>
              <tbody>
                {CATALOGUE_ITEMS.map((row) => (
                  <tr key={row.sku} className="border-b border-navy-900/5 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-ink-500">{row.sku}</td>
                    <td className="px-5 py-3 text-ink-900">{row.item}</td>
                    <td className="px-5 py-3 text-ink-700">{row.category}</td>
                    <td className="px-5 py-3 text-ink-700">{row.fabric}</td>
                    <td className="px-5 py-3 text-ink-700">{row.sizes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Fabric & colour"
            title="Fabric options and colourways"
            description="A sample of the colourways available. Every colour is matched to your school's exact palette from a physical swatch or Pantone reference before production."
          />

          <AnimatedSection className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FABRIC_TYPES.map((fabric) => (
              <div
                key={fabric.name}
                className="rounded-2xl border border-navy-900/10 bg-white p-6"
              >
                <h3 className="font-display text-lg text-navy-900">{fabric.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{fabric.body}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-12">
            <h3 className="font-display text-xl text-navy-900">Sample colourways</h3>
            <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {COLOUR_SWATCHES.map((swatch) => (
                <li key={swatch.code} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: swatch.hex }}
                    className="h-11 w-11 shrink-0 rounded-lg border border-navy-900/15"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-navy-900">
                      {swatch.name}
                    </span>
                    <span className="block text-xs text-ink-500">
                      {swatch.fabric} · {swatch.code}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-500">
              Swatch colours shown are for on-screen reference only and will vary by
              display. Production colour is matched against your school&apos;s physical
              swatch or Pantone reference.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-ivory-100/60 py-20 sm:py-24" id="size-guide">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Size guide"
            title="Sample size chart"
            description="The final chart is calibrated to your school's actual student measurements during onboarding."
          />
          <AnimatedSection className="mt-10 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white">
            <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                Sample school uniform size chart by size, approximate age, chest and height
              </caption>
              <thead>
                <tr className="border-b border-navy-900/10 bg-ivory-100/70">
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Size</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Approx. age</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Chest (in)</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-navy-900">Height (cm)</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_CHART.map((row) => (
                  <tr key={row.size} className="border-b border-navy-900/5 last:border-0">
                    <td className="px-5 py-3 font-medium text-navy-900">{row.size}</td>
                    <td className="px-5 py-3 text-ink-700">{row.age}</td>
                    <td className="px-5 py-3 text-ink-700">{row.chest}</td>
                    <td className="px-5 py-3 text-ink-700">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
          <p className="mt-6 text-sm leading-relaxed text-ink-700">
            For schools with a wide size spread, we run an on-site measurement drive so
            every student is fitted before the first bulk order is cut.
          </p>

          <AnimatedSection className="mt-10">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-navy-900/10">
                <Image
                  src="/images/product/girls-collection-three-ages-courtyard.webp"
                  alt="Three students in the same uniform program at primary, middle and senior sizes"
                  fill
                  sizes="(min-width: 768px) 720px, 92vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-crimson-300 backdrop-blur">
                  AI Placeholder
                </span>
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
                The same uniform program across primary, middle and senior sizing —
                cut and proportion adjusted per age group, colour and detailing held constant.
              </figcaption>
            </figure>
          </AnimatedSection>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
