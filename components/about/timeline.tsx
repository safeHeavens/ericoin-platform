import { ScrollReveal } from "@/components/scroll-reveal"

export function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "ERICOIN was established with a vision to democratize investing for everyone.",
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched our copy trading platform with 50 expert traders and 10,000 early adopters.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 100+ countries and reached 100,000 active users.",
    },
    {
      year: "2023",
      title: "Series B Funding",
      description: "Raised $50M in Series B funding to accelerate growth and product development.",
    },
    {
      year: "2024",
      title: "500K Users",
      description: "Surpassed 500,000 active users and $2.5B in assets under management.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Our Journey</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              From a small startup to a global platform trusted by hundreds of thousands.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <ScrollReveal key={milestone.year} delay={index * 100}>
              <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />
                <div className="space-y-2">
                  <div className="text-sm font-bold text-primary">{milestone.year}</div>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
