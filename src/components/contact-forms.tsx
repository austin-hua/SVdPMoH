"use client"

import { useState, type FormEvent } from "react"
import { Send, Heart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CHURCH_EMAIL } from "@/lib/constants"

type FormTab = "prayer" | "suggestion"

export function ContactForms() {
  const [activeTab, setActiveTab] = useState<FormTab>("prayer")
  const [submitted, setSubmitted] = useState(false)

  function handlePrayerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const request = formData.get("request") as string
    const isPrivate = formData.get("private") === "on"

    const subject = encodeURIComponent("Prayer Request from DLBC Website")
    const body = encodeURIComponent(
      `${name ? `Name: ${name}\n` : ""}${email ? `Email: ${email}\n` : ""}${isPrivate ? "Private Request\n" : ""}\nPrayer Request:\n${request}`
    )

    window.open(
      `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`,
      "_self"
    )
    setSubmitted(true)
  }

  function handleSuggestionSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const suggestion = formData.get("suggestion") as string
    const name = formData.get("name") as string

    const subject = encodeURIComponent("Suggestion from DLBC Website")
    const body = encodeURIComponent(
      `${name ? `From: ${name}\n\n` : ""}Suggestion:\n${suggestion}`
    )

    window.open(
      `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`,
      "_self"
    )
    setSubmitted(true)
  }

  function resetForm() {
    setSubmitted(false)
  }

  return (
    <div>
      <div className="flex rounded-lg bg-muted p-1 mb-6" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === "prayer"}
          onClick={() => {
            setActiveTab("prayer")
            resetForm()
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeTab === "prayer"
              ? "bg-white text-dlbc-navy shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className="h-4 w-4" />
          Prayer Request
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "suggestion"}
          onClick={() => {
            setActiveTab("suggestion")
            resetForm()
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeTab === "suggestion"
              ? "bg-white text-dlbc-navy shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <MessageSquare className="h-4 w-4" />
          Suggestion
        </button>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-scale-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 mb-4">
            <Send className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Thank You</h3>
          <p className="text-muted-foreground mb-4">
            Your {activeTab === "prayer" ? "prayer request" : "suggestion"} is
            being prepared in your email app. Please send the email to complete
            your submission.
          </p>
          <Button variant="outline" onClick={resetForm}>
            Submit Another
          </Button>
        </div>
      ) : activeTab === "prayer" ? (
        <form
          onSubmit={handlePrayerSubmit}
          className="space-y-5 bg-white rounded-xl border p-6"
          role="tabpanel"
        >
          <div>
            <Label htmlFor="prayer-name">
              Name{" "}
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </Label>
            <Input
              id="prayer-name"
              name="name"
              placeholder="Your name"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="prayer-email">
              Email{" "}
              <span className="text-muted-foreground font-normal">
                (optional, for follow-up)
              </span>
            </Label>
            <Input
              id="prayer-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="prayer-request">
              Prayer Request{" "}
              <span className="text-dlbc-red">*</span>
            </Label>
            <Textarea
              id="prayer-request"
              name="request"
              placeholder="Share your prayer need..."
              required
              rows={5}
              className="mt-1.5"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="prayer-private"
              name="private"
              className="h-4 w-4 rounded border-input text-dlbc-navy focus:ring-dlbc-blue"
            />
            <Label
              htmlFor="prayer-private"
              className="text-sm text-muted-foreground font-normal cursor-pointer"
            >
              Keep this request private (pastor only)
            </Label>
          </div>
          <Button type="submit" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Submit Prayer Request
          </Button>
        </form>
      ) : (
        <form
          onSubmit={handleSuggestionSubmit}
          className="space-y-5 bg-white rounded-xl border p-6"
          role="tabpanel"
        >
          <div>
            <Label htmlFor="suggestion-text">
              Your Suggestion{" "}
              <span className="text-dlbc-red">*</span>
            </Label>
            <Textarea
              id="suggestion-text"
              name="suggestion"
              placeholder="Share your thoughts or ideas..."
              required
              rows={5}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="suggestion-name">
              Name{" "}
              <span className="text-muted-foreground font-normal">
                (optional — this can be submitted anonymously)
              </span>
            </Label>
            <Input
              id="suggestion-name"
              name="name"
              placeholder="Your name"
              className="mt-1.5"
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Submit Suggestion
          </Button>
        </form>
      )}
    </div>
  )
}
