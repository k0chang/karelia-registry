import type { Metadata } from "next"
import {
  CodeBlock,
  InstallCommand,
  PropsTable,
} from "@/components/docs/code-block"

export const metadata: Metadata = { title: "useClipboard" }

export default function UseClipboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          useClipboard
        </h1>
        <p className="text-lg text-muted-foreground">
          A React hook for copying text to the clipboard with a temporary
          &quot;copied&quot; state indicator.
        </p>
      </div>

      <InstallCommand name="use-clipboard" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`"use client"

import { useClipboard } from "@/hooks/use-clipboard"
import { Button } from "@/components/ui/button"

export function CopyButton({ text }: { text: string }) {
  const { copy, copied } = useClipboard({ timeout: 2000 })

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copy(text)}
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Options</h2>
        <PropsTable
          props={[
            {
              name: "timeout",
              type: "number",
              default: "2000",
              description:
                "Duration in ms for the 'copied' state before resetting.",
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Returns</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Property</th>
                <th className="px-4 py-2 text-left font-medium">Type</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-2 font-mono text-xs">copy</td>
                <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                  (text: string) =&gt; Promise&lt;void&gt;
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Copies the given text to clipboard.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-2 font-mono text-xs">copied</td>
                <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  True for the duration of timeout after a successful copy.
                </td>
              </tr>
              <tr className="border-b border-border last:border-0">
                <td className="px-4 py-2 font-mono text-xs">error</td>
                <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                  Error | null
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Error object if clipboard write failed, otherwise null.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
