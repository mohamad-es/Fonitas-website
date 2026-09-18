"use client";

import Link from "next/link";
import { useState } from "react";

const stages = [
  { number:"01", label:"Prepare", title:"Prepare the release.", text:"Select the target store, configure the release and collect the required application and store assets.", items:["Application","Store selection","Release assets"] },
  { number:"02", label:"Secure", title:"Secure the build.", text:"Upload the release and record SHA-256 integrity data before it moves through the validation chain.", items:["Build upload","SHA-256","Malware scan"] },
  { number:"03", label:"Validate", title:"Validate before submission.", text:"Manifest and static analysis, permission analysis, manual QA and compliance establish release readiness.", items:["Manifest analysis","Permissions","Manual QA & compliance"] },
  { number:"04", label:"Submit", title:"Record the store submission.", text:"Create the submission record and connect store events to the publishing state. In the MVP, this remains human-in-the-loop.", items:["Checklist","Submission record","Store event"] },
  { number:"05", label:"Published", title:"Make the outcome auditable.", text:"The published state becomes part of the application record and can continue into the post-publication revenue lifecycle.", items:["Published state","Audit trail","Revenue lifecycle"] },
];

const stores = [
  { name:"Apple App Store", mark:"A", meta:"iOS / iPadOS" },
  { name:"Google Play", mark:"G", meta:"Android" },
  { name:"Microsoft Store", mark:"M", meta:"Windows" },
];

