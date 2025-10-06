import { PlansHero } from "@/components/plans/plans-hero"
import { PricingCards } from "@/components/plans/pricing-cards"
import { ComparisonTable } from "@/components/plans/comparison-table"
import { FAQ } from "@/components/plans/faq"
import { PlansCTA } from "@/components/plans/plans-cta"

export const metadata = {
  title: "Pricing Plans - ERICOIN",
  description: "Choose the perfect plan for your investment journey. Flexible pricing for every investor.",
}

export default function PlansPage() {
  return (
    <div className="flex flex-col">
      <PlansHero />
      <PricingCards />
      <ComparisonTable />
      <FAQ />
      <PlansCTA />
    </div>
  )
}
