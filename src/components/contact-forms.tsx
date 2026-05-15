"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONFERENCE_EMAIL } from "@/lib/constants"
import { useLanguage } from "@/components/language-provider"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get("name") as string
    const email = fd.get("email") as string
    const subject = fd.get("subject") as string
    const message = fd.get("message") as string

    const encodedSubject = encodeURIComponent(
      subject || `Message from ${name || "Website Visitor"}`
    )
    const body = encodeURIComponent(
      `${name ? `Name: ${name}\n` : ""}${email ? `Email: ${email}\n` : ""}\nMessage:\n${message}`
    )
    window.open(`mailto:${CONFERENCE_EMAIL}?subject=${encodedSubject}&body=${body}`, "_self")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center animate-scale-in">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-semibold text-xl mb-2">{c.formSuccessTitle}</h3>
        <p className="text-muted-foreground mb-4">{c.formSuccessDesc}</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          {c.formSendAnother}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">{c.formName}</Label>
          <Input id="name" name="name" placeholder={c.formNamePlaceholder} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">
            {c.formEmail} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={c.formEmailPlaceholder}
            className="mt-1.5"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">{c.formSubjectLabel}</Label>
        <Input
          id="subject"
          name="subject"
          placeholder={c.formSubjectPlaceholder}
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="message">
          {c.formMessage} <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={c.formMessagePlaceholder}
          className="mt-1.5"
        />
      </div>
      <Button type="submit" className="w-full bg-[#1C3D5A] hover:bg-[#2B5EA7]">
        <Send className="h-4 w-4 mr-2" />
        {c.formSend}
      </Button>
    </form>
  )
}
