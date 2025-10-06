import { ScrollReveal } from "@/components/scroll-reveal"
import { Copy, LineChart, Shield, Zap, Globe, Lock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Copy,
      title: "Copy Trading",
      description: "Automatically replicate the trades of top-performing investors in real-time.",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Track performance with detailed charts, metrics, and portfolio insights.",
    },
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "SEC-regulated platform with bank-level security and insurance protection.",
    },
    {
      icon: Zap,
      title: "Instant Execution",
      description: "Lightning-fast trade execution with minimal slippage and best prices.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access crypto, stocks, forex, and commodities from a single platform.",
    },
    {
      icon: Lock,
      title: "Asset Protection",
      description: "Your funds are protected with cold storage and multi-signature wallets.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Everything You Need to Invest with Confidence
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              ERICOIN provides professional-grade tools and features designed for both beginners and experienced
              traders.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
