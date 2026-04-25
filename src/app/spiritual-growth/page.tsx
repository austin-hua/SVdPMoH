import type { Metadata } from "next"
import { Flower2, BookOpen, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Spiritual Growth",
  description:
    "Reflections, prayers, and spiritual resources for members of the SVdP Mother of Hope Conference.",
}

export default function SpiritualGrowth() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
          <Flower2 className="h-8 w-8 text-[#2B5EA7]" />
          Spiritual Growth
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Reflections and prayers to deepen our Vincentian spirituality and grow in holiness through service.
        </p>
      </div>

      {/* SVdP Opening Prayer */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#2B5EA7]" />
          Vincentian Prayers
        </h2>
        <div className="space-y-5">
          <PrayerCard
            title="Prayer Before Each Meeting"
            prayer="Lord Jesus, grant that I and all of the members of this Vincentian family may imitate your love for the most vulnerable by seeing in them your face and by serving them. May the spirit of Saint Vincent guide us in responding to the Gospel call to love our neighbor. Amen."
          />
          <PrayerCard
            title="Prayer of Blessed Frédéric Ozanam"
            prayer="Lord, you gave me a little of everything. I did not deserve it by my work. But you wanted me to be the steward of your gifts for the poor. Do not let me be an unfaithful steward. Let me give, and give generously, because all that I have comes from you. Amen."
          />
          <PrayerCard
            title="Prayer of St. Francis of Assisi"
            prayer="Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console; to be understood as to understand; to be loved as to love. For it is in giving that we receive; it is in pardoning that we are pardoned; and it is in dying that we are born to eternal life. Amen."
          />
        </div>
      </section>

      {/* Reflection on Vincentian Charism */}
      <section className="mb-12 bg-[#1C3D5A]/5 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C3D5A]">On Seeing Christ in Others</h2>
        <blockquote className="text-base italic text-foreground/80 border-l-4 border-[#2B5EA7] pl-5 mb-4 leading-relaxed">
          "You will find out that Charity is a heavy burden to carry, heavier than the kettle of soup and the full basket. But you will keep your gentleness and your smile. It is not enough to give soup and bread. This the rich can do. You are the servant of the poor, always smiling and good-humored. They are your masters, terribly sensitive and exacting masters, you will see. And the uglier and the dirtier they will be, the more unjust and insulting, the more love you must give them. It is only for your love alone that the poor will forgive you the bread you give to them."
        </blockquote>
        <p className="text-sm text-muted-foreground">— St. Vincent de Paul</p>
      </section>

      {/* Member Reflections Placeholder */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#2B5EA7]" />
          Member Reflections
        </h2>
        <div className="border-2 border-dashed border-[#2B5EA7]/20 rounded-xl p-10 text-center bg-[#1C3D5A]/[0.02]">
          <BookOpen className="h-10 w-10 text-[#2B5EA7]/30 mx-auto mb-3" />
          <p className="text-muted-foreground">
            Member reflections and spiritual reading resources will be posted here.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Check back soon!</p>
        </div>
      </section>

      {/* Rule of the Society */}
      <section className="bg-[#1C3D5A] text-white rounded-xl p-8">
        <h2 className="text-xl font-semibold mb-3">The Rule of the Society</h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          The Society of St. Vincent de Paul is guided by its Rule, which serves as our handbook for the spiritual and practical life of the conference. It covers our spirituality, works of charity, governance, and formation.
        </p>
        <p className="text-slate-300 leading-relaxed">
          New members are encouraged to read and reflect on the Rule as part of their formation. Copies are available through your conference president or through the SVdP USA website.
        </p>
      </section>
    </div>
  )
}

function PrayerCard({ title, prayer }: { title: string; prayer: string }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold text-[#1C3D5A] mb-3">{title}</h3>
      <p className="text-foreground/80 leading-relaxed italic text-sm">{prayer}</p>
    </div>
  )
}
