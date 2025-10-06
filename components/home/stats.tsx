import { ScrollReveal } from "@/components/scroll-reveal"
import { TrendingUp, Users, DollarSign, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Investors",
      color: "text-primary",
    },
    {
      icon: DollarSign,
      value: "$2B+",
      label: "Trading Volume",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      value: "89%",
      label: "Success Rate",
      color: "text-chart-3",
    },
    {
      icon: Award,
      value: "500+",
      label: "Expert Traders",
      color: "text-chart-5",
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background border border-border mb-4">
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
