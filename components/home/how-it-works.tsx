import { ScrollReveal } from "@/components/scroll-reveal"
import { UserPlus, Search, Copy, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up in minutes with just your email. No complex verification required to get started.",
    },
    {
      icon: Search,
      title: "Find Expert Traders",
      description: "Browse our marketplace of verified traders. Filter by performance, risk level, and strategy.",
    },
    {
      icon: Copy,
      title: "Start Copy Trading",
      description:
        "Allocate funds to copy your chosen traders. Their trades are automatically replicated in your account.",
    },
    {
      icon: TrendingUp,
      title: "Watch Your Portfolio Grow",
      description: "Monitor your investments in real-time. Adjust your strategy or switch traders anytime.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Start Investing in 4 Simple Steps</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Getting started with ERICOIN is quick and easy. Begin your investment journey today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"
            style={{ width: "calc(100% - 8rem)", left: "4rem" }}
          />

          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 150}>
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
