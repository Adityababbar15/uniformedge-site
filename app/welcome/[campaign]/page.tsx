import type { Metadata } from "next";
import Home from "../../page";
import { SITE_URL } from "@/lib/content/company";
import { EMAIL_CAMPAIGNS } from "@/lib/content/campaigns";

// See lib/content/campaigns.ts: a separate path per email campaign, so visits
// from outreach emails can be counted in Cloudflare Web Analytics.

export const dynamicParams = false;

export function generateStaticParams() {
  return EMAIL_CAMPAIGNS.map((c) => ({ campaign: c.slug }));
}

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: false, follow: true },
};

export default function WelcomePage() {
  return <Home />;
}
