"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  const saved = localStorage.getItem("portfolio_lang") as Language | null;
  if (saved === "id" || saved === "en") return saved;
  const browserLang = navigator.language?.toLowerCase();
  return browserLang && browserLang.startsWith("id") ? "id" : "en";
}

function getServerSnapshot(): Language {
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setLang(newLang: Language) {
    localStorage.setItem("portfolio_lang", newLang);
    document.documentElement.lang = newLang;
    listeners.forEach((listener) => listener());
  }

  function toggleLang() {
    setLang(lang === "id" ? "en" : "id");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
