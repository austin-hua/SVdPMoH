import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForms } from "@/components/contact-forms"
import {
  CHURCH_EMAIL,
  CHURCH_PHONE,
  CHURCH_FULL_ADDRESS,
} from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Deeper Life Bible Church Maple Grove. Submit a prayer request, share a suggestion, or reach out directly.",
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Submit a prayer request, share a
          suggestion, or reach out directly.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <ContactForms />
        </div>

        <div className="md:col-span-2">
          <div className="bg-secondary rounded-xl p-6 space-y-6 sticky top-24">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-dlbc-navy/5 text-dlbc-blue flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${CHURCH_EMAIL}`}
                    className="text-sm font-medium text-dlbc-navy hover:text-dlbc-blue hover:underline transition-colors duration-200"
                  >
                    {CHURCH_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-dlbc-navy/5 text-dlbc-blue flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${CHURCH_PHONE.replace(/[^\d+]/g, "")}`}
                    className="text-sm font-medium text-dlbc-navy hover:text-dlbc-blue hover:underline transition-colors duration-200"
                  >
                    {CHURCH_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-dlbc-navy/5 text-dlbc-blue flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-sm font-medium">{CHURCH_FULL_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                For urgent matters, please call during service hours or reach out
                to your cell leader directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
