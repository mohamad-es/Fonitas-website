"use client";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stages = [
  { number:"01", name:"Application", short:"Start", title:"Start with the application.", text:"A collaboration request becomes an application with the information needed to understand what is being built, who owns it and where it is in the launch process.", details:["Collaboration request","Application registration","Application details","Submission for evaluation"] },
  { number:"02", name:"Review", short:"Evaluate", title:"Make readiness explicit.", text:"The application moves through a structured evaluation. Reviewers can assess readiness, request changes and record an explicit decision before the next stage begins.", details:["Evaluation","Review notes","Change requests","Approval or rejection"] },
  { number:"03", name:"Contract", short:"Define", title:"Turn approval into publishing rights.", text:"An approved application moves into the contract workflow. Publishing scope, stores, geography, duration and commercial terms are defined before the publishing license is activated.", details:["Publishing scope","Store selection","Geography & duration","Revenue share & terms"] },
  { number:"04", name:"QA", short:"Validate", title:"Validate the release before it moves.", text:"Release preparation combines technical and operational checks. Builds can be verified for integrity, scanned and reviewed for permissions before QA and compliance are completed.", details:["Build upload","SHA-256 integrity","Malware scan","Permission & compliance review"] },
  { number:"05", name:"Publishing", short:"Launch", title:"Move the release to the store.", text:"A publishing request brings together the selected store, release assets, checklist and submission record. In the MVP, publishing remains human-in-the-loop so responsibility stays clear.", details:["Store preparation","Assets & release","Publishing checklist","Human-in-the-loop submission"] },
  { number:"06", name:"Settlement", short:"Reconcile", title:"Close the loop with revenue.", text:"After publication, revenue is collected and reconciled with costs and contractual rules. Settlement, statements and payments complete the application lifecycle.", details:["Revenue collection","Reconciliation","Settlement calculation","Statement & payment"] },
];

