import Link from "next/link";

const infrastructure = [
  { number: "01", name: "Auth", text: "Identity, authentication and access capabilities for applications." },
  { number: "02", name: "Storage", text: "A platform capability for handling application files and assets." },
  { number: "03", name: "Notifications", text: "Reusable notification capabilities that can serve platform workflows." },
  { number: "04", name: "Analytics", text: "A future capability for application and operational insights." },
  { number: "05", name: "Messaging", text: "Communication primitives that can support application experiences." },
  { number: "06", name: "API Platform", text: "Explicit interfaces for connecting applications with platform capabilities." },
  { number: "07", name: "Support", text: "Tickets, messages, attachments and operational follow-up around the publishing lifecycle." },
];

const layers = [
  { label: "01", title: "Publishing core", text: "Application, review, contract, QA, publishing and settlement form the foundation." },
  { label: "02", title: "Platform services", text: "Auth, storage, notifications, analytics, messaging and API capabilities can sit around the core." },
  { label: "03", title: "Business expansion", text: "Commercial, marketing, legal, investment and other domains can extend the operating model over time." },
];

function ArchitectureVisual() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20" />
      <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#ff5a1f] text-center text-black shadow-[0_0_110px_rgba(255,90,31,.4)]">
        <span className="text-[9px] font-semibold uppercase tracking-[.2em]">Fonitas</span>
        <span className="mt-1 text-[8px] uppercase tracking-[.14em]">Core</span>
      </div>

      <div className="absolute left-[8%] top-[13%] rounded-2xl border border-white/10 bg-[#101010]/90 px-5 py-4 backdrop-blur-xl">
        <span className="text-[8px] uppercase tracking-[.2em] text-[#ff6a2a]">Application</span>
        <p className="mt-1 text-sm text-white/65">Lifecycle</p>
      </div>
      <div className="absolute right-[8%] top-[18%] rounded-2xl border border-white/10 bg-[#101010]/90 px-5 py-4 backdrop-blur-xl">
        <span className="text-[8px] uppercase tracking-[.2em] text-white/30">Contract</span>
        <p className="mt-1 text-sm text-white/65">Rights</p>
      </div>
      <div className="absolute bottom-[17%] left-[10%] rounded-2xl border border-white/10 bg-[#101010]/90 px-5 py-4 backdrop-blur-xl">
        <span className="text-[8px] uppercase tracking-[.2em] text-white/30">QA</span>
        <p className="mt-1 text-sm text-white/65">Compliance</p>
      </div>
      <div className="absolute bottom-[13%] right-[9%] rounded-2xl border border-white/10 bg-[#101010]/90 px-5 py-4 backdrop-blur-xl">
        <span className="text-[8px] uppercase tracking-[.2em] text-[#ff6a2a]">Settlement</span>
        <p className="mt-1 text-sm text-white/65">Finance</p>
      </div>

      <div className="absolute left-[24%] top-[27%] h-px w-[20%] rotate-[25deg] bg-white/10" />
      <div className="absolute right-[24%] top-[29%] h-px w-[20%] rotate-[-24deg] bg-white/10" />
      <div className="absolute bottom-[28%] left-[25%] h-px w-[19%] rotate-[-23deg] bg-white/10" />
      <div className="absolute bottom-[27%] right-[24%] h-px w-[20%] rotate-[24deg] bg-white/10" />
    </div>
  );
}

export function PlatformPage() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -left-32 top-20 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-14 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-28">
          <div>
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a2a]">The platform</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-4xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.82] tracking-tight">
              One core.<br />
              <span className="text-white/30">Many capabilities.</span>
            </h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-xl text-lg leading-8 text-white/50">
              Fonitas starts with the application publishing lifecycle and expands around it. The platform direction adds reusable infrastructure and business capabilities without losing clear ownership between domains.
            </p>
            <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-[#ff7a3d]">Publishing first</span>
              <span className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/40">Platform next</span>
            </div>
          </div>
          <ArchitectureVisual />
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Infrastructure services</p>
              <h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">Capabilities around the core.</h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/35">These services describe the longer-term platform direction. Support and notifications connect people to the workflow; the rest can expand around the publishing MVP.</p>
            </div>
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructure.map((item) => (
                <article key={item.number} className="group min-h-52 border-b border-r border-white/10 p-7 transition hover:bg-white/[.025] lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#ff5a1f]">{item.number}</span>
                    <span className="text-white/15 transition group-hover:text-[#ff5a1f]">↗</span>
                  </div>
                  <h3 className="font-display mt-14 text-2xl font-semibold tracking-tight">{item.name}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/30">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Built in layers</p>
              <h2 className="font-display mt-6 max-w-4xl text-5xl font-semibold leading-[.88] sm:text-7xl">Expand the platform.<br /><span className="text-white/30">Keep the boundaries.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/35">The architecture deliberately starts narrow. New capabilities can grow around the publishing and settlement foundation instead of turning the MVP into a collection of unrelated systems.</p>
          </div>

          <div className="relative border-t border-white/10">
            {layers.map((layer, index) => (
              <div key={layer.label} className="grid border-b border-white/10 py-10 lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:gap-10">
                <span className="text-xs text-[#ff5a1f]">{layer.label}</span>
                <h3 className="font-display text-3xl font-semibold sm:text-4xl">{layer.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/35 lg:mt-0">{layer.text}</p>
                {index < layers.length - 1 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Now → next</p>
              <h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">Publishing first.<br /><span className="text-white/30">Platform next.</span></h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#ff5a1f]/25 bg-[#ff5a1f]/[.06] p-7">
                <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#ff6a2a]">Now</span>
                <h3 className="font-display mt-8 text-2xl font-semibold">Publishing & settlement core</h3>
                <p className="mt-4 text-sm leading-6 text-white/35">Application, contract, QA, publishing, revenue, reconciliation and settlement are the foundation.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#101010] p-7">
                <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/30">Next</span>
                <h3 className="font-display mt-8 text-2xl font-semibold">Platform expansion</h3>
                <p className="mt-4 text-sm leading-6 text-white/35">Infrastructure and future business domains can be added as the core operating model proves itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/55">Explore the operating model</p>
            <h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">See how the application moves through Fonitas.</h2>
          </div>
          <Link href="/how-it-works" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Explore the lifecycle ↗</Link>
        </div>
      </section>
    </main>
  );
}
