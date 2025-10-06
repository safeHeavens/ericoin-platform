import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ResourcesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Learn, Grow, and Succeed
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Access expert insights, trading guides, and market analysis to make informed investment decisions.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles, guides, and tutorials..."
              className="pl-12 h-14 text-base"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
