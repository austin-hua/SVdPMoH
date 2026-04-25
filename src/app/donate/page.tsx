import Link from "next/link"
import type { Metadata } from "next"
import { Banknote, Sofa, HeartHandshake, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the SVdP Mother of Hope Conference through financial gifts or material donations. Your generosity helps us serve those in need in Falls Church, Virginia.",
}

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Donate</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">
          &ldquo;Give, and it will be given to you. A good measure, pressed down, shaken
          together and running over, will be poured into your lap.&rdquo;
        </p>
        <p className="text-sm text-muted-foreground mt-2">— Luke 6:38</p>
      </div>

      {/* Financial Giving */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Banknote className="h-5 w-5 text-[#2B5EA7]" />
          Financial Giving
        </h2>

        <div className="border-2 border-dashed border-[#2B5EA7]/20 rounded-xl p-6 bg-[#1C3D5A]/[0.02] mb-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Online Giving</h3>
              <p className="text-sm text-muted-foreground">
                Online giving is coming soon. In the meantime, please consider
                mailing a check or giving in person through your parish. We
                appreciate your patience as we get set up.
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
              <Banknote className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Check or Cash</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Make checks payable to <strong>SVdP Mother of Hope Conference</strong> and mail or drop off at:
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
          Furniture &amp; Clothing Donations
        </h2>

        <div className="border rounded-xl p-6 bg-white space-y-4">
          <p className="text-sm text-muted-foreground">
            We gratefully accept gently used furniture and clothing to help
            families in need. Please review our guidelines before donating:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#1C3D5A]">We Accept</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Gently used clothing in good condition</li>
                <li>✓ Small and medium furniture (chairs, tables, dressers)</li>
                <li>✓ Household items and kitchenware</li>
                <li>✓ Bedding and linens</li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#1C3D5A]">We Cannot Accept</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✗ Torn, stained, or heavily worn clothing</li>
                <li>✗ Mattresses or box springs</li>
                <li>✗ Large appliances</li>
                <li>✗ Broken or damaged items</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4">
            <Info className="h-4 w-4 text-[#2B5EA7] shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Please contact us before dropping off large items so we can
              coordinate pickup or drop-off logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="bg-[#1C3D5A]/5 rounded-xl p-8 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-[#1C3D5A]">Why Your Gift Matters</h2>
        <p className="text-sm text-foreground/80 leading-relaxed mb-3">
          One hundred percent of your donation to the Mother of Hope Conference
          goes directly to serving families in need in the Falls Church community.
          Your generosity allows us to provide emergency financial assistance,
          connect neighbors with essential resources, and carry out the Vincentian
          mission of charity.
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed">
          The Society of St. Vincent de Paul is a 501(c)(3) nonprofit organization.
          Your donation may be tax-deductible.
        </p>
      </section>

      <div className="text-center">
        <p className="text-muted-foreground mb-3">Questions about donating?</p>
        <Button asChild variant="outline" className="border-[#1C3D5A] text-[#1C3D5A] hover:bg-[#1C3D5A] hover:text-white">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
