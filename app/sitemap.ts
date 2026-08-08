import type { MetadataRoute } from "next";
import { SITE_URL, NAV_LINKS } from "@/lib/content/company";
import { BLOG_POSTS } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = NAV_LINKS.map((link) => ({
    url: `${SITE_URL}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.published),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
