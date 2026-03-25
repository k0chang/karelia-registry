import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Karelia Registry",
    template: "%s | Karelia Registry",
  },
  description:
    "A shadcn/ui compatible component registry with UI components, hooks, utilities, and a Nordic Brutalist design system.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Karelia
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/docs"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Docs
              </Link>
              <Link
                href="/docs/components"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Components
              </Link>
              <Link
                href="/docs/hooks"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Hooks
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-6">
          <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
            Karelia Registry &mdash; Built with shadcn/ui
          </div>
        </footer>
      </body>
    </html>
  )
}
