import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      period: "Forever Free",
      description: "Perfect for beginners exploring copy trading",
      features: [
        "Copy up to 2 traders",
        "Basic analytics dashboard",
        "Email support",
        "Access to crypto markets",
        "Mobile app access",
        "Educational resources",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "49",
      period: "per month",
      description: "For serious investors ready to scale",
      features: [
        "Copy up to 10 traders",
        "Advanced analytics & insights",
        "Priority support",
        "All markets (crypto, stocks, forex)",
        "API access",
        "Custom alerts & notifications",
        "Portfolio rebalancing",
        "Tax reporting tools",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Elite",
      price: "199",
      period: "per month",
      description: "Maximum features for professional traders",
      features: [
        "Unlimited trader copying",
        "Premium analytics suite",
        "Dedicated account manager",
        "All markets + early access",
        "Advanced API access",
        "Custom trading strategies",
        "White-glove onboarding",
        "Institutional-grade tools",
        "Direct trader communication",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 150}>
              <div
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? "border-primary bg-primary/5 shadow-xl" : "border-border bg-card hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/signup">
                  <Button
                    className={`w-full group ${plan.popular ? "" : "variant-outline"}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
