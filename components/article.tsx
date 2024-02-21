import { useReadingTime } from "@/hooks/use-reading-time";
import { Post } from "@/modules/posts";
import dayjs from "dayjs";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Typography } from "./ui/typography";

interface ArticleProps {
  data: Post;
}
export function Article({ data }: ArticleProps) {
  const link = `/${encodeURIComponent(data.slug)}`;
  const createdAt = dayjs(data.createdAt).format("LL");
  const { readingTimeString } = useReadingTime(data.content);

  return (
    <Link
      href={link}
      className="group block focus:outline-none hover:ring-2 ring-primary focus:ring-2"
    >
      <article className="space-y-3 px-5 py-4 border bg-card">
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
              className="text-primary border-primary"
            >
              <li>{tag}</li>
            </Badge>
          ))}
        </ul>
      </article>
    </Link>
  );
}
