"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FileText, Video, CheckCircle2, AlertCircle } from "lucide-react"

interface KYCVerificationStepProps {
  updateUserData: (data: any) => void
  onNext: () => void
}

export function KYCVerificationStep({ updateUserData, onNext }: KYCVerificationStepProps) {
  const [idDocument, setIdDocument] = useState<File | null>(null)
  const [selfieVideo, setSelfieVideo] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const idInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const handleIdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIdDocument(file)
    }
  }

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelfieVideo(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!idDocument || !selfieVideo) return

    setIsLoading(true)

    // Simulate KYC submission and storage
    await new Promise((resolve) => setTimeout(resolve, 2000))

    updateUserData({
      kycDocuments: {
        idDocument,
        selfieVideo,
      },
    })

    setIsLoading(false)
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">KYC Verification</h1>
        <p className="text-muted-foreground text-pretty">
          Complete your identity verification to secure your account and comply with regulations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ID Document Upload */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Government-Issued ID</Label>
          <p className="text-sm text-muted-foreground">
            Upload a clear photo of your passport, driver's license, or national ID card
          </p>

          <div
            onClick={() => idInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all ${
              idDocument ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-accent/50"
            }`}
          >
            <input ref={idInputRef} type="file" accept="image/*,.pdf" onChange={handleIdUpload} className="hidden" />
            <div className="flex flex-col items-center gap-3 text-center">
              {idDocument ? (
                <>
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{idDocument.name}</p>
                    <p className="text-sm text-muted-foreground">{(idDocument.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    Change File
                  </Button>
                </>
              ) : (
                <>
                  <FileText className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">Click to upload ID document</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG, or PDF (max 10MB)</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Selfie Video Upload */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Selfie Video Verification</Label>
          <p className="text-sm text-muted-foreground">
            Record a short video (5-10 seconds) holding your ID next to your face
          </p>

          <div
            onClick={() => videoInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all ${
              selfieVideo ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-accent/50"
            }`}
          >
            <input ref={videoInputRef} type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
            <div className="flex flex-col items-center gap-3 text-center">
              {selfieVideo ? (
                <>
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{selfieVideo.name}</p>
                    <p className="text-sm text-muted-foreground">{(selfieVideo.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    Change Video
                  </Button>
                </>
              ) : (
                <>
                  <Video className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">Click to upload selfie video</p>
                    <p className="text-sm text-muted-foreground">MP4, MOV, or WebM (max 50MB)</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="flex gap-3 p-4 rounded-lg bg-accent/50 border border-accent">
          <AlertCircle className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-accent-foreground mb-1">Why do we need this?</p>
            <p className="text-muted-foreground">
              KYC verification helps us comply with financial regulations and protect your account from fraud. Your
              information is encrypted and stored securely.
            </p>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={!idDocument || !selfieVideo || isLoading}>
          {isLoading ? "Submitting verification..." : "Submit KYC Documents"}
        </Button>
      </form>
    </div>
  )
}
