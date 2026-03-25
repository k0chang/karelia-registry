"use client"

import { useCallback, useState } from "react"

/**
 * Copy text to the clipboard with a temporary "copied" state.
 *
 * @example
 * ```tsx
 * const { copy, copied } = useClipboard({ timeout: 2000 })
 *
 * return (
 *   <button onClick={() => copy("Hello!")}>
 *     {copied ? "Copied!" : "Copy"}
 *   </button>
 * )
 * ```
 */
export function useClipboard({ timeout = 2000 }: { timeout?: number } = {}) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setError(null)

        setTimeout(() => {
          setCopied(false)
        }, timeout)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to copy to clipboard")
        )
        setCopied(false)
      }
    },
    [timeout]
  )

  return { copy, copied, error }
}
