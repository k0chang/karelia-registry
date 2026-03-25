import type { Metadata } from "next"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Date Utils" }

export default function DateUtilsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Date Utils</h1>
        <p className="text-lg text-muted-foreground">
          Date utility functions using the native Intl API. No external
          dependencies required.
        </p>
      </div>

      <InstallCommand name="date-utils" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Functions</h2>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">formatDate(date, options?, locale?)</code>
            </h3>
            <p className="text-muted-foreground">
              Format a date using Intl.DateTimeFormat.
            </p>
            <CodeBlock>{`import { formatDate } from "@/lib/date-utils"

formatDate(new Date())              // "Mar 25, 2026"
formatDate("2026-01-01", { month: "long" })  // "January 1, 2026"
formatDate(Date.now(), {}, "ja-JP")  // "2026/3/25"`}</CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">toDate(value)</code>
            </h3>
            <p className="text-muted-foreground">
              Parse a date string, number, or Date into a Date object. Throws on
              invalid input.
            </p>
            <CodeBlock>{`import { toDate } from "@/lib/date-utils"

toDate("2026-03-25")   // Date object
toDate(1711324800000)   // Date object
toDate("invalid")       // throws Error`}</CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">isToday(date)</code>
            </h3>
            <p className="text-muted-foreground">
              Check if a date is today.
            </p>
            <CodeBlock>{`import { isToday } from "@/lib/date-utils"

isToday(new Date())         // true
isToday("2020-01-01")       // false`}</CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">daysBetween(a, b)</code>
            </h3>
            <p className="text-muted-foreground">
              Calculate the number of days between two dates.
            </p>
            <CodeBlock>{`import { daysBetween } from "@/lib/date-utils"

daysBetween("2026-01-01", "2026-03-25")  // 83`}</CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">formatRelative(date, locale?)</code>
            </h3>
            <p className="text-muted-foreground">
              Format a date as a relative time string.
            </p>
            <CodeBlock>{`import { formatRelative } from "@/lib/date-utils"

formatRelative(Date.now() - 3600000)   // "1 hour ago"
formatRelative(Date.now() + 86400000)  // "in 1 day"`}</CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <code className="font-mono">toISODateString(date)</code>
            </h3>
            <p className="text-muted-foreground">
              Format a date as an ISO date string (YYYY-MM-DD).
            </p>
            <CodeBlock>{`import { toISODateString } from "@/lib/date-utils"

toISODateString(new Date())  // "2026-03-25"`}</CodeBlock>
          </div>
        </div>
      </section>
    </div>
  )
}
