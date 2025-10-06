import { ScrollReveal } from "@/components/scroll-reveal"
import { Bitcoin, TrendingUp, Globe, Gem, Landmark, Zap } from "lucide-react"

export function TradingCategories() {
  const categories = [
    {
      icon: Bitcoin,
      title: "Cryptocurrencies",
      description: "Trade Bitcoin, Ethereum, and 200+ altcoins",
      assets: "250+ Assets",
      color: "text-chart-2",
    },
    {
      icon: TrendingUp,
      title: "Stocks & ETFs",
      description: "Access global stock markets and ETFs",
      assets: "5,000+ Assets",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Forex",
      description: "Trade major and exotic currency pairs",
      assets: "50+ Pairs",
      color: "text-accent",
    },
    {
      icon: Gem,
      title: "Commodities",
      description: "Gold, silver, oil, and agricultural products",
      assets: "30+ Assets",
      color: "text-chart-5",
    },
    {
      icon: Landmark,
      title: "Indices",
      description: "S&P 500, NASDAQ, and global indices",
      assets: "25+ Indices",
      color: "text-chart-3",
    },
    {
      icon: Zap,
      title: "DeFi & NFTs",
      description: "Decentralized finance and digital collectibles",
      assets: "100+ Projects",
      color: "text-chart-4",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Diversify Across Multiple Asset Classes
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Access a wide range of investment opportunities from a single platform. Build a diversified portfolio that
              matches your risk tolerance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div
                  className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${category.color}`}
                >
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{category.description}</p>
                <p className="text-sm font-semibold text-primary">{category.assets}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
