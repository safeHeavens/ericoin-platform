import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingCards() {
  const plans = [
    {
      name: "Starter",
      minInvestment: "1,000",
      maxInvestment: "4,999",
      description: "Perfect for beginners exploring copy trading",
      features: [
        "Copy up to 3 traders",
        "Basic analytics dashboard",
        "Email support",
        "Access to crypto markets",
        "Mobile app access",
        "Educational resources",
        "Standard execution speed",
      ],
      cta: "Start Investing",
      popular: false,
    },
    {
      name: "Growth",
      minInvestment: "5,000",
      maxInvestment: "9,999",
      description: "For growing portfolios and active traders",
      features: [
        "Copy up to 5 traders",
        "Advanced analytics & insights",
        "Priority email support",
        "Crypto + Stocks markets",
        "API access",
        "Custom alerts & notifications",
        "Portfolio rebalancing",
        "Faster execution speed",
      ],
      cta: "Start Growing",
      popular: false,
    },
    {
      name: "Join Plan",
      minInvestment: "10,000",
      maxInvestment: "24,999",
      description: "Join the elite community of serious investors",
      features: [
        "Copy up to 10 traders",
        "Premium analytics suite",
        "Priority phone & chat support",
        "All markets (crypto, stocks, forex)",
        "Advanced API access",
        "Custom trading strategies",
        "Tax reporting tools",
        "Dedicated account manager",
        "VIP execution speed",
      ],
      cta: "Join Elite",
      popular: true,
    },
    {
      name: "Professional",
      minInvestment: "25,000",
      maxInvestment: "49,999",
      description: "Professional-grade tools and support",
      features: [
        "Copy up to 20 traders",
        "Institutional analytics",
        "24/7 priority support",
        "All markets + early access",
        "Premium API access",
        "Custom algorithm development",
        "White-glove onboarding",
        "Personal trading advisor",
        "Advanced risk management",
        "Direct trader communication",
      ],
      cta: "Go Professional",
      popular: false,
    },
    {
      name: "Whale",
      minInvestment: "50,000",
      maxInvestment: "100,000+",
      description: "Ultimate package for high-net-worth investors",
      features: [
        "Unlimited trader copying",
        "Custom analytics dashboard",
        "Dedicated account team",
        "Exclusive market access",
        "Custom API solutions",
        "Bespoke trading strategies",
        "Concierge service",
        "Private trader network",
        "Institutional execution",
        "Custom fee structure",
        "Quarterly strategy reviews",
        "Direct line to executives",
      ],
      cta: "Contact Whale Team",
      popular: false,
      whale: true,
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-[1600px] mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 100}>
              <div
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.whale
                    ? "border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl"
                    : plan.popular
                      ? "border-primary bg-primary/5 shadow-xl"
                      : "border-border bg-card hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                {plan.whale && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Premium Tier
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl font-bold">${plan.minInvestment}</span>
                    <span className="text-sm text-muted-foreground">to ${plan.maxInvestment}</span>
                    <span className="text-xs text-muted-foreground mt-1">Minimum Investment</span>
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
                    className={`w-full group ${plan.whale || plan.popular ? "" : "variant-outline"}`}
                    variant={plan.whale || plan.popular ? "default" : "outline"}
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
