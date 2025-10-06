import { InvestingHero } from "@/components/investing/investing-hero"
import { ExpertTraders } from "@/components/investing/expert-traders"
import { TradingCategories } from "@/components/investing/trading-categories"
import { InvestmentTools } from "@/components/investing/investment-tools"
import { RiskManagement } from "@/components/investing/risk-management"
import { InvestingCTA } from "@/components/investing/investing-cta"

export const metadata = {
  title: "Investing - ERICOIN",
  description:
    "Explore investment opportunities in crypto, stocks, and more. Copy expert traders and grow your wealth.",
}

export default function InvestingPage() {
  return (
    <div className="flex flex-col">
      <InvestingHero />
      <ExpertTraders />
      <TradingCategories />
      <InvestmentTools />
      <RiskManagement />
      <InvestingCTA />
    </div>
  )
}
