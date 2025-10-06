import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Heart, Zap, Globe } from "lucide-react"

export function Values() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security of your assets and data above all else.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our users.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "We believe financial opportunities should be accessible to everyone.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              These principles guide everything we do and shape the culture of our company.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
