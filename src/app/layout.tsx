import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  )
}
