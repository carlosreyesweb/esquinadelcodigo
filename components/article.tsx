"use client"

import { useReadingTime } from "@/hooks/use-reading-time"
import { Post } from "@/modules/posts"
import { formatRelative } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Typography } from "./ui/typography"

interface ArticleProps {
  data: Post
}
export function Article({ data }: ArticleProps) {
  const link = `/${encodeURIComponent(data.slug)}`
  const createdAt = formatRelative(new Date(data.createdAt), new Date(), {
    locale: es,
  })
  const { readingTimeString } = useReadingTime(data.content)

  return (
    <article className="group relative space-y-3 border bg-card px-5 py-4 ring-primary focus-within:ring-2 hover:ring-2">
      <Typography variant="h3" className="text-primary">
        {data.title}
      </Typography>
      <Typography variant="p" className="line-clamp-2">
        {data.teaser}
      </Typography>
      <Typography variant="smallText" className="block text-muted-foreground">
        <time dateTime={data.createdAt}>{createdAt}</time>
        {" — "}
        <time>🕜 {readingTimeString}</time>
      </Typography>
      <ul role="list" className="flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <Badge
            key={tag}
            asChild
            variant="outline"
            className="border-primary text-primary"
          >
            <li>{tag}</li>
          </Badge>
        ))}
      </ul>
      <Link
        href={link}
        className="group absolute inset-0 block select-none focus:outline-none"
      >
        <span className="sr-only">Leer &quot;{data.title}&quot;</span>
      </Link>
    </article>
  )
}
