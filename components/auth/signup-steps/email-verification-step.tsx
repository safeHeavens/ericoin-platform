"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, RefreshCw } from "lucide-react"

interface EmailVerificationStepProps {
  email: string
  updateUserData: (data: any) => void
  onNext: () => void
}

export function EmailVerificationStep({ email, updateUserData, onNext }: EmailVerificationStepProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [resendTimer])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
    const newCode = [...code]
    pastedData.forEach((char, index) => {
      if (index < 6 && /^\d$/.test(char)) {
        newCode[index] = char
      }
    })
    setCode(newCode)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const verificationCode = code.join("")
    if (verificationCode.length !== 6) return

    setIsLoading(true)

    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1500))

    updateUserData({ verificationCode })
    setIsLoading(false)
    onNext()
  }

  const handleResend = async () => {
    if (!canResend) return

    setCanResend(false)
    setResendTimer(60)

    // Simulate resending code
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">Verify Your Email</h1>
        <p className="text-muted-foreground text-pretty">
          We've sent a 6-digit verification code to <span className="font-semibold text-foreground">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
          {code.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold"
              required
            />
          ))}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isLoading || code.some((d) => !d)}>
          {isLoading ? "Verifying..." : "Verify Email"}
        </Button>

        <div className="text-center">
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            {canResend ? "Resend code" : `Resend code in ${resendTimer}s`}
          </button>
        </div>
      </form>
    </div>
  )
}
