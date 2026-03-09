export const CHURCH_NAME = "Deeper Life Bible Church"
export const CHURCH_BRANCH = "Maple Grove Headquarters Branch"
export const CHURCH_SHORT_NAME = "DLBC"
export const CHURCH_LOCATION = "Maple Grove, MN"

export const CHURCH_ADDRESS_LINE1 = "Maple Grove Community Center"
export const CHURCH_ADDRESS_LINE2 = "12951 Weaver Lake Rd"
export const CHURCH_ADDRESS_CITY = "Maple Grove, MN 55369"
export const CHURCH_FULL_ADDRESS =
  "Maple Grove Community Center, 12951 Weaver Lake Rd, Maple Grove, MN 55369"
export const CHURCH_MAP_QUERY =
  "Maple+Grove+Community+Center,+12951+Weaver+Lake+Rd,+Maple+Grove,+MN+55369"

// TODO: Replace these with actual church contact info
export const ZOOM_LINK = "#"
export const CHURCH_EMAIL = "info@dlbcmaplegrove.org"
export const CHURCH_PHONE = "(612) 555-0123"

export const SERVICES = [
  {
    name: "Sunday Service",
    day: "Sunday",
    time: "9:00 AM – 1:00 PM",
    startTime: "0900",
    endTime: "1300",
    rruleDay: "SU",
    startDate: "20260301",
    description: "Worship, prayer, and Bible teaching",
  },
  {
    name: "Wednesday Bible Study",
    day: "Wednesday",
    time: "6:00 PM – 8:00 PM",
    startTime: "1800",
    endTime: "2000",
    rruleDay: "WE",
    startDate: "20260225",
    description: "Mid-week Bible study and fellowship",
  },
  {
    name: "Friday Revival Service",
    day: "Friday",
    time: "6:00 PM – 8:00 PM",
    startTime: "1800",
    endTime: "2000",
    rruleDay: "FR",
    startDate: "20260227",
    description: "Revival service and prayer",
  },
] as const
