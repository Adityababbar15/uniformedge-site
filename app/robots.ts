import type { MetadataRoute } from "next";
import { SITE_URL, SITE_INDEXABLE } from "@/lib/content/company";

// output: "export" requires route handlers to be explicitly static —
// without this the build fails collecting page data.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Until SITE_URL is the host actually serving the site, keep crawlers out
  // entirely rather than let them index a temporary hostname. See SITE_INDEXABLE.
  if (!SITE_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
