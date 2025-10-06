import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  image: string
}

export function AuthLayout({ children, title, subtitle, image }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">{title}</h1>
            <p className="text-muted-foreground text-pretty">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:flex-1 relative bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt="Authentication"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="text-xl font-semibold mb-4">
            "ERICOIN has completely transformed how I invest. Copy trading makes it so easy to follow expert
            strategies."
          </blockquote>
          <div className="flex items-center gap-3">
            <img src="/testimonial-avatar.png" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            <div>
              <div className="font-semibold">Jessica Martinez</div>
              <div className="text-sm text-white/80">Pro Plan Member</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
