import Link from "next/link";

const stages = [
  { number: "01", name: "Application", short: "Start", title: "Start with the application.", text: "A collaboration request becomes an application with the information needed to understand what is being built, who owns it and where it is in the launch process.", details: ["Collaboration request", "Application registration", "Application details", "Submission for evaluation"] },
  { number: "02", name: "Review", short: "Evaluate", title: "Make readiness explicit.", text: "The application moves through a structured evaluation. Reviewers can assess readiness, request changes and record an explicit decision before the next stage begins.", details: ["Evaluation", "Review notes", "Change requests", "Approval or rejection"] },
  { number: "03", name: "Contract", short: "Define", title: "Turn approval into publishing rights.", text: "An approved application moves into the contract workflow. Publishing scope, stores, geography, duration and commercial terms are defined before the publishing license is activated.", details: ["Publishing scope", "Store selection", "Geography & duration", "Revenue share & terms"] },
  { number: "04", name: "QA", short: "Validate", title: "Validate the release before it moves.", text: "Release preparation combines technical and operational checks. Builds can be verified for integrity, scanned and reviewed for permissions before QA and compliance are completed.", details: ["Build upload", "SHA-256 integrity", "Malware scan", "Permission & compliance review"] },
  { number: "05", name: "Publishing", short: "Launch", title: "Move the release to the store.", text: "A publishing request brings together the selected store, release assets, checklist and submission record. In the MVP, publishing remains human-in-the-loop so responsibility stays clear.", details: ["Store preparation", "Assets & release", "Publishing checklist", "Human-in-the-loop submission"] },
  { number: "06", name: "Settlement", short: "Reconcile", title: "Close the loop with revenue.", text: "After publication, revenue is collected and reconciled with costs and contractual rules. Settlement, statements and payments complete the application lifecycle.", details: ["Revenue collection", "Reconciliation", "Settlement calculation", "Statement & payment"] },
];

function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[580px]">
      <div className="absolute inset-[7%] rounded-full border border-white/[0.08]" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/[0.09]" />
      <div className="absolute inset-[31%] rounded-full border border-[#ff5a1f]/30" />
      <div className="absolute inset-[38%] rounded-full bg-[#ff5a1f]/15 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f] shadow-[0_0_110px_rgba(255,90,31,.5)] sm:h-36 sm:w-36" />
      <div className="absolute left-[2%] top-[22%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.22em] text-white/45">Application</div>
      <div className="absolute right-[0%] top-[42%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.22em] text-white/45">Review</div>
      <div className="absolute right-[13%] bottom-[12%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.22em] text-white/45">Publishing</div>
      <div className="absolute left-[10%] bottom-[7%] rounded-full border border-[#ff5a1f]/25 bg-[#0b0b0b] px-4 py-2 text-[9px] uppercase tracking-[.22em] text-[#ff6a2a]">Settlement</div>
      <span className="absolute left-[24%] top-[12%] h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_18px_#ff5a1f]" />
      <span className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <span className="absolute left-[22%] bottom-[26%] h-1.5 w-1.5 rounded-full bg-white/40" />
    </div>
  );
}

export function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative min-h-[92vh] border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -right-48 top-16 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(92vh-80px)] max-w-[1400px] items-center gap-10 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div className="relative z-10">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[.3em] text-[#ff6a2a]">How it works</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-4xl text-[clamp(4.1rem,9vw,9rem)] font-semibold leading-[.82] tracking-tight">From<br /><span className="text-white/30">application</span><br />to settlement.</h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-lg leading-8 text-white/50">One connected lifecycle takes an application from collaboration and evaluation through contract, QA, publishing and the financial work that follows.</p>
            <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap gap-3 text-[10px] uppercase tracking-[.2em] text-white/35"><span className="border border-white/10 px-3 py-2">6 explicit stages</span><span className="border border-white/10 px-3 py-2">Auditable workflow</span></div>
          </div>
          <OrbitVisual />
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#070707]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] overflow-x-auto px-6 lg:px-10">
          {stages.map((stage) => <a key={stage.number} href={`#stage-${stage.number}`} className="group flex min-w-[135px] flex-1 items-center gap-3 border-r border-white/[0.08] px-5 py-4 first:border-l sm:min-w-0"><span className="text-[10px] text-[#ff5a1f]">{stage.number}</span><span className="text-[11px] uppercase tracking-[.16em] text-white/35 transition group-hover:text-white">{stage.name}</span></a>)}
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">The lifecycle</p><h2 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Every stage has a purpose. Every transition has a record.</h2></div>
            <div className="relative border-l border-white/10 pl-8 sm:pl-12"><div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_18px_#ff5a1f]" /><p className="max-w-2xl text-lg leading-8 text-white/45 sm:text-xl">Fonitas is organized around the application lifecycle rather than a generic dashboard. The result is a path where operational ownership, state changes and financial history remain explicit.</p><div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">{[["01","Application"],["02","Review"],["03","Contract"],["04","QA"],["05","Publishing"],["06","Settlement"]].map(([n,label]) => <div key={n} className="bg-[#0b0b0b] p-5"><span className="text-[10px] text-[#ff5a1f]">{n}</span><p className="mt-5 text-sm font-medium">{label}</p></div>)}</div></div>
          </div>
        </div>
      </section>

      <section>
        {stages.map((stage, index) => <article id={`stage-${stage.number}`} key={stage.number} className={`scroll-mt-16 border-b border-white/[0.08] ${index % 2 === 1 ? "bg-[#0b0b0b]" : "bg-[#070707]"}`}>
          <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[.55fr_1.45fr] lg:px-10 lg:py-36">
            <div className="lg:sticky lg:top-28 lg:self-start"><div className="flex items-center gap-4"><span className="font-display text-6xl font-semibold text-[#ff5a1f]/80">{stage.number}</span><span className="h-px w-16 bg-white/15" /></div><p className="mt-6 text-[10px] uppercase tracking-[.25em] text-white/25">{stage.short}</p></div>
            <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:gap-16"><div><h2 className="font-display max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">{stage.title}</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">{stage.text}</p></div><div className="self-end border-t border-white/10 pt-6"><p className="text-[10px] uppercase tracking-[.2em] text-white/25">What happens here</p><div className="mt-5 grid gap-3">{stage.details.map((detail, detailIndex) => <div key={detail} className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-sm text-white/55"><span>{detail}</span><span className="text-[#ff5a1f]">{String(detailIndex + 1).padStart(2, "0")}</span></div>)}</div></div></div>
          </div>
        </article>)}
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Publishing control</p><h2 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">Human where it matters.</h2></div><div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-12"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff5a1f]/10 blur-[80px]" /><div className="relative"><p className="text-lg leading-8 text-white/50">The MVP does not treat publishing as a black-box automation. Store preparation, release assets, checks and submission are recorded steps, while the final publishing operation remains human-in-the-loop.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{["Build & assets","Security & compliance","QA approval","Store submission"].map((item) => <div key={item} className="border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white/60">{item}</div>)}</div></div></div></div></div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24"><div><p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Ready to move?</p><h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">Start with the application. We&apos;ll map the path.</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Start a collaboration ↗</Link></div>
      </section>
    </main>
  );
}
