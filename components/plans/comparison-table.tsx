import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, X } from "lucide-react"

export function ComparisonTable() {
  const features = [
    { name: "Copy Trading", starter: "2 traders", pro: "10 traders", elite: "Unlimited" },
    { name: "Market Access", starter: "Crypto only", pro: "All markets", elite: "All + Early access" },
    { name: "Analytics Dashboard", starter: true, pro: true, elite: true },
    { name: "Mobile App", starter: true, pro: true, elite: true },
    { name: "API Access", starter: false, pro: true, elite: true },
    { name: "Priority Support", starter: false, pro: true, elite: true },
    { name: "Tax Reporting", starter: false, pro: true, elite: true },
    { name: "Custom Strategies", starter: false, pro: false, elite: true },
    { name: "Account Manager", starter: false, pro: false, elite: true },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Compare Plans</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              See what's included in each plan and choose the one that's right for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-bold">Feature</th>
                  <th className="text-center py-4 px-6 font-bold">Starter</th>
                  <th className="text-center py-4 px-6 font-bold">Pro</th>
                  <th className="text-center py-4 px-6 font-bold">Elite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="py-4 px-6 font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.elite === "boolean" ? (
                        feature.elite ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{feature.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
