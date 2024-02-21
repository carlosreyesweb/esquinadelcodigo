import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(duration)
dayjs.extend(relativeTime)

export function useReadingTime(content: string) {
  const WORDS_PER_MINUTE = 200
  const textLength = content.trim().split(" ").length
  const readingTime = Math.ceil(textLength / WORDS_PER_MINUTE)
  const readingTimeString = dayjs.duration(readingTime, "m").humanize()

  return { readingTime, readingTimeString }
}
