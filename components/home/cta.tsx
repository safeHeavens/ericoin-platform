import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 lg:p-20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 text-pretty">
                Join thousands of investors who are already growing their wealth with ERICOIN. Start with as little as
                $100 and copy the trades of expert investors today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-semibold group">
                    Create Free Account
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/plans">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-base font-semibold bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                  >
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-6">
                No credit card required • Start with demo account • Cancel anytime
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
