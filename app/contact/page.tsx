import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { FAQ } from "@/components/contact/contact-faq"

export const metadata = {
  title: "Contact Us - ERICOIN",
  description: "Get in touch with our team. We're here to help with any questions about investing and our platform.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  )
}
