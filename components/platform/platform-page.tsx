"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const infrastructure = [
  ["01","Auth","Identity & access"],
  ["02","Storage","Files & assets"],
  ["03","Notifications","Workflow signals"],
  ["04","Analytics","Operational insight"],
  ["05","Messaging","Communication"],
  ["06","API Platform","Explicit interfaces"],
  ["07","Support","Operational follow-up"],
];

const layers = [
  { label:"01", title:"Publishing core", text:"Application, review, contract, QA, publishing and settlement form the foundation." },
  { label:"02", title:"Platform services", text:"Reusable infrastructure can sit around the core without taking ownership away from the domains that own the underlying facts." },
  { label:"03", title:"Business expansion", text:"Commercial, marketing, legal, investment and other capabilities can extend the operating model over time." },
];

function ArchitectureVisual() {
  return (
    <div className="relative min-h-[430px] sm:min-h-[590px] overflow-hidden rounded-[34px] border border-white/10 bg-[#090909] [perspective:1200px]">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.05]" />
      <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full border border-[#ff5a1f]/15" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-[70px]" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[28px] bg-[#ff5a1f] text-black shadow-[0_0_100px_rgba(255,90,31,.3)] transition-transform duration-700 hover:scale-105">
        <span className="text-[11px] font-black uppercase tracking-[.18em]">Fonitas</span>
        <span className="mt-1 text-[8px] font-semibold uppercase tracking-[.2em]">Publishing Core</span>
      </div>

      {[
        ["APPLICATION","left-[7%] top-[13%]"],
        ["CONTRACT","right-[7%] top-[21%]"],
        ["QA","left-[8%] bottom-[22%]"],
        ["SETTLEMENT","right-[7%] bottom-[14%]"],
      ].map(([label,pos])=>(
        <div key={label} className={`absolute ${pos} rounded-full border border-white/10 bg-[#101010]/90 px-4 py-2 text-[9px] font-medium uppercase tracking-[.18em] text-white/45 backdrop-blur-xl`}>
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />{label}
        </div>
      ))}

      <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#ff5a1f]/30 to-transparent" />
      <div className="absolute left-1/2 top-[8%] h-[84%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-4 text-[9px] uppercase tracking-[.18em]">
        <span className="text-white/20">One core / explicit boundaries</span>
        <span className="text-[#ff6a2a]">Publishing first</span>
      </div>
    </div>
  );
}

function ServiceConstellation() {
  return (
    <div className="relative min-h-[500px] sm:min-h-[620px] overflow-hidden border-y border-white/10 bg-[#090909]">
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/15" />
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/[.07] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 sm:h-28 sm:w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ff5a1f]/30 bg-[#111] text-center shadow-[0_0_60px_rgba(255,90,31,.12)]">
        <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-white">Platform<br/><span className="text-[#ff6a2a]">Services</span></span>
      </div>
      {infrastructure.map(([number,name,text],index)=>{
        const positions=[
          "left-[6%] top-[10%]","right-[6%] top-[10%]","left-[3%] top-1/2 -translate-y-1/2",
          "right-[3%] top-1/2 -translate-y-1/2","left-[10%] bottom-[9%]","right-[10%] bottom-[9%]","left-1/2 bottom-[3%] -translate-x-1/2",
        ];
        return <div key={number} className={`absolute ${positions[index]} w-[190px] border-b border-white/10 pb-4 sm:w-[220px]`}>
          <div className="flex items-center gap-3"><span className="text-[9px] text-[#ff5a1f]">{number}</span><span className="text-sm font-medium text-white/75">{name}</span></div>
          <p className="mt-2 text-[10px] uppercase tracking-[.14em] text-white/20">{text}</p>
          <span className="absolute left-1/2 top-7 hidden h-px w-16 bg-[#ff5a1f]/20 md:block" />
        </div>;
      })}
    </div>
  );
}

export function PlatformPage() {
  const [activeLayer,setActiveLayer]=useState(0);
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative border-b border-white/[.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
          <Image src="/visuals/fonitas-platform.svg" alt="" width={1200} height={700} priority className="pointer-events-none absolute -right-56 top-1/2 hidden w-[760px] -translate-y-1/2 opacity-[0.14] lg:block" aria-hidden="true" />
          <div>
            <p className="reveal-up text-xs font-semibold uppercase tracking-[.3em] text-[#ff6a2a]">The platform</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-4xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.82] tracking-tight">One core.<br/><span className="text-white/30">Many capabilities.</span></h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-lg leading-8 text-white/50">Fonitas starts with the application publishing lifecycle and expands around it. The platform direction adds reusable infrastructure and business capabilities without losing clear ownership between domains.</p>
            <div className="mt-10 flex flex-wrap gap-3"><span className="rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-[#ff7a3d]">Publishing first</span><span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/35">Platform next</span></div>
          </div>
          <ArchitectureVisual/>
        </div>
      </section>

      <section className="border-b border-white/[.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
          <div className="mb-14 max-w-3xl"><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Infrastructure services</p><h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">The services orbit the workflow.</h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/35">These are reusable platform capabilities around the publishing core, not separate products competing for ownership of the lifecycle.</p></div>
          <ServiceConstellation/>
        </div>
      </section>

      <section className="border-b border-white/[.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:items-start">
            <div className="lg:sticky lg:top-28"><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Built in layers</p><h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">Expand the platform.<br/><span className="text-white/25">Keep the boundaries.</span></h2></div>
            <div className="border-t border-white/10">
              {layers.map((layer,index)=><button key={layer.label} type="button" onClick={()=>setActiveLayer(index)} className={`group grid w-full gap-5 border-b border-white/10 py-9 text-left transition sm:grid-cols-[70px_1fr_1fr] sm:items-center ${activeLayer===index ? "bg-white/[.025]" : ""}`}>
                <span className={`text-xs ${activeLayer===index ? "text-[#ff5a1f]" : "text-white/20"}`}>{layer.label}</span>
                <span className={`font-display text-3xl font-semibold transition sm:text-4xl ${activeLayer===index ? "text-white" : "text-white/45 group-hover:text-white/75"}`}>{layer.title}</span>
                <span className={`text-sm leading-7 ${activeLayer===index ? "text-white/50" : "text-white/25"}`}>{layer.text}</span>
              </button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.08]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32 lg:items-center">
          <div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Now → next</p><h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">Publishing first.<br/><span className="text-white/30">Platform next.</span></h2></div>
          <div className="relative border-l border-white/10 pl-8 sm:pl-12"><div className="absolute left-0 top-0 h-20 w-px bg-[#ff5a1f]" /><div className="grid gap-8 sm:grid-cols-2"><div><span className="text-[9px] uppercase tracking-[.2em] text-[#ff6a2a]">Now</span><h3 className="font-display mt-5 text-3xl font-semibold">Publishing & settlement core</h3><p className="mt-4 text-sm leading-7 text-white/35">Application, contract, QA, publishing, revenue, reconciliation and settlement are the foundation.</p></div><div><span className="text-[9px] uppercase tracking-[.2em] text-white/25">Next</span><h3 className="font-display mt-5 text-3xl font-semibold text-white/55">Platform expansion</h3><p className="mt-4 text-sm leading-7 text-white/30">Infrastructure and future business domains can be added as the core operating model proves itself.</p></div></div></div>
        </div>
      </section>

      <section className="bg-[#ff5a1f] text-black"><div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24"><div><p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Explore the operating model</p><h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">See how the application moves through Fonitas.</h2></div><Link href="/how-it-works" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Explore the lifecycle ↗</Link></div></section>
    </main>
  );
}
