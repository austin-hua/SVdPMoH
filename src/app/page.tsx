"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  HandHeart,
  HeartHandshake,
  Users,
  BookOpen,
  Flower2,
  ChevronRight,
  ExternalLink,
  Phone,
} from "lucide-react"
import { DIOCESE, CONFERENCE_PHONE } from "@/lib/constants"
import { useLanguage } from "@/components/language-provider"

const PARISH_LINKS = [
  { name: "St. James Catholic Church", url: "https://stjamescatholic.org/", logo: "/images/st_james.png", logoSize: "max-h-24" },
  { name: "St. Anthony of Padua Catholic Church", url: "https://www.stanthonyparish.org/", logo: "/images/anthony_temp.png", logoSize: "max-h-24" },
  { name: "St. Philip Catholic Church", url: "https://www.stphilipfc.org/", logo: "/images/philip_temp.png", logoSize: "max-h-24" },
]

export default function Home() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2233] via-[#1C3D5A] to-[#2B5EA7] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,163,217,0.15),_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <Image
            src="/images/svdplogo.jpg"
            alt="SVdP Mother of Hope Conference logo"
            width={160}
            height={160}
            className="mx-auto mb-6 rounded-full object-cover drop-shadow-lg animate-scale-in"
            priority
          />
          <p className="text-white text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            {h.heroLocation}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-100">
            {h.heroTitle}
          </h1>
          <p className="text-lg text-slate-200 mb-2 animate-fade-in-up delay-200">{h.heroOrg}</p>
          <p className="text-slate-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            {h.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-400 mb-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1C3D5A] hover:bg-slate-100 font-semibold px-8 transition-all duration-200"
            >
              <Link href="/request-help">{h.requestAssistance}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 transition-all duration-200"
            >
              <Link href="/volunteer">
                <Users className="h-4 w-4 mr-2" />
                {h.volunteer}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 transition-all duration-200"
            >
              <Link href="/donate">
                <HeartHandshake className="h-4 w-4 mr-2" />
                {h.donate}
              </Link>
            </Button>
          </div>
          <p className="animate-fade-in-up delay-500 text-slate-200 text-base">
            <Phone className="inline h-4 w-4 mr-1.5 mb-0.5" />
            {h.callUs}{" "}
            <a
              href={`tel:${CONFERENCE_PHONE.replace(/[^\d]/g, "")}`}
              className="font-semibold underline underline-offset-2 hover:text-white transition-colors"
            >
              {CONFERENCE_PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="shrink-0 sm:w-48">
              <Image
                src="/images/motherofhope.png"
                alt="Mary, Mother of Hope"
                width={0}
                height={0}
                sizes="200px"
                className="w-full h-auto rounded-full shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{h.missionTitle}</h2>
              <blockquote className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-[#2B5EA7] pl-6">
                {h.missionQuote}
              </blockquote>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {h.missionDesc(DIOCESE)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Partnership */}
      <section className="pt-14 md:pt-18 pb-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">{h.parishTitle}</h2>
          <p className="text-muted-foreground text-center mb-10">
            {h.parishDesc}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PARISH_LINKS.map(({ name, url, logo, logoSize }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center border border-border block cursor-pointer"
              >
                <div className="flex items-center justify-center h-24 mb-4">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={0}
                    height={0}
                    sizes="160px"
                    className={`${logoSize} w-auto object-contain`}
                  />
                </div>
                <h3 className="font-semibold text-base mb-2">
                  {name.replace(" Catholic Church", "")}<br />Catholic Church
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-[#2B5EA7] group-hover:underline">
                  {h.visitWebsite} <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-3">{h.mapTitle}</h2>
          <p className="text-muted-foreground mb-8">{h.mapDesc}</p>
          <div className="rounded-xl overflow-hidden shadow-md border border-border">
            <iframe
              title="Falls Church, Virginia map"
              src="https://maps.google.com/maps?q=Falls+Church,+Virginia&output=embed&hl=en&z=13"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">{h.howWeServeTitle}</h2>
          <p className="text-muted-foreground text-center mb-10">{h.howWeServeDesc}</p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickLink
                icon={<HandHeart className="w-5 h-5" />}
                title={h.qlRequestHelp}
                desc={h.qlRequestHelpDesc}
                href="/request-help"
              />
              <QuickLink
                icon={<HeartHandshake className="w-5 h-5" />}
                title={h.qlDonate}
                desc={h.qlDonateDesc}
                href="/donate"
              />
              <QuickLink
                icon={<Users className="w-5 h-5" />}
                title={h.qlVolunteer}
                desc={h.qlVolunteerDesc}
                href="/volunteer"
              />
              <QuickLink
                icon={<BookOpen className="w-5 h-5" />}
                title={h.qlAbout}
                desc={h.qlAboutDesc}
                href="/about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News — temporarily hidden
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-3">{h.newsTitle}</h2>
          <p className="text-muted-foreground mb-8">{h.newsSubtitle}</p>
          <div className="border rounded-xl p-6 bg-white hover:shadow-sm transition-shadow duration-200">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              {h.newsDate}
            </p>
            <h3 className="font-semibold text-lg text-[#1C3D5A] mb-2">{h.newsHeadline}</h3>
            <p className="text-foreground/80 leading-relaxed">{h.newsBody}</p>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="py-14 md:py-18 bg-[#1C3D5A] text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{h.ctaTitle}</h2>
          <p className="text-slate-300 mb-8 leading-relaxed whitespace-pre-line">{h.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1C3D5A] hover:bg-slate-100 font-semibold transition-all duration-200"
            >
              <Link href="/volunteer">
                {h.becomeVincentian}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <Link href="/contact">{h.contactUs}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function QuickLink({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-border block"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] mb-4 group-hover:bg-[#1C3D5A]/10 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </Link>
  )
}
