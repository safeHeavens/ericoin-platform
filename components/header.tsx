"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/investing", label: "Investing" },
    { href: "/plans", label: "Plans" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-foreground">ERICOIN</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="font-semibold">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button & Sign Up */}
            <div className="flex lg:hidden items-center gap-3">
              <Link href="/signup">
                <Button size="sm" className="font-semibold">
                  Sign Up
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-card border-l border-border shadow-2xl transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col h-full p-6 pt-24">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted px-4 py-3 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between px-4 py-3 mb-4">
                <span className="text-sm font-medium text-foreground/80">Theme</span>
                <ThemeToggle />
              </div>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mb-3 bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full font-semibold">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
