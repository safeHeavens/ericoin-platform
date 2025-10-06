import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function InvestingCTA() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Start Investing?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join thousands of investors who trust ERICOIN for their investment needs. Start with as little as $100.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto text-base font-semibold group">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/plans">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold bg-transparent">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
