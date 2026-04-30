import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  HandHeart,
  HeartHandshake,
  Users,
  BookOpen,
  Flower2,
  ChevronRight,
  Church,
  ExternalLink,
  Phone,
} from "lucide-react"
import { DIOCESE, CONFERENCE_PHONE } from "@/lib/constants"

const PARISH_LINKS = [
  { name: "St. James Catholic Church", url: "https://stjamescatholic.org/" },
  { name: "St. Anthony of Padua Catholic Church", url: "https://www.stanthonyparish.org/" },
  { name: "St. Philip Catholic Church", url: "https://www.stphilipfc.org/" },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2233] via-[#1C3D5A] to-[#2B5EA7] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,163,217,0.15),_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <Image
            src="/images/svdplogo.jpg"
            alt="SVdP Mother of Hope Conference logo"
            width={160}
            height={160}
            className="mx-auto mb-6 rounded-full object-cover drop-shadow-lg animate-scale-in"
            priority
          />
          <p className="text-[#5BA3D9]/80 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            Falls Church, Virginia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-100">
            Mother of Hope Conference
          </h1>
          <p className="text-lg text-slate-200 mb-2 animate-fade-in-up delay-200">
            Society of St. Vincent de Paul
          </p>
          <p className="text-slate-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Inspired by Gospel values, we serve Christ in the poor with love, respect, justice, and joy — uniting the faithful of three Falls Church parishes in service to our neighbors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-400 mb-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1C3D5A] hover:bg-slate-100 font-semibold px-8 transition-all duration-200"
            >
              <Link href="/request-help">Request Assistance</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 transition-all duration-200"
            >
              <Link href="/volunteer">
                <Users className="h-4 w-4 mr-2" />
                Volunteer
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 transition-all duration-200"
            >
              <Link href="/donate">
                <HeartHandshake className="h-4 w-4 mr-2" />
                Donate
              </Link>
            </Button>
          </div>
          <p className="animate-fade-in-up delay-500 text-slate-200 text-base">
            <Phone className="inline h-4 w-4 mr-1.5 mb-0.5" />
            Call us: <a href={`tel:${CONFERENCE_PHONE.replace(/[^\d]/g, "")}`} className="font-semibold underline underline-offset-2 hover:text-white transition-colors">{CONFERENCE_PHONE}</a>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <blockquote className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-[#2B5EA7] pl-6 text-left">
            "To live the Gospel message by serving Christ in the poor with love,
            respect, justice, and joy, and by growing in holiness through prayer,
            reflection, and action."
          </blockquote>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The Mother of Hope Conference is a newly established conference of the Society of St. Vincent de Paul, linking the communities of three Falls Church parishes under the {DIOCESE}.
          </p>
        </div>
      </section>

      {/* Parish Partnership */}
      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Our Parish Partnership</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Three Falls Church parishes united in service to our neighbors in need.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PARISH_LINKS.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center border border-border block cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1C3D5A]/5 text-[#2B5EA7] mb-4 group-hover:bg-[#1C3D5A]/10 transition-colors">
                  <Church className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base mb-2">{name}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-[#2B5EA7] group-hover:underline">
                  Visit website <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            In partnership with the {DIOCESE}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">How We Serve</h2>
          <p className="text-muted-foreground text-center mb-10">
            Find the resources and opportunities that are right for you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <QuickLink
              icon={<HandHeart className="w-5 h-5" />}
              title="Request Help"
              desc="Need assistance? We're here to help those in our parish boundaries."
              href="/request-help"
            />
            <QuickLink
              icon={<HeartHandshake className="w-5 h-5" />}
              title="Donate"
              desc="Support our work through financial gifts or material donations."
              href="/donate"
            />
            <QuickLink
              icon={<Users className="w-5 h-5" />}
              title="Volunteer"
              desc="Join the Society and serve alongside fellow Vincentians."
              href="/volunteer"
            />
            <QuickLink
              icon={<BookOpen className="w-5 h-5" />}
              title="About SVdP"
              desc="Learn about the history and mission of our Society."
              href="/about"
            />
            <QuickLink
              icon={<Flower2 className="w-5 h-5" />}
              title="Spiritual Growth"
              desc="Reflections and prayers for Vincentian members."
              href="/spiritual-growth"
            />
          </div>
        </div>
      </section>

      {/* Latest News placeholder */}
      <section className="py-14 md:py-18">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-3">Latest News</h2>
          <p className="text-muted-foreground mb-8">Updates from our conference.</p>
          <div className="border rounded-xl p-6 bg-white hover:shadow-sm transition-shadow duration-200">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">April 2026</p>
            <h3 className="font-semibold text-lg text-[#1C3D5A] mb-2">
              Mother of Hope Conference Officially Established
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We are pleased to announce that the Society of St. Vincent de Paul Mother of Hope Conference is now officially established in the Commonwealth of Virginia and registered as a nonprofit organization under Section 501(c)(3) of the Internal Revenue Code, effective April 2026. We are also pleased to share that our Conference President and Treasurer have both been elected, marking an important milestone as we begin our work in earnest. We look forward to serving our neighbors in the Falls Church community and growing in the Vincentian spirit of charity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-18 bg-[#1C3D5A] text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Us in Serving Our Neighbors</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Whether you need assistance, want to donate, or feel called to volunteer, the Mother of Hope Conference welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1C3D5A] hover:bg-slate-100 font-semibold transition-all duration-200"
            >
              <Link href="/volunteer">
                Become a Vincentian
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function QuickLink({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-border block"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] mb-4 group-hover:bg-[#1C3D5A]/10 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </Link>
  )
}
