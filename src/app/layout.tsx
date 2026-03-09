import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Video } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import {
  ZOOM_LINK,
  CHURCH_ADDRESS_LINE1,
  CHURCH_ADDRESS_LINE2,
  CHURCH_ADDRESS_CITY,
} from "@/lib/constants"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Deeper Life Bible Church | Maple Grove, MN",
    template: "%s | DLBC Maple Grove",
  },
  description:
    "Join Deeper Life Bible Church in Maple Grove, MN for authentic worship, Bible study, and community. Sunday 9AM–1PM, Wednesday & Friday 6PM–8PM.",
  keywords: [
    "church",
    "Maple Grove",
    "Bible study",
    "worship",
    "Deeper Life",
    "Minnesota",
    "community",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Deeper Life Bible Church – Maple Grove",
    title: "Deeper Life Bible Church | Maple Grove, MN",
    description:
      "A vibrant community of believers growing deeper in God's Word. Join us in person or online.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Deeper Life Bible Church – Maple Grove Headquarters Branch",
    description:
      "A vibrant community of believers growing deeper in God's Word.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12951 Weaver Lake Rd",
      addressLocality: "Maple Grove",
      addressRegion: "MN",
      postalCode: "55369",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.1205,
      longitude: -93.4558,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "18:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "18:00",
        closes: "20:00",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <nav
            className="container mx-auto px-4 py-2.5 flex justify-between items-center"
            aria-label="Main navigation"
          >
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/church-logo.png"
                alt="Deeper Life Bible Church logo"
                width={42}
                height={42}
                className="rounded-full"
                priority
              />
              <div className="hidden sm:block leading-tight">
                <span className="font-bold text-sm text-dlbc-navy block">
                  DLBC
                </span>
                <span className="text-xs text-muted-foreground block">
                  Maple Grove
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-dlbc-navy focus-visible:text-dlbc-navy transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/visit"
                className="text-sm text-muted-foreground hover:text-dlbc-navy focus-visible:text-dlbc-navy transition-colors duration-200"
              >
                Visit
              </Link>
              <Link
                href="/give"
                className="text-sm text-muted-foreground hover:text-dlbc-navy focus-visible:text-dlbc-navy transition-colors duration-200"
              >
                Give
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-dlbc-navy focus-visible:text-dlbc-navy transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/resources"
                className="text-sm text-muted-foreground hover:text-dlbc-navy focus-visible:text-dlbc-navy transition-colors duration-200"
              >
                Resources
              </Link>
              <a
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-dlbc-navy text-white rounded-lg hover:bg-dlbc-blue transition-colors duration-200 text-sm font-medium"
              >
                <Video className="h-4 w-4" />
                Join Online
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <a
                href={ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dlbc-navy text-white rounded-lg text-sm font-medium"
              >
                <Video className="h-3.5 w-3.5" />
                Join
              </a>
              <MobileNav />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-dlbc-navy text-slate-300 py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/church-logo.png"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full opacity-90"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      Deeper Life Bible Church
                    </h3>
                    <p className="text-sm text-slate-400">
                      Maple Grove Headquarters Branch
                    </p>
                  </div>
                </div>
                <address className="text-sm not-italic leading-relaxed text-slate-400 pl-[48px]">
                  {CHURCH_ADDRESS_LINE1}
                  <br />
                  {CHURCH_ADDRESS_LINE2}
                  <br />
                  {CHURCH_ADDRESS_CITY}
                </address>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Service Times
                </h3>
                <div className="space-y-1.5 text-sm text-slate-400">
                  <p>Sunday: 9:00 AM – 1:00 PM</p>
                  <p>Wednesday: 6:00 PM – 8:00 PM</p>
                  <p>Friday: 6:00 PM – 8:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Quick Links
                </h3>
                <nav
                  className="flex flex-col gap-2 text-sm"
                  aria-label="Footer navigation"
                >
                  <Link
                    href="/visit"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Plan Your Visit
                  </Link>
                  <Link
                    href="/give"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Give
                  </Link>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/resources"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Resources
                  </Link>
                  <a
                    href={ZOOM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Join Online Service
                  </a>
                </nav>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-slate-500">
              <p className="mb-1">
                &copy; {new Date().getFullYear()} Deeper Life Bible Church,
                Maple Grove. All rights reserved.
              </p>
              <p className="text-xs text-slate-600 italic">
                ...achieving heaven&apos;s goal
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
