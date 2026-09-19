import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Insights — Fonitas",
  description:
    "Insights on application publishing, operations, platform architecture and financial close.",
};

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const posts = blogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <main id="main-content" tabIndex={-1} className="bg-[#070707] text-[#f4f2ed]">
      <Header />
      <section className="relative overflow-hidden border-b border-white/[0.07] pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute right-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/25">
            <span className="text-[#ff5a1f]">Fonitas</span>
            <span className="h-px w-10 bg-white/10" />
            <span>Insights</span>
          </div>
          <div className="mt-8 max-w-4xl">
            <h1 className="font-display text-6xl font-semibold leading-[.9] sm:text-8xl lg:text-[8rem]">
              Ideas around
              <br />
              <span className="text-white/30">the release.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Notes on application publishing, operational workflows, platform
              design and the financial lifecycle behind every release.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden border border-white/10 bg-white/[0.02] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[340px] overflow-hidden bg-[#101010]">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/15 to-[#ff5a1f]/10" />
            <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.25em] text-[#ff7a3d]">
              Featured / {featured.category}
            </div>
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/25">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-display mt-8 max-w-2xl text-4xl font-semibold leading-[.95] sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                {featured.excerpt}
              </p>
            </div>
            <span className="mt-12 inline-flex items-center gap-3 text-sm text-white/60 transition group-hover:text-white">
              Read article <span className="text-[#ff5a1f]">↗</span>
            </span>
          </div>
        </Link>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.012]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#ff5a1f]">Latest notes</p>
              <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">The publishing desk.</h2>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
              {posts.length} articles
            </span>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#080808] p-5 transition hover:bg-[#0d0d0d] sm:p-7"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101010]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-[#ff7a3d]">
                    {post.category}
                  </span>
                  <span className="absolute right-3 top-3 text-[10px] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pt-6">
                  <div className="flex justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-white/20">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-white/85 transition group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/35">{post.excerpt}</p>
                  <div className="mt-6 text-xs text-white/40 transition group-hover:text-[#ff7a3d]">
                    Read more ↗
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="border-t border-white/[0.08] pt-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Publishing intelligence</p>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display max-w-2xl text-3xl font-semibold sm:text-4xl">
              From release preparation to financial close.
            </h2>
            <Link href="/contact" className="text-sm text-white/55 transition hover:text-white">
              Talk to Fonitas <span className="text-[#ff5a1f]">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
