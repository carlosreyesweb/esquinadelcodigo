import { Post as PostModel } from '@/modules/posts'
import dayjs from 'dayjs'
import Link from 'next/link'
import Tags from '../tags/Tags'
import { useReadingTime } from './useReadingTime'

interface PostProps {
  data: PostModel
}
export default function Post({ data }: PostProps) {
  const link = `/${encodeURIComponent(data.slug)}`
  const createdAt = dayjs(data.createdAt).format('LL')
  const { readingTimeString } = useReadingTime(data.content)

  return (
    <article className="grid gap-y-small rounded-lg bg-secondary p-4 ring-1 ring-inset ring-gray-800">
      <header>
        <h3 className="text-2xl font-bold">
          <Link href={link} className="no-underline">
            {data.title}
          </Link>
        </h3>
      </header>
      <p className="line-clamp-2">{data.teaser}</p>
      <small className="block">
        <time dateTime={data.createdAt}>{createdAt}</time>
        {' — '}
        <time>🕜 {readingTimeString}</time>
      </small>
      <Tags data={data.tags} />
    </article>
  )
}
