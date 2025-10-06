import { ScrollReveal } from "@/components/scroll-reveal"
import { Linkedin, Twitter } from "lucide-react"

export function Team() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "/team-sarah.jpg",
      bio: "Former Goldman Sachs VP with 15 years in fintech",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      image: "/team-michael.jpg",
      bio: "Ex-Google engineer, built trading systems at scale",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      image: "/team-emily.jpg",
      bio: "Product leader from Robinhood and Coinbase",
    },
    {
      name: "James Park",
      role: "Head of Compliance",
      image: "/team-james.jpg",
      bio: "Former SEC attorney, expert in financial regulation",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Experienced professionals from top financial institutions and tech companies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-3 justify-center">
                  <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                    <Twitter className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
