import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function CopyTrading() {
  const benefits = [
    "No trading experience required",
    "Diversify across multiple expert traders",
    "Full transparency of trader performance",
    "Stop copying anytime with one click",
    "Minimum investment from $100",
    "Real-time portfolio tracking",
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <ScrollReveal>
            <div className="relative">
              <img
                src="/professional-traders-portfolio-performance-dashboa.jpg"
                alt="Copy Trading Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl hidden md:block">
                <div className="text-sm text-muted-foreground mb-1">Average Return</div>
                <div className="text-3xl font-bold text-accent">+156%</div>
                <div className="text-xs text-muted-foreground mt-1">Last 12 months</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Most Popular Feature
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Copy the Trades of Expert Investors</h2>

              <p className="text-lg text-muted-foreground text-pretty">
                Let professional traders do the work for you. Our copy trading feature automatically replicates the
                strategies of top performers, giving you access to expert-level investing without the learning curve.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 py-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link href="/investing">
                <Button size="lg" className="text-base font-semibold group">
                  Browse Expert Traders
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
