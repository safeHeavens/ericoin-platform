import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export function InvestingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>500+ Expert Traders Available</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Invest in Crypto, Stocks & More with Expert Guidance
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Access thousands of investment opportunities across multiple asset classes. Copy the strategies of
            top-performing traders or build your own portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto text-base font-semibold group">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#expert-traders">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold bg-transparent">
                Browse Expert Traders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
