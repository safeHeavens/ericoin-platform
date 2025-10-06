export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">Get in Touch</h1>

          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Have questions about our platform? Want to learn more about copy trading? Our team is here to help.
          </p>
        </div>
      </div>
    </section>
  )
}
