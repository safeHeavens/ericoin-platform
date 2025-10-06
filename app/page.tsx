import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { CopyTrading } from "@/components/home/copy-trading"
import { Markets } from "@/components/home/markets"
import { HowItWorks } from "@/components/home/how-it-works"
import { Stats } from "@/components/home/stats"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import { LiveActivityNotifications } from "@/components/home/live-activity-notifications"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Features />
      <CopyTrading />
      <Markets />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <LiveActivityNotifications />
    </div>
  )
}
