"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/lib/i18n"

interface LanguageContextValue {
  locale: Locale
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: translations.en,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const saved = localStorage.getItem("lang")
    if (saved === "es") {
      setLocale("es")
      document.documentElement.lang = "es"
    }
  }, [])

  function toggle() {
    const next: Locale = locale === "en" ? "es" : "en"
    setLocale(next)
    localStorage.setItem("lang", next)
    document.documentElement.lang = next
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
