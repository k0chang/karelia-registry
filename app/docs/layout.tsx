import Link from "next/link"

const nav = [
  {
    title: "Getting Started",
    items: [{ title: "Installation", href: "/docs/getting-started" }],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Card", href: "/docs/components/card" },
    ],
  },
  {
    title: "Hooks",
    items: [
      { title: "useDebounce", href: "/docs/hooks/use-debounce" },
      { title: "useClipboard", href: "/docs/hooks/use-clipboard" },
    ],
  },
  {
    title: "Lib",
    items: [{ title: "Date Utils", href: "/docs/lib/date-utils" }],
  },
  {
    title: "Blocks",
    items: [{ title: "Login Form", href: "/docs/blocks/login-form" }],
  },
  {
    title: "Prompts",
    items: [{ title: "Karelia Prompt", href: "/docs/prompts/karelia-prompt" }],
  },
  {
    title: "Design System",
    items: [{ title: "Karelia Base", href: "/docs/design-system" }],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-5xl gap-8 px-4 py-8">
      <aside className="hidden w-56 shrink-0 md:block">
        <nav className="sticky top-20 space-y-6">
          {nav.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
