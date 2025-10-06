import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - ERICOIN",
  description: "Sign in to your ERICOIN account to access your portfolio and start trading.",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
