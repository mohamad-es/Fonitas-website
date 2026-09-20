import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { investmentOpportunities } from "@/data/investment-opportunities";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const Arrow = () => <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />;

export function InvestorOpportunityPage({ slug }: { slug: string }) {
  const opportunity = investmentOpportunities.find((item) => item.slug === slug);

  if (!opportunity) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative border-b border-white/[0.08] pt-28">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#ff5a1f]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-28">
          <Link href="/investors" className="inline-flex items-center gap-3 text-xs text-white/35 transition hover:text-white/70">
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.8} /> Back to opportunities
          </Link>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="flex items-center gap-4">
                {opportunity.logo ? (
                  <Image src={opportunity.logo} alt="" width={64} height={64} className="h-16 w-16 rounded-2xl object-cover" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff5a1f]/20 bg-[#ff5a1f]/10 text-xl text-[#ff6a2a]">{opportunity.name.slice(0, 1)}</div>
                )}
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#ff6a2a]">{opportunity.category}</p>
                  <p className="mt-1 text-xs text-white/25">{opportunity.stage}</p>
                </div>
              </div>
              <h1 className="font-display glow-text mt-8 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.86]">{opportunity.name}</h1>
              <p className="mt-5 max-w-2xl text-lg text-white/45">{opportunity.tagline}</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/25">Demo opportunity</p>
              <p className="font-display mt-4 text-4xl font-semibold">{opportunity.investment.value}</p>
              <p className="mt-2 text-sm text-white/35">{opportunity.investment.label}</p>
              <Link href={`/contact?type=investment&opportunity=${opportunity.slug}`} className="mt-7 flex items-center justify-center rounded-full bg-[#ff5a1f] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
                Discuss with Fonitas <span className="ml-3"><Arrow /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">About the product</p>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/55">{opportunity.description}</p>

            <div className="mt-14">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Why it matters</p>
              <div className="mt-6 grid gap-3">
                {opportunity.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-sm text-white/55">{highlight}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5a1f]">Product snapshot</p>
            <div className="mt-6 grid gap-3">
              {opportunity.metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">{metric.label}</span>
                  <span className="text-sm font-medium text-white/80">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#070707]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-12 text-[10px] uppercase tracking-[0.18em] text-white/20 lg:px-10">
          <Link href="/" className="text-lg font-bold normal-case tracking-[-.05em] text-white/80">Fonitas<span className="text-[#ff5a1f]">.</span></Link>
          <Link href="/investors" className="transition hover:text-white/60">All opportunities</Link>
        </div>
      </footer>
    </main>
  );
}