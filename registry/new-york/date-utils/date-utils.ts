/**
 * Format a date using Intl.DateTimeFormat.
 */
export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale: string = "en-US"
): string {
  const d = toDate(date)
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  }).format(d)
}

/**
 * Parse a date string, number, or Date into a Date object.
 */
export function toDate(value: Date | string | number): Date {
  if (value instanceof Date) return value
  const d = new Date(value)
  if (isNaN(d.getTime())) {
    throw new Error(`Invalid date: ${value}`)
  }
  return d
}

/**
 * Check if a date is today.
 */
export function isToday(date: Date | string | number): boolean {
  const d = toDate(date)
  const now = new Date()
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  )
}

/**
 * Calculate the number of days between two dates.
 */
export function daysBetween(
  a: Date | string | number,
  b: Date | string | number
): number {
  const dateA = toDate(a)
  const dateB = toDate(b)
  const diffMs = Math.abs(dateB.getTime() - dateA.getTime())
  return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

/**
 * Format a date as a relative time string (e.g., "2 days ago", "in 3 hours").
 */
export function formatRelative(
  date: Date | string | number,
  locale: string = "en-US"
): string {
  const d = toDate(date)
  const now = new Date()
  const diffMs = d.getTime() - now.getTime()
  const diffSec = Math.round(diffMs / 1000)
  const diffMin = Math.round(diffSec / 60)
  const diffHour = Math.round(diffMin / 60)
  const diffDay = Math.round(diffHour / 24)

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  if (Math.abs(diffDay) >= 1) return rtf.format(diffDay, "day")
  if (Math.abs(diffHour) >= 1) return rtf.format(diffHour, "hour")
  if (Math.abs(diffMin) >= 1) return rtf.format(diffMin, "minute")
  return rtf.format(diffSec, "second")
}

/**
 * Format a date as ISO date string (YYYY-MM-DD).
 */
export function toISODateString(date: Date | string | number): string {
  const d = toDate(date)
  return d.toISOString().split("T")[0]
}
