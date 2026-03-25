"use client"

import { useEffect, useState } from "react"

/**
 * Debounce a value by a given delay in milliseconds.
 *
 * @example
 * ```tsx
 * const [query, setQuery] = useState("")
 * const debouncedQuery = useDebounce(query, 300)
 *
 * useEffect(() => {
 *   // Runs only after 300ms of no changes
 *   search(debouncedQuery)
 * }, [debouncedQuery])
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
