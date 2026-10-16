import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Stitch } from "@/components/motion/Stitch";
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
  allDownloads = true,
}: {
  title?: string;
  description?: string;
  document?: Doc | null;
  allDownloads?: boolean;
}) {
  return (
    <section className="bg-navy-950 py-16 sm:py-24">
      <Container>
        <AnimatedSection className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div>
            <Stitch className="w-24" />
            <h2 className="font-display mt-6 max-w-xl text-3xl leading-tight text-ivory-50 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory-100/75">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
            <Button href="/contact" variant="secondary">
              Request a quote
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
            {allDownloads && (
              <Link
                href="/downloads"
                className="inline-flex min-h-11 items-center text-sm text-ivory-100/75 underline underline-offset-4 transition-colors hover:text-ivory-50"
              >
                See all downloads
              </Link>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
