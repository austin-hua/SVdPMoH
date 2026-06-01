"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Volunteer() {
  const { t } = useLanguage()
  const v = t.volunteer

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{v.title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{v.subtitle}</p>
      </div>

      {/* Volunteer Interest Form */}
      <section className="mb-14">
        <div className="w-full overflow-hidden rounded-xl border">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScoBUZ9Cf5dVM79oqYTyGgMDV01OwXtULlsh-BB_Qs1zA23Mg/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </section>

{/* Vincentian Spirit */}
      <section className="bg-[#1C3D5A] text-white rounded-xl p-8 mb-10">
        <h2 className="text-xl font-semibold mb-3">{v.spiritTitle}</h2>
        <p className="text-slate-300 leading-relaxed mb-3">{v.spiritDesc1}</p>
        <p className="text-slate-300 leading-relaxed">{v.spiritDesc2}</p>
      </section>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">{v.ctaText}</p>
        <Button asChild className="bg-[#1C3D5A] hover:bg-[#2B5EA7]">
          <Link href="/contact">
            {v.ctaBtn}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

