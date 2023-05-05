import { Post } from '@/modules/posts'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

interface PostHeaderProps {
  data: Post
}
export default function PostHeader({ data }: PostHeaderProps) {
  return (
    <header className="grid gap-y-medium">
      <Link href="/" className="flex items-center gap-x-small no-underline">
        <FaArrowLeft />
        <span>Volver al inicio</span>
      </Link>
      <Image
        src={data.cover.src}
        alt={data.cover.alt}
        width={data.cover.width}
        height={data.cover.height}
        className="h-72 w-full rounded-lg object-cover"
        priority
      />
      <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
        {data.title}
      </h1>
    </header>
  )
}
