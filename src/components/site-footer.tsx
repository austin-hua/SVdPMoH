"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import {
  ORG_NAME,
  CONFERENCE_NAME,
  CONFERENCE_PHONE,
  CONFERENCE_EMAIL,
  CONFERENCE_ADDRESS_LINE1,
  CONFERENCE_ADDRESS_CITY,
} from "@/lib/constants"

const PARISH_LINKS = [
  { name: "St. James Catholic Church", url: "https://stjamescatholic.org/" },
  { name: "St. Anthony of Padua Catholic Church", url: "https://www.stanthonyparish.org/" },
  { name: "St. Philip Catholic Church", url: "https://www.stphilipfc.org/" },
]

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1C3D5A] text-slate-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/svdplogo.jpg"
                alt=""
                width={52}
                height={52}
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
            <h3 className="text-white font-semibold text-base mb-3">{t.footer.ourParishes}</h3>
            <ul className="space-y-1.5 text-sm text-slate-400">
              {PARISH_LINKS.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-3">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Footer navigation">
              <Link
                href="/request-help"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.requestAssistance}
              </Link>
              <Link
                href="/donate"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.donate}
              </Link>
              <Link
                href="/volunteer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.volunteer}
              </Link>
              <Link
                href="/about"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.about}
              </Link>
              <Link
                href="/spiritual-growth"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.spiritualGrowth}
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-slate-500">
          <p>{t.footer.rights(new Date().getFullYear())}</p>
          <p className="mt-2 text-xs text-slate-600">
            {t.footer.developedBy}{" "}
            <a
              href="https://www.linkedin.com/in/austin-hua"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors duration-200"
            >
              Austin Hua
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
