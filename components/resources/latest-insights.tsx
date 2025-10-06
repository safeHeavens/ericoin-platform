import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function LatestInsights() {
  const articles = [
    {
      title: "Bitcoin Halving 2024: What Investors Need to Know",
      excerpt:
        "Understanding the impact of Bitcoin's upcoming halving event on market dynamics and investment strategies.",
      category: "Market Analysis",
      readTime: "6 min read",
      date: "Mar 14, 2024",
    },
    {
      title: "5 Common Mistakes New Copy Traders Make",
      excerpt: "Avoid these pitfalls when starting your copy trading journey and set yourself up for success.",
      category: "Copy Trading Tips",
      readTime: "5 min read",
      date: "Mar 13, 2024",
    },
    {
      title: "Understanding Technical Indicators: RSI and MACD",
      excerpt: "A beginner-friendly guide to two of the most popular technical indicators used by traders.",
      category: "Technical Analysis",
      readTime: "10 min read",
      date: "Mar 11, 2024",
    },
    {
      title: "Portfolio Diversification in Crypto: A Practical Guide",
      excerpt: "Learn how to build a balanced crypto portfolio that minimizes risk while maximizing potential returns.",
      category: "Strategy",
      readTime: "8 min read",
      date: "Mar 10, 2024",
    },
    {
      title: "The Psychology of Trading: Mastering Your Emotions",
      excerpt: "Discover how to overcome emotional biases and make rational trading decisions under pressure.",
      category: "Trading Psychology",
      readTime: "7 min read",
      date: "Mar 8, 2024",
    },
    {
      title: "DeFi Explained: Opportunities and Risks",
      excerpt:
        "An in-depth look at decentralized finance, its potential benefits, and the risks you should be aware of.",
      category: "Beginner Guide",
      readTime: "12 min read",
      date: "Mar 6, 2024",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">Stay updated with our newest content</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 100}>
              <article className="group cursor-pointer p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
