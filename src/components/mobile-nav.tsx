"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/request-help", label: t.nav.requestHelp },
    { href: "/donate", label: t.nav.donate },
    { href: "/volunteer", label: t.nav.volunteer },
    { href: "/about", label: t.nav.about },
    { href: "/spiritual-growth", label: t.nav.spiritualGrowth },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-muted-foreground hover:text-[#1C3D5A] transition-colors duration-200"
        aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
            <nav
              className="container mx-auto px-4 py-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-foreground/80 hover:text-[#1C3D5A] border-b border-border last:border-0 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
