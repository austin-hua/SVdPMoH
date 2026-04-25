import type { Metadata } from "next"
import { Link2, Phone, MapPin, Globe, Church } from "lucide-react"
import {
  SVDP_NATIONAL_URL,
  SVDP_COUNCIL_URL,
  DIOCESE_URL,
} from "@/lib/constants"

export const metadata: Metadata = {
  title: "Resources & Links",
  description:
    "Local assistance directories, SVdP Council links, and community resources for the Falls Church, Virginia area.",
}

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
          <Link2 className="h-8 w-8 text-[#2B5EA7]" />
          Resources &amp; Links
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Local assistance directories, community organizations, and SVdP Council resources.
        </p>
      </div>

      {/* SVdP Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Church className="h-5 w-5 text-[#2B5EA7]" />
          SVdP &amp; Diocese Links
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ExternalLink
            title="SVdP USA National"
            desc="National organization — news, the Rule of the Society, and member resources"
            href={SVDP_NATIONAL_URL}
          />
          <ExternalLink
            title="SVdP Arlington Council"
            desc="Our regional council serving the Diocese of Arlington"
            href={SVDP_COUNCIL_URL}
          />
          <ExternalLink
            title="Catholic Diocese of Arlington"
            desc="Our diocesan home — parishes, ministries, and faith resources"
            href={DIOCESE_URL}
          />
        </div>
      </section>

      {/* Local Assistance Directory */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[#2B5EA7]" />
          Local Assistance Directory
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          The following organizations serve residents of the Falls Church and Northern Virginia area. If you are in need of services beyond what our conference provides, these resources may be able to help.
        </p>
        <div className="space-y-4">
          <LocalResource
            name="Falls Church City Department of Human Services"
            desc="Emergency assistance, social services, and referrals for Falls Church City residents."
            phone="703-248-5005"
            website="https://www.fallschurchva.gov"
          />
          <LocalResource
            name="Fairfax County Office for Children"
            desc="Child and family services for Fairfax County residents."
            phone="703-324-7500"
            website="https://www.fairfaxcounty.gov"
          />
          <LocalResource
            name="Northern Virginia Family Service (NVFS)"
            desc="Comprehensive social services including emergency assistance, housing, and counseling."
            phone="703-385-3267"
            website="https://www.nvfs.org"
          />
          <LocalResource
            name="Capital Area Food Bank"
            desc="Food assistance and nutrition resources throughout the DC metro area."
            phone="202-526-5344"
            website="https://www.capitalareafoodbank.org"
          />
          <LocalResource
            name="Virginia 211"
            desc="Dial 2-1-1 to connect with health and human service programs in Virginia."
            phone="211"
            website="https://www.virginia211.org"
          />
          <LocalResource
            name="Catholic Charities Diocese of Arlington"
            desc="Social services, immigration and refugee assistance, and counseling."
            phone="703-841-3830"
            website="https://www.ccda.net"
          />
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="bg-[#1C3D5A]/5 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#1C3D5A]">
          <Phone className="h-5 w-5" />
          Emergency Contacts
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold">Emergency Services</p>
            <p className="text-muted-foreground">911</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold">Virginia 211 (Social Services)</p>
            <p className="text-muted-foreground">Dial 2-1-1</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold">National Suicide &amp; Crisis Lifeline</p>
            <p className="text-muted-foreground">988</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold">Domestic Violence Hotline</p>
            <p className="text-muted-foreground">1-800-799-7233</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExternalLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-5 border rounded-xl bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
        <Globe className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </a>
  )
}

function LocalResource({
  name,
  desc,
  phone,
  website,
}: {
  name: string
  desc: string
  phone: string
  website: string
}) {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{desc}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^\d]/g, "")}`}
                className="flex items-center gap-1.5 text-[#2B5EA7] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                {phone}
              </a>
            )}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#2B5EA7] hover:underline"
            >
              <Globe className="h-3.5 w-3.5" />
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
