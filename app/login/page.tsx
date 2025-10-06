import { LoginForm } from "@/components/auth/login-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export const metadata = {
  title: "Login - ERICOIN",
  description: "Sign in to your ERICOIN account to access your portfolio and start trading.",
}

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to your account to continue" image="/auth-login-visual.jpg">
      <LoginForm />
    </AuthLayout>
  )
}
