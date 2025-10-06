import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      details: "support@ericoin.com",
      link: "mailto:support@ericoin.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Financial District, New York, NY 10004",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM EST",
      link: null,
    },
  ]

  return (
    <ScrollReveal delay={200}>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground text-pretty">
            Reach out to us through any of these channels. We typically respond within 24 hours.
          </p>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-1">{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {method.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{method.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <h3 className="font-bold mb-2">Need Immediate Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check out our Help Center for instant answers to common questions.
          </p>
          <a href="/resources" className="text-sm font-semibold text-primary hover:underline">
            Visit Help Center →
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}
