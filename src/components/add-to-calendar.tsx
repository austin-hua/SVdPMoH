"use client"

import { Calendar, Download } from "lucide-react"
import { CONFERENCE_FULL_ADDRESS } from "@/lib/constants"

interface AddToCalendarProps {
  title: string
  startDate: string
  startTime: string
  endTime: string
  rruleDay: string
  description?: string
}

export function AddToCalendar({
  title,
  startDate,
  startTime,
  endTime,
  rruleDay,
  description = "",
}: AddToCalendarProps) {
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}T${startTime}00/${startDate}T${endTime}00&ctz=America/Chicago&recur=RRULE:FREQ%3DWEEKLY;BYDAY%3D${rruleDay}&location=${encodeURIComponent(CONFERENCE_FULL_ADDRESS)}&details=${encodeURIComponent(description)}`

  function handleIcsDownload() {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DLBC Maple Grove//EN",
      "BEGIN:VEVENT",
      `DTSTART;TZID=America/Chicago:${startDate}T${startTime}00`,
      `DTEND;TZID=America/Chicago:${startDate}T${endTime}00`,
      `RRULE:FREQ=WEEKLY;BYDAY=${rruleDay}`,
      `SUMMARY:${title}`,
      `LOCATION:${CONFERENCE_FULL_ADDRESS.replace(/,/g, "\\,")}`,
      `DESCRIPTION:${description.replace(/,/g, "\\,")}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-3">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-dlbc-blue hover:text-dlbc-navy transition-colors duration-200"
      >
        <Calendar className="h-3.5 w-3.5" />
        Google Calendar
      </a>
      <span className="text-border">|</span>
      <button
        onClick={handleIcsDownload}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-dlbc-blue hover:text-dlbc-navy transition-colors duration-200"
      >
        <Download className="h-3.5 w-3.5" />
        Apple / Outlook
      </button>
    </div>
  )
}
