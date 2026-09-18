const stores = [
  { name: "Apple App Store", mark: "A", meta: "iOS / iPadOS" },
  { name: "Google Play", mark: "G", meta: "Android" },
  { name: "Microsoft Store", mark: "M", meta: "Windows" },
];

const checks = [
  "Release build received",
  "SHA-256 integrity recorded",
  "Malware scan completed",
  "Manifest & static analysis",
  "Permission analysis",
  "Manual QA & compliance",
];

export function PublishingPage() {
  return (
    <main className="overflow-hidden bg-[#070707] pt-20 text-white">
      <section className="relative min-h-[760px] border-b border-white/[0.07]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -right-40 top-20 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6a2b]">Publishing infrastructure</p>
            <h1 className="font-display max-w-3xl text-6xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
              Ship with a<br /><span className="text-white/35">controlled path.</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-white/55">
              Publishing is a sequence of decisions, checks and records — not a single button. Fonitas connects store preparation, build integrity, QA, compliance and submission into one traceable flow.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">Prepare an application ↗</a>
              <a href="#pipeline" className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white">See the pipeline ↓</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20" />
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="relative rounded-[32px] border border-white/10 bg-[#0d0d0d]/90 p-5 shadow-[0_0_100px_rgba(255,90,31,0.12)] backdrop-blur-xl sm:p-7">
              <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div><p className="text-xs uppercase tracking-[0.22em] text-white/35">Release pipeline</p><p className="mt-1 text-lg font-medium">Application v2.4.1</p></div>
                <span className="rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-3 py-1.5 text-[11px] text-[#ff8a55]">IN REVIEW</span>
              </div>
              <div className="space-y-3">
                {checks.map((check, index) => (
                  <div key={check} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${index < 3 ? "bg-[#ff5a1f] text-black" : "border border-white/15 text-white/35"}`}>{index < 3 ? "✓" : String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-white/65">{check}</span>
                    {index === 2 && <span className="ml-auto text-[10px] uppercase tracking-widest text-[#ff7a3d]">passed</span>}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#ff5a1f] px-5 py-4 text-black">
                <span className="text-sm font-semibold">Next: manual QA</span><span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pipeline" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff6a2b]">01 — The pipeline</p>
            <h2 className="font-display mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Every release leaves a trail.</h2>
            <p className="mt-6 max-w-sm leading-7 text-white/45">The publishing workflow keeps operational state explicit, so teams can see what has happened, what is being checked and what still needs attention.</p>
          </div>
          <div className="space-y-0">
            {[
              ["01", "Prepare", "Select the target store, configure the release and collect the required application and store assets."],
              ["02", "Secure the build", "Upload the release and record its SHA-256 integrity data before it moves through the validation chain."],
              ["03", "Validate", "Run malware scanning, manifest and static analysis, permission analysis, manual QA and compliance checks."],
              ["04", "Submit", "Create the submission record and keep store events connected to the publication state."],
            ].map(([number, title, text]) => (
              <div key={number} className="grid gap-5 border-t border-white/10 py-10 sm:grid-cols-[72px_180px_1fr]">
                <span className="text-sm text-[#ff6a2b]">{number}</span><h3 className="text-2xl font-medium tracking-tight">{title}</h3><p className="max-w-lg leading-7 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0a0a0a] py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff6a2b]">02 — Store layer</p><h2 className="font-display mt-5 max-w-2xl text-5xl font-medium tracking-[-0.055em]">One publishing model.<br /><span className="text-white/30">Store-agnostic by design.</span></h2></div>
            <p className="max-w-md leading-7 text-white/45">The MVP keeps store submission human-in-the-loop. The internal publishing model stays store-agnostic, with provider-specific adapters introduced later.</p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {stores.map((store, index) => (
              <div key={store.name} className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111] p-7 transition hover:border-[#ff5a1f]/40">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#ff5a1f]/10 blur-3xl transition group-hover:bg-[#ff5a1f]/20" />
                <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-xl font-semibold">{store.mark}</span><span className="text-xs text-white/25">0{index + 1}</span></div><div><h3 className="text-xl font-medium">{store.name}</h3><p className="mt-2 text-sm text-white/35">{store.meta} · human-in-the-loop</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff6a2b]">03 — Human control</p><h2 className="font-display mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-6xl">Automation where it helps.<br /><span className="text-white/30">Human judgment where it matters.</span></h2></div>
          <div className="rounded-[30px] border border-white/10 bg-[#0d0d0d] p-8 sm:p-10"><div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5a1f] shadow-[0_0_20px_rgba(255,90,31,.8)]" /><span className="text-sm text-white/60">Publishing control</span></div><p className="mt-8 text-2xl leading-10 tracking-tight text-white/80">Fonitas records the workflow around a release without pretending every store interaction should be fully automated.</p><div className="mt-8 border-t border-white/[0.08] pt-6 text-sm leading-7 text-white/40">Manual store publishing is the MVP baseline. The architecture leaves room for store-specific adapters as the platform matures.</div></div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#ff5a1f] px-6 py-24 text-black lg:px-10">
        <div className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-black/55">Ready for the next release?</p><h2 className="font-display mt-5 max-w-3xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl">Bring the application.<br />We’ll map the path.</h2></div><a href="/contact" className="shrink-0 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Start a conversation ↗</a></div>
      </section>
    </main>
  );
}
