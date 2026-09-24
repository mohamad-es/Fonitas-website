import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const signalCount = 6;

export function ProductSignal() {
  const t = useTranslations();
  return (
    <section className="border-b border-white/[0.08] bg-[#080808]">
      <div className="mx-auto max-w-[1400px] overflow-x-auto px-6 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center justify-between gap-8 py-7 text-[10px] uppercase tracking-[.22em] text-white/30 sm:gap-12">
          {Array.from({ length: signalCount }, (_, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              <span className={index === 0 ? "text-[#ff6a2a]" : ""}>{t(`productSignal.signals.${index}`)}</span>
              {index < signalCount - 1 && <span className="text-white/15"><ArrowRight aria-hidden="true" className="inline h-3.5 w-3.5" strokeWidth={1.8} /></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}