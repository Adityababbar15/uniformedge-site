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

      <section className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400 hover:text-crimson-300"
          >
            &larr; Insights
          </Link>
          <h1 className="font-display mt-6 text-4xl leading-tight text-ivory-50 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-ivory-100/70">
            {dateFormat.format(new Date(post.published))} ·{" "}
            {post.readingMinutes} min read · Written for {post.audience}
          </p>
        </Container>
      </section>

      {post.heroImage && (
        <Container className="max-w-4xl">
          <figure className="relative -mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-navy-900/10 shadow-lg shadow-navy-950/10">
            <Image
              src={post.heroImage}
              alt={post.heroAlt ?? ""}
              fill
              priority
              sizes="(min-width: 896px) 896px, 92vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-crimson-300 backdrop-blur">
              AI Placeholder
            </span>
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
