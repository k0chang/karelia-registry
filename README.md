# Karelia Registry

A [shadcn/ui](https://ui.shadcn.com) compatible component registry serving UI components, hooks, utilities, and a custom design system. Built with Next.js 16, deployed on Cloudflare Workers, and protected by Cloudflare Access.

**Live:** https://karelia-registry.ehlersiana.workers.dev

## Registry Items

| Name | Type | Description |
|------|------|-------------|
| `button` | UI | Versatile button with multiple variants and sizes, built on @base-ui/react |
| `input` | UI | Styled text input built on @base-ui/react |
| `label` | UI | Accessible label for form controls |
| `card` | UI | Card with header, content, and footer sections |
| `date-utils` | Lib | Date utility functions using native Intl API |
| `use-debounce` | Hook | Debounce a value by a specified delay |
| `use-clipboard` | Hook | Copy text to clipboard with temporary state |
| `login-form` | Block | Login form with email/password and social auth (GitHub, Google) |
| `karelia-prompt` | Prompt | AI coding assistant prompt with Karelia Registry usage guidelines |
| `karelia-base` | Base | Nordic Brutalist design system with deep teal/cyan OKLCH palette |

## Installation

### 1. Configure Authentication

The registry API (`/r/*`) is protected by Cloudflare Access. Add your service token credentials:

```env
CF_ACCESS_CLIENT_ID=your_client_id
CF_ACCESS_CLIENT_SECRET=your_client_secret
```

### 2. Add the Registry

Add the Karelia namespace to your `components.json`:

```json
{
  "registries": {
    "@karelia": {
      "url": "https://karelia-registry.ehlersiana.workers.dev/r/{name}.json",
      "headers": {
        "CF-Access-Client-Id": "${CF_ACCESS_CLIENT_ID}",
        "CF-Access-Client-Secret": "${CF_ACCESS_CLIENT_SECRET}"
      }
    }
  }
}
```

### 3. Install Components

> **Important:** You must use the `@karelia/` namespace prefix. Direct URL installation (`shadcn add https://...`) does not work because the CLI does not send authentication headers for raw URLs.

```bash
npx shadcn@latest add @karelia/button
npx shadcn@latest add @karelia/login-form
npx shadcn@latest add @karelia/use-debounce
```

## Development

```bash
pnpm install
pnpm registry:build   # Build registry JSON to public/r/
pnpm dev              # Start dev server
```

## Deployment

```bash
pnpm registry:build   # Rebuild registry
pnpm run deploy       # Build & deploy to Cloudflare Workers
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **UI Primitives:** @base-ui/react, class-variance-authority
- **Styling:** Tailwind CSS v4, OKLCH color space
- **Registry:** shadcn CLI (`shadcn build`)
- **Deployment:** Cloudflare Workers via @opennextjs/cloudflare
- **Auth:** Cloudflare Access (Zero Trust)

## License

MIT
