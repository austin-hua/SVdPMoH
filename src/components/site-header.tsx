"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const { locale, t, toggle } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/request-help", label: t.nav.requestHelp },
    { href: "/donate", label: t.nav.donate },
    { href: "/volunteer", label: t.nav.volunteer },
    { href: "/about", label: t.nav.about },
    { href: "/spiritual-growth", label: t.nav.spiritualGrowth },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav
        className="container mx-auto px-4 py-2.5 flex justify-between items-center"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/svdplogo.jpg"
            alt="SVdP Mother of Hope logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <span className="font-bold text-sm text-[#1C3D5A] block">Mother of Hope</span>
            <span className="text-xs text-muted-foreground block">
              Society of St. Vincent de Paul
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-[#1C3D5A] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle locale={locale} toggle={toggle} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle locale={locale} toggle={toggle} />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

function LanguageToggle({ locale, toggle }: { locale: "en" | "es"; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label={locale === "en" ? "Switch to Spanish" : "Switch to English"}
      className="flex items-center gap-0.5 text-xs font-semibold border border-border rounded-md overflow-hidden hover:border-[#1C3D5A] transition-colors duration-200"
    >
      <span
        className={`px-2 py-1 transition-colors duration-200 ${
          locale === "en"
            ? "bg-[#1C3D5A] text-white"
            : "text-muted-foreground hover:text-[#1C3D5A]"
        }`}
      >
        EN
      </span>
      <span
        className={`px-2 py-1 transition-colors duration-200 ${
          locale === "es"
            ? "bg-[#1C3D5A] text-white"
            : "text-muted-foreground hover:text-[#1C3D5A]"
        }`}
      >
        ES
      </span>
    </button>
  )
}
