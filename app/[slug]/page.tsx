import ArticleContent from "@/components/article-content";
import { ArticlesList } from "@/components/articles-list";
import TweetButton from "@/components/tweet-button";
import { Typography } from "@/components/ui/typography";
import { clientEnvironment } from "@/environment";
import { postsModule } from "@/modules/posts";
import { ArrowLeft } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { slug: string };
}
export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await postsModule.getPostBySlug(params.slug);
  if (!post) notFound();
  const shareUrl = `${clientEnvironment.baseUrl}/${post.slug}`;

  return (
    <>
      <main className="container my-6 overflow-x-hidden">
        <Link
          href="/"
          className="inline-flex items-center space-x-1 hover:text-primary focus:text-primary"
        >
          <ArrowLeft className="w-5 h-5 inline-block" />
          <span>Volver al inicio</span>
        </Link>
        <Image
          src={post.cover}
          alt={post.title}
          className="w-full h-60 object-cover object-center block mt-2 mb-6"
        />
        <Typography variant="h1">{post.title}</Typography>
        <ArticleContent content={post.content} />
        <TweetButton url={shareUrl} content={post.title} />
      </main>
      <aside className="container py-6 space-y-6 border-t">
        <Typography variant="h4" as="h2" className="text-center">
          Artículos relacionados
        </Typography>
        <ArticlesList tags={post.tags} excludeSlug={post.slug} />
      </aside>
    </>
  );
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = await postsModule.getPostBySlug(slug);
  if (!post) notFound();
  const canonical = `${clientEnvironment.baseUrl}/${post.slug}`;

  const parentOgImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.teaser,
    openGraph: {
      images: [post.cover.src, ...parentOgImages],
    },
    alternates: {
      canonical,
    },
  };
}
