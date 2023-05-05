import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from '../search/Search'

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  const router = useRouter()
  const Tag = router.route.includes('/[slug]') ? 'div' : 'h1'

  return (
    <header className="flex flex-col items-center gap-medium md:flex-row md:justify-between">
      <Tag className="text-center text-3xl font-extrabold md:text-left">
        <Link href="/" className="no-underline">
          La Esquina del Código.
        </Link>
        <span className="block text-lg">Un blog de Carlos Reyes</span>
      </Tag>
      <Search />
    </header>
  )
}
