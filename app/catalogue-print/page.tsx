import type { Metadata } from "next";
import { CatalogueDoc } from "@/components/catalogue/CatalogueDoc";
import { SITE_URL } from "@/lib/content/company";

/**
 * PRINT SOURCE — not a page for site visitors. The PDF is the deliverable.
 * Regenerate every variant with `npm run catalogue`.
 */
export const metadata: Metadata = {
  title: "Catalogue (print source)",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/catalogue-print/` },
};

export default function Page() {
  return <CatalogueDoc variant="full" />;
}
