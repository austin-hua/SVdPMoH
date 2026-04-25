import Link from "next/link"
import type { Metadata } from "next"
import { Users, Heart, HandHeart, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join the Society of St. Vincent de Paul Mother of Hope Conference. Learn how to become a Vincentian and see current volunteer opportunities in Falls Church, Virginia.",
}

export default function Volunteer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Volunteer &amp; Join</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Answer the call to serve. The Society of St. Vincent de Paul welcomes all who wish to live the Gospel through direct, person-to-person service.
        </p>
      </div>

      {/* How to Join */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-[#2B5EA7]" />
          How to Join the Society
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          <StepCard
            number="1"
            title="Attend a Meeting"
            desc="Come to one of our conference meetings to meet our members and learn about our work. Meetings are open to anyone interested in joining."
          />
          <StepCard
            number="2"
            title="Become a Probationer"
            desc="New members begin a period of formation known as probation — typically lasting about a year — to learn the Vincentian charism and way of service."
          />
          <StepCard
            number="3"
            title="Take Your Active Membership"
            desc="After your formation period, you are formally welcomed as an active member of the Society of St. Vincent de Paul."
          />
        </div>
        <div className="mt-6 bg-[#1C3D5A]/5 rounded-xl p-5 text-sm text-muted-foreground">
          <strong className="text-foreground">Membership requirements:</strong> Members of the Society are expected to be practicing Catholics in good standing. We ask members to attend regular conference meetings, participate in home visits or other works of charity, and commit to ongoing spiritual formation.
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <HandHeart className="h-5 w-5 text-[#2B5EA7]" />
          Current Opportunities
        </h2>
        <div className="space-y-4">
          <OpportunityCard
            icon={<Heart className="h-5 w-5" />}
            title="Home Visits"
            desc="Our primary work: visit families in need in their homes to assess their situation and provide assistance with compassion and respect."
          />
          <OpportunityCard
            icon={<HandHeart className="h-5 w-5" />}
            title="Food Drives"
            desc="Help organize and run food collection drives at our partner parishes to stock local food pantries."
          />
          <OpportunityCard
            icon={<Users className="h-5 w-5" />}
            title="Fundraising Events"
            desc="Assist with planning and executing fundraising events that support our charitable works throughout the year."
          />
          <OpportunityCard
            icon={<BookOpen className="h-5 w-5" />}
            title="Conference Administration"
            desc="Lend your skills to the administrative needs of our growing conference — communications, record-keeping, and coordination."
          />
        </div>
      </section>

      {/* About Vincentian Spirituality */}
      <section className="bg-[#1C3D5A] text-white rounded-xl p-8 mb-10">
        <h2 className="text-xl font-semibold mb-3">The Vincentian Spirit</h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          St. Vincent de Paul (1581–1660) devoted his life to serving the poor of France, founding the Congregation of the Mission and the Daughters of Charity. In 1833, Blessed Frédéric Ozanam and a small group of students in Paris founded the Society bearing his name, inspired by his example.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Today, the Society operates in more than 150 countries. As Vincentians, we are called not merely to give, but to encounter — to meet Christ in the face of those we serve.
        </p>
      </section>

      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to learn more or attend your first meeting?
        </p>
        <Button asChild className="bg-[#1C3D5A] hover:bg-[#2B5EA7]">
          <Link href="/contact">
            Get in Touch
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-white border rounded-xl p-5 hover:shadow-sm transition-shadow duration-200">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C3D5A] text-white font-bold text-lg mb-4">
        {number}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function OpportunityCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-5 border rounded-xl bg-white hover:shadow-sm transition-shadow duration-200">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
