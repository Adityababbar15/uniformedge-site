import type { Metadata } from "next";
import { CatalogueDoc } from "@/components/catalogue/CatalogueDoc";
import { SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Catalogue — business (print source)",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/catalogue-print/business/` },
};

export default function Page() {
  return <CatalogueDoc variant="business" />;
}
