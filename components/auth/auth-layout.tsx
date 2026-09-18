import Link from "next/link";
import type { ReactNode } from "react";

const stages = [
  ["01", "Application"],
  ["02", "Review"],
  ["03", "QA"],
  ["04", "Publishing"],
];

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-[#f4f2ed]">
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1.05fr)_minmax(520px,.95fr)]">
        <section className="relative hidden overflow-hidden border-r border-white/[0.07] lg:flex">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[120px]" />
          <div className="absolute bottom-[-180px] right-[-100px] h-[520px] w-[520px] rounded-full bg-[#ff5a1f]/10 blur-[140px]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
            <Link href="/" className="block w-[180px]" aria-label="Fonitas home">
              <img src="/foonitas-logo.png" alt="Fonitas" className="h-auto w-full" />
            </Link>

            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff5a1f]">
                Application publishing operating system
              </p>
              <h2 className="font-display max-w-lg text-5xl font-semibold leading-[1.02] xl:text-7xl">
                Move from application to market.
              </h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/45">
                One connected workflow for evaluation, contracts, QA, publishing, revenue, and settlement.
              </p>

              <div className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
                {stages.map(([number, label], index) => (
                  <div key={label} className="relative border border-white/10 bg-white/[0.025] p-4">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] text-white/30">{number}</span>
                      {index < stages.length - 1 && <span className="hidden h-px w-5 bg-[#ff5a1f]/40 sm:block" />}
                    </div>
                    <span className="text-sm text-white/75">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/30">
              <span>© {new Date().getFullYear()} Fonitas</span>
              <span>Built around the lifecycle.</span>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="absolute right-[-140px] top-[-100px] h-72 w-72 rounded-full bg-[#ff5a1f]/[0.07] blur-[100px]" />
          <div className="relative z-10 w-full max-w-[460px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
