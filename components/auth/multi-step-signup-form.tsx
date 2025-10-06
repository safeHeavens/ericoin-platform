"use client"

import { useState } from "react"
import { AccountCreationStep } from "./signup-steps/account-creation-step"
import { EmailVerificationStep } from "./signup-steps/email-verification-step"
import { PlanSelectionStep } from "./signup-steps/plan-selection-step"
import { KYCVerificationStep } from "./signup-steps/kyc-verification-step"
import { CompletionStep } from "./signup-steps/completion-step"

type SignupStep = "account" | "verification" | "plan" | "kyc" | "complete"

interface UserData {
  firstName: string
  lastName: string
  email: string
  password: string
  selectedPlan?: string
  verificationCode?: string
  kycDocuments?: {
    idDocument?: File
    selfieVideo?: File
  }
}

export function MultiStepSignupForm() {
  const [currentStep, setCurrentStep] = useState<SignupStep>("account")
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }))
  }

  const goToNextStep = () => {
    const steps: SignupStep[] = ["account", "verification", "plan", "kyc", "complete"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      {currentStep !== "complete" && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Step {currentStep === "account" ? 1 : currentStep === "verification" ? 2 : currentStep === "plan" ? 3 : 4}{" "}
              of 4
            </span>
            <span className="text-sm text-muted-foreground">
              {currentStep === "account"
                ? "Account Details"
                : currentStep === "verification"
                  ? "Email Verification"
                  : currentStep === "plan"
                    ? "Choose Plan"
                    : "KYC Verification"}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width:
                  currentStep === "account"
                    ? "25%"
                    : currentStep === "verification"
                      ? "50%"
                      : currentStep === "plan"
                        ? "75%"
                        : "100%",
              }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      {currentStep === "account" && (
        <AccountCreationStep userData={userData} updateUserData={updateUserData} onNext={goToNextStep} />
      )}
      {currentStep === "verification" && (
        <EmailVerificationStep email={userData.email} updateUserData={updateUserData} onNext={goToNextStep} />
      )}
      {currentStep === "plan" && <PlanSelectionStep updateUserData={updateUserData} onNext={goToNextStep} />}
      {currentStep === "kyc" && <KYCVerificationStep updateUserData={updateUserData} onNext={goToNextStep} />}
      {currentStep === "complete" && <CompletionStep userData={userData} />}
    </div>
  )
}
