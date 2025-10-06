import { SignupForm } from "@/components/auth/signup-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export const metadata = {
  title: "Sign Up - ERICOIN",
  description: "Create your ERICOIN account and start your investment journey today.",
}

export default function SignupPage() {
  return (
    <AuthLayout
      title="Start Your Investment Journey"
      subtitle="Create an account to access expert traders and professional tools"
      image="/auth-signup-visual.jpg"
    >
      <SignupForm />
    </AuthLayout>
  )
}
