import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { SewProgress } from "@/components/motion/SewProgress";
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
  // From the master logo package. favicon-mark drops the E deliberately — at
  // 16-32px the three arms fill in and the letter stops reading.
  icons: {
    icon: [
      { url: "/images/brand/logo/uniformedge-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/logo/uniformedge-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/brand/logo/uniformedge-favicon-mark.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/brand/logo/uniformedge-apple-touch-180.png", sizes: "180x180" },
    ],
  },
  title: {
    default: "UniformEdge | School & Corporate Uniform Manufacturer, Dwarka, Delhi",
    template: "%s | UniformEdge",
  },
  description:
    "School, corporate, healthcare, hospitality and industrial uniforms, made in our own Delhi facility, with a uniform shop in Dwarka, New Delhi.",
  // No canonical here on purpose. A layout-level relative canonical resolves
  // to the homepage for every page that does not override it, which tells
  // Google those pages are duplicates of "/". Each page sets its own.
  openGraph: {
    title: "UniformEdge | School & Corporate Uniform Manufacturer, Dwarka, Delhi",
    description:
      "UniformEdge manufactures school, corporate, healthcare, hospitality and industrial uniforms in Delhi, with a uniform shop in Dwarka, New Delhi, serving schools across Delhi NCR.",
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
    title: "UniformEdge | School & Corporate Uniform Manufacturer, Dwarka, Delhi",
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
  // ClothingStore (a LocalBusiness type) as well as Organization: the Dwarka shop
  // is a physical store parents visit, and LocalBusiness is what Google uses to
  // tie a site to a place in local results.
  "@type": ["Organization", "ClothingStore"],
  name: COMPANY.name,
  url: SITE_URL,
  slogan: COMPANY.tagline,
  description:
    "UniformEdge manufactures school, corporate, healthcare, hospitality and industrial uniforms from its own facility in Delhi, India.",
  // foundingDate intentionally omitted.
  //
  // UniformEdge was established in 2026; the 1995 date belongs to Neeraj School
  // Uniforms, a separate family business that still trades. Publishing 2026 as
  // structured data risks it surfacing in a knowledge panel next to competitors
  // claiming sixty years, and the field carries no ranking benefit.
  //
  // This conceals nothing: the site states the 1995 roots, that Neeraj is a
  // separate business, and that Neeraj still trades. It simply does not
  // volunteer the year in machine-readable form. If a knowledge panel or a
  // verification process later needs it, the value is "2026".
  telephone: COMPANY.phone,
  email: COMPANY.email,
  taxID: COMPANY.gstin,
  sameAs: COMPANY.social.filter((s) => s.inSchema).map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.locality,
    addressRegion: COMPANY.address.city,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY.name}, ${COMPANY.address.oneLine}`,
  )}`,
  areaServed: [
    { "@type": "City", name: "New Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
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
      <head>
        {/* Google tag (gtag.js) — one per page, as Google requires. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S900LPEPCE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-S900LPEPCE');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory-50 text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SewProgress />
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
