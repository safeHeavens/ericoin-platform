import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "ERICOIN - Crypto & Stock Copy Trading Platform",
  description:
    "Start investing in crypto and stocks with expert copy trading. Join ERICOIN and grow your wealth with professional traders.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="ericoin-theme">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
