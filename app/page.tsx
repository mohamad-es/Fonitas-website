import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, TrendingUp } from "lucide-react";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative flex min-h-screen items-center border-b border-white/[0.08]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/[0.06] blur-[140px]" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#ff5a1f]/[0.04] blur-[100px]" />

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col px-6 py-12 lg:px-10">
          <header className="absolute left-6 right-6 top-6 flex items-center justify-between lg:left-10 lg:right-10">
            <Link href="/" aria-label="Fonitas home" className="w-[150px] sm:w-[180px]">
              <Image src="/fonitas-logo.svg" alt="Fonitas" width={350} height={92} priority className="h-auto w-full" />
            </Link>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-white/25 sm:block">Application growth &amp; investment</span>
          </header>

          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center pt-20 text-center">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.34em] text-[#ff6a2a]">Application publishing, growth &amp; investment</p>
            <h1 className="font-display glow-text reveal-up reveal-delay-1 mt-7 max-w-5xl text-[clamp(3.6rem,7.8vw,8rem)] font-semibold leading-[0.86]">
              Bring your application<br /><span className="text-white/30">from build to growth.</span>
            </h1>
            <p className="reveal-up reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Fonitas gives application owners a controlled path from evaluation and publishing to growth, revenue and settlement — with every important step visible and accountable.
            </p>

            <div className="reveal-up reveal-delay-3 mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-2">
              <Link href="/product-owners" className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 text-left transition duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/35 hover:bg-white/[0.045] sm:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff5a1f]/10 blur-[70px] transition group-hover:bg-[#ff5a1f]/20" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ff5a1f]/25 bg-[#ff5a1f]/10 text-[#ff6a2a]"><BriefcaseBusiness className="h-5 w-5" strokeWidth={1.7} /></span>
                    <span className="text-[9px] uppercase tracking-[0.24em] text-white/20">01 / Product owners</span>
                  </div>
                  <h2 className="font-display mt-10 text-3xl font-semibold sm:text-4xl">I have an application.</h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/40">Explore how Fonitas can help you publish, operate and grow your application.</p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-medium">Explore Fonitas <span className="text-[#ff5a1f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span></div>
                </div>
              </Link>

              <Link href="/investors" className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 text-left transition duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/35 hover:bg-white/[0.045] sm:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.06] blur-[70px] transition group-hover:bg-[#ff5a1f]/10" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80"><TrendingUp className="h-5 w-5" strokeWidth={1.7} /></div>
                  <div className="mt-10 flex items-start justify-between gap-4">
                    <h2 className="font-display text-3xl font-semibold sm:text-4xl">I&apos;m an investor.</h2>
                    <span className="text-[9px] uppercase tracking-[0.24em] text-white/20">02 / Investors</span>
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/40">Browse selected applications in Fonitas and explore the investment opportunities behind them.</p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-medium">Explore opportunities <span className="text-[#ff5a1f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span></div>
                </div>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-white/20">
              <span className="h-px w-8 bg-white/10" />
              One ecosystem. Two paths.
              <span className="h-px w-8 bg-white/10" />
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-[9px] uppercase tracking-[0.2em] text-white/20">
            <Link href="/about" className="transition hover:text-white/60">About</Link>
            <span>•</span>
            <Link href="/contact" className="transition hover:text-white/60">Contact</Link>
            <span>•</span>
            <span>© 2026 Fonitas</span>
          </div>
        </div>
      </section>
      
      <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a2a]">What is Fonitas?</p>
            <h2 className="font-display mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              One controlled lifecycle for your application.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-base leading-8 text-white/50 sm:text-lg">
            <p>
              Fonitas connects the work that normally happens across separate publishing,
              operational and financial processes.
            </p>
            <p>
              We help application owners move from evaluation and agreement through QA,
              publishing, growth and settlement — while keeping the important decisions,
              records and responsibilities visible in one connected path.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {[
                ["Publish", "Move an approved application through a controlled release path."],
                ["Operate", "Keep ownership, responsibilities and important records clear."],
                ["Grow", "Create a path from publishing to commercial growth."],
                ["Settle", "Connect revenue, reconciliation and financial close."]
              ].map(([title, body]) => (
                <div key={title} className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/40">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
