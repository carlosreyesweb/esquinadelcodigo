import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

interface NotFoundProps {}
export default function NotFound(props: NotFoundProps) {
  return (
    <>
      <NextSeo title="404" description="¡No hay nada por aquí!" />
      <main className="grid content-center justify-items-center gap-medium">
        <span className="text-9xl text-primary">🥺</span>
        <h1 className="text-center text-2xl font-bold">
          No hay nada aquí. ¡Lo siento tanto!
        </h1>
        <Link
          href="/"
          className="flex items-center gap-x-small rounded-lg bg-secondary px-4 py-2 text-lg font-medium no-underline ring-2 ring-inset ring-primary"
        >
          <FaHome />
          <span>Volver al inicio</span>
        </Link>
      </main>
    </>
  )
}
