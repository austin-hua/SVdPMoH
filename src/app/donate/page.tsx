"use client"

import Link from "next/link"
import { Banknote, HeartHandshake, TrendingUp, Landmark, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function SectionCard({
  icon,
  title,
  children,
  dashed,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  dashed?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-6 bg-white mb-4 ${
        dashed
          ? "border-2 border-dashed border-[#2B5EA7]/20 bg-[#1C3D5A]/[0.02]"
          : "border"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}

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

      {/* Donate Online */}
      <SectionCard icon={<HeartHandshake className="h-5 w-5" />} title={d.onlineTitle} dashed>
        <p className="text-sm text-muted-foreground">{d.onlineDesc}</p>
      </SectionCard>

      {/* Donate by Check */}
      <SectionCard icon={<Banknote className="h-5 w-5" />} title={d.checkTitle}>
        <p className="text-sm text-muted-foreground mb-3">{d.checkDesc}</p>
        <address className="text-sm not-italic space-y-0.5">
          <p className="font-medium">St. James Catholic Church</p>
          <p>905 Park Avenue</p>
          <p>Falls Church, VA 22046</p>
          <p>{d.checkAttn}</p>
        </address>
      </SectionCard>

      {/* Donate Stock */}
      <SectionCard icon={<TrendingUp className="h-5 w-5" />} title={d.stockTitle}>
        <p className="text-sm text-muted-foreground mb-3">{d.stockDesc}</p>
        <div className="bg-secondary rounded-lg p-4 space-y-1.5 mb-3">
          <InfoRow label="Brokerage Firm:" value="Fidelity Investments" />
          <InfoRow label="Account Name:" value="SVDP Mother of Hope Conference" />
          <InfoRow label="Account Number:" value="Z34-856905" />
          <InfoRow label="DTC:" value="0226" />
        </div>
        <p className="text-sm text-muted-foreground mb-2">{d.stockAddressNote}</p>
        <address className="text-sm not-italic space-y-0.5">
          <p className="font-medium">Fidelity Investments</p>
          <p>Attn: TOA Receives</p>
          <p>PO Box 770001</p>
          <p>Cincinnati, OH 45277-0036</p>
        </address>
      </SectionCard>

      {/* Donate from a DAF */}
      <SectionCard icon={<Landmark className="h-5 w-5" />} title={d.dafTitle}>
        <p className="text-sm text-muted-foreground mb-3">{d.dafDesc}</p>
        <div className="bg-secondary rounded-lg p-4 space-y-1.5 mb-3">
          <p className="text-sm font-medium">SVDP Mother of Hope Conference</p>
          <p className="text-sm">905 Park Avenue</p>
          <p className="text-sm">Falls Church, VA 22046</p>
          <InfoRow label="Tax ID:" value="42-1937873" />
          <p className="text-sm text-muted-foreground">Phone Number</p>
          <p className="text-sm text-muted-foreground">Email Address</p>
        </div>
        <p className="text-sm text-muted-foreground">{d.dafNote}</p>
      </SectionCard>

      {/* IRA QCD */}
      <SectionCard icon={<Heart className="h-5 w-5" />} title={d.qcdTitle}>
        <p className="text-sm text-muted-foreground mb-3">{d.qcdDesc}</p>
        <div className="bg-secondary rounded-lg p-4 space-y-0.5 mb-3">
          <p className="text-sm font-medium">SVDP Mother of Hope Conference</p>
          <p className="text-sm">905 Park Avenue</p>
          <p className="text-sm">Falls Church, VA 22046</p>
          <p className="text-sm">{d.qcdAttn}</p>
        </div>
        <p className="text-sm text-muted-foreground">{d.qcdNote}</p>
      </SectionCard>

      {/* Why Give */}
      <section className="bg-[#1C3D5A]/5 rounded-xl p-8 mb-8 mt-6">
        <h2 className="text-xl font-semibold mb-3 text-[#1C3D5A]">{d.whyTitle}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed mb-3">
          <strong>{d.whyDesc1}</strong>{" "}{d.whyDesc1b}
        </p>
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
