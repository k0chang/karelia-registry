import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Components" }

const components = [
  {
    name: "Button",
    href: "/docs/components/button",
    description:
      "A versatile button component with multiple variants (default, outline, secondary, ghost, destructive, link) and sizes.",
  },
  {
    name: "Input",
    href: "/docs/components/input",
    description:
      "A styled text input component built on @base-ui/react Input primitive.",
  },
  {
    name: "Label",
    href: "/docs/components/label",
    description: "An accessible label component for form controls.",
  },
  {
    name: "Card",
    href: "/docs/components/card",
    description:
      "A card component with Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter subcomponents.",
  },
]

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground">
          UI components available in the Karelia Registry.
        </p>
      </div>
      <div className="grid gap-4">
        {components.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className="rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
          >
            <h3 className="mb-1 font-semibold">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
