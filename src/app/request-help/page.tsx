"use client"

import { useLanguage } from "@/components/language-provider"
import { CONFERENCE_PHONE } from "@/lib/constants"

export default function RequestHelp() {
  const { t } = useLanguage()
  const r = t.requestHelp

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">{r.title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{r.subtitle}</p>
      </div>

      <div className="rounded-xl overflow-hidden border">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScIlLCcOgSCsK7ntKNocdknXriPmrJ2fcbw4Zd_9vT0t694Rg/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Request Assistance Form"
        >
          Loading…
        </iframe>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        {r.urgentNote}{" "}
        <a
          href={`tel:${CONFERENCE_PHONE.replace(/[^\d]/g, "")}`}
          className="text-[#2B5EA7] underline hover:text-[#1C3D5A]"
        >
          {CONFERENCE_PHONE}
        </a>
        .
      </p>
    </div>
  )
}
