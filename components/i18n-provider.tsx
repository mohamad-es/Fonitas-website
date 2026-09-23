"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const locales = ["en", "fa", "ar"] as const;

const names = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
} as const;

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const messages = useMessages() as Record<string, unknown>;
  const t = useTranslations();
  const router = useRouter();

  function changeLocale(nextLocale: (typeof locales)[number]) {
    document.cookie = `fonitas-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  useEffect(() => {
    const originals = new WeakMap<Text, string>();
    let applying = false;

    const hasMessage = (value: string) =>
      Object.prototype.hasOwnProperty.call(messages, value) &&
      typeof messages[value] === "string";

    const translateValue = (value: string) => (hasMessage(value) ? t(value) : value);

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
        if (!value) continue;

        const translated = translateValue(value);
        if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
      }

      const elements = document.querySelectorAll<HTMLElement>("[placeholder],[aria-label],[title]");

      for (const element of elements) {
        for (const attribute of ["placeholder", "aria-label", "title"] as const) {
          const current = element.getAttribute(attribute);
          if (!current) continue;

          const key = `data-i18n-original-${attribute}`;
          const original = element.getAttribute(key) ?? current;

          if (!element.hasAttribute(key)) element.setAttribute(key, original);
          element.setAttribute(attribute, translateValue(original));
        }
      }

      applying = false;
    };

    applyTranslations();

    const observer = new MutationObserver(applyTranslations);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [messages, t]);

  return (
    <>
      {children}

      <div
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-1 rounded-full border border-white/10 bg-[#111]/90 p-1.5 shadow-2xl backdrop-blur-xl rtl:right-auto rtl:left-5"
        aria-label={t("Language selector")}
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
