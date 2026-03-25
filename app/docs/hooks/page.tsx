import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Hooks" }

export default function HooksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Hooks</h1>
        <p className="text-lg text-muted-foreground">
          Reusable React hooks available in the Karelia Registry.
        </p>
      </div>
      <div className="grid gap-4">
        <Link
          href="/docs/hooks/use-debounce"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">useDebounce</h3>
          <p className="text-sm text-muted-foreground">
            Debounce a value by a specified delay. Useful for search inputs and
            API call throttling.
          </p>
        </Link>
        <Link
          href="/docs/hooks/use-clipboard"
          className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
        >
          <h3 className="mb-1 font-semibold">useClipboard</h3>
          <p className="text-sm text-muted-foreground">
            Copy text to the clipboard with a temporary &quot;copied&quot; state
            indicator.
          </p>
        </Link>
      </div>
    </div>
  )
}
