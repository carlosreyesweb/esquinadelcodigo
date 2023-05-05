import { PostContent, PostHeader, Posts, TweetButton } from '@/components'
import { Post as PostModel, postsService } from '@/modules/posts'
import { config } from 'config'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

interface PostProps {
  post: PostModel
  relatedPosts: PostModel[]
}
export default function Post({ post, relatedPosts }: PostProps) {
  const SEO: NextSeoProps = {
    title: `${post.title} - ${config.siteName}`,
    description: post.teaser,
    openGraph: {
      type: 'article',
      images: [
        {
          url: post.ogImage.src,
        },
      ],
      article: {
        authors: ['Carlos Reyes'],
        tags: post.tags,
        publishedTime: post.createdAt,
      },
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <main className="grid gap-y-medium">
        <article className="grid gap-y-small">
          <PostHeader data={post} />
          <PostContent data={post} />
        </article>
        <TweetButton
          url={`${config.host}/${post.slug}`}
          content={`"${post.title}" por @carlosreyesweb`}
        />
      </main>
      {relatedPosts.length ? (
        <Posts title="Podría interesarte..." data={relatedPosts} as="aside" />
      ) : null}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await postsService.getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await postsService.getPostBySlug(params?.slug as string)
  if (!post) return { notFound: true }
  const relatedPosts = await postsService.getRelatedPostsByTags(
    post.tags,
    post.slug
  )

  return {
    props: {
      post,
      relatedPosts,
    },
  }
}
