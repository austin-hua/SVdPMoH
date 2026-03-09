import Link from "next/link"
import type { Metadata } from "next"
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  Users,
  Shirt,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AddToCalendar } from "@/components/add-to-calendar"
import { SERVICES, CHURCH_MAP_QUERY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Visit Deeper Life Bible Church at Maple Grove Community Center. Sunday 9AM–1PM, Wednesday & Friday 6PM–8PM. Find directions, service times, and what to expect.",
}

export default function Visit() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Plan Your Visit</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We&apos;d love to welcome you. Here&apos;s everything you need to know
          before your first visit.
        </p>
      </div>

      {/* Location & Map */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-dlbc-blue" />
          Location
        </h2>
        <div className="rounded-xl overflow-hidden shadow-sm border mb-4">
          <iframe
            src={`https://www.google.com/maps?q=${CHURCH_MAP_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deeper Life Bible Church location"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="font-medium text-lg">Maple Grove Community Center</p>
            <p className="text-muted-foreground">
              12951 Weaver Lake Rd, Maple Grove, MN 55369
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${CHURCH_MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          We gather in a rented space at the community center while trusting God
          for our own building. Look for the &ldquo;Deeper Life Bible
          Church&rdquo; signs at the entrance.
        </p>
      </section>

      {/* Service Times */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-dlbc-blue" />
          Service Times
        </h2>
        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div
              key={service.day}
              className="bg-secondary rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
              <div className="sm:text-right">
                <p className="font-medium text-dlbc-navy">{service.time}</p>
                <AddToCalendar
                  title={`${service.name} – DLBC Maple Grove`}
                  startDate={service.startDate}
                  startTime={service.startTime}
                  endTime={service.endTime}
                  rruleDay={service.rruleDay}
                  description={service.description}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ExpectCard
            icon={<Shirt className="h-5 w-5" />}
            title="Come as you are"
            desc="There's no dress code. Wear whatever makes you comfortable."
          />
          <ExpectCard
            icon={<Clock className="h-5 w-5" />}
            title="Service length"
            desc="Sunday services typically last about 4 hours. Weekday services are about 2 hours."
          />
          <ExpectCard
            icon={<Users className="h-5 w-5" />}
            title="Friendly community"
            desc="We're a warm, close-knit group of 30–50 people. You'll feel at home."
          />
          <ExpectCard
            icon={<Car className="h-5 w-5" />}
            title="Parking"
            desc="Free parking is available at the community center lot."
          />
          <ExpectCard
            icon={<BookOpen className="h-5 w-5" />}
            title="Bible-centered teaching"
            desc="Expect practical, scripture-based sermons rooted in the Word of God."
          />
          <ExpectCard
            icon={<MapPin className="h-5 w-5" />}
            title="Easy to find"
            desc="Look for our signs at the Maple Grove Community Center entrance."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dlbc-navy/5 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Have Questions?</h2>
        <p className="text-muted-foreground mb-5">
          We&apos;d be happy to answer any questions before your visit.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

function ExpectCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border bg-white hover:shadow-sm transition-shadow duration-200">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-dlbc-navy/5 text-dlbc-blue flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-0.5">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}
