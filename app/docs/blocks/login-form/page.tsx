import type { Metadata } from "next"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Login Form" }

export default function LoginFormPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Login Form</h1>
        <p className="text-lg text-muted-foreground">
          A complete login form block with email/password fields and social login
          buttons (GitHub, Google).
        </p>
      </div>

      <InstallCommand name="login-form" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              app/login/page.tsx
            </code>{" "}
            — Page component (installed to your app directory)
          </li>
          <li>
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              login-form.tsx
            </code>{" "}
            — The login form component
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dependencies</h2>
        <p className="text-muted-foreground">
          This block automatically installs the following registry dependencies:
        </p>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Button</li>
          <li>Input</li>
          <li>Label</li>
          <li>Card</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Email and password form fields</li>
          <li>GitHub OAuth button</li>
          <li>Google OAuth button</li>
          <li>Sign up link</li>
          <li>Responsive centered layout</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Customization</h2>
        <CodeBlock title="example.tsx">{`// The login form is fully customizable.
// Edit the installed component to:
// - Add form validation
// - Connect to your auth provider
// - Modify social login options
// - Change the layout and styling

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return <LoginForm />
}`}</CodeBlock>
      </section>
    </div>
  )
}
