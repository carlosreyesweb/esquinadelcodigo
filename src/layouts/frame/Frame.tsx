import { BackToTop, Footer, Header, Spinner } from '@/components'

interface FrameProps {
  children?: React.ReactNode
}
export default function Frame({ children }: FrameProps) {
  return (
    <div className="mx-auto grid min-h-screen max-w-3xl grid-rows-[min-content_1fr_min-content] gap-y-large p-8">
      <Spinner />
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}
