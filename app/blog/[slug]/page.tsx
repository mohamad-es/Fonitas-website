import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Article not found — Fonitas" };

  return {
    title: `${post.title} — Fonitas`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="bg-[#070707] text-[#f4f2ed]">
      <Header />
      <section className="relative overflow-hidden border-b border-white/[0.07] pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-[-180px] top-10 h-[500px] w-[500px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
          <Link href="/blog" className="text-xs uppercase tracking-[0.22em] text-white/30 transition hover:text-[#ff7a3d]">
            ← Back to insights
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-[#ff5a1f]">{post.category}</span>
            <span className="text-white/15">/</span>
            <span className="text-white/25">{post.date}</span>
            <span className="text-white/15">/</span>
            <span className="text-white/25">{post.readTime}</span>
          </div>
          <h1 className="font-display mt-7 max-w-5xl text-5xl font-semibold leading-[.92] sm:text-7xl lg:text-8xl">
            {post.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/45">
            {post.excerpt}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-[1100px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div
          className="mt-10 aspect-[2/1] w-full bg-cover bg-center lg:mt-14"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="mx-auto grid max-w-4xl gap-10 pt-12 lg:grid-cols-[140px_1fr] lg:pt-16">
          <aside className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            <p>Written by</p>
            <p className="mt-2 text-white/55">{post.author}</p>
          </aside>
          <div className="space-y-7 text-base leading-8 text-white/60 sm:text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">Next conversation</p>
            <p className="mt-2 text-lg text-white/65">Ready to move an application to market?</p>
          </div>
          <Link href="/contact" className="inline-flex rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
            Start a conversation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
