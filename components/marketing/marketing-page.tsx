import Link from "next/link";

type Section = { number: string; title: string; text: string; items?: string[] };
type Props = { eyebrow: string; title: string; intro: string; sections: Section[]; cta?: string; ctaHref?: string };

export function MarketingPage({ eyebrow, title, intro, sections, cta = "Start a collaboration", ctaHref = "/contact" }: Props) {
  return (
    <main className="min-h-screen bg-[#070707] px-6 pb-24 pt-36 text-[#f4f2ed] lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <header className="max-w-4xl border-b border-white/10 pb-20"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">{eyebrow}</p><h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[92px]">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">{intro}</p></header>
        <section className="divide-y divide-white/10">{sections.map((section) => <article key={section.number} className="grid gap-8 py-14 md:grid-cols-[110px_1fr] lg:grid-cols-[150px_1fr]"><span className="text-sm font-semibold text-[#ff5a1f]">{section.number}</span><div className="max-w-3xl"><h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{section.title}</h2><p className="mt-5 text-base leading-7 text-white/55">{section.text}</p>{section.items && <ul className="mt-7 grid gap-3 sm:grid-cols-2">{section.items.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white/70">{item}</li>)}</ul>}</div></article>)}</section>
        <div className="mt-16 rounded-[2rem] border border-[#ff5a1f]/25 bg-[#ff5a1f]/[0.06] p-8 sm:p-12"><p className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">Ready to move an application forward?</p><Link href={ctaHref} className="mt-8 inline-flex rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">{cta} ↗</Link></div>
      </div>
    </main>
  );
}
