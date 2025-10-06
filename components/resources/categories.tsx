import { ScrollReveal } from "@/components/scroll-reveal"
import { BookOpen, TrendingUp, Shield, Lightbulb, BarChart3, Users } from "lucide-react"

export function Categories() {
  const categories = [
    {
      icon: BookOpen,
      title: "Beginner Guides",
      count: "24 articles",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Trading Strategies",
      count: "18 articles",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Risk Management",
      count: "15 articles",
      color: "text-chart-3",
    },
    {
      icon: Lightbulb,
      title: "Market Analysis",
      count: "32 articles",
      color: "text-chart-4",
    },
    {
      icon: BarChart3,
      title: "Technical Analysis",
      count: "21 articles",
      color: "text-chart-5",
    },
    {
      icon: Users,
      title: "Copy Trading Tips",
      count: "19 articles",
      color: "text-chart-2",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Find the content that matches your interests</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div
                  className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${category.color}`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
