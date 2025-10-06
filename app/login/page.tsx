import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Login - ERICOIN",
  description: "Sign in to your ERICOIN account to access your portfolio and start trading.",
}

export default function LoginPage() {
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
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">Welcome Back</h1>
            <p className="text-muted-foreground text-pretty">Sign in to your account to continue</p>
          </div>

          <LoginForm />
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:flex-1 relative bg-muted">
        <img
          src="/auth-login-visual.jpg"
          alt="Authentication"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="text-xl font-semibold mb-4">
            "The platform is incredibly intuitive. I can monitor my investments and copy trades seamlessly."
          </blockquote>
          <div className="flex items-center gap-3">
            <img src="/investor-2.jpg" alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
            <div>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-white/80">Elite Plan Member</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
