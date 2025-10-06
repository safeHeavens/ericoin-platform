import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export function RiskManagement() {
  const features = [
    {
      icon: Shield,
      title: "Insurance Protection",
      description: "Your funds are insured up to $500,000 through our partner institutions.",
    },
    {
      icon: Lock,
      title: "Cold Storage",
      description: "95% of crypto assets stored offline in secure cold wallets.",
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      description: "Real-time portfolio tracking and detailed transaction history.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Fully licensed and regulated by SEC and FINRA.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Your Security is Our Priority</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We implement industry-leading security measures to protect your investments. Trade with confidence
                knowing your assets are safe.
              </p>

              <div className="space-y-6 pt-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <img
                src="/security-dashboard-interface.jpg"
                alt="Security Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
