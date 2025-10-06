import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Platform: [
      { label: "Investing", href: "/investing" },
      { label: "Plans", href: "/plans" },
      { label: "Copy Trading", href: "/investing#copy-trading" },
      { label: "Markets", href: "/investing#markets" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
      { label: "Press", href: "/about#press" },
    ],
    Resources: [
      { label: "Insights", href: "/resources" },
      { label: "Help Center", href: "/resources#help" },
      { label: "API Docs", href: "/resources#api" },
      { label: "Security", href: "/resources#security" },
    ],
    Legal: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Risk Disclosure", href: "/legal/risk" },
      { label: "Compliance", href: "/legal/compliance" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">ERICOIN</span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-6 max-w-xs">
              Your trusted partner for crypto and stock investments. Start copy trading with expert traders today.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <social.icon className="h-4 w-4 text-secondary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} ERICOIN. All rights reserved.
            </p>
            <p className="text-xs text-secondary-foreground/50 text-center md:text-right max-w-md">
              Investment involves risk. Past performance is not indicative of future results. Please read our risk
              disclosure before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
