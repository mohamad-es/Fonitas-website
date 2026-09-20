"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { investmentOpportunities } from "@/data/investment-opportunities";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />;

function OpportunityCard({ opportunity }: { opportunity: (typeof investmentOpportunities)[number] }) {
  return (
    <Link
      href={`/investors/${opportunity.slug}`}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/35"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.07] bg-[#0c0c0c]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ff5a1f]/10 blur-[90px] transition group-hover:bg-[#ff5a1f]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          {opportunity.logo ? (
            <Image src={opportunity.logo} alt="" width={80} height={80} className="h-20 w-20 rounded-[22px] object-cover shadow-2xl" />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 text-2xl text-[#ff6a2a]">
              {opportunity.name.slice(0, 1)}
            </div>
          )}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[9px] uppercase tracking-[0.2em]">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-white/45 backdrop-blur">{opportunity.category}</span>
          <span className="text-[#ff6a2a]">{opportunity.stage}</span>
        </div>
      </div>

      <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold">{opportunity.name}</h2>
            <p className="mt-2 text-sm text-white/45">{opportunity.tagline}</p>
          </div>
          <span className="text-[#ff5a1f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span>
        </div>

        <p className="mt-6 line-clamp-3 text-sm leading-6 text-white/35">{opportunity.description}</p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {opportunity.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/20">{metric.label}</p>
              <p className="mt-2 text-sm font-medium text-white/75">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-white/[0.07] pt-5 text-xs font-medium text-white/65">
          View opportunity <ArrowRight className="ml-2 inline-block h-3.5 w-3.5 text-[#ff5a1f]" strokeWidth={1.8} />
        </div>
      </div>
    </Link>
  );
}


import { useMemo, useState } from "react";

export function InvestorsPage() {
  const hasOpportunities = investmentOpportunities.length > 0;
  const [category, setCategory] = useState("All");
  const [stage, setStage] = useState("All");

  const categories = ["All", ...new Set(investmentOpportunities.map((item) => item.category))];
  const stages = ["All", ...new Set(investmentOpportunities.map((item) => item.stage))];

  const filteredOpportunities = useMemo(
    () =>
      investmentOpportunities.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          (stage === "All" || item.stage === stage),
      ),
    [category, stage],
  );

  const featuredOpportunity = investmentOpportunities[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative border-b border-white/[0.08] pt-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a2a]">For investors</p>
              <h1 className="font-display glow-text reveal-up reveal-delay-1 mt-6 text-[clamp(3.6rem,7vw,7.5rem)] font-semibold leading-[0.86]">
                Discover<br /><span className="text-white/30">what&apos;s next.</span>
              </h1>
              <p className="reveal-up reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Explore applications selected by Fonitas and review the opportunity behind each one — simply, clearly and without a platform-heavy experience.
              </p>
            </div>

            <div className="max-w-xs text-sm leading-6 text-white/30 lg:pb-2">
              <div className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/20">
                <span className="h-px w-8 bg-[#ff5a1f]/50" /> Fonitas selection
              </div>
              We present approved opportunities with the information available for an initial review. Investment conversations happen directly with Fonitas.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Opportunities</p>
            <h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">Applications in Fonitas</h2>
          </div>
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">{investmentOpportunities.length.toString().padStart(2, "0")} opportunities</span>
        </div>

        {hasOpportunities ? (
          <>
            {featuredOpportunity && (
              <Link
                href={`/investors/${featuredOpportunity.slug}`}
                className="group relative mb-8 grid overflow-hidden rounded-[34px] border border-[#ff5a1f]/20 bg-[#101010] lg:grid-cols-[1.15fr_.85fr]"
              >
                <div className="absolute inset-0 grid-bg opacity-15" />
                <div className="relative p-7 sm:p-10 lg:p-12">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#ff6a2a]">Featured application · Demo</span>
                  <h3 className="font-display mt-5 text-4xl font-semibold sm:text-6xl">{featuredOpportunity.name}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/40">{featuredOpportunity.tagline}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredOpportunity.highlights.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/40">{item}</span>
                    ))}
                  </div>
                  <span className="mt-9 inline-flex items-center rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-semibold text-black">
                    Explore application <ArrowUpRight className="ml-3 h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="relative min-h-[280px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,90,31,.18),transparent_42%)]" />
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[#ff5a1f]/25 bg-[#ff5a1f]/10 text-4xl font-semibold text-[#ff6a2a] shadow-[0_0_100px_rgba(255,90,31,.15)]">
                    {featuredOpportunity.name.slice(0, 1)}
                  </div>
                </div>
              </Link>
            )}

            <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.16em] transition ${
                    category === item ? "border-[#ff5a1f]/50 bg-[#ff5a1f]/10 text-[#ff6a2a]" : "border-white/10 text-white/35 hover:text-white/70"
                  }`}>{item}</button>
                ))}
              </div>
              <select value={stage} onChange={(event) => setStage(event.target.value)} className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/50 outline-none">
                {stages.map((item) => <option key={item} value={item}>{item === "All" ? "All stages" : item}</option>)}
              </select>
            </div>

            <div className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/20">
              Showing {filteredOpportunities.length.toString().padStart(2, "0")} of {investmentOpportunities.length.toString().padStart(2, "0")} applications
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredOpportunities.map((opportunity) => (
                  <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.02] px-6 py-16 text-center text-sm text-white/35">
                No applications match these filters.
              </div>
            )}
          </>
        ) : (
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#101010] px-7 py-20 text-center sm:px-12 sm:py-28">
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 text-[#ff6a2a]"><BriefcaseBusiness className="h-6 w-6" strokeWidth={1.7} /></span>
              <p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-[#ff6a2a]">Currently curating</p>
              <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">New opportunities are on the way.</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
                Fonitas is preparing the first public set of investment opportunities. Once an application is approved for public presentation, it will appear here with its core story, metrics and investment information.
              </p>
              <Link href="/contact?type=investment" className="mt-9 inline-flex items-center rounded-full bg-[#ff5a1f] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
                Talk to Fonitas <ArrowUpRight className="ml-3 h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">What you get</p>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-[.95] sm:text-6xl">A clearer first look at the product and the opportunity.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">Each public listing is designed to give investors a concise starting point: what the product is, who it serves, what makes it interesting and what information is currently available.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Simple by design</p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold leading-[.92] sm:text-6xl">See the product.<br /><span className="text-white/30">Understand the opportunity.</span></h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Explore", "Browse selected applications and understand what each product does."],
              ["02", "Review", "See the core story, traction and investment information available."],
              ["03", "Connect", "Tell Fonitas which opportunity interests you and start the conversation."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6">
                <span className="text-[9px] tracking-[0.2em] text-[#ff6a2a]">{number}</span>
                <h3 className="font-display mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/35">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#070707]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-12 text-[10px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link href="/" className="text-lg font-bold normal-case tracking-[-.05em] text-white/80">Fonitas<span className="text-[#ff5a1f]">.</span></Link>
          <div className="flex flex-wrap gap-5">
            <Link href="/product-owners" className="transition hover:text-white/60">Product owners</Link>
            <Link href="/about" className="transition hover:text-white/60">About</Link>
            <Link href="/contact" className="transition hover:text-white/60">Contact</Link>
          </div>
          <span>© 2026 Fonitas</span>
        </div>
      </footer>
    </main>
  );
}