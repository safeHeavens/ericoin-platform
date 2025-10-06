"use client"

import type React from "react"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly market insights, trading tips, and exclusive content delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="py-8">
                <p className="text-lg font-semibold text-accent">Thanks for subscribing!</p>
                <p className="text-muted-foreground mt-2">Check your email to confirm your subscription.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12"
                />
                <Button type="submit" size="lg" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. Read our{" "}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
