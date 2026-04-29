"use client"

import type { Metadata } from "next"
import { useState, type FormEvent } from "react"
import { CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONFERENCE_EMAIL, PARISHES } from "@/lib/constants"

export default function RequestHelp() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get("name") as string
    const phone = fd.get("phone") as string
    const email = fd.get("email") as string
    const address = fd.get("address") as string
    const parish = fd.get("parish") as string
    const situation = fd.get("situation") as string

    const subject = encodeURIComponent("Assistance Request – SVdP Mother of Hope")
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nParish: ${parish}\n\nSituation:\n${situation}`
    )
    window.open(`mailto:${CONFERENCE_EMAIL}?subject=${subject}&body=${body}`, "_self")
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Request Assistance</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We are here to help. Please fill out the form below and we will follow up with you.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center animate-scale-in">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold text-xl mb-2">Request Submitted</h3>
          <p className="text-muted-foreground mb-4">
            Your request is being prepared in your email app. Please send the email to complete your submission. A member of our conference will follow up with you.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
              <Input id="name" name="name" required placeholder="Your full name" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
              <Input id="phone" name="phone" type="tel" required placeholder="(703) 000-0000" className="mt-1.5" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address <span className="text-muted-foreground font-normal">(optional)</span></Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="address">Home Address <span className="text-red-500">*</span></Label>
            <Input id="address" name="address" required placeholder="Street address, Falls Church, VA" className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="parish">Nearest Parish <span className="text-red-500">*</span></Label>
            <select
              id="parish"
              name="parish"
              required
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">Select a parish…</option>
              {PARISHES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
          </div>

          <div>
            <Label htmlFor="situation">Brief Description of Your Situation <span className="text-red-500">*</span></Label>
            <Textarea
              id="situation"
              name="situation"
              required
              rows={5}
              placeholder="Please briefly describe your situation and the type of assistance you are seeking…"
              className="mt-1.5"
            />
          </div>

          <Button type="submit" className="w-full bg-[#1C3D5A] hover:bg-[#2B5EA7]">
            <Send className="h-4 w-4 mr-2" />
            Submit Request
          </Button>
        </form>
      )}

      <p className="text-center text-sm text-muted-foreground mt-6">
        For urgent needs or questions, please call us directly at{" "}
        <a href="tel:7031111111" className="text-[#2B5EA7] underline hover:text-[#1C3D5A]">
          703-111-1111
        </a>
        .
      </p>
    </div>
  )
}
