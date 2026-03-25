import type { Metadata } from "next"
import { CodeBlock, InstallCommand } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Karelia Base Design System" }

const lightColors = [
  ["background", "oklch(0.97 0.005 200)"],
  ["foreground", "oklch(0.15 0.03 220)"],
  ["primary", "oklch(0.35 0.12 195)"],
  ["primary-foreground", "oklch(0.98 0.01 195)"],
  ["secondary", "oklch(0.92 0.02 200)"],
  ["accent", "oklch(0.72 0.19 190)"],
  ["muted", "oklch(0.94 0.01 200)"],
  ["destructive", "oklch(0.55 0.22 27)"],
  ["border", "oklch(0.88 0.02 200)"],
  ["ring", "oklch(0.60 0.16 190)"],
]

const darkColors = [
  ["background", "oklch(0.13 0.03 220)"],
  ["foreground", "oklch(0.93 0.01 200)"],
  ["primary", "oklch(0.72 0.19 190)"],
  ["primary-foreground", "oklch(0.13 0.04 210)"],
  ["secondary", "oklch(0.22 0.04 215)"],
  ["accent", "oklch(0.72 0.19 190)"],
  ["muted", "oklch(0.22 0.03 215)"],
  ["destructive", "oklch(0.60 0.22 27)"],
  ["border", "oklch(0.28 0.04 215)"],
  ["ring", "oklch(0.72 0.19 190)"],
]

export default function DesignSystemPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Karelia Base
        </h1>
        <p className="text-lg text-muted-foreground">
          A Nordic Brutalist design system with deep teal foundations and
          electric cyan accents. Uses OKLCH color space for perceptually uniform
          colors.
        </p>
      </div>

      <InstallCommand name="karelia-base" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Typography</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Variable</th>
                <th className="px-4 py-2 text-left font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-2 font-mono text-xs">font-sans</td>
                <td className="px-4 py-2 text-muted-foreground">
                  Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif
                </td>
              </tr>
              <tr className="border-b border-border last:border-0">
                <td className="px-4 py-2 font-mono text-xs">font-mono</td>
                <td className="px-4 py-2 text-muted-foreground">
                  JetBrains Mono Variable, JetBrains Mono, ui-monospace,
                  monospace
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Palette — Light</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {lightColors.map(([name, value]) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-border p-3"
            >
              <div
                className="size-8 shrink-0 rounded-md border border-border"
                style={{ backgroundColor: value }}
              />
              <div>
                <p className="font-mono text-xs font-medium">{name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Palette — Dark</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {darkColors.map(([name, value]) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-lg border border-border p-3"
            >
              <div
                className="size-8 shrink-0 rounded-md border border-border"
                style={{ backgroundColor: value }}
              />
              <div>
                <p className="font-mono text-xs font-medium">{name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Animations</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Name</th>
                <th className="px-4 py-2 text-left font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "animate-pulse-glow",
                  "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                ],
                [
                  "animate-slide-up",
                  "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                ],
                ["animate-fade-in", "fade-in 0.3s ease-out"],
              ].map(([name, value]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 font-mono text-xs">{name}</td>
                  <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Complete OKLCH color system (light + dark themes)</li>
          <li>Inter Variable (sans) + JetBrains Mono (mono) fonts</li>
          <li>Custom animations (pulse-glow, slide-up, fade-in)</li>
          <li>Base layer styles for typography and borders</li>
          <li>tw-animate-css integration</li>
          <li>Lucide icons configuration</li>
          <li>Utility function (cn) for class merging</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>
        <CodeBlock title="components.json (generated)">{`{
  "style": "karelia",
  "iconLibrary": "lucide",
  "tailwind": {
    "baseColor": "neutral"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}`}</CodeBlock>
      </section>
    </div>
  )
}
