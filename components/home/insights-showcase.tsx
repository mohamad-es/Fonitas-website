import { useTranslations } from "next-intl";
const roadmap = [
  {
    number: "01",
    category: "Commercial",
    title: "Products, pricing & entitlements",
    description: "A future commercial layer can manage products, pricing plans, subscriptions, entitlements and usage around applications.",
    visual: "commercial",
  },
  {
    number: "02",
    category: "Growth",
    title: "Marketing & promotion",
    description: "Marketing requests, campaigns, channels, promotions, discount codes and ASO can expand the lifecycle after publishing.",
    visual: "growth",
  },
  {
    number: "03",
    category: "Platform",
    title: "Infrastructure services",
    description: "Auth, storage, notifications, analytics, messaging and API capabilities form the longer-term platform direction.",
    visual: "platform",
  },
];

function RoadmapVisual({ type, t }: { type: string; t: ReturnType<typeof useTranslations> }) {
  if (type === "commercial") {
    return (
      <div className="relative min-h-[420px] overflow-hidden bg-[#0d0d0d] p-7 lg:h-[500px]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ff5a1f]/15 blur-[90px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[28px] border border-[#ff5a1f]/35 bg-[#ff5a1f]/[.06] transition duration-700 group-hover:rotate-[60deg]" />
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#ff5a1f] text-[9px] font-semibold tracking-[.16em] text-black shadow-[0_0_70px_rgba(255,90,31,.35)]">CORE</div>
        {[["PRODUCTS","left-[9%] top-[18%]"],["PRICING","right-[9%] top-[22%]"],["ENTITLEMENTS","right-[12%] bottom-[19%]"],["USAGE","left-[12%] bottom-[18%]"]].map(([label,pos]) => (
          <div key={t(label)} className={`absolute ${pos} rounded-full border border-white/10 bg-[#111]/90 px-3 py-2 text-[8px] uppercase tracking-[.15em] text-white/40 backdrop-blur-xl`}>{t(label)}</div>
        ))}
      </div>
    );
  }

  if (type === "growth") {
    return (
      <div className="relative min-h-[230px] overflow-hidden bg-[#101010] p-6">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,90,31,.09)_35%,rgba(255,90,31,.09)_55%,transparent_55%)]" />
        <div className="absolute inset-x-10 bottom-8 top-10 flex items-end gap-2 border-b border-l border-white/10 px-4">
          {[28,45,36,61,52,76,66,88].map((height,index)=><span key={index} className="flex-1 rounded-t bg-[#ff5a1f]/30 transition-all duration-500 group-hover:bg-[#ff5a1f]/50" style={{height:`${height}%`}} />)}
        </div>
        <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-[#0b0b0b]/90 px-3 py-2 text-[8px] uppercase tracking-[.18em] text-[#ff6a2a]">Promotion signals</div>
        <div className="absolute bottom-7 right-7 rounded-full border border-white/10 bg-[#0b0b0b]/90 px-3 py-2 text-[8px] uppercase tracking-[.18em] text-white/35">Future</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[230px] overflow-hidden bg-[#0d0d0d] p-6">
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_80px_rgba(255,90,31,.12)]" />
      <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff5a1f] text-[7px] font-semibold tracking-[.12em] text-black">API</div>
      {[["AUTH","left-[9%] top-[20%]"],["STORAGE","right-[8%] top-[23%]"],["MESSAGING","left-[11%] bottom-[18%]"],["ANALYTICS","right-[8%] bottom-[18%]"]].map(([label,pos])=>(
        <div key={t(label)} className={`absolute ${pos} flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/90 px-3 py-2 text-[8px] uppercase tracking-[.14em] text-white/40 backdrop-blur-xl`}><span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />{t(label)}</div>
      ))}
    </div>
  );
}

export function InsightsShowcase() {
  const t = useTranslations();
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101010]">
        <RoadmapVisual type={roadmap[0].visual} t={t} />
        <div className="relative p-7 sm:p-9 lg:p-11">
          <div className="max-w-2xl rounded-[24px] border border-white/10 bg-[#0b0b0b]/90 p-7 backdrop-blur-xl sm:p-9">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-[.22em] text-white/30"><span>{t(roadmap[0].category)}</span><span>{t("01 / FUTURE")}</span></div>
            <h3 className="font-display mt-7 text-4xl font-semibold leading-[.95] sm:text-6xl">{t(roadmap[0].title)}</h3>
            <p className="mt-6 max-w-xl text-sm leading-6 text-white/40">{t(roadmap[0].description)}</p>
            <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[#ff6a2a]"><span className="h-px w-8 bg-[#ff5a1f]/50" /> {t("Long-term platform direction")}</div>
          </div>
        </div>
      </article>
      <div className="grid gap-5">
        {roadmap.slice(1).map((item) => (
          <article key={item.number} className="group grid overflow-hidden rounded-[30px] border border-white/10 bg-[#101010] sm:grid-cols-[.9fr_1.1fr] lg:grid-cols-1">
            <RoadmapVisual type={item.visual} t={t} />
            <div className="flex flex-col justify-between p-7 sm:p-8 lg:min-h-[220px]">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-[.2em] text-white/30"><span>{t(item.category)}</span><span>{item.number} / {t("FUTURE")}</span></div>
              <div className="mt-8"><h3 className="font-display text-3xl font-semibold leading-tight">{t(item.title)}</h3><p className="mt-4 text-sm leading-6 text-white/40">{t(item.description)}</p></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
