export function PlansHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Simple, Transparent Pricing
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your investment goals. All plans include access to expert traders and our full
            suite of trading tools.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <span>No hidden fees • Cancel anytime • 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
