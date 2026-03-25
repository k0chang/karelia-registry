import type { Metadata } from "next"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Card" }

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          A card component with header, content, and footer sections for
          grouping related content.
        </p>
      </div>

      <InstallCommand name="card" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer.</p>
      </CardFooter>
    </Card>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Exports</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Component</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Card", "The root card container."],
                ["CardHeader", "Header section with vertical spacing."],
                ["CardTitle", "Title element (h3)."],
                ["CardDescription", "Subtitle/description text."],
                ["CardContent", "Main content area."],
                ["CardFooter", "Footer with horizontal layout."],
              ].map(([name, desc]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 font-mono text-xs">{name}</td>
                  <td className="px-4 py-2 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
