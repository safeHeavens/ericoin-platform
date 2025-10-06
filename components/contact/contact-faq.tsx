import { ScrollReveal } from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We aim to respond to all inquiries within 24 hours during business days. For urgent technical issues, our support team is available via live chat.",
    },
    {
      question: "Can I schedule a demo of the platform?",
      answer:
        "Yes! Contact our sales team and we'll arrange a personalized demo to show you how ERICOIN can help you achieve your investment goals.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Phone support is available for Pro and Elite plan members. Starter plan users can reach us via email or live chat.",
    },
    {
      question: "How can I report a technical issue?",
      answer:
        "Use the contact form above and select 'Technical Support' as the subject. Include as much detail as possible about the issue you're experiencing.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Common Questions</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Quick answers to questions you might have before reaching out.
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
