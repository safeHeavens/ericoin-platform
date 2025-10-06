import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function PlansCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our team is here to help you choose the right plan and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-base font-semibold group">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Sales
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base font-semibold group bg-transparent"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
