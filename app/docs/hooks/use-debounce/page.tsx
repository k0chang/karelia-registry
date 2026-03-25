import type { Metadata } from "next"
import {
  CodeBlock,
  InstallCommand,
  PropsTable,
} from "@/components/docs/code-block"

export const metadata: Metadata = { title: "useDebounce" }

export default function UseDebouncePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">useDebounce</h1>
        <p className="text-lg text-muted-foreground">
          A React hook that debounces a value by a specified delay. Useful for
          search inputs and throttling API calls.
        </p>
      </div>

      <InstallCommand name="use-debounce" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`"use client"

import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { Input } from "@/components/ui/input"

export function SearchInput() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      // Fires only after 300ms of no changes
      fetchResults(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <Input
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Parameters</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "T",
              description: "The value to debounce.",
            },
            {
              name: "delay",
              type: "number",
              default: "500",
              description: "Debounce delay in milliseconds.",
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Returns</h2>
        <p className="text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            T
          </code>{" "}
          — The debounced value, updated only after the specified delay has
          passed without a new value change.
        </p>
      </section>
    </div>
  )
}
