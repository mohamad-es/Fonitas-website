const stages = [
  { number: "01", type: "Application", title: "Prepare the application", description: "Register the application, platforms, technology, markets, revenue model and ownership details before review." },
  { number: "02", type: "QA & Compliance", title: "Validate the release", description: "Build integrity, security scanning, manual QA and compliance checks create a controlled release path." },
  { number: "03", type: "Publishing", title: "Move to the store", description: "Store preparation, assets, builds and human-in-the-loop submission keep publishing accountable and traceable." },
];

function ApplicationVisual() {
  return <div className="relative h-full min-h-[330px] overflow-hidden bg-[#0f0f0f] p-7">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#ff5a1f]/15 blur-[80px]" />
    <div className="absolute left-[12%] top-[16%] h-[58%] w-[70%] rotate-[-6deg] rounded-[26px] border border-white/10 bg-[#151515] p-5 shadow-2xl transition duration-700 group-hover:rotate-[-2deg] group-hover:scale-[1.03]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-[9px] uppercase tracking-[.2em] text-white/25">Application record</span><span className="rounded-full bg-[#ff5a1f]/10 px-2 py-1 text-[8px] text-[#ff6a2a]">READY</span></div>
      <div className="mt-6 grid grid-cols-3 gap-2">{["Platform","Markets","Revenue"].map((x)=><div key={x} className="rounded-xl border border-white/10 p-3"><span className="text-[7px] uppercase tracking-[.15em] text-white/20">{x}</span><div className="mt-3 h-1.5 rounded-full bg-white/10" /></div>)}</div>
      <div className="mt-4 h-20 rounded-xl border border-white/[.07] bg-white/[.025]" />
    </div>
    <span className="absolute bottom-[11%] right-[10%] rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2 text-[8px] uppercase tracking-[.18em] text-white/40">01 / Intake</span>
  </div>;
}

function QAVisual() {
  return <div className="relative h-full min-h-[330px] overflow-hidden bg-[#111] p-7">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_34%,rgba(255,90,31,.10)_34%,rgba(255,90,31,.10)_58%,transparent_58%)]" />
    <div className="absolute left-[11%] top-[22%] h-2 w-[68%] overflow-hidden rounded-full bg-white/10"><span className="block h-full w-[86%] rounded-full bg-[#ff5a1f]/60" /></div>
    <div className="absolute left-[11%] top-[35%] h-2 w-[52%] rounded-full bg-white/10"><span className="block h-full w-[100%] rounded-full bg-white/25" /></div>
    <div className="absolute left-[11%] top-[48%] h-2 w-[76%] rounded-full bg-white/10"><span className="block h-full w-[72%] rounded-full bg-[#ff5a1f]/35" /></div>
    <div className="absolute left-[11%] top-[61%] grid w-[78%] grid-cols-3 gap-3"><span className="h-14 rounded-xl border border-[#ff5a1f]/25 bg-[#ff5a1f]/[.05]" /><span className="h-14 rounded-xl border border-white/10 bg-white/[.025]" /><span className="h-14 rounded-xl border border-white/10 bg-white/[.025]" /></div>
    <div className="absolute right-[10%] top-[10%] text-right text-[8px] uppercase tracking-[.2em] text-white/30">SHA-256<br />Security scan<br />Manual QA</div>
  </div>;
}

function PublishingVisual() {
  return <div className="relative h-full min-h-[330px] overflow-hidden bg-[#0d0d0d] p-7">
    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_90px_rgba(255,90,31,.12)] transition duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[24px] border border-[#ff5a1f]/35 bg-[#ff5a1f]/[.08] transition duration-700 group-hover:rotate-[65deg]" />
    <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#ff5a1f] shadow-[0_0_60px_rgba(255,90,31,.4)]" />
    <div className="absolute left-7 top-7 text-[8px] uppercase tracking-[.2em] text-white/25">Store preparation</div>
    <div className="absolute bottom-7 left-7 right-7 flex justify-between gap-3">{["Apple App Store","Google Play","Microsoft Store"].map((x,i)=><span key={x} className={`rounded-full border px-2.5 py-2 text-[7px] uppercase tracking-[.12em] ${i===0?"border-[#ff5a1f]/30 text-[#ff6a2a]":"border-white/10 text-white/25"}`}>{x}</span>)}</div>
  </div>;
}

export function ProjectShowcase() {
  return <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
      <ApplicationVisual />
      <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
        <div><div className="text-[9px] uppercase tracking-[.22em] text-[#ff6a2a]">01 / Application</div><h3 className="font-display mt-4 text-4xl font-semibold leading-[.95] sm:text-5xl">{stages[0].title}</h3><p className="mt-5 max-w-xl text-sm leading-6 text-white/40">{stages[0].description}</p></div>
        <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#ff5a1f] lg:flex">↗</span>
      </div>
    </article>
    <div className="grid gap-5">
      {[["QA & Compliance","02 / Validate",stages[1],QAVisual],["Publishing","03 / Submit",stages[2],PublishingVisual]].map(([type,label,stage,Visual])=>{
        const V=Visual as () => JSX.Element;
        return <article key={type as string} className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
          <V />
          <div className="p-7 sm:p-8"><div className="text-[9px] uppercase tracking-[.22em] text-[#ff6a2a]">{label as string}</div><h3 className="font-display mt-3 text-2xl font-semibold">{(stage as typeof stages[number]).title}</h3><p className="mt-3 text-sm leading-6 text-white/40">{(stage as typeof stages[number]).description}</p></div>
        </article>;
      })}
    </div>
  </div>;
}
