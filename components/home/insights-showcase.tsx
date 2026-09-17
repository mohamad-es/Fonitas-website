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

function RoadmapVisual({ type }: { type: string }) {
  if (type === "commercial") {
    return (
      <div className="relative h-full min-h-72 overflow-hidden bg-[#111] p-7">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ff5a1f]/15 blur-[70px]" />
        <div className="relative mx-auto mt-2 max-w-[310px] rounded-2xl border border-white/10 bg-[#0b0b0b]/90 p-5 shadow-2xl backdrop-blur-xl transition duration-700 group-hover:-translate-y-1">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div><p className="text-[8px] uppercase tracking-[.22em] text-white/25">Product</p><p className="mt-1 text-sm font-medium text-white/75">Application Pro</p></div>
            <span className="rounded-full bg-[#ff5a1f]/10 px-2 py-1 text-[8px] text-[#ff7a3d]">ACTIVE</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/10 p-3"><span className="text-[8px] text-white/25">PLAN</span><p className="mt-2 text-xs text-white/65">Growth</p></div>
            <div className="rounded-xl border border-white/10 p-3"><span className="text-[8px] text-white/25">PRICE</span><p className="mt-2 text-xs text-white/65">$29</p></div>
            <div className="rounded-xl border border-white/10 p-3"><span className="text-[8px] text-white/25">USAGE</span><p className="mt-2 text-xs text-white/65">12K</p></div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[68%] rounded-full bg-[#ff5a1f]/60" /></div>
          <p className="mt-3 text-[8px] uppercase tracking-[.2em] text-white/25">Entitlement ready</p>
        </div>
      </div>
    );
  }

  if (type === "growth") {
    return (
      <div className="relative h-full min-h-72 overflow-hidden bg-[#0d0d0d] p-7">
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto mt-3 max-w-[310px] rounded-2xl border border-white/10 bg-[#101010]/95 p-5 shadow-2xl backdrop-blur-xl transition duration-700 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between"><span className="text-[8px] uppercase tracking-[.22em] text-[#ff6a2a]">Campaign</span><span className="text-[8px] text-white/25">LIVE</span></div>
          <p className="mt-3 text-lg font-semibold tracking-tight text-white/80">Summer launch</p>
          <div className="mt-5 flex items-end gap-2">
            {[34, 52, 43, 68, 58, 82, 72].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#ff5a1f]/30" style={{ height: `${height}px` }} />)}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-[8px] uppercase tracking-[.18em] text-white/25">Promotion reach</span><span className="text-sm text-white/70">+28.4%</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-72 overflow-hidden bg-[#101010] p-7">
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5a1f]/20" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#ff5a1f] text-[8px] font-semibold uppercase tracking-[.12em] text-black shadow-[0_0_60px_rgba(255,90,31,.4)]">API</div>
      {[["AUTH", "left-[12%] top-[24%]"], ["STORAGE", "right-[8%] top-[26%]"], ["EVENTS", "left-[16%] bottom-[20%]"], ["ANALYTICS", "right-[10%] bottom-[18%]"]].map(([label, position]) => (
        <div key={label} className={`absolute ${position} flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/90 px-3 py-2 backdrop-blur-xl`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
          <span className="text-[8px] uppercase tracking-[.14em] text-white/45">{label}</span>
        </div>
      ))}
      <div className="absolute left-[27%] top-[30%] h-px w-[20%] rotate-[18deg] bg-white/10" />
      <div className="absolute right-[26%] top-[31%] h-px w-[20%] rotate-[-18deg] bg-white/10" />
      <div className="absolute bottom-[29%] left-[28%] h-px w-[18%] rotate-[-18deg] bg-white/10" />
      <div className="absolute bottom-[28%] right-[26%] h-px w-[19%] rotate-[18deg] bg-white/10" />
    </div>
  );
}

export function InsightsShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
      <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-white/20">
        <div className="grid lg:grid-cols-[1.08fr_.92fr]">
          <RoadmapVisual type={roadmap[0].visual} />
          <div className="flex min-h-72 flex-col justify-between p-7 lg:min-h-[520px] lg:p-9">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-white/35"><span>{roadmap[0].category}</span><span>{roadmap[0].number}</span></div>
            <div>
              <h3 className="font-display max-w-xl text-3xl font-semibold leading-[.98] sm:text-5xl">{roadmap[0].title}</h3>
              <p className="mt-6 max-w-md text-sm leading-6 text-white/40">{roadmap[0].description}</p>
              <div className="mt-8 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.16em] text-white/30">Long-term platform direction ↗</div>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-6">
        {roadmap.slice(1).map((item) => (
          <article key={item.number} className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-white/20 sm:grid-cols-[.9fr_1.1fr]">
            <RoadmapVisual type={item.visual} />
            <div className="flex flex-col justify-between p-7">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-white/30"><span>{item.category}</span><span>{item.number}</span></div>
              <div className="mt-12 sm:mt-6">
                <h3 className="font-display text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/40">{item.description}</p>
                <div className="mt-6 text-[10px] uppercase tracking-[.16em] text-white/25">Future capability ↗</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
