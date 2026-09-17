const principles = [
  ["01", "One connected lifecycle", "Application, review, contract, QA, publishing and settlement are treated as one operational journey."],
  ["02", "Clear domain ownership", "Each part of the platform has an explicit responsibility and source of truth instead of competing logic."],
  ["03", "Human-in-the-loop publishing", "Fonitas supports controlled store preparation and submission rather than depending on deep automatic store publishing."],
  ["04", "Financial traceability", "Revenue, reconciliation, settlement and payment are designed around auditability, idempotency and immutable history."],
];

const foundations = [
  "Application lifecycle",
  "Contract & publishing license",
  "QA & compliance",
  "Revenue & reconciliation",
  "Settlement & payments",
  "Audit & accountability",
];

export function AboutProcess() {
  return (
    <section id="about" className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">Why Fonitas</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.92] sm:text-7xl">
              Built around the lifecycle. <span className="text-white/30">Not around a dashboard.</span>
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0b0b0b] p-7 sm:p-10">
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#ff5a1f]/10 blur-[90px]" />
            <div className="relative grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
                  Fonitas is designed to make the operational path around an application explicit: who owns each step, what state it is in, what happens next and how the financial outcome is reconciled.
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {foundations.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-white/45 transition hover:border-[#ff5a1f]/40 hover:text-white/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative hidden h-40 w-40 shrink-0 sm:block">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[17%] rounded-full border border-[#ff5a1f]/25" />
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f] shadow-[0_0_70px_rgba(255,90,31,.45)]" />
                <div className="absolute left-1/2 top-1/2 h-full w-px origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-full w-px origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-0 border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {principles.map(([number, title, description]) => (
            <article key={number} className="group border-b border-white/10 py-8 md:px-7 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/25">{number}</span>
                <span className="text-sm text-[#ff5a1f] opacity-0 transition duration-300 group-hover:opacity-100">↗</span>
              </div>
              <h3 className="mt-14 text-2xl font-medium transition group-hover:text-[#ff6a2a]">{title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/40">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
