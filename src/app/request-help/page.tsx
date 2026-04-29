import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request Assistance",
  description:
    "Request assistance from the SVdP Mother of Hope Conference in Falls Church, Virginia.",
}

export default function RequestHelp() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Request Assistance</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We are here to help. Please fill out the form below and we will follow up with you.
        </p>
      </div>

      <div className="rounded-xl overflow-hidden border">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScPBevSaaoRcjz-1yYe9WlvKoUYZz6q69pfEP-ApoT26w6cjA/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Request Assistance Form"
        >
          Loading…
        </iframe>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        For urgent needs or questions, please call us directly at{" "}
        <a href="tel:7031111111" className="text-[#2B5EA7] underline hover:text-[#1C3D5A]">
          703-111-1111
        </a>.
      </p>
    </div>
  )
}
