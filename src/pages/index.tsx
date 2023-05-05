import { Posts } from '@/components'
import { Post, postsService } from '@/modules/posts'
import { config } from 'config'
import { GetStaticProps } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'

const SEO: NextSeoProps = {
  title: `${config.siteName} - ${config.tagline}`,
  description:
    'Bienvenido a La Esquina del Código, tu fuente de tips y tutoriales sobre programación, reseñas de periféricos y opiniones personales sobre el sector IT. ¡Explora nuestro contenido ahora!',
  openGraph: {
    type: 'website',
    images: [{ url: `/images/index.og.png` }],
  },
}

interface HomeProps {
  posts: Post[]
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <NextSeo {...SEO} />
      <main>
        <Posts title="Últimos artículos" data={posts} as="section" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await postsService.getAllPosts()

  return {
    props: { posts },
  }
}
