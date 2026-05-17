"use client"

import Link from "next/link"
import { Users, ChevronRight } from "lucide-react"
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

      {/* How to Join */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-[#2B5EA7]" />
          {v.howToJoinTitle}
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <StepCard number="1" title={v.step1Title} desc={v.step1Desc} />
          <StepCard number="2" title={v.step2Title} desc={v.step2Desc} />
          <StepCard number="3" title={v.step3Title} desc={v.step3Desc} />
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

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-white border rounded-xl p-5 hover:shadow-sm transition-shadow duration-200">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C3D5A] text-white font-bold text-lg mb-4">
        {number}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

