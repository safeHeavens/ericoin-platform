"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PlanSelectionStepProps {
  updateUserData: (data: any) => void
  onNext: () => void
}

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,000 - $4,999",
    description: "Perfect for beginners starting their investment journey",
    features: [
      "Copy up to 3 expert traders",
      "Basic market analytics",
      "Email support",
      "Standard execution speed",
      "Monthly performance reports",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$5,000 - $9,999",
    description: "Ideal for growing your investment portfolio",
    features: [
      "Copy up to 5 expert traders",
      "Advanced market analytics",
      "Priority email support",
      "Fast execution speed",
      "Weekly performance reports",
      "Risk management tools",
    ],
    popular: true,
  },
  {
    id: "join",
    name: "Join Plan",
    price: "$10,000 - $24,999",
    description: "Join the community of serious investors",
    features: [
      "Copy up to 10 expert traders",
      "Premium market analytics",
      "24/7 priority support",
      "Ultra-fast execution",
      "Daily performance reports",
      "Advanced risk management",
      "Exclusive webinars",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$25,000 - $49,999",
    description: "For sophisticated investors seeking excellence",
    features: [
      "Copy up to 20 expert traders",
      "Elite market analytics & AI insights",
      "Dedicated account manager",
      "Lightning-fast execution",
      "Real-time performance tracking",
      "Custom risk strategies",
      "VIP events & networking",
      "Tax optimization guidance",
    ],
  },
  {
    id: "whale",
    name: "Whale",
    price: "$50,000 - $100,000+",
    description: "Ultimate plan for high-net-worth investors",
    features: [
      "Unlimited expert trader copying",
      "White-glove concierge service",
      "Dedicated account team",
      "Institutional-grade execution",
      "Custom portfolio strategies",
      "Direct access to fund managers",
      "Exclusive investment opportunities",
      "Custom fee structures",
      "Direct executive access",
    ],
    premium: true,
  },
]

export function PlanSelectionStep({ updateUserData, onNext }: PlanSelectionStepProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!selectedPlan) return

    setIsLoading(true)

    // Simulate plan selection
    await new Promise((resolve) => setTimeout(resolve, 1000))

    updateUserData({ selectedPlan })
    setIsLoading(false)
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">Choose Your Investment Plan</h1>
        <p className="text-muted-foreground text-pretty">Select the plan that matches your investment goals</p>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
              selectedPlan === plan.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-accent/50"
            } ${plan.premium ? "ring-2 ring-accent" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  {plan.popular && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                      Popular
                    </span>
                  )}
                  {plan.premium && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      Premium
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{plan.description}</p>
                <p className="text-xl font-bold text-primary">{plan.price}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedPlan === plan.id ? "border-primary bg-primary" : "border-border"
                }`}
              >
                {selectedPlan === plan.id && <Check className="h-4 w-4 text-primary-foreground" />}
              </div>
            </div>
            <ul className="space-y-2">
              {plan.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
              {plan.features.length > 4 && (
                <li className="text-sm text-muted-foreground">+ {plan.features.length - 4} more features</li>
              )}
            </ul>
          </button>
        ))}
      </div>

      <Button size="lg" className="w-full" disabled={!selectedPlan || isLoading} onClick={handleSubmit}>
        {isLoading ? "Processing..." : "Continue to KYC Verification"}
      </Button>
    </div>
  )
}
