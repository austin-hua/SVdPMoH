"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ZOOM_LINK } from "@/lib/constants"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
  { href: "/resources", label: "Resources" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-muted-foreground hover:text-dlbc-navy transition-colors duration-200"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
                  className="block py-3 text-foreground/80 hover:text-dlbc-navy border-b border-border last:border-0 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 mb-2 py-3 px-4 bg-dlbc-navy text-white rounded-lg font-medium hover:bg-dlbc-blue transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Join Online Service
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
