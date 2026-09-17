import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "One connected lifecycle",
    text: "Fonitas is built around what happens to an application over time — from the first collaboration request through review, contract, QA, publishing and settlement.",
  },
  {
    number: "02",
    title: "Clear responsibility",
    text: "Each stage has a defined owner and an explicit state. The goal is to make progress visible instead of hiding operational work behind a generic dashboard.",
  },
  {
    number: "03",
    title: "Controlled publishing",
    text: "Publishing is intentionally human-in-the-loop in the MVP. Builds, assets, security checks, QA and store submission remain accountable steps.",
  },
  {
    number: "04",
    title: "Financial traceability",
    text: "Revenue is not an afterthought. Collection, reconciliation, calculations, settlement, statements and payments form the final part of the operating lifecycle.",
  },
];

const stages = ["Application", "Review", "Contract", "QA", "Publish", "Settle"];

export function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <section className="relative min-h-[92vh] border-b border-white/[0.08] pt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute right-[-14%] top-[12%] h-[620px] w-[620px] rounded-full bg-[#ff5a1f]/10 blur-[150px]" />
        <div className="relative mx-auto grid min-h-[calc(92vh-80px)] max-w-[1400px] items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div>
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6a2a]">About Fonitas</p>
            <h1 className="font-display reveal-up reveal-delay-1 mt-7 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-tight">
              Built for the<br />
              <span className="text-white/30">work behind</span><br />
              the launch.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-10 max-w-2xl text-lg leading-8 text-white/50">
              Fonitas is an Application Publishing Operating System designed to connect the operational lifecycle of an application — not simply provide another place to register, publish or report on it.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-[12%] rounded-full border border-white/10" />
            <div className="absolute inset-[24%] rounded-full border border-[#ff5a1f]/25" />
            <div className="absolute inset-[36%] rounded-full bg-[#ff5a1f]/15 blur-2xl" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f] shadow-[0_0_120px_rgba(255,90,31,.45)]" />
            <div className="absolute left-[8%] top-[18%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/50">Application</div>
            <div className="absolute right-[3%] top-[39%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/50">Publishing</div>
            <div className="absolute bottom-[15%] left-[14%] rounded-full border border-white/10 bg-[#0b0b0b] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/50">Settlement</div>
            <div className="absolute inset-[5%] rounded-full border border-dashed border-white/[0.08]" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-36">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#ff5a1f]">Why we exist</p>
            <h2 className="font-display mt-6 max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">The launch is only one moment.</h2>
          </div>
          <div className="max-w-3xl space-y-7 text-lg leading-8 text-white/45 sm:text-xl">
            <p>Getting an application to market involves much more than pressing publish. There are requests, reviews, contracts, release preparation, QA, store operations and the financial work that follows.</p>
            <p>Fonitas brings those stages into a connected operating model so the application can move through a clear, auditable path.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#ff5a1f]">Our approach</p>
            <h2 className="font-display mt-6 text-5xl font-semibold leading-[.9] sm:text-7xl">Built around the lifecycle. Not around a dashboard.</h2>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.number} className="grid gap-6 border-b border-white/10 py-10 md:even:border-l md:even:pl-10 md:odd:pr-10">
                <span className="text-xs text-[#ff5a1f]">{item.number}</span>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#ff5a1f]">The operating model</p>
              <h2 className="font-display mt-6 text-5xl font-semibold leading-[.9] sm:text-7xl">One path.<br /><span className="text-white/30">Explicit stages.</span></h2>
            </div>
            <div>
              <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
                {stages.map((stage, index) => (
                  <div key={stage} className="relative border-b border-r border-white/10 p-7 sm:p-9">
                    <span className="text-[10px] tracking-[0.2em] text-white/20">0{index + 1}</span>
                    <p className="mt-10 font-display text-2xl font-semibold">{stage}</p>
                    {index < stages.length - 1 && <span className="absolute bottom-4 right-4 text-[#ff5a1f]">↗</span>}
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/35">The architecture keeps domains explicit, audits important state changes and treats financial history as immutable. It starts as one deployment while preserving boundaries for future growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#ff5a1f] text-black">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/55">Work with Fonitas</p>
            <h2 className="font-display mt-4 max-w-3xl text-5xl font-semibold leading-[.88] sm:text-7xl">Have an application ready to move forward?</h2>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80">Start a collaboration ↗</Link>
        </div>
      </section>
    </main>
  );
}
