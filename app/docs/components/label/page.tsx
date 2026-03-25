import type { Metadata } from "next"
import {
  CodeBlock,
  InstallCommand,
  PropsTable,
} from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Label" }

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground">
          An accessible label component for form controls.
        </p>
      </div>

      <InstallCommand name="label" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock title="example.tsx">{`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function Example() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  )
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "htmlFor",
              type: "string",
              description: "The ID of the form element this label is for.",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes.",
            },
            {
              name: "children",
              type: "ReactNode",
              description: "The label text content.",
            },
          ]}
        />
      </section>
    </div>
  )
}
