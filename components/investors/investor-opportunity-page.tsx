import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { investmentOpportunities } from "@/data/investment-opportunities";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />;
const SectionLabel = ({ children }: { children: ReactNode }) => <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">{children}</p>;

export function InvestorOpportunityPage({ slug }: { slug: string }) {
  const opportunity = investmentOpportunities.find((item) => item.slug === slug);
  if (!opportunity) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative border-b border-white/[0.08] pt-28">
        <div className="absolute inset-0 grid-bg opacity-20" /><div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#ff5a1f]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-24">
          <Link href="/investors" className="inline-flex items-center gap-3 text-xs text-white/35 transition hover:text-white/70"><ArrowLeft className="h-3.5 w-3.5" /> Back to opportunities</Link>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="flex items-center gap-4">
                {opportunity.logo ? <Image src={opportunity.logo} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl object-cover" /> : <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 text-xl text-[#ff6a2a]">{opportunity.name.slice(0,1)}</div>}
                <div className="flex flex-wrap gap-2"><span className="rounded-full border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[#ff6a2a]">{opportunity.category}</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/30">{opportunity.stage}</span></div>
              </div>
              <h1 className="font-display glow-text mt-8 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.86]">{opportunity.name}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/45">{opportunity.tagline}</p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#ff5a1f]/25 bg-[#101010] p-7 sm:p-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#ff6a2a]">Investment opportunity</p>
              <p className="font-display mt-4 text-4xl font-semibold">{opportunity.investment.value}</p><p className="mt-2 text-sm text-white/35">{opportunity.investment.label}</p>
              <Link href={`/contact?type=investment&opportunity=${opportunity.slug}`} className="mt-7 flex items-center justify-center rounded-full bg-[#ff5a1f] px-6 py-3.5 text-sm font-semibold text-black">Request investment information <span className="ml-3"><Arrow /></span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <SectionLabel>Investment snapshot</SectionLabel>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{opportunity.snapshot.map(item=><div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><p className="text-[9px] uppercase tracking-[0.18em] text-white/25">{item.label}</p><p className="mt-2 text-lg font-medium text-white/85">{item.value}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionLabel>The opportunity</SectionLabel>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/55">{opportunity.description}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[["Problem",opportunity.problem],["Solution",opportunity.solution],["Target market",opportunity.targetMarket],["Why now",opportunity.whyNow]].map(([t,x])=><div key={t} className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6"><h2 className="font-display text-2xl font-semibold">{t}</h2><p className="mt-3 text-sm leading-6 text-white/35">{x}</p></div>)}
            </div>
          </div>
          <div><SectionLabel>Product snapshot</SectionLabel><div className="mt-6 grid gap-3">{opportunity.highlights.map(h=><div key={h} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm text-white/55">{h}</div>)}</div></div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>Traction & financials</SectionLabel><h2 className="font-display mt-4 text-4xl font-semibold sm:text-6xl">Signals behind the story.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/35">A concise view of current operating signals. Detailed financial materials can be requested through Fonitas.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{opportunity.financials.map(item=><div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><p className="text-[9px] uppercase tracking-[0.18em] text-white/25">{item.label}</p><p className="mt-2 text-lg font-medium text-white/80">{item.value}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><SectionLabel>Investment thesis</SectionLabel><h2 className="font-display mt-4 text-4xl font-semibold sm:text-6xl">Where capital is intended to create leverage.</h2></div>
          <div><p className="text-sm leading-7 text-white/40">The current round is intended to accelerate the next stage of product and commercial growth.</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{opportunity.useOfFunds.map((item,i)=><div key={item} className="rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6"><span className="text-[9px] text-[#ff6a2a]">0{i+1}</span><h3 className="font-display mt-6 text-xl font-semibold">{item}</h3></div>)}</div></div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div><SectionLabel>Due diligence</SectionLabel><h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">What has been reviewed.</h2><div className="mt-7 grid gap-3">{opportunity.diligence.map(item=><div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-white/55"><Check className="h-4 w-4 text-[#ff6a2a]" />{item}</div>)}</div></div>
            <div><SectionLabel>What Fonitas has verified</SectionLabel><div className="mt-7 grid gap-3">{opportunity.verified.map(item=><div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-white/55"><Check className="h-4 w-4 text-[#ff6a2a]" />{item}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div><SectionLabel>Investment terms</SectionLabel><div className="mt-6 grid gap-3">{opportunity.terms.map(item=><div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"><span className="text-[9px] uppercase tracking-[0.18em] text-white/25">{item.label}</span><span className="text-sm font-medium text-white/80">{item.value}</span></div>)}</div></div>
          <div><SectionLabel>Risks & considerations</SectionLabel><p className="mt-5 text-sm leading-7 text-white/35">Every investment carries risk. The following items are provided as starting points for diligence and are not exhaustive.</p><div className="mt-6 grid gap-3">{opportunity.risks.map(r=><div key={r} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm text-white/50">{r}</div>)}</div></div>
        </div>
      </section>

      <section className="border-t border-[#ff5a1f]/20 bg-[#101010]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center"><SectionLabel>Next step</SectionLabel><h2 className="font-display mt-4 text-4xl font-semibold sm:text-6xl">Interested in {opportunity.name}?</h2><p className="mt-5 text-sm leading-7 text-white/40">Request the investment information available for this opportunity and speak directly with Fonitas about the next step.</p><Link href={`/contact?type=investment&opportunity=${opportunity.slug}`} className="mt-8 inline-flex items-center rounded-full bg-[#ff5a1f] px-7 py-4 text-sm font-semibold text-black">Request investment information <ArrowUpRight className="ml-3 h-4 w-4"/></Link></div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#070707]"><div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-12 text-[10px] uppercase tracking-[0.18em] text-white/20 lg:px-10"><Link href="/" className="text-lg font-bold normal-case tracking-[-.05em] text-white/80">Fonitas<span className="text-[#ff5a1f]">.</span></Link><Link href="/investors">All opportunities</Link></div></footer>
    </main>
  );
}
