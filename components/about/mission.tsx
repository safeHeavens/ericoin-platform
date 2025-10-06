import { ScrollReveal } from "@/components/scroll-reveal"
import { Target, Users, Lightbulb } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Founded in 2020, ERICOIN was born from a simple idea: investing shouldn't be complicated or exclusive.
                We're on a mission to level the playing field by giving everyone access to the same tools and strategies
                used by professional traders.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Through our innovative copy trading platform, we connect aspiring investors with experienced traders,
                creating a community where knowledge and success are shared.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Making professional investing tools available to everyone, regardless of experience level.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a supportive network where traders and investors learn and grow together.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-chart-3" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously improving our platform with cutting-edge technology and user feedback.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
