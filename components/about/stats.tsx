import { ScrollReveal } from "@/components/scroll-reveal"

export function Stats() {
  const stats = [
    { value: "500K+", label: "Active Users" },
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "150+", label: "Countries Served" },
    { value: "98%", label: "Customer Satisfaction" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Trusted by Investors Worldwide</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our platform has helped hundreds of thousands of people achieve their financial goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
