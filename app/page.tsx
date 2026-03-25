import Link from "next/link"

const registryItems = [
  {
    name: "Button",
    type: "UI",
    href: "/docs/components/button",
    description: "Versatile button with multiple variants and sizes.",
  },
  {
    name: "Input",
    type: "UI",
    href: "/docs/components/input",
    description: "Styled text input built on @base-ui/react.",
  },
  {
    name: "Label",
    type: "UI",
    href: "/docs/components/label",
    description: "Accessible label for form controls.",
  },
  {
    name: "Card",
    type: "UI",
    href: "/docs/components/card",
    description: "Card with header, content, and footer sections.",
  },
  {
    name: "Date Utils",
    type: "Lib",
    href: "/docs/lib/date-utils",
    description: "Date utility functions using native Intl API.",
  },
  {
    name: "useDebounce",
    type: "Hook",
    href: "/docs/hooks/use-debounce",
    description: "Debounce a value by a specified delay.",
  },
  {
    name: "useClipboard",
    type: "Hook",
    href: "/docs/hooks/use-clipboard",
    description: "Copy text to clipboard with temporary state.",
  },
  {
    name: "Login Form",
    type: "Block",
    href: "/docs/blocks/login-form",
    description: "Complete login form with social login buttons.",
  },
  {
    name: "Karelia Base",
    type: "Base",
    href: "/docs/design-system",
    description: "Nordic Brutalist design system with teal/cyan palette.",
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Karelia Registry
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
          A shadcn/ui compatible component registry. Install components, hooks,
          utilities, and a complete design system using the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            shadcn
          </code>{" "}
          CLI.
        </p>
        <div className="flex gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-9 items-center rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            Documentation
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          Registry Items
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {registryItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group rounded-xl border border-border p-5 transition-colors hover:bg-muted/50"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-primary">
                  {item.name}
                </h3>
                <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
