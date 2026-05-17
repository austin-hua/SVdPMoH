"use client"

import { Flower2, BookOpen, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function SpiritualGrowth() {
  const { t } = useLanguage()
  const s = t.spiritualGrowth

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
          <Flower2 className="h-8 w-8 text-[#2B5EA7]" />
          {s.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{s.subtitle}</p>
      </div>

      {/* Vincentian Prayers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#2B5EA7]" />
          {s.prayersTitle}
        </h2>
        <div className="space-y-5">
          <PrayerCard title={s.prayer1Title} prayer={s.prayer1} />
          <PrayerCard title={s.prayer2Title} prayer={s.prayer2} />
          <PrayerCard title={s.prayer3Title} prayer={s.prayer3} />
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-12 bg-[#1C3D5A]/5 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C3D5A]">{s.reflectionTitle}</h2>
        <blockquote className="text-base italic text-foreground/80 border-l-4 border-[#2B5EA7] pl-5 mb-4 leading-relaxed">
          {s.reflectionQuote}
        </blockquote>
        <p className="text-sm text-muted-foreground">{s.reflectionAttrib}</p>
      </section>

      {/* Member Reflections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#2B5EA7]" />
          {s.memberReflectionsTitle}
        </h2>
        <div className="border-2 border-dashed border-[#2B5EA7]/20 rounded-xl p-10 text-center bg-[#1C3D5A]/[0.02]">
          <BookOpen className="h-10 w-10 text-[#2B5EA7]/30 mx-auto mb-3" />
          <p className="text-muted-foreground">{s.memberReflectionsDesc}</p>
          <p className="text-sm text-muted-foreground mt-2">{s.memberReflectionsCheckBack}</p>
        </div>
      </section>

      {/* Rule of the Society */}
      <section className="bg-[#1C3D5A] text-white rounded-xl p-8">
        <h2 className="text-xl font-semibold mb-3">{s.ruleTitle}</h2>
        <p className="text-slate-300 leading-relaxed mb-3">{s.ruleDesc1}</p>
        <p className="text-slate-300 leading-relaxed">{s.ruleDesc2}</p>
      </section>
    </div>
  )
}

function PrayerCard({ title, prayer }: { title: string; prayer: string }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold text-[#1C3D5A] mb-3">{title}</h3>
      <p className="text-foreground/80 leading-relaxed italic text-sm">{prayer}</p>
    </div>
  )
}
