import type { Metadata } from "next"
import { CalendarDays, Info } from "lucide-react"
import { GOOGLE_CALENDAR_EMBED_SRC } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Upcoming meetings, food drives, and fundraisers for the SVdP Mother of Hope Conference in Falls Church, Virginia.",
}

export default function Events() {
  const isPlaceholder = GOOGLE_CALENDAR_EMBED_SRC.includes("YOUR_CALENDAR_ID")

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
          <CalendarDays className="h-8 w-8 text-[#2B5EA7]" />
          Events Calendar
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Upcoming conference meetings, food drives, and fundraising events.
        </p>
      </div>

      {isPlaceholder ? (
        <div className="border-2 border-dashed border-[#2B5EA7]/30 rounded-xl p-12 text-center bg-[#1C3D5A]/[0.02]">
          <CalendarDays className="h-12 w-12 text-[#2B5EA7]/40 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#1C3D5A]">Google Calendar Coming Soon</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
            To embed your Google Calendar, replace <code className="bg-muted px-1 rounded">YOUR_CALENDAR_ID</code> in{" "}
            <code className="bg-muted px-1 rounded">src/lib/constants.ts</code> with your actual Google Calendar ID.
          </p>
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto">
            <Info className="h-4 w-4 text-[#2B5EA7] shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              In Google Calendar, go to <strong>Settings → Your calendar → Integrate calendar</strong> and copy the Calendar ID (looks like{" "}
              <em>abc123@group.calendar.google.com</em>). Then make sure the calendar is set to public.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <iframe
            src={GOOGLE_CALENDAR_EMBED_SRC}
            style={{ border: 0 }}
            width="100%"
            height="650"
            frameBorder="0"
            scrolling="no"
            title="SVdP Mother of Hope Events Calendar"
          />
        </div>
      )}

      {/* Upcoming types of events */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-5">Types of Events</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-secondary rounded-xl p-5">
            <h3 className="font-semibold text-[#1C3D5A] mb-1">Conference Meetings</h3>
            <p className="text-sm text-muted-foreground">
              Regular gatherings of our members for prayer, reflection, case reviews, and conference business.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-5">
            <h3 className="font-semibold text-[#1C3D5A] mb-1">Food Drives</h3>
            <p className="text-sm text-muted-foreground">
              Collection drives at our partner parishes to support families facing food insecurity in our community.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-5">
            <h3 className="font-semibold text-[#1C3D5A] mb-1">Fundraisers</h3>
            <p className="text-sm text-muted-foreground">
              Events to raise funds that go directly to serving those in need in the Falls Church area.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
