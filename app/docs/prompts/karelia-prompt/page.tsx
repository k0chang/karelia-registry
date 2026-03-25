import type { Metadata } from "next";
import { CodeBlock, InstallCommand } from "@/components/docs/code-block";

export const metadata: Metadata = { title: "Karelia Prompt" };

export default function KareliaPromptPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Karelia Prompt
        </h1>
        <p className="text-lg text-muted-foreground">
          AI coding assistant prompt with Karelia Registry usage guidelines.
        </p>
      </div>

      <InstallCommand name="karelia-prompt" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          This registry item installs a prompt file for AI coding assistants
          (Claude Code, Cursor, etc.) that describes how to use the Karelia
          Registry. It includes component conventions, installation
          instructions, available items, and design system details.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Gets Installed</h2>
        <p className="text-muted-foreground">
          A Markdown file is placed at{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            ~/.claude/rules/karelia.md
          </code>{" "}
          containing:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Registry URL and authentication setup</li>
          <li>All available components, hooks, and utilities with install commands</li>
          <li>Design system overview (OKLCH palette, fonts, animations)</li>
          <li>Component conventions (@base-ui/react, CVA, cn utility)</li>
          <li>Guidelines for modifying components</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Target</h2>
        <p className="text-muted-foreground">
          By default, the prompt is installed to{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
            ~/.claude/rules/karelia.md
          </code>
          . You can move it to a different location depending on your AI tool:
        </p>
        <CodeBlock title="Cursor">{`# Move to Cursor rules directory
mv ~/.claude/rules/karelia.md .cursor/rules/karelia.mdc`}</CodeBlock>
        <CodeBlock title="Project-scoped (Claude Code)">{`# Move to project-level rules
mv ~/.claude/rules/karelia.md .claude/rules/karelia.md`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Use This?</h2>
        <p className="text-muted-foreground">
          When your AI assistant knows about the Karelia Registry, it can:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Correctly install components using the <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">@karelia/</code> namespace</li>
          <li>Follow the design system conventions when generating new UI code</li>
          <li>Use the right patterns (CVA variants, OKLCH colors, cn utility)</li>
          <li>Understand authentication requirements</li>
        </ul>
      </section>
    </div>
  );
}
