import ArticleContent from "@/components/article-content"
import { ArticlesList } from "@/components/articles-list"
import { ArticlesListSkeleton } from "@/components/articles-list-skeleton"
import TweetButton from "@/components/tweet-button"
import { Typography } from "@/components/ui/typography"
import { clientEnvironment } from "@/environment"
import { postsModule } from "@/modules/posts"
import { ArrowLeft } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { BlogPosting, WithContext } from "schema-dts"

interface ArticlePageProps {
  params: { slug: string }
}
export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await postsModule.getPostBySlug(params.slug)
  if (!post) notFound()
  const shareUrl = `${clientEnvironment.baseUrl}/${post.slug}`

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.cover.src,
    url: shareUrl,
    abstract: post.teaser,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Carlos Reyes",
      url: "https://www.carlosreyesweb.com",
    },
  }

  return (
    <>
      <main className="container my-6 overflow-x-hidden">
        <Link
          href="/"
          className="inline-flex items-center space-x-1 hover:text-primary focus:text-primary"
        >
          <ArrowLeft className="inline-block h-5 w-5" />
          <span>Volver al inicio</span>
        </Link>
        <Image
          src={post.cover}
          alt={post.title}
          className="mb-6 mt-2 block h-60 w-full object-cover object-center"
          priority
        />
        <Typography variant="h1">{post.title}</Typography>
        <ArticleContent content={post.content} />
        <TweetButton url={shareUrl} content={post.title} />
      </main>
      <aside className="container space-y-6 border-t py-6">
        <Typography variant="h4" as="h2" className="text-center">
          Artículos relacionados
        </Typography>
        <Suspense fallback={<ArticlesListSkeleton length={2} />}>
          <ArticlesList tags={post.tags} excludeSlug={post.slug} />
        </Suspense>
      </aside>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug
  const post = await postsModule.getPostBySlug(slug)
  if (!post) notFound()

  return {
    title: post.title,
    description: post.teaser,
    alternates: {
      canonical: `/${post.slug}`,
    },
  }
}
