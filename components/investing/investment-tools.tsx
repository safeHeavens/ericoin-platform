import { ScrollReveal } from "@/components/scroll-reveal"
import { BarChart3, Bell, Shield, Smartphone } from "lucide-react"

export function InvestmentTools() {
  const tools = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time charts, technical indicators, and portfolio performance tracking.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified about price movements, trade executions, and market opportunities.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Set stop-loss, take-profit, and position sizing rules to protect your capital.",
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our iOS and Android apps. Never miss an opportunity.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Professional Trading Tools</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need to make informed investment decisions and manage your portfolio effectively.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.title} delay={index * 150}>
              <div className="flex gap-6 p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tool.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-muted-foreground text-pretty">{tool.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
