import { ResourcesHero } from "@/components/resources/resources-hero"
import { FeaturedArticles } from "@/components/resources/featured-articles"
import { Categories } from "@/components/resources/categories"
import { LatestInsights } from "@/components/resources/latest-insights"
import { Newsletter } from "@/components/resources/newsletter"

export const metadata = {
  title: "Resources & Insights - ERICOIN",
  description:
    "Learn about investing, trading strategies, and market analysis. Educational resources for all skill levels.",
}

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <ResourcesHero />
      <FeaturedArticles />
      <Categories />
      <LatestInsights />
      <Newsletter />
    </div>
  )
}
