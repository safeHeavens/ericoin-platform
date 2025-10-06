import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"

export function FeaturedArticles() {
  const featured = [
    {
      title: "Complete Guide to Copy Trading: Everything You Need to Know",
      excerpt:
        "Learn how copy trading works, its benefits, and how to choose the right traders to follow for maximum returns.",
      image: "/article-copy-trading.jpg",
      category: "Beginner Guide",
      readTime: "12 min read",
      date: "Mar 15, 2024",
    },
    {
      title: "Top 10 Risk Management Strategies for Crypto Investors",
      excerpt: "Protect your portfolio with these proven risk management techniques used by professional traders.",
      image: "/article-risk-management.jpg",
      category: "Strategy",
      readTime: "8 min read",
      date: "Mar 12, 2024",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground">Must-read content for investors at every level</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {featured.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 150}>
              <article className="group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{article.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
