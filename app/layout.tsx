import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_URL, SITE_INDEXABLE, COMPANY } from "@/lib/content/company";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UniformEdge | School & Corporate Uniform Manufacturer, Delhi",
    template: "%s | UniformEdge",
  },
  description:
    "UniformEdge manufactures school, corporate, healthcare, hospitality and industrial uniforms in Delhi, India — in-house tailoring, exact colour matching, and partnerships built on trust.",
  // No canonical here on purpose. A layout-level relative canonical resolves
  // to the homepage for every page that does not override it, which tells
  // Google those pages are duplicates of "/". Each page sets its own.
  openGraph: {
    title: "UniformEdge | School & Corporate Uniform Manufacturer, Delhi",
    description:
      "UniformEdge manufactures school, corporate, healthcare, hospitality and industrial uniforms in Delhi, India — in-house tailoring, exact colour matching, and partnerships built on trust.",
    siteName: "UniformEdge",
    locale: "en_IN",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Two senior students in navy UniformEdge blazers beside the UniformEdge wordmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UniformEdge | School & Corporate Uniform Manufacturer, Delhi",
    description:
      "Premium school uniforms manufactured in Delhi — crest-accurate embroidery, exact colour matching, and a standing reorder programme.",
    images: ["/images/og/og-default.jpg"],
  },
  robots: {
    index: SITE_INDEXABLE,
    follow: SITE_INDEXABLE,
  },
};

// Organization schema: the main local-SEO signal for a Delhi manufacturer.
// Only real, confirmed facts here — no invented ratings, awards or client counts.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: SITE_URL,
  slogan: COMPANY.tagline,
  description:
    "UniformEdge manufactures school, corporate, healthcare, hospitality and industrial uniforms from its own facility in Delhi, India.",
  foundingDate: "1995",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory-50 text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
