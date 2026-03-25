import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = { title: "Getting Started" };

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Getting Started
        </h1>
        <p className="text-lg text-muted-foreground">
          Configure your project to use the Karelia Registry.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Authentication</h2>
        <p className="text-muted-foreground">
          The Karelia Registry is protected by Cloudflare Access. You will need
          a valid service token to access the registry API. Contact the registry
          administrator to obtain your credentials.
        </p>
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Note for administrators</p>
          <p className="mt-1">
            The Cloudflare Access policy action must be set to{" "}
            <strong>Service Auth</strong>. The Allow action requires
            browser-based login, which does not work with CLI tools like shadcn.
          </p>
        </div>
        <p className="text-muted-foreground">
          Once you have your service token, set the following environment
          variables:
        </p>
        <CodeBlock title=".env.local">{`CF_ACCESS_CLIENT_ID=your_client_id
CF_ACCESS_CLIENT_SECRET=your_client_secret`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Add the Registry</h2>
        <p className="text-muted-foreground">
          Add the Karelia namespace to your{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
            components.json
          </code>
          :
        </p>
        <CodeBlock title="components.json">{`{
  "registries": {
    "@karelia": {
      "url": "https://karelia-registry.ehlersiana.workers.dev/r/{name}.json",
      "headers": {
        "CF-Access-Client-Id": "\${CF_ACCESS_CLIENT_ID}",
        "CF-Access-Client-Secret": "\${CF_ACCESS_CLIENT_SECRET}"
      }
    }
  }
}`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Install Components</h2>
        <p className="text-muted-foreground">
          Use the shadcn CLI to install any registry item:
        </p>
        <CodeBlock title="Terminal">{`# Using namespace
npx shadcn@latest add @karelia/button

# Using direct URL
npx shadcn@latest add https://karelia-registry.ehlersiana.workers.dev/r/button.json`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Items</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Name</th>
                <th className="px-4 py-2 text-left font-medium">Type</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["button", "UI", "Button with variants and sizes"],
                ["input", "UI", "Text input component"],
                ["label", "UI", "Accessible form label"],
                ["card", "UI", "Card container component"],
                ["date-utils", "Lib", "Date utility functions"],
                ["use-debounce", "Hook", "Value debounce hook"],
                ["use-clipboard", "Hook", "Clipboard copy hook"],
                ["login-form", "Block", "Login form with social auth"],
                ["karelia-base", "Base", "Full design system"],
              ].map(([name, type, desc]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 font-mono text-xs">{name}</td>
                  <td className="px-4 py-2 text-muted-foreground">{type}</td>
                  <td className="px-4 py-2 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
