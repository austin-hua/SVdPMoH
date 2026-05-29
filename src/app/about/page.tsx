"use client"

import Image from "next/image"
import { BookOpen, Church, Globe } from "lucide-react"
import { PARISHES, DIOCESE, SVDP_NATIONAL_URL, SVDP_COUNCIL_URL } from "@/lib/constants"
import { useLanguage } from "@/components/language-provider"

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{a.title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{a.subtitle}</p>
      </div>

      {/* The Vincentian Mission */}
      <section className="mb-14 bg-[#1C3D5A]/5 rounded-xl p-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-md shrink-0 sm:w-48">
            <Image
              src="/images/stvincent.jpeg"
              alt="St. Vincent de Paul"
              title="Portrait of St. Vincent de Paul by Simon François de Tours (17th c.), public domain"
              width={0}
              height={0}
              sizes="200px"
              className="w-full h-auto rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#1C3D5A]">
              {a.vincentianMissionTitle}
            </h2>
            <blockquote className="text-lg italic text-foreground/80 border-l-4 border-[#2B5EA7] pl-5 mb-4">
              {a.vincentianQuote}
            </blockquote>
            <p className="text-sm text-muted-foreground">{a.vincentianQuoteAttrib}</p>
          </div>
        </div>
      </section>

      {/* National & Council Links */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Globe className="h-5 w-5 text-[#2B5EA7]" />
          {a.learnMoreTitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={SVDP_NATIONAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border rounded-xl bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="shrink-0 flex items-center justify-center w-16 h-16">
              <Image
                src="/images/svdp-usa.png"
                alt="SVdP USA logo"
                width={0}
                height={0}
                sizes="64px"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{a.svdpUsaTitle}</h3>
              <p className="text-sm text-muted-foreground">{a.svdpUsaDesc}</p>
            </div>
          </a>
          <a
            href={SVDP_COUNCIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border rounded-xl bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="shrink-0 flex items-center justify-center w-16 h-16">
              <Image
                src="/images/svdp-usa.png"
                alt="SVdP Arlington Council logo"
                width={0}
                height={0}
                sizes="64px"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{a.svdpCouncilTitle}</h3>
              <p className="text-sm text-muted-foreground">{a.svdpCouncilDesc}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Our Local Conference */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Church className="h-5 w-5 text-[#2B5EA7]" />
          {a.localConferenceTitle}
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>Mother of Hope Conference</strong>{" "}
            {a.localConference1(DIOCESE).replace("The Mother of Hope Conference", "").replace("La Conferencia Madre de Esperanza", "")}
          </p>
          <p>{a.localConference2}</p>
          <ul className="list-none space-y-2 pl-4">
            {PARISHES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B5EA7] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p>{a.localConference3}</p>
        </div>
      </section>

      {/* History of the Society */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#2B5EA7]" />
          {a.historyTitle}
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
          <p>
            <strong>Blessed Frédéric Ozanam</strong> {a.history1.replace("Blessed Frédéric Ozanam", "").replace(/^\s*\(/, "(")}
          </p>
        </div>
        <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md mb-8">
          <Image
            src="/images/frederic.png"
            alt="Blessed Frédéric Ozanam"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>{a.history2}</p>
          <p>
            {a.history3.split("Society of St. Vincent de Paul USA")[0]}
            <strong>Society of St. Vincent de Paul USA</strong>
            {a.history3.split("Society of St. Vincent de Paul USA")[1]}
          </p>
        </div>
      </section>
    </div>
  )
}
