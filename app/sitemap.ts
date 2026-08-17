import type { MetadataRoute } from "next";
import { SITE_URL, FOOTER_LINKS } from "@/lib/content/company";
import { BLOG_POSTS } from "@/lib/content/blog";
import { SUB_SECTORS } from "@/lib/content/sectors";
import { PUBLISHED_SCHOOLS } from "@/lib/content/partner-schools";

// output: "export" requires route handlers to be explicitly static —
// without this the build fails collecting page data.
export const dynamic = "force-static";

// The site is built with trailingSlash: true, so /about is served as a 307
// redirect to /about/. A sitemap of redirects wastes crawl budget and makes
// Search Console report every URL as "Page with redirect", so every entry
// here must be emitted in the same form the server actually serves.
function url(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // FOOTER_LINKS deliberately excludes /shop — it is the noindex demo store,
  // and a noindex page listed in the sitemap is a contradiction Search Console
  // flags. Keep it out if /shop is ever added to the footer.
  const pages: MetadataRoute.Sitemap = FOOTER_LINKS.map((link) => ({
    url: url(link.href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.published),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const sectors: MetadataRoute.Sitemap = SUB_SECTORS.map((s) => ({
    url: url(`/sectors/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Only schools that have agreed to be named appear here.
  const schools: MetadataRoute.Sitemap = PUBLISHED_SCHOOLS.map((s) => ({
    url: url(`/schools/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...sectors, ...schools, ...posts];
}
