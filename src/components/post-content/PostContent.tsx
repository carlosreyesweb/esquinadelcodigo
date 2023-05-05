import { Post } from '@/modules/posts'
import toc from '@jsdevtools/rehype-toc'
import 'highlight.js/styles/github-dark.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

interface PostMainProps {
  data: Post
}
export default function PostMain({ data }: PostMainProps) {
  return (
    <ReactMarkdown
      className="prose prose-primary max-w-none overflow-x-hidden prose-pre:p-0"
      rehypePlugins={[
        [rehypeHighlight, { ignoreMissing: true }],
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'] },
        ],
        rehypeSlug,
        toc,
      ]}
      components={{
        img: ({ src, alt, title }) => {
          if (!src) return null
          const [width, height] = src
            .split('/')[5]
            .split('x')
            .map((dimension) => parseInt(dimension))

          return (
            <Image
              src={src}
              className="w-full rounded-lg"
              alt={alt || 'Post image'}
              title={title}
              width={width}
              height={height}
            />
          )
        },
      }}
    >
      {data.content}
    </ReactMarkdown>
  )
}
