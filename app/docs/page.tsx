import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Documentation" }

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse the Karelia Registry documentation to learn how to install and
          use components, hooks, utilities, and the design system.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/docs/getting-started"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">Getting Started</h3>
          <p className="text-sm text-muted-foreground">
            Learn how to configure authentication and install registry items.
          </p>
        </Link>
        <Link
          href="/docs/components"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">Components</h3>
          <p className="text-sm text-muted-foreground">
            Button, Input, Label, Card — UI primitives for your app.
          </p>
        </Link>
        <Link
          href="/docs/hooks/use-debounce"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">Hooks</h3>
          <p className="text-sm text-muted-foreground">
            useDebounce, useClipboard — reusable React hooks.
          </p>
        </Link>
        <Link
          href="/docs/design-system"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">Design System</h3>
          <p className="text-sm text-muted-foreground">
            Karelia Base — a Nordic Brutalist design system.
          </p>
        </Link>
      </div>
    </div>
  )
}
