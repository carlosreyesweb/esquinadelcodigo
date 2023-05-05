import { Post as PostModel } from '@/modules/posts'
import NoPosts from '../no-posts/NoPosts'
import Post from '../post/Post'

interface PostsProps {
  data: PostModel[]
  title: string
  as: 'section' | 'aside'
}
export default function Posts({ data, title, as: Tag }: PostsProps) {
  return (
    <Tag className="grid gap-y-medium">
      <header>
        <h2 className="text-center text-xl font-bold">{title}</h2>
      </header>
      {data.length ? (
        data.map((post) => <Post key={post.slug} data={post} />)
      ) : (
        <NoPosts />
      )}
    </Tag>
  )
}