function ReleaseConsole({ active, onSelect }: { active:number; onSelect:(index:number)=>void }) {
  const stage = stages[active];
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-[0_30px_120px_rgba(0,0,0,.35)]">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative border-b border-white/10 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <div><p className="text-[9px] uppercase tracking-[.22em] text-white/25">Release control</p><p className="mt-1 text-base font-medium">Application v2.4.1</p></div>
          <span className="rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-3 py-1.5 text-[9px] uppercase tracking-[.16em] text-[#ff7a3d]">{active === 4 ? "Published" : active === 3 ? "Ready" : "In progress"}</span>
        </div>
      </div>

      <div className="relative grid lg:grid-cols-[190px_1fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          {stages.map((item,index) => (
            <button key={item.number} type="button" onClick={()=>onSelect(index)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${active===index ? "bg-[#ff5a1f]/10 text-white" : "text-white/30 hover:bg-white/[.03] hover:text-white/60"}`}>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[9px] ${active===index ? "border-[#ff5a1f]/40 text-[#ff6a2a]" : "border-white/10"}`}>{item.number}</span>
              <span className="text-[10px] uppercase tracking-[.14em]">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[390px] p-7 sm:p-9">
          <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-[#ff5a1f]/10 blur-[70px]" />
          <div className="relative">
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[#ff6a2a]"><span>{stage.number}</span><span className="h-px w-8 bg-[#ff5a1f]/40"/><span>{stage.label}</span></div>
            <h3 className="font-display mt-7 max-w-xl text-4xl font-semibold leading-[.9] sm:text-6xl">{stage.title}</h3>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">{stage.text}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">{stage.items.map((item,i)=><div key={item} className="border border-white/10 bg-white/[.025] p-4"><span className="font-mono text-[9px] text-[#ff5a1f]">0{i+1}</span><p className="mt-5 text-xs text-white/55">{item}</p></div>)}</div>
          </div>
          <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5">
            <button type="button" disabled={active===0} onClick={()=>onSelect(Math.max(active-1,0))} className="text-[9px] uppercase tracking-[.18em] text-white/30 disabled:opacity-20">← Previous</button>
            <div className="flex gap-1.5">{stages.map((_,i)=><button aria-label={`Go to stage ${i+1}`} key={i} type="button" onClick={()=>onSelect(i)} className={`h-1 rounded-full transition-all ${i===active ? "w-8 bg-[#ff5a1f]" : "w-2 bg-white/15"}`} />)}</div>
            <button type="button" disabled={active===stages.length-1} onClick={()=>onSelect(Math.min(active+1,stages.length-1))} className="text-[9px] uppercase tracking-[.18em] text-white/45 disabled:opacity-20">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PublishingPage() {
  const [active,setActive] = useState(0);
  return (
    <main className="overflow-hidden bg-[#070707] pt-20 text-white">
      <section className="relative border-b border-white/[.07]">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#ff5a1f]/10 blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-[#ff6a2b]">Publishing system</p>
            <h1 className="font-display mt-7 max-w-3xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.8] tracking-[-.06em]">A release<br/><span className="text-white/30">with a record.</span></h1>
            <p className="mt-10 max-w-xl text-lg leading-8 text-white/50">Fonitas turns publishing into a controlled sequence of preparation, security, validation and store submission — with every important transition recorded.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Prepare an application ↗</Link><a href="#release-control" className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/65 transition hover:border-white/25 hover:text-white">Explore the release path ↓</a></div>
          </div>
          <ReleaseConsole active={active} onSelect={setActive}/>
        </div>
      </section>

      <section id="release-control" className="border-b border-white/[.07] bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div><p className="text-xs uppercase tracking-[.25em] text-[#ff5a1f]">01 — Release path</p><h2 className="font-display mt-5 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Nothing important disappears between stages.</h2></div>
            <div className="relative">
              <div className="absolute left-3 top-4 hidden h-[calc(100%-32px)] border-l border-dashed border-[#ff5a1f]/20 sm:block" />
              {stages.map((stage,index)=><button key={stage.number} type="button" onClick={()=>setActive(index)} className="group relative grid w-full gap-5 border-t border-white/10 py-7 text-left sm:grid-cols-[48px_180px_1fr] sm:items-center sm:pl-12">
                <span className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border text-[9px] ${active===index ? "border-[#ff5a1f]/50 bg-[#0a0a0a] text-[#ff6a2a]" : "border-white/10 bg-[#0a0a0a] text-white/25"}`}>{stage.number}</span>
                <span className="text-lg font-medium transition group-hover:text-[#ff6a2a]">{stage.label}</span>
                <span className="max-w-xl text-sm leading-6 text-white/35">{stage.text}</span>
              </button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div><p className="text-xs uppercase tracking-[.25em] text-[#ff5a1f]">02 — Store layer</p><h2 className="font-display mt-5 max-w-3xl text-5xl font-semibold leading-[.9] sm:text-7xl">One internal model.<br/><span className="text-white/30">Multiple store destinations.</span></h2></div>
            <p className="max-w-md text-sm leading-7 text-white/35">The MVP keeps submission human-in-the-loop. Provider-specific adapters can be introduced later while the internal publishing model remains stable.</p>
          </div>
          <div className="mt-14 grid gap-3 border-y border-white/10 py-3 md:grid-cols-3">
            {stores.map((store,index)=><div key={store.name} className={`group relative overflow-hidden px-5 py-8 md:border-r md:border-white/10 md:last:border-r-0 ${index===0 ? "bg-[#ff5a1f]/[.035]" : ""}`}>
              <div className="absolute right-5 top-6 h-2 w-2 rounded-full bg-[#ff5a1f] opacity-50" />
              <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-lg font-semibold transition group-hover:border-[#ff5a1f]/30">{store.mark}</span><div><h3 className="text-base font-medium">{store.name}</h3><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/25">{store.meta}</p></div></div>
              <div className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[.16em] text-white/25"><span className="h-px w-8 bg-[#ff5a1f]/40"/><span>Future adapter</span></div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.07] bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32">
          <div><p className="text-xs uppercase tracking-[.25em] text-[#ff5a1f]">03 — Human control</p><h2 className="font-display mt-5 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Automation where it helps. <span className="text-white/30">Judgment where it matters.</span></h2></div>
          <div className="relative overflow-hidden border-l border-[#ff5a1f]/30 pl-7 sm:pl-12"><div className="absolute left-0 top-0 h-16 w-px bg-[#ff5a1f]" /><p className="max-w-2xl text-2xl leading-10 text-white/75">Fonitas does not turn store publishing into a black box. The workflow around a release is structured and recorded; the final store operation remains human-in-the-loop in the MVP.</p><div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.18em] text-white/30"><span>Build</span><span>Security</span><span>QA</span><span>Submission</span><span>Audit</span></div></div>
        </div>
      </section>

      <section className="bg-[#ff5a1f] px-6 py-24 text-black lg:px-10"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-black/55">Next release</p><h2 className="font-display mt-5 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">Bring the application.<br/>We&apos;ll map the path.</h2></div><Link href="/contact" className="shrink-0 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Start a conversation ↗</Link></div></section>
    </main>
  );
}
