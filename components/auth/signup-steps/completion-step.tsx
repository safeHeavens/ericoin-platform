"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

interface CompletionStepProps {
  userData: {
    firstName: string
    lastName: string
    email: string
  }
}

export function CompletionStep({ userData }: CompletionStepProps) {
  const router = useRouter()

  return (
    <div className="space-y-6 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
        <CheckCircle2 className="h-12 w-12 text-primary" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold text-balance">Welcome to ERICOIN, {userData.firstName}!</h1>
        <p className="text-muted-foreground text-pretty text-lg">
          Your account has been successfully created and your KYC documents have been submitted for verification.
        </p>
      </div>

      <div className="bg-accent/50 border border-accent rounded-xl p-6 space-y-4">
        <h3 className="font-semibold text-lg">What happens next?</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Email Verified</p>
              <p className="text-sm text-muted-foreground">Your email has been successfully verified</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Plan Selected</p>
              <p className="text-sm text-muted-foreground">Your investment plan has been configured</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div>
              <p className="font-medium">KYC Under Review</p>
              <p className="text-sm text-muted-foreground">
                We're reviewing your documents. This typically takes 24-48 hours.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-3 pt-4">
        <p className="text-sm text-muted-foreground">
          You'll receive an email at <span className="font-semibold text-foreground">{userData.email}</span> once your
          verification is complete.
        </p>

        <Button size="lg" className="w-full" onClick={() => router.push("/login")}>
          Go to Login
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