function LifecycleMap({ active, onSelect }: { active:number; onSelect:(index:number)=>void }) {
  return (
    <div className="relative mx-auto min-h-[520px] w-full max-w-[720px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] p-6 sm:p-10 [perspective:1200px]">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#ff5a1f]/20 animate-[spin_28s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-[28px] border border-[#ff8a55]/50 bg-[#ff5a1f] shadow-[0_0_100px_rgba(255,90,31,.28)] transition-transform duration-700 hover:scale-105">
        <span className="-rotate-45 text-center text-[9px] font-bold uppercase tracking-[.2em] text-black">FONITAS<br/><span className="font-normal tracking-[.14em]">LIFECYCLE</span></span>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border-t border-[#ff5a1f]/40" />
      {stages.map((stage,index) => {
        const positions=["left-[6%] top-[9%]","right-[5%] top-[27%]","right-[7%] bottom-[8%]","left-[8%] bottom-[8%]","left-[3%] top-[44%]","right-[4%] top-[5%]"];
        return <button key={stage.number} type="button" onClick={()=>onSelect(index)} className={`absolute z-20 w-[148px] rounded-2xl border px-4 py-3 text-left transition-all duration-500 ${positions[index]} ${active===index ? "border-[#ff5a1f]/50 bg-[#ff5a1f]/10 shadow-[0_0_35px_rgba(255,90,31,.08)] translate-z-2" : "border-white/10 bg-[#0d0d0d]/90 hover:border-white/20"}`}>
          <div className="flex items-center justify-between"><span className="font-mono text-[9px] text-[#ff5a1f]">{stage.number}</span><span className={`h-1.5 w-1.5 rounded-full ${active===index ? "bg-[#ff5a1f] shadow-[0_0_12px_#ff5a1f]" : "bg-white/20"}`} /></div>
          <p className="mt-3 text-xs font-medium text-white">{stage.name}</p><p className="mt-1 text-[8px] uppercase tracking-[.15em] text-white/25">{stage.short}</p>
        </button>
      })}
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[9px] uppercase tracking-[.18em] text-white/20"><span>Interactive lifecycle map</span><span>{stages[active].number} / 06</span></div>
    </div>
  );
}

export function HowItWorksPage() {
  const [active,setActive]=useState(0);
  const stage=stages[active];

  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative min-h-[88vh] border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-48 top-16 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(88vh-80px)] max-w-[1400px] items-center gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <Image src="/visuals/fonitas-lifecycle.svg" alt="" width={1200} height={700} priority className="pointer-events-none absolute -right-72 top-1/2 hidden w-[760px] -translate-y-1/2 opacity-[0.13] lg:block" aria-hidden="true" />
          <div className="relative z-10">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[.3em] text-[#ff6a2a]">How publishing works</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-4xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.8] tracking-tight">From<br/><span className="text-white/30">application</span><br/>to settlement.</h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-lg leading-8 text-white/50">One connected lifecycle takes an application from collaboration and evaluation through contract, QA, publishing and the financial work that follows.</p>
            <div className="mt-9 flex gap-3 text-[10px] uppercase tracking-[.2em] text-white/35"><span className="border border-white/10 px-3 py-2">6 stages</span><span className="border border-white/10 px-3 py-2">Explicit state</span></div>
          </div>
          <LifecycleMap active={active} onSelect={setActive}/>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
            <div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">The operating path</p><h2 className="font-display mt-6 text-5xl font-semibold leading-[.9] sm:text-7xl">Select a stage.<br/><span className="text-white/25">See what happens.</span></h2></div>
            <div className="border-t border-white/10 pt-6"><div className="flex flex-wrap gap-2">{stages.map((item,index)=><button key={item.number} type="button" onClick={()=>setActive(index)} className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.16em] transition ${active===index ? "border-[#ff5a1f]/40 bg-[#ff5a1f]/10 text-[#ff6a2a]" : "border-white/10 text-white/30 hover:text-white/70"}`}>{item.number} {item.name}</button>)}</div></div>
          </div>
          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[360px] border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 grid-bg opacity-15" />
              <div className="relative flex h-full flex-col justify-between">
                <div><span className="font-display text-8xl font-semibold text-[#ff5a1f]/70">{stage.number}</span><p className="mt-3 text-[10px] uppercase tracking-[.25em] text-white/25">{stage.short} / {stage.name}</p></div>
                <div className="flex items-end justify-between"><div><p className="text-[9px] uppercase tracking-[.18em] text-white/20">Current stage</p><p className="mt-2 text-2xl font-medium">{stage.name}</p></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff5a1f]/30 text-[#ff6a2a]"><ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /></span></div>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="font-display text-4xl font-semibold leading-[.92] sm:text-5xl">{stage.title}</h3>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">{stage.text}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">{stage.details.map((detail,i)=><div key={detail} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm text-white/55"><span>{detail}</span><span className="font-mono text-[9px] text-[#ff5a1f]">0{i+1}</span></div>)}</div>
              <div className="mt-10 flex justify-between border-t border-white/10 pt-5"><button type="button" disabled={active===0} onClick={()=>setActive(v=>Math.max(0,v-1))} className="text-[10px] uppercase tracking-[.18em] text-white/30 transition hover:text-white disabled:opacity-20">← Previous</button><button type="button" disabled={active===stages.length-1} onClick={()=>setActive(v=>Math.min(stages.length-1,v+1))} className="text-[10px] uppercase tracking-[.18em] text-white/45 transition hover:text-[#ff6a2a] disabled:opacity-20">Next →</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Publishing control</p><h2 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Human where it matters.</h2></div><div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-12"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff5a1f]/10 blur-[80px]"/><p className="relative max-w-2xl text-lg leading-8 text-white/50">Store preparation, release assets, security checks, QA and submission are recorded steps. In the MVP, the final publishing operation remains human-in-the-loop so responsibility stays clear.</p><div className="relative mt-10 grid gap-3 sm:grid-cols-2">{["Build & assets","Security & compliance","QA approval","Store submission"].map((item,i)=><div key={item} className="flex items-center justify-between border border-white/10 bg-white/[.02] px-5 py-4 text-sm text-white/55"><span>{item}</span><span className="font-mono text-[9px] text-[#ff5a1f]">0{i+1}</span></div>)}</div></div></div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Financial close</p><h2 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Revenue becomes a record.</h2></div><div className="border-l border-white/10 pl-8 sm:pl-12"><p className="max-w-2xl text-lg leading-8 text-white/45">After publication, revenue is collected and reconciled with external facts and contract rules, then carried through settlement, statement and payment.</p><div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{["Revenue import","Reconciliation","Settlement","Statement","Payment","Immutable history"].map((item,i)=><div key={item} className="bg-[#0b0b0b] p-5"><span className="text-[10px] text-[#ff5a1f]">0{i+1}</span><p className="mt-5 text-sm font-medium">{item}</p></div>)}</div></div></div></div>
      </section>

      <section className="bg-[#ff5a1f] text-black"><div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24"><div><p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Ready to move?</p><h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">Start with the application. We&apos;ll map the path.</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Start a collaboration ↗</Link></div></section>
    </main>
  );
}