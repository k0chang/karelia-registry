import type { Metadata } from "next"
import {
  CodeBlock,
  InstallCommand,
  PropsTable,
} from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Input" }

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          A styled text input component built on @base-ui/react Input primitive.
        </p>
      </div>

      <InstallCommand name="input" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`import { Input } from "@/components/ui/input"

export function Example() {
  return <Input type="email" placeholder="you@example.com" />
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">With Label</h2>
        <CodeBlock title="example.tsx">{`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Example() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "type",
              type: "string",
              default: '"text"',
              description: "The HTML input type.",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Placeholder text.",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the input.",
            },
          ]}
        />
      </section>
    </div>
  )
}
