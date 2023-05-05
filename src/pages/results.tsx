import { Posts } from '@/components'
import { Post, postsService } from '@/modules/posts'
import { config } from 'config'
import { GetServerSideProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'

interface ResultsProps {
  results: Post[]
}
export default function Results({ results }: ResultsProps) {
  const { query } = useRouter()
  const title = query.term
    ? `Resultados de búsqueda para "${query.term}"`
    : `Artículos con la etiqueta "${query.tag}"`
  const SEO: NextSeoProps = {
    title: `${title} - ${config.siteName}`,
    description: title,
  }

  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <Posts title={title} data={results} as="section" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let results: Post[] = []
  if (query.term) results = await postsService.searchPosts(query.term as string)
  if (query.tag) results = await postsService.getPostsByTag(query.tag as string)

  return { props: { results } }
}
