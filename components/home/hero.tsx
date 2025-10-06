import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Trusted by 50,000+ investors worldwide</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Invest Smarter with <span className="text-primary">Expert Copy Trading</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty max-w-xl">
                Join ERICOIN and automatically copy the trades of professional investors. Access crypto, stocks, and
                commodities with zero experience required.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto text-base font-semibold group">
                    Start Investing Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/investing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-base font-semibold bg-transparent"
                  >
                    Explore Markets
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>SEC Regulated</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>$2B+ Trading Volume</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right content - Trading interface mockup */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/modern-crypto-trading-dashboard-interface-with-cha.jpg"
                  alt="ERICOIN Trading Platform"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-border"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card border border-border rounded-xl p-4 shadow-lg animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Portfolio Growth</p>
                    <p className="text-lg font-bold text-accent">+24.5%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card border border-border rounded-xl p-4 shadow-lg animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Active Traders</p>
                    <p className="text-lg font-bold">1,247</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
