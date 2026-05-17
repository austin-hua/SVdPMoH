"use client"

import Link from "next/link"
import { Banknote, Sofa, HeartHandshake, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Donate() {
  const { t } = useLanguage()
  const d = t.donate

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{d.title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">
          &ldquo;{d.quote}&rdquo;
        </p>
        <p className="text-sm text-muted-foreground mt-2">{d.quoteRef}</p>
      </div>

      {/* Financial Giving */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Banknote className="h-5 w-5 text-[#2B5EA7]" />
          {d.financialTitle}
        </h2>

        <div className="border-2 border-dashed border-[#2B5EA7]/20 rounded-xl p-6 bg-[#1C3D5A]/[0.02] mb-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{d.onlineTitle}</h3>
              <p className="text-sm text-muted-foreground">{d.onlineDesc}</p>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
              <Banknote className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{d.checkTitle}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {d.checkDesc} <strong>SVdP Mother of Hope Conference</strong>
              </p>
              <address className="text-sm not-italic text-muted-foreground">
                905 Park Avenue<br />
                Falls Church, Virginia 22046
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture & Clothing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Sofa className="h-5 w-5 text-[#2B5EA7]" />
          {d.furnitureTitle}
        </h2>

        <div className="border rounded-xl p-6 bg-white space-y-4">
          <p className="text-sm text-muted-foreground">{d.furnitureDesc}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#1C3D5A]">{d.weAccept}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {d.acceptList.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#1C3D5A]">{d.weCannotAccept}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {d.cannotAcceptList.map((item) => (
                  <li key={item}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
            <Info className="h-4 w-4 text-[#2B5EA7] shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{d.coordNote}</p>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="bg-[#1C3D5A]/5 rounded-xl p-8 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-[#1C3D5A]">{d.whyTitle}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed mb-3">{d.whyDesc1}</p>
        <p className="text-sm text-foreground/80 leading-relaxed">{d.whyDesc2}</p>
      </section>

      <div className="text-center">
        <p className="text-muted-foreground mb-3">{d.questionsAbout}</p>
        <Button asChild variant="outline" className="border-[#1C3D5A] text-[#1C3D5A] hover:bg-[#1C3D5A] hover:text-white">
          <Link href="/contact">{d.contactBtn}</Link>
        </Button>
      </div>
    </div>
  )
}
