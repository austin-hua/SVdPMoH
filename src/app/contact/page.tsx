"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-forms"
import {
  CONFERENCE_EMAIL,
  CONFERENCE_PHONE,
  CONFERENCE_FULL_ADDRESS,
} from "@/lib/constants"
import { useLanguage } from "@/components/language-provider"

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{c.title}</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">{c.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        <div className="md:col-span-2">
          <div className="bg-secondary rounded-xl p-6 space-y-6 sticky top-24">
            <h3 className="font-semibold text-lg">{c.getInTouch}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.phone}</p>
                  <a
                    href={`tel:${CONFERENCE_PHONE.replace(/[^\d]/g, "")}`}
                    className="text-sm font-medium text-[#1C3D5A] hover:text-[#2B5EA7] hover:underline transition-colors duration-200"
                  >
                    {CONFERENCE_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.email}</p>
                  <a
                    href={`mailto:${CONFERENCE_EMAIL}`}
                    className="text-sm font-medium text-[#1C3D5A] hover:text-[#2B5EA7] hover:underline transition-colors duration-200"
                  >
                    {CONFERENCE_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.address}</p>
                  <p className="text-sm font-medium">{CONFERENCE_FULL_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                {c.urgentNote}{" "}
                <a href="/request-help" className="text-[#2B5EA7] hover:underline">
                  {c.requestHelpLink}
                </a>{" "}
                {c.urgentNoteEnd}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
