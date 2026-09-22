"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Check } from "lucide-react";
import { investmentOpportunities } from "@/data/investment-opportunities";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />;

function OpportunityCard({ opportunity }: { opportunity: (typeof investmentOpportunities)[number] }) {
  return (
    <Link href={`/investors/${opportunity.slug}`} className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-[#ff5a1f]/35">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.07] bg-[#0c0c0c]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ff5a1f]/10 blur-[90px] transition group-hover:bg-[#ff5a1f]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          {opportunity.logo ? <Image src={opportunity.logo} alt="" width={80} height={80} className="h-20 w-20 rounded-[22px] object-cover shadow-2xl" /> : <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 text-2xl text-[#ff6a2a]">{opportunity.name.slice(0, 1)}</div>}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[9px] uppercase tracking-[0.2em]">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-white/45 backdrop-blur">{opportunity.category}</span>
          <span className="text-[#ff6a2a]">{opportunity.stage}</span>
        </div>
      </div>
      <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><h2 className="font-display text-3xl font-semibold">{opportunity.name}</h2><p className="mt-2 text-sm text-white/45">{opportunity.tagline}</p></div>
          <span className="text-[#ff5a1f]"><Arrow /></span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {opportunity.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"><p className="text-[8px] uppercase tracking-[0.18em] text-white/20">{metric.label}</p><p className="mt-2 text-sm font-medium text-white/75">{metric.value}</p></div>)}
        </div>
        <div className="mt-7 border-t border-white/[0.07] pt-5 text-xs font-medium text-white/65">View investment opportunity <ArrowRight className="ml-2 inline-block h-3.5 w-3.5 text-[#ff5a1f]" strokeWidth={1.8} /></div>
      </div>
    </Link>
  );
}

export function InvestorsPage() {
  const [category, setCategory] = useState("All");
  const [stage, setStage] = useState("All");
  const categories = ["All", ...new Set(investmentOpportunities.map((item) => item.category))];
  const stages = ["All", ...new Set(investmentOpportunities.map((item) => item.stage))];
  const filtered = useMemo(() => investmentOpportunities.filter((item) => (category === "All" || item.category === category) && (stage === "All" || item.stage === stage)), [category, stage]);
  const featured = investmentOpportunities[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative border-b border-white/[0.08] pt-28">
        <div className="absolute inset-0 grid-bg opacity-25" /><div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a2a]">For investors</p>
              <h1 className="font-display glow-text mt-6 text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[.86]">Invest in<br /><span className="text-white/30">applications with a path to growth.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">Fonitas evaluates applications, prepares them for growth, and presents selected investment opportunities with product, traction and financial information in one place.</p>
            </div>
            <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.02] p-7 text-sm leading-6 text-white/35">
              <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-[#ff6a2a]">The Fonitas approach</p>
              <div className="grid grid-cols-2 gap-4">
                {[["Selection","Applications are reviewed before presentation."],["Transparency","Key information is shown before you start a conversation."],["Evaluation","Product, market and financial signals are organized for review."],["Conversation","Investment discussions happen directly with Fonitas."]].map(([t,x]) => <div key={t}><p className="text-white/70">{t}</p><p className="mt-1 text-xs text-white/30">{x}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">How investing works</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[.95] sm:text-6xl">From discovery to investment.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[["01","Discover","Explore selected applications."],["02","Evaluate","Review product, market and traction."],["03","Invest","Discuss terms with Fonitas."],["04","Grow","Capital supports the next growth stage."],["05","Settlement","Follow the agreed financial outcome."]].map(([n,t,x]) => <div key={n} className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6"><span className="text-[9px] tracking-[0.2em] text-[#ff6a2a]">{n}</span><h3 className="font-display mt-7 text-2xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-white/35">{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Opportunities</p><h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">Selected applications</h2></div><span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">{investmentOpportunities.length.toString().padStart(2,"0")} opportunities</span></div>
        <Link href={`/investors/${featured.slug}`} className="group mb-8 grid overflow-hidden rounded-[34px] border border-[#ff5a1f]/20 bg-[#101010] lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative p-7 sm:p-10 lg:p-12"><span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#ff6a2a]">Featured opportunity</span><h3 className="font-display mt-5 text-4xl font-semibold sm:text-6xl">{featured.name}</h3><p className="mt-4 max-w-xl text-base leading-7 text-white/40">{featured.tagline}</p><div className="mt-8 grid max-w-xl grid-cols-3 gap-2">{featured.snapshot.slice(0,3).map((m)=><div key={m.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"><p className="text-[8px] uppercase tracking-[0.16em] text-white/20">{m.label}</p><p className="mt-2 text-sm text-white/70">{m.value}</p></div>)}</div><span className="mt-9 inline-flex items-center rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-semibold text-black">Explore opportunity <ArrowUpRight className="ml-3 h-4 w-4" strokeWidth={1.8}/></span></div>
          <div className="relative min-h-[280px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,90,31,.18),transparent_42%)]"/><div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-[#ff5a1f]/25 bg-[#ff5a1f]/10 items-center justify-center text-4xl font-semibold text-[#ff6a2a]">{featured.name.slice(0,1)}</div></div>
        </Link>
        <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap gap-2">{categories.map(item=><button key={item} onClick={()=>setCategory(item)} className={`rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.16em] ${category===item?"border-[#ff5a1f]/50 bg-[#ff5a1f]/10 text-[#ff6a2a]":"border-white/10 text-white/35 hover:text-white/70"}`}>{item}</button>)}</div><select value={stage} onChange={e=>setStage(e.target.value)} className="rounded-full border border-white/10 bg-[#111] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/50 outline-none">{stages.map(item=><option key={item} value={item}>{item==="All"?"All stages":item}</option>)}</select></div>
        <div className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/20">Showing {filtered.length.toString().padStart(2,"0")} of {investmentOpportunities.length.toString().padStart(2,"0")} opportunities</div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map(opportunity=><OpportunityCard key={opportunity.slug} opportunity={opportunity}/>)}</div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24">
          <div><p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">What Fonitas looks for</p><h2 className="font-display mt-4 text-4xl font-semibold leading-[.95] sm:text-6xl">Selection is part of the value.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">{[["Product","Clear problem, useful product and credible user value."],["Market","Defined market with room for meaningful growth."],["Traction","Evidence of usage, revenue or measurable engagement."],["Team","Ability to execute, operate and scale the application."],["Business model","A path to sustainable and repeatable revenue."],["Growth potential","A credible plan for where capital can create leverage."]].map(([t,x])=><div key={t} className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6"><h3 className="font-display text-2xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-white/35">{x}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24"><div className="rounded-[34px] border border-[#ff5a1f]/20 bg-[#101010] p-8 sm:p-12 lg:p-16"><div className="max-w-3xl"><p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Ready to explore?</p><h2 className="font-display mt-4 text-4xl font-semibold sm:text-6xl">Start with an opportunity. Continue with the information.</h2><p className="mt-5 text-sm leading-7 text-white/40">Review an application, request additional information, and speak directly with Fonitas when an opportunity fits your interests.</p><Link href="/contact?type=investment" className="mt-8 inline-flex items-center rounded-full bg-[#ff5a1f] px-6 py-3.5 text-sm font-semibold text-black">Request investment information <ArrowUpRight className="ml-3 h-4 w-4"/></Link></div></div></section>

      <footer className="bg-[#070707]"><div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-12 text-[10px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-10"><Link href="/" className="text-lg font-bold normal-case tracking-[-.05em] text-white/80">Fonitas<span className="text-[#ff5a1f]">.</span></Link><div className="flex flex-wrap gap-5"><Link href="/product-owners">Product owners</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><span>© 2026 Fonitas</span></div></footer>
    </main>
  );
}
