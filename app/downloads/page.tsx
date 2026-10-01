import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StitchHeading } from "@/components/ui/StitchHeading";
import { CTABand } from "@/components/sections/CTABand";
import { DOWNLOADS } from "@/lib/content/downloads";
import { SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download the UniformEdge school catalogue, corporate catalogue and company profile as PDFs.",
  alternates: { canonical: `${SITE_URL}/downloads/` },
};

// Marketing route type: index. Nav, title, one list, closing band, footer.
export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Catalogues and company profile"
        description="Three PDFs you can keep, print or forward to your procurement team."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <StitchHeading
            title="Choose a document"
            description="The corporate catalogue and company profile are large files. On mobile data, the school catalogue is the quickest to open."
          />

          <ul className="mt-12 border-t border-navy-900/15">
            {DOWNLOADS.map((doc) => (
              <li
                key={doc.href}
                className="grid grid-cols-1 items-center gap-x-10 gap-y-4 border-b border-navy-900/15 py-8 md:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className="font-display text-2xl text-navy-900">{doc.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-700">
                    {doc.description}
                  </p>
                  <p className="mt-3 text-sm text-ink-500">
                    PDF, {doc.pages} pages, about {doc.sizeMb} MB
                  </p>
                </div>
                <Button href={doc.href} variant="primary" external>
                  Download {doc.title.toLowerCase()}
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        title="Want a quote instead?"
        description="Tell us your sector, headcount and timeline and we'll come back with a garment mix and a quote."
        document={null}
        allDownloads={false}
      />
    </>
  );
}
