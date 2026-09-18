const signals = [
  "Application",
  "Contract",
  "QA",
  "Publishing",
  "Revenue",
  "Settlement",
];

export function ProductSignal() {
  return (
    <section className="border-b border-white/[0.08] bg-[#080808]">
      <div className="mx-auto max-w-[1400px] overflow-x-auto px-6 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center justify-between gap-8 py-7 text-[10px] uppercase tracking-[.22em] text-white/30 sm:gap-12">
          {signals.map((signal, index) => (
            <div key={signal} className="flex items-center gap-8 sm:gap-12">
              <span className={index === 0 ? "text-[#ff6a2a]" : ""}>{signal}</span>
              {index < signals.length - 1 && <span className="text-white/15">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
