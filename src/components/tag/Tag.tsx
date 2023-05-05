import Link from 'next/link'

interface TagProps {
  tag: string
}
export default function Tag({ tag }: TagProps) {
  return (
    <Link
      href={{ pathname: '/results', query: { tag } }}
      className="flex items-center rounded-md px-2 py-1 text-sm font-medium no-underline ring-1 ring-inset ring-primary"
    >
      {tag}
    </Link>
  )
}
