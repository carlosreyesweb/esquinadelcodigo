import { formatDuration } from "date-fns"
import { es } from "date-fns/locale"

export function useReadingTime(content: string) {
  const WORDS_PER_MINUTE = 200
  const textLength = content.trim().split(" ").length
  const readingTime = Math.ceil(textLength / WORDS_PER_MINUTE)
  const readingTimeString = formatDuration(
    { minutes: readingTime },
    { locale: es },
  )

  return { readingTime, readingTimeString }
}
