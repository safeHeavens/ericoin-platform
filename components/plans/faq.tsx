import { ScrollReveal } from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Can I change my plan later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, bank transfers, and cryptocurrency payments including Bitcoin and Ethereum.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "The Starter plan is free forever. Pro and Elite plans come with a 14-day free trial, no credit card required.",
    },
    {
      question: "What happens if I cancel?",
      answer:
        "You can cancel anytime. You'll retain access until the end of your billing period, and we offer a 30-day money-back guarantee.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The only additional costs are standard trading fees (0.1-0.5% per trade) which are clearly disclosed before each transaction.",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Have questions? We have answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
