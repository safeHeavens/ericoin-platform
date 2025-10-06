import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Team } from "@/components/about/team"
import { Stats } from "@/components/about/stats"
import { Timeline } from "@/components/about/timeline"
import { Values } from "@/components/about/values"

export const metadata = {
  title: "About Us - ERICOIN",
  description:
    "Learn about ERICOIN's mission to democratize investing and make financial markets accessible to everyone.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Mission />
      <Stats />
      <Timeline />
      <Values />
      <Team />
    </div>
  )
}
