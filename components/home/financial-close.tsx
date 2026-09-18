const stages = [
  ["01", "Revenue", "Revenue facts enter the financial workflow after publication."],
  ["02", "Reconciliation", "External revenue is matched against costs and contractual rules."],
  ["03", "Owner share", "The applicable contractual share becomes a financial fact."],
  ["04", "Settlement", "Settlement records close the financial obligation."],
  ["05", "Statement", "The resulting statement keeps the financial history explicit."],
  ["06", "Payment", "Payment completes the operational financial loop."],
];

export function FinancialClose() {
  return (
    <section id="financial-close" className="border-y border-white/[0.08] bg-[#080808]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs uppercase tracking-[.25em] text-[#ff5a1f]">Financial close</p>
            <h2 className="font-display max-w-xl text-5xl font-semibold leading-[.9] sm:text-7xl">
              Publishing doesn&apos;t end at the store.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
              Fonitas carries the application beyond publication into revenue collection, reconciliation, settlement, statements and payment.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
            <div className="absolute inset-0 grid-bg opacity-25" />
            <div className="relative p-7 sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[9px] uppercase tracking-[.22em] text-white/25">Financial lifecycle</span>
                <span className="rounded-full border border-[#ff5a1f]/25 px-3 py-1 text-[8px] uppercase tracking-[.18em] text-[#ff6a2a]">Auditable</span>
              </div>
              <div className="mt-8">
                {stages.map(([number, title, description], index) => (
                  <div key={number} className="group grid grid-cols-[48px_1fr_auto] gap-4 border-b border-white/[.07] py-5 last:border-0 sm:grid-cols-[60px_170px_1fr_auto] sm:items-center">
                    <span className="text-[10px] text-[#ff5a1f]">{number}</span>
                    <span className="text-sm font-medium text-white/75">{title}</span>
                    <span className="hidden text-xs leading-5 text-white/30 sm:block">{description}</span>
                    <span className="text-white/20 transition group-hover:text-[#ff5a1f]">{index === stages.length - 1 ? "✓" : "↓"}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-center justify-between rounded-2xl border border-[#ff5a1f]/15 bg-[#ff5a1f]/[.04] px-5 py-4">
                <span className="text-[9px] uppercase tracking-[.2em] text-white/30">History</span>
                <span className="text-sm text-white/65">Immutable financial record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
