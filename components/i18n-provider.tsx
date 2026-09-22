"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { localeNames, locales, translate, type Locale } from "@/lib/i18n";

const rtlLocales: Locale[] = ["fa", "ar"];

const I18nContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({ locale: "en", setLocale: () => {} });

export function useLocale() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("fonitas-locale") as Locale | null;
    const browser = navigator.language.toLowerCase();
    setLocale(saved && locales.includes(saved) ? saved : browser.startsWith("fa") ? "fa" : browser.startsWith("ar") ? "ar" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", rtlLocales.includes(locale));
    window.localStorage.setItem("fonitas-locale", locale);
  }, [locale]);

  useEffect(() => {
    const originals = new WeakMap<Text, string>();
    let applying = false;
    const applyTranslations = () => {
      if (applying) return;
      applying = true;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let node: Node | null;
      while ((node = walker.nextNode())) nodes.push(node as Text);
      for (const textNode of nodes) {
        if (!originals.has(textNode)) originals.set(textNode, textNode.nodeValue ?? "");
        const original = originals.get(textNode) ?? "";
        const value = original.trim();
        if (!value || value.length > 160) continue;
        const translated = translate(locale, value);
        if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
      }
      applying = false;
    };
    applyTranslations();
    const observer = new MutationObserver(applyTranslations);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);

  return (
    <>
      {children}
      <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 p-1.5 shadow-2xl backdrop-blur-xl rtl:right-auto rtl:left-5" aria-label="Language selector">
        {locales.map((item) => (
          <button key={item} type="button" onClick={() => setLocale(item)} title={localeNames[item]} aria-label={localeNames[item]}
            className={`rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition ${locale === item ? "bg-[#ff5a1f] text-black" : "text-white/45 hover:text-white"}`}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
