import Link from "next/link";

const principles = [
  [
    "01",
    "Lifecycle first",
    "Fonitas is organized around the application lifecycle: collaboration, registration, evaluation, contract, QA, publishing, revenue and settlement.",
  ],
  [
    "02",
    "Explicit ownership",
    "Each domain owns its state and responsibility. The platform makes operational handoffs visible instead of hiding them inside generic CRUD screens.",
  ],
  [
    "03",
    "Human in the loop",
    "Publishing remains accountable in the MVP. Release preparation, security checks, QA and store submission are controlled operational steps.",
  ],
  [
    "04",
    "Financially traceable",
    "Collection, reconciliation, settlement, statements and payments remain part of the operating story, with financial history treated as immutable.",
  ],
];

const layers = [
  ["Publishing core", "The operational path that makes the product work today."],
  [
    "Platform services",
    "Auth, storage, notifications, analytics, messaging and API capabilities that can grow around the core.",
  ],
  [
    "Business expansion",
    "Commercial, marketing, infrastructure, legal and investment capabilities that can be added without breaking the core boundaries.",
  ],
];

export function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative min-h-[86vh] border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(86vh-80px)] max-w-[1400px] items-center gap-12 px-6 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:grid-cols-[1fr_.95fr] lg:px-10 lg:pb-24">
          <div>
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">About Fonitas</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-5xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.8] tracking-tight">
              The operating
              <br />
              <span className="text-white/25">system behind</span>
              <br />
              the launch.
            </h1>
            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-white/30">
              <span className="h-px w-10 bg-[#ff5a1f]" />
              Built around people, process and accountability
            </div>
          </div>

          <div className="relative mx-auto h-[340px] w-full max-w-[560px] sm:h-[430px] lg:h-[520px]">
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:42px_42px]" />{" "}
            <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] sm:h-[390px] sm:w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] sm:h-[285px] sm:w-[285px] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-[#ff5a1f]/25" />
            <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] sm:h-[175px] sm:w-[175px] animate-[pulse_5s_ease-in-out_infinite] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/10 blur-2xl" />
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 sm:h-[118px] sm:w-[118px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ff5a1f]/50 bg-[#111]/90 shadow-[0_0_90px_rgba(255,90,31,.22)]">
              <div className="text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[.28em] text-[#ff5a1f]">FONITAS</div>
                <div className="mt-2 text-[9px] uppercase tracking-[.18em] text-white/35">Operating System</div>
              </div>
            </div>
            <div className="absolute left-[5%] top-[13%] rounded-2xl border border-white/10 bg-[#0d0d0d]/90 px-5 py-4 shadow-2xl backdrop-blur-md">
              <div className="text-[9px] uppercase tracking-[.22em] text-white/30">01</div>
              <div className="mt-2 text-sm font-medium">People</div>
              <div className="mt-1 text-[10px] text-white/35">Developers & partners</div>
            </div>
            <div className="absolute right-[0%] top-[30%] rounded-2xl border border-[#ff5a1f]/20 bg-[#0d0d0d]/90 px-5 py-4 shadow-[0_0_50px_rgba(255,90,31,.06)] backdrop-blur-md">
              <div className="text-[9px] uppercase tracking-[.22em] text-[#ff5a1f]">02</div>
              <div className="mt-2 text-sm font-medium">Process</div>
              <div className="mt-1 text-[10px] text-white/35">One connected lifecycle</div>
            </div>
            <div className="absolute bottom-[10%] left-[10%] rounded-2xl border border-white/10 bg-[#0d0d0d]/90 px-5 py-4 shadow-2xl backdrop-blur-md">
              <div className="text-[9px] uppercase tracking-[.22em] text-white/30">03</div>
              <div className="mt-2 text-sm font-medium">Accountability</div>
              <div className="mt-1 text-[10px] text-white/35">Audit & financial traceability</div>
            </div>
            <div className="absolute bottom-[22%] right-[4%] flex h-3 w-3 rounded-full bg-[#ff5a1f] shadow-[0_0_24px_rgba(255,90,31,.9)]" />
            <div className="absolute left-[49%] top-[8%] h-2 w-2 rounded-full bg-white/50" />
            <div className="absolute bottom-[4%] right-[36%] h-px w-24 rotate-[-28deg] bg-gradient-to-r from-transparent via-[#ff5a1f]/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36">
          <div>
            <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Why Fonitas</p>
            <h2 className="font-display mt-6 max-w-xl text-4xl font-semibold leading-[.88] sm:text-7xl">
              A launch is a process, not a button.
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-8 text-white/45 sm:text-xl">
            <p>
              An application can be technically ready long before the surrounding operation is ready. Collaboration
              requests, evaluation, agreements, release preparation, QA, store operations and financial reconciliation
              all have to connect.
            </p>
            <p>
              Fonitas is built around that reality. The product starts with the publishing lifecycle and creates
              explicit boundaries that can support a wider platform over time.
            </p>
            <div className="grid border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-8">
              <div>
                <span className="text-3xl font-semibold text-white">01</span>
                <p className="mt-2 text-xs text-white/30">Application to market</p>
              </div>
              <div>
                <span className="text-3xl font-semibold text-white">02</span>
                <p className="mt-2 text-xs text-white/30">Market to revenue</p>
              </div>
              <div>
                <span className="text-3xl font-semibold text-white">03</span>
                <p className="mt-2 text-xs text-white/30">Revenue to settlement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-24 lg:px-10 lg:py-36">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">What we believe</p>
            <h2 className="font-display mt-6 text-4xl font-semibold leading-[.88] sm:text-7xl">
              Clear systems create clear work.
            </h2>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-2">
            {principles.map(([number, title, text], index) => (
              <article
                key={number}
                className={`py-10 ${index % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"} border-b border-white/10`}
              >
                <span className="font-mono text-xs text-[#ff5a1f]">{number}</span>
                <h3 className="font-display mt-8 text-3xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[.28em] text-[#ff5a1f]">Where it goes</p>
              <h2 className="font-display mt-6 text-5xl font-semibold leading-[.88] sm:text-7xl">
                Start focused.
                <br />
                <span className="text-white/25">Expand carefully.</span>
              </h2>
            </div>
            <div className="border-t border-white/10">
              {layers.map(([title, text], index) => (
                <div
                  key={title}
                  className="grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[70px_1fr_1.3fr] sm:items-center"
                >
                  <span className="font-mono text-xs text-[#ff5a1f]">0{index + 1}</span>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="text-sm leading-6 text-white/35">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-black/50">Explore the product</p>
            <h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.85] sm:text-7xl">
              See the lifecycle in action.
            </h2>
          </div>
          <Link
            href="/platform"
            className="inline-flex shrink-0 items-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white"
          >
            Explore platform ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
