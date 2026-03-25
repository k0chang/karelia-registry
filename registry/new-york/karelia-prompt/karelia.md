# Karelia Registry — Usage Guide

This project uses UI components, hooks, and utilities from the **Karelia Registry**, a private shadcn/ui-compatible component registry.

## Registry URL

```
https://karelia-registry.ehlersiana.workers.dev/r/{name}.json
```

## Authentication

The registry is protected by Cloudflare Access. Requests must include:

- `CF-Access-Client-Id` header
- `CF-Access-Client-Secret` header

These are configured as environment variables (`CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET`) and referenced in `components.json`.

## Installing Components

Always use the `@karelia/` namespace prefix:

```bash
npx shadcn@latest add @karelia/<name>
```

Direct URL installation (`npx shadcn@latest add https://...`) does **not** work because the CLI only sends authentication headers for namespaced registries.

## Available Items

| Name | Type | Install Command |
|------|------|-----------------|
| `button` | UI Component | `npx shadcn@latest add @karelia/button` |
| `input` | UI Component | `npx shadcn@latest add @karelia/input` |
| `label` | UI Component | `npx shadcn@latest add @karelia/label` |
| `card` | UI Component | `npx shadcn@latest add @karelia/card` |
| `date-utils` | Library | `npx shadcn@latest add @karelia/date-utils` |
| `use-debounce` | Hook | `npx shadcn@latest add @karelia/use-debounce` |
| `use-clipboard` | Hook | `npx shadcn@latest add @karelia/use-clipboard` |
| `login-form` | Block | `npx shadcn@latest add @karelia/login-form` |
| `karelia-base` | Design System | `npx shadcn@latest add @karelia/karelia-base` |

## Design System

The `karelia-base` item installs the full Karelia design system:

- **Color Palette**: OKLCH-based deep teal/cyan with electric accents
- **Fonts**: Inter Variable (sans) + JetBrains Mono Variable (mono)
- **Themes**: Light and dark mode CSS variables
- **Animations**: pulse-glow, slide-up, fade-in keyframes

Install the base design system first, then add individual components:

```bash
npx shadcn@latest add @karelia/karelia-base
npx shadcn@latest add @karelia/button @karelia/input @karelia/label @karelia/card
```

## Component Conventions

- All UI components use `@base-ui/react` primitives with `class-variance-authority` for variants
- The `cn()` utility from `@/lib/utils` is used for className merging (clsx + tailwind-merge)
- Components follow the shadcn/ui pattern: exported as named exports, composable, and unstyled by default

## When Modifying Components

- Preserve the CVA variant structure when adding new variants
- Use OKLCH color values from the design system CSS variables
- Keep components accessible — use semantic HTML and ARIA attributes
- Test both light and dark themes
