import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_URL } from "@/lib/content/company";

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
    default: "UniformEdge | Premium School Uniform Manufacturer, Delhi",
    template: "%s | UniformEdge",
  },
  description:
    "UniformEdge designs and manufactures premium school uniforms in Delhi, India — in-house tailoring, dependable quality, and school partnerships built on trust.",
  openGraph: {
    title: "UniformEdge | Premium School Uniform Manufacturer, Delhi",
    description:
      "UniformEdge designs and manufactures premium school uniforms in Delhi, India — in-house tailoring, dependable quality, and school partnerships built on trust.",
    siteName: "UniformEdge",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
