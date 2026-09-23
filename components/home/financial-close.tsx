"use client";

import { useState } from "react";

const stages = [
  ["01", "Revenue", "Revenue facts enter the financial workflow after publication."],
  ["02", "Reconciliation", "External revenue is matched against costs and contractual rules."],
  ["03", "Owner share", "The applicable contractual share becomes a financial fact."],
  ["04", "Settlement", "Settlement records close the financial obligation."],
  ["05", "Statement", "The resulting statement keeps the financial history explicit."],
  ["06", "Payment", "Payment completes the operational financial loop."],
];

export function FinancialClose() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section id="financial-close" className="border-y border-white/[0.08] bg-[#080808]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-10 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Financial close</p>
            <h2 className="font-display max-w-xl text-4xl font-semibold leading-[.9] sm:text-6xl lg:text-7xl">Publishing doesn&apos;t end at the store.</h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/40 sm:mt-8">Fonitas carries the application beyond publication into revenue collection, reconciliation, settlement, statements and payment.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[.18em] text-white/20 sm:mt-10"><span>06 stages</span><span className="h-px w-8 bg-[#ff5a1f]/30"/><span>Immutable history</span></div>
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:rounded-[32px]">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
                <div><p className="text-[9px] uppercase tracking-[.22em] text-white/25">Finance / Application</p><p className="mt-1 text-sm font-medium">Revenue operations</p></div>
                <span className="shrink-0 rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/[.05] px-3 py-1.5 text-[8px] uppercase tracking-[.16em] text-[#ff6a2a]">Recorded</span>
              </div>
              <div className="grid lg:grid-cols-[190px_1fr]">
                <nav className="grid grid-cols-2 gap-1 border-b border-white/10 p-3 sm:grid-cols-3 lg:block lg:border-b-0 lg:border-r lg:p-4">
                  {stages.map(([number,title],index) => (
                    <button key={number} type="button" onClick={()=>setActive(index)} className={`relative flex min-w-0 w-full items-center gap-2 rounded-xl px-2 py-2.5 text-left transition sm:gap-3 sm:px-3 sm:py-3 ${active===index ? "bg-[#ff5a1f]/10 text-white" : "text-white/30 hover:bg-white/[.03] hover:text-white/60"}`}>
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[9px] ${active===index ? "border-[#ff5a1f]/40 text-[#ff6a2a]" : "border-white/10"}`}>{number}</span>
                      <span className="truncate text-[9px] uppercase tracking-[.1em] sm:text-[10px] sm:tracking-[.13em]">{title}</span>
                    </button>
                  ))}
                </nav>
                <div className="relative min-h-[360px] p-6 sm:min-h-[430px] sm:p-10">
                  <div className="absolute right-8 top-8 h-44 w-44 rounded-full bg-[#ff5a1f]/10 blur-[75px]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4 text-[9px] uppercase tracking-[.2em]"><span className="text-[#ff6a2a]">{stage[0]} / {stage[1]}</span><span className="text-white/20">Financial fact</span></div>
                    <div className="mt-10 flex flex-1 flex-col justify-center sm:mt-12">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-2xl font-semibold text-[#ff6a2a] sm:h-24 sm:w-24 sm:rounded-[26px] sm:text-3xl">{active===0 ? "$" : active===1 ? "↔" : active===2 ? "%" : active===3 ? "∑" : active===4 ? "=" : "✓"}</div>
                      <h3 className="font-display mt-6 text-4xl font-semibold leading-[.9] sm:mt-8 sm:text-6xl">{stage[1]}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/40 sm:mt-5 sm:leading-7 sm:text-base">{stage[2]}</p>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:mt-10">
                      <div><p className="text-[8px] uppercase tracking-[.16em] text-white/20">Stage</p><p className="mt-2 text-xs text-white/60">{active+1} / 6</p></div>
                      <div><p className="text-[8px] uppercase tracking-[.16em] text-white/20">State</p><p className="mt-2 text-xs text-[#ff6a2a]">Recorded</p></div>
                      <div><p className="text-[8px] uppercase tracking-[.16em] text-white/20">History</p><p className="mt-2 text-xs text-white/60">Immutable</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 px-5 py-5 sm:px-8">
                <div className="flex items-center justify-between gap-5">
                  <div className="flex-1"><div className="h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#ff5a1f] transition-all duration-500" style={{width:`${((active+1)/stages.length)*100}%`}} /></div></div>
                  <span className="text-[9px] uppercase tracking-[.16em] text-white/25">{active+1} / {stages.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          <div><p className="text-[9px] uppercase tracking-[.2em] text-[#ff5a1f]">Revenue</p><p className="mt-2 text-sm text-white/45">Imported facts enter the financial workflow.</p></div>
          <div><p className="text-[9px] uppercase tracking-[.2em] text-[#ff5a1f]">Reconciliation</p><p className="mt-2 text-sm text-white/45">External facts meet costs and contract rules.</p></div>
          <div><p className="text-[9px] uppercase tracking-[.2em] text-[#ff5a1f]">Settlement</p><p className="mt-2 text-sm text-white/45">The financial obligation becomes auditable.</p></div>
        </div>
      </div>
    </section>
  );
}
