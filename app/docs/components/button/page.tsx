import type { Metadata } from "next"
import {
  CodeBlock,
  InstallCommand,
  PropsTable,
} from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Button" }

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          A versatile button component with multiple variants and sizes. Built
          on @base-ui/react primitives with CVA for variant management.
        </p>
      </div>

      <InstallCommand name="button" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <CodeBlock title="example.tsx">{`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><IconComponent /></Button>`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
              default: '"default"',
              description: "The visual style variant of the button.",
            },
            {
              name: "size",
              type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
              default: '"default"',
              description: "The size of the button.",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes to apply.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the button.",
            },
          ]}
        />
      </section>
    </div>
  )
}
