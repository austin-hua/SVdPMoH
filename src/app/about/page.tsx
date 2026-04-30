import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, Church, Globe } from "lucide-react"
import { PARISHES, DIOCESE, SVDP_NATIONAL_URL, SVDP_COUNCIL_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About St. Vincent de Paul",
  description:
    "Learn about the history of the Society of St. Vincent de Paul and the Mother of Hope Conference serving Falls Church, Virginia.",
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">About St. Vincent de Paul</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A lay Catholic organization with nearly 200 years of service to the poor, and our local conference in Falls Church, Virginia.
        </p>
      </div>

      {/* History of the Society */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#2B5EA7]" />
          History of the Society
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
          <p>
            <strong>Blessed Frédéric Ozanam</strong> (1813–1853) was a young student in Paris who, challenged by a classmate to prove that the Church still cared for the poor, gathered a small group of university students in 1833 to begin visiting and serving the destitute of Paris. They named their fledgling Society after St. Vincent de Paul, whose spirit of humble, direct service inspired them.
          </p>
        </div>
        <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md mb-8">
          <Image
            src="/images/frederic.png"
            alt="Blessed Frédéric Ozanam"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            From those humble beginnings, the Society of St. Vincent de Paul has grown into one of the largest lay Catholic charitable organizations in the world, operating in more than 150 countries and serving millions of people each year through direct, person-to-person service — always neighbor to neighbor.
          </p>
          <p>
            In the United States, the Society was established in 1845 in St. Louis, Missouri. Today the <strong>Society of St. Vincent de Paul USA</strong> encompasses thousands of local conferences and councils, operating food pantries, thrift stores, homeless shelters, and emergency assistance programs across the country.
          </p>
        </div>
      </section>

      {/* The Vincentian Mission */}
      <section className="mb-14 bg-[#1C3D5A]/5 rounded-xl p-8">
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-md shrink-0 sm:w-48">
            <Image
              src="/images/saintvincent.png"
              alt="St. Vincent de Paul"
              width={0}
              height={0}
              sizes="200px"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#1C3D5A]">The Vincentian Mission</h2>
            <blockquote className="text-lg italic text-foreground/80 border-l-4 border-[#2B5EA7] pl-5 mb-4">
              "Inspired by Gospel values, the Society of Saint Vincent de Paul, a Catholic lay organization, leads women and men to join together to grow spiritually by offering person-to-person service to those who are needy and suffering."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — Mission Statement of the Society of St. Vincent de Paul USA
            </p>
          </div>
        </div>
      </section>

      {/* Our Local Conference */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Church className="h-5 w-5 text-[#2B5EA7]" />
          Our Local Conference
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            The <strong>Mother of Hope Conference</strong> is a newly established conference of the Society of St. Vincent de Paul, serving the Falls Church, Virginia area under the <strong>{DIOCESE}</strong>.
          </p>
          <p>
            Our conference is unique in that it unites the faithful of three Falls Church-area parishes in a shared work of charity:
          </p>
          <ul className="list-none space-y-2 pl-4">
            {PARISHES.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B5EA7] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p>
            By linking these three parishes together, we are able to pool our resources and extend our reach to serve more neighbors in need throughout the Falls Church community.
          </p>
        </div>
      </section>

      {/* National & Council Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Globe className="h-5 w-5 text-[#2B5EA7]" />
          Learn More
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={SVDP_NATIONAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 border rounded-xl bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">SVdP USA National</h3>
              <p className="text-sm text-muted-foreground">svdpusa.org — national organization, news, and resources</p>
            </div>
          </a>
          <a
            href={SVDP_COUNCIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 border rounded-xl bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1C3D5A]/5 text-[#2B5EA7] flex items-center justify-center">
              <Church className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">SVdP Arlington Council</h3>
              <p className="text-sm text-muted-foreground">Our regional council serving the Diocese of Arlington</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
