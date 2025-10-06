"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Retail Investor",
      image: "/investor-1.jpg",
      content:
        "ERICOIN changed my investment game completely. I went from losing money to consistent 20% monthly returns by copying expert traders.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "/investor-2.jpg",
      content:
        "As someone with no trading experience, copy trading was perfect for me. The platform is intuitive and the results speak for themselves.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      image: "/investor-3.jpg",
      content:
        "I love the transparency. I can see exactly how my chosen traders perform before committing any funds. Best investment platform I have used.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Financial Analyst",
      image: "/investor-4.jpg",
      content:
        "The risk management tools are exceptional. I can diversify across multiple expert traders and monitor everything in real-time.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      role: "Entrepreneur",
      image: "/investor-5.jpg",
      content:
        "Finally, a platform that makes professional trading accessible to everyone. My portfolio has grown 45% in just 6 months.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    goToSlide(newIndex)
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Trusted by Thousands of Investors</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              See what our community has to say about their experience with ERICOIN.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg lg:text-xl mb-8 text-center text-pretty leading-relaxed max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
