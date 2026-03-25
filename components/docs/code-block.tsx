export function CodeBlock({
  children,
  title,
}: {
  children: string
  title?: string
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 overflow-hidden">
      {title && (
        <div className="border-b border-border bg-muted/50 px-4 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm leading-relaxed">{children}</code>
      </pre>
    </div>
  )
}

export function InstallCommand({ name }: { name: string }) {
  const url = `https://karelia-registry.ehlersiana.workers.dev/r/${name}.json`
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Installation</h3>
      <CodeBlock title="Terminal">{`npx shadcn@latest add ${url}`}</CodeBlock>
      <p className="text-sm text-muted-foreground">
        Requires <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">REGISTRY_TOKEN</code> to
        be configured. See{" "}
        <a href="/docs/getting-started" className="text-primary underline underline-offset-4">
          Getting Started
        </a>{" "}
        for authentication setup.
      </p>
    </div>
  )
}

export function PropsTable({
  props,
}: {
  props: { name: string; type: string; default?: string; description: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-2 text-left font-medium">Prop</th>
            <th className="px-4 py-2 text-left font-medium">Type</th>
            <th className="px-4 py-2 text-left font-medium">Default</th>
            <th className="px-4 py-2 text-left font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-border last:border-0">
              <td className="px-4 py-2 font-mono text-xs">{prop.name}</td>
              <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                {prop.type}
              </td>
              <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                {prop.default ?? "-"}
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
