import { ArticlesList } from "@/components/articles-list"
import { ArticlesListSkeleton } from "@/components/articles-list-skeleton"
import { Typography } from "@/components/ui/typography"
import { clientEnvironment } from "@/environment"
import { Metadata } from "next"
import { Suspense } from "react"
import { WebSite, WithContext } from "schema-dts"

interface HomePageProps {
  searchParams?: {
    search?: string
  }
}
export default function HomePage({ searchParams }: HomePageProps) {
  const search = searchParams?.search ?? ""

  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: clientEnvironment.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${clientEnvironment.baseUrl}/?search={query}`,
      },
      // @ts-expect-error
      "query-input": "required name=query",
    },
  }

  return (
    <>
      <main className="container my-6 space-y-6">
        <Typography variant="h4" as="h2" className="text-center">
          {search ? `Resultados para "${search}"` : "Últimos artículos"}
        </Typography>
        <Suspense key={search} fallback={<ArticlesListSkeleton length={6} />}>
          <ArticlesList search={search} />
        </Suspense>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const search = searchParams?.search

  return {
    title: search
      ? `Resultados para "${search}" | La Esquina del Código`
      : "La Esquina del Código | Un blog de Carlos Reyes Web",
    description: search
      ? `Estos son los resultados que coinciden con tu búsqueda "${search}".`
      : "Un blog sobre programación y tecnología, creado por Carlos Reyes Web.",
    alternates: {
      canonical: "/",
    },
  }
}
