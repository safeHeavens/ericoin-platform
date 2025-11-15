"use client"

import { useEffect } from "react"

export default function LoginPage() {
  useEffect(() => {
    window.location.href = "https://onboard.ericoin.online/auth/signup"
  }, [])

  return null // optional: you can show a loader if you want
}
