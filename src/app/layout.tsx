import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import {
  ORG_NAME,
  CONFERENCE_NAME,
  CONFERENCE_PHONE,
  CONFERENCE_EMAIL,
  CONFERENCE_ADDRESS_LINE1,
  CONFERENCE_ADDRESS_CITY,
} from "@/lib/constants"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SVdP Mother of Hope | Falls Church, VA",
    template: "%s | SVdP Mother of Hope",
  },
  description:
    "The Society of St. Vincent de Paul Mother of Hope Conference serves those in need in Falls Church, Virginia, uniting St. James, St. Anthony of Padua, and St. Philip parishes.",
  keywords: [
    "St. Vincent de Paul",
    "SVdP",
    "Falls Church",
    "Virginia",
    "Catholic",
    "charity",
    "food pantry",
    "assistance",
    "Diocese of Arlington",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SVdP Mother of Hope Conference",
    title: "SVdP Mother of Hope | Falls Church, VA",
    description:
      "Serving Christ in the poor with love, respect, justice, and joy in Falls Church, Virginia.",
  },
  robots: { index: true, follow: true },
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/request-help", label: "Request Help" },
  { href: "/donate", label: "Donate" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/about", label: "About SVdP" },
  { href: "/spiritual-growth", label: "Spiritual Growth" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
                <span className="font-bold text-sm text-[#1C3D5A] block">
                  Mother of Hope
                </span>
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
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <MobileNav />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-[#1C3D5A] text-slate-300 py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/svdplogo.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover opacity-90"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-base leading-tight">
                      {CONFERENCE_NAME}
                    </h3>
                    <p className="text-xs text-slate-400">{ORG_NAME}</p>
                  </div>
                </div>
                <address className="text-sm not-italic leading-relaxed text-slate-400 space-y-1.5 pl-[52px]">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {CONFERENCE_ADDRESS_LINE1}, {CONFERENCE_ADDRESS_CITY}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <a
                      href={`tel:${CONFERENCE_PHONE.replace(/[^\d]/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {CONFERENCE_PHONE}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <a
                      href={`mailto:${CONFERENCE_EMAIL}`}
                      className="hover:text-white transition-colors"
                    >
                      {CONFERENCE_EMAIL}
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-3">
                  Our Parishes
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li>
                    <a href="https://stjamescatholic.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      St. James Catholic Church
                    </a>
                  </li>
                  <li>
                    <a href="https://www.stanthonyparish.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      St. Anthony of Padua Catholic Church
                    </a>
                  </li>
                  <li>
                    <a href="https://www.stphilipfc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      St. Philip Catholic Church
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-3">
                  Quick Links
                </h3>
                <nav
                  className="flex flex-col gap-2 text-sm"
                  aria-label="Footer navigation"
                >
                  <Link href="/request-help" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Request Assistance
                  </Link>
                  <Link href="/donate" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Donate
                  </Link>
                  <Link href="/volunteer" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Volunteer
                  </Link>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                    About SVdP
                  </Link>
                  <Link href="/spiritual-growth" className="text-slate-400 hover:text-white transition-colors duration-200">
                    Spiritual Growth
                  </Link>
                </nav>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-slate-500">
              <p>
                &copy; {new Date().getFullYear()} Society of St. Vincent de Paul – Mother of Hope Conference. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
