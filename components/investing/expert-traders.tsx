import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, ArrowRight } from "lucide-react"

export function ExpertTraders() {
  const traders = [
    {
      name: "Alex Thompson",
      image: "/expert-trader-1.png",
      specialty: "Crypto Trading",
      followers: "12.5K",
      roi: "+245%",
      winRate: "87%",
      verified: true,
      riskLevel: "Medium",
    },
    {
      name: "Maria Garcia",
      image: "/expert-trader-2.png",
      specialty: "Stock Market",
      followers: "8.3K",
      roi: "+189%",
      winRate: "82%",
      verified: true,
      riskLevel: "Low",
    },
    {
      name: "David Kim",
      image: "/expert-trader-3.png",
      specialty: "Forex & Commodities",
      followers: "15.2K",
      roi: "+312%",
      winRate: "91%",
      verified: true,
      riskLevel: "High",
    },
    {
      name: "Sophie Laurent",
      image: "/expert-trader-4.png",
      specialty: "DeFi & NFTs",
      followers: "9.7K",
      roi: "+198%",
      winRate: "79%",
      verified: true,
      riskLevel: "Medium",
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-chart-3/10 text-chart-3"
      case "Medium":
        return "bg-accent/10 text-accent"
      case "High":
        return "bg-chart-5/10 text-chart-5"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="expert-traders" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Top Performing Expert Traders</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Browse our verified traders and start copying their strategies. All performance data is verified and
              updated in real-time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {traders.map((trader, index) => (
            <ScrollReveal key={trader.name} delay={index * 100}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <img
                    src={trader.image || "/placeholder.svg"}
                    alt={trader.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {trader.verified && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <h3 className="font-bold text-lg mb-1">{trader.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{trader.specialty}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">12-Month ROI</span>
                    <span className="font-bold text-accent">{trader.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Win Rate</span>
                    <span className="font-semibold">{trader.winRate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Followers</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {trader.followers}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Badge className={getRiskColor(trader.riskLevel)}>{trader.riskLevel} Risk</Badge>
                  <Button size="sm" variant="ghost" className="group-hover:text-primary">
                    Copy
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Expert Traders
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
