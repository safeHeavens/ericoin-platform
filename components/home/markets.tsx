import { ScrollReveal } from "@/components/scroll-reveal"
import { TrendingUp, TrendingDown } from "lucide-react"

export function Markets() {
  const markets = [
    { name: "Bitcoin", symbol: "BTC", price: "$64,234.50", change: "+5.24%", positive: true },
    { name: "Ethereum", symbol: "ETH", price: "$3,456.78", change: "+3.12%", positive: true },
    { name: "Apple", symbol: "AAPL", price: "$178.45", change: "+1.89%", positive: true },
    { name: "Tesla", symbol: "TSLA", price: "$242.67", change: "-2.34%", positive: false },
    { name: "Solana", symbol: "SOL", price: "$145.23", change: "+8.45%", positive: true },
    { name: "Microsoft", symbol: "MSFT", price: "$412.89", change: "+0.67%", positive: true },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Trade Across Multiple Markets</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Access thousands of assets including cryptocurrencies, stocks, ETFs, and more from a single platform.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((market, index) => (
              <div
                key={market.symbol}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{market.name}</h3>
                    <p className="text-sm text-muted-foreground">{market.symbol}</p>
                  </div>
                  {market.positive ? (
                    <TrendingUp className="h-5 w-5 text-accent" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold">{market.price}</div>
                  <div className={`text-sm font-semibold ${market.positive ? "text-accent" : "text-destructive"}`}>
                    {market.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">And thousands more assets available on the platform</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
