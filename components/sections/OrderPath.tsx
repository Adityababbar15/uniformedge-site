import { Container } from "@/components/ui/Container";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PROCESS_STEPS } from "@/lib/content/process";

export function OrderPath() {
  return (
    <section className="border-t border-navy-900/10 bg-ivory-100/50 py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <StitchHeading
            title="From brief to delivery"
            description="How an order moves through our Delhi facility."
          />
          <EditorialImage
            src="/images/beyond-school/production-floor-stitching.webp"
            alt="Tailors stitching garments at sewing machines on a bright production floor with stacks of folded navy garments"
            sizes="(min-width: 1024px) 38vw, 92vw"
            aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
            className="mt-10"
          />
        </div>

        <AnimatedGrid>
          <ol>
            {PROCESS_STEPS.map((item) => (
              <li key={item.step} className="border-t border-navy-900/10 first:border-t-0">
                <AnimatedGridItem className="grid grid-cols-[auto_1fr] gap-5 py-6">
                  <p className="font-display text-2xl leading-none text-crimson-600">
                    {item.step}
                  </p>
                  <div>
                    <h3 className="font-display text-lg text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {item.body}
                    </p>
                  </div>
                </AnimatedGridItem>
              </li>
            ))}
          </ol>
        </AnimatedGrid>
      </Container>
    </section>
  );
}
