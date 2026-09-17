const articles = [
  {
    number: "01",
    category: "Product Strategy",
    date: "12 Sep 2026",
    time: "6 min read",
    title: "Designing products people understand",
    description: "Clarity is not a visual detail. It is the foundation of a digital product that earns attention and keeps it.",
    visual: "signal",
  },
  {
    number: "02",
    category: "Design",
    date: "28 Aug 2026",
    time: "5 min read",
    title: "Why strategy comes before pixels",
    description: "A practical look at the questions we answer before opening Figma or writing the first component.",
    visual: "grid",
  },
  {
    number: "03",
    category: "Engineering",
    date: "07 Aug 2026",
    time: "7 min read",
    title: "Building digital products for scale",
    description: "The technical decisions that help a product stay fast, flexible and maintainable as it grows.",
    visual: "orbit",
  },
];

function ArticleVisual({ type }: { type: string }) {
  if (type === "signal") {
    return (
      <div className="relative h-full min-h-72 overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(255,90,31,.35),transparent_28%)]" />
        <div className="absolute left-[18%] top-[28%] h-px w-[64%] rotate-[-18deg] bg-white/20" />
        <div className="absolute left-[25%] top-[48%] h-px w-[55%] rotate-[24deg] bg-white/15" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#ff6a2a]/60 bg-[#ff5a1f]/15 shadow-[0_0_80px_rgba(255,90,31,.3)]" />
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f] shadow-[0_0_45px_rgba(255,90,31,.8)]" />
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="relative h-full min-h-72 overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-[16%] top-[24%] h-40 w-40 rounded-full border border-white/15" />
        <div className="absolute left-[28%] top-[36%] h-32 w-32 rounded-2xl border border-[#ff5a1f]/50 bg-[#ff5a1f]/10 rotate-12 shadow-[0_0_70px_rgba(255,90,31,.18)]" />
        <span className="absolute right-[18%] top-[23%] text-[10px] uppercase tracking-[.3em] text-white/30">Direction</span>
        <span className="absolute bottom-[22%] left-[22%] text-4xl font-semibold tracking-[-.06em] text-white/80">01→</span>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-72 overflow-hidden bg-[#101010]">
      <div className="absolute inset-[18%] rounded-full border border-white/10" />
      <div className="absolute inset-[30%] rounded-full border border-[#ff5a1f]/25" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f]/20 shadow-[0_0_90px_rgba(255,90,31,.3)]" />
      <div className="absolute left-1/2 top-[14%] h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_20px_5px_rgba(255,90,31,.3)]" />
      <div className="absolute bottom-[16%] right-[18%] rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-[9px] uppercase tracking-[.25em] text-white/40">Build / Scale</div>
    </div>
  );
}

export function InsightsShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
      <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-white/20">
        <div className="grid lg:grid-cols-[1.08fr_.92fr]">
          <ArticleVisual type={articles[0].visual} />
          <div className="flex min-h-72 flex-col justify-between p-7 lg:min-h-[520px] lg:p-9">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-white/35">
              <span>{articles[0].category}</span><span>{articles[0].number}</span>
            </div>
            <div>
              <h3 className="font-display max-w-xl text-3xl font-semibold leading-[.98] sm:text-5xl">{articles[0].title}</h3>
              <p className="mt-6 max-w-md text-sm leading-6 text-white/40">{articles[0].description}</p>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.16em] text-white/30">
                <span>{articles[0].date} · {articles[0].time}</span>
                <span className="text-[#ff5a1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">Read article ↗</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-6">
        {articles.slice(1).map((article) => (
          <article key={article.number} className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-1 hover:border-white/20 sm:grid-cols-[.9fr_1.1fr]">
            <ArticleVisual type={article.visual} />
            <div className="flex flex-col justify-between p-7">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[.2em] text-white/30"><span>{article.category}</span><span>{article.number}</span></div>
              <div className="mt-12 sm:mt-6">
                <h3 className="font-display text-2xl font-semibold leading-tight">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/40">{article.description}</p>
                <div className="mt-6 text-[10px] uppercase tracking-[.16em] text-white/25">{article.date} · {article.time}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
