"use client";

import { useEffect, useState } from "react";
import { localeNames, locales, translate, type Locale } from "@/lib/i18n";

const rtlLocales: Locale[] = ["fa", "ar"];

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
