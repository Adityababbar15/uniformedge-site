import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { CTABand } from "@/components/sections/CTABand";
import { BLOG_POSTS, getPost } from "@/lib/content/blog";
import { SITE_URL, COMPANY } from "@/lib/content/company";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.published,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.published,
    dateModified: post.published,
    author: { "@type": "Organization", name: COMPANY.name },
    publisher: { "@type": "Organization", name: COMPANY.name },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative overflow-hidden bg-ivory-50">
        <Container className="max-w-3xl py-12 sm:py-16">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center text-sm font-medium text-crimson-600 hover:text-crimson-700"
          >
            &larr; Insights
          </Link>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] text-navy-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-ink-500">
            {dateFormat.format(new Date(post.published))} ·{" "}
            {post.readingMinutes} min read · Written for {post.audience}
          </p>
        </Container>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-crimson-500) 0 10px, transparent 10px 18px)",
          }}
        />
      </section>

      {post.heroImage && (
        <Container className="max-w-4xl py-10">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-xl border border-navy-900/10">
            <Image
              src={post.heroImage}
              alt={post.heroAlt ?? ""}
              fill
              priority
              sizes="(min-width: 896px) 896px, 92vw"
              className="object-cover"
            />
          </figure>
        </Container>
      )}

      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <ArticleBody blocks={post.body} />
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-navy-900/10 bg-ivory-100/60 py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-2xl text-navy-900">
              Related reading
            </h2>
            <ul className="mt-6 space-y-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="font-display text-lg text-navy-900 underline decoration-crimson-500/50 underline-offset-4 hover:text-crimson-700"
                  >
                    {r.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700">
                    {r.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTABand />
    </>
  );
}
