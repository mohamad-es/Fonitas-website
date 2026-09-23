"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const locales = ["en", "fa", "ar"] as const;

const names = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
} as const;

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const router = useRouter();

  function changeLocale(nextLocale: (typeof locales)[number]) {
    document.cookie = `fonitas-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <>
      {children}
      <div
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 p-1.5 shadow-2xl rtl:right-auto rtl:left-5"
        aria-label="Language selector"
      >
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => changeLocale(item)}
            title={names[item]}
            aria-label={names[item]}
            className={`rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${locale === item ? "bg-[#ff5a1f] text-black" : "text-white/45 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
