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

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();

  function changeLocale(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as (typeof locales)[number];
    document.cookie = `fonitas-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <label className="sr-only">
      {t("Language selector")}
      <select
        value={locale}
        onChange={changeLocale}
        aria-label={t("Language selector")}
        className="select select-sm h-9 min-h-0 w-[92px] rounded-full border-white/10 bg-white/[0.025] px-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white/65 outline-none transition hover:border-white/20 hover:bg-white/[0.06] focus:border-[#ff5a1f]/40 focus:outline-none"
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-[#111] text-white">
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const messages = useMessages() as Record<string, unknown>;
  const t = useTranslations();

  useEffect(() => {
    const originals = new WeakMap<Text, string>();
    let applying = false;

    const normalizeKey = (value: string) => value.endsWith(".") ? value.slice(0, -1) : value;

    const hasMessage = (value: string) => {
      const key = normalizeKey(value);
      const parts = key.split(".");
      let current: unknown = messages;

      for (const part of parts) {
        if (!current || typeof current !== "object" || !Object.prototype.hasOwnProperty.call(current, part)) {
          return false;
        }
        current = (current as Record<string, unknown>)[part];
      }

      return typeof current === "string";
    };

    const translateValue = (value: string) => {
      const key = normalizeKey(value);
      return hasMessage(value) ? t(key) : value;
    };

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

  return <>{children}</>;
}
