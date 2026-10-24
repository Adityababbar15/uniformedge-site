import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedGrid, AnimatedGridItem } from "@/components/motion/AnimatedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { BLOG_POSTS } from "@/lib/content/blog";
import { SITE_URL } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance for school management and procurement teams on uniform quality, supplier selection, and procurement planning.",
  alternates: { canonical: `${SITE_URL}/blog/` },
};

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.published.localeCompare(a.published),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guidance for schools planning their uniforms"
        description="Practical notes on quality, supplier selection, and procurement — written for the people who actually make these decisions."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <AnimatedGrid className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <AnimatedGridItem key={post.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-navy-900/10 bg-ivory-50">
                  {post.heroImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/9] overflow-hidden"
                    >
                      <Image
                        src={post.heroImage}
                        alt={post.heroAlt ?? ""}
                        fill
                        sizes="(min-width: 1024px) 380px, 92vw"
                        className="object-cover transition-transform duration-300 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                      />
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-crimson-600">
                    {dateFormat.format(new Date(post.published))} ·{" "}
                    {post.readingMinutes} min read
                  </p>
                  <h2 className="font-display mt-4 text-xl leading-snug text-navy-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-crimson-700"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center self-start text-sm font-medium text-crimson-600 underline underline-offset-4 hover:text-crimson-700"
                  >
                    Read article &rarr;
                  </Link>
                  </div>
                </article>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
