import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CATALOGUE_PDF } from "@/lib/content/catalogue";

type Doc = { href: string; label: string };
const SCHOOL_CATALOGUE: Doc = {
  href: CATALOGUE_PDF,
  label: "Download the catalogue (PDF)",
};

export function CTABand({
  title = "Ready to outfit your team?",
  description = "Tell us your sector, headcount and timeline — we'll come back with a garment mix and a quote.",
  document = SCHOOL_CATALOGUE,
}: {
  title?: string;
  description?: string;
  // The download beside the quote button. Pass null on pages that already carry
  // their own, or another document where the school catalogue is the wrong one.
  document?: Doc | null;
}) {
  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <AnimatedSection className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-2xl text-3xl leading-tight text-ivory-50 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ivory-100/75">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button href="/contact" variant="secondary">
              Request a Quote
            </Button>
            {document && (
              <Button
                href={document.href}
                variant="ghost"
                external
                className="border-ivory-50/25 text-ivory-50 hover:border-ivory-50/60"
              >
                {document.label}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
