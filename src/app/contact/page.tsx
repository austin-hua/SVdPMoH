import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-forms"
import {
  CONFERENCE_EMAIL,
  CONFERENCE_PHONE,
  CONFERENCE_FULL_ADDRESS,
} from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the SVdP Mother of Hope Conference in Falls Church, Virginia.",
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as we can.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        <div className="md:col-span-2">
          <div className="bg-secondary rounded-xl p-6 space-y-6 sticky top-24">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
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
                  <p className="text-sm text-muted-foreground">Email</p>
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
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-sm font-medium">{CONFERENCE_FULL_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                For immediate assistance requests, please visit our{" "}
                <a href="/request-help" className="text-[#2B5EA7] hover:underline">
                  Request Help
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
