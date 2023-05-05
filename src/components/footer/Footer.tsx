import Social from '../social/Social'

interface FooterProps {}
export default function Footer(props: FooterProps) {
  return (
    <footer className="grid justify-items-center gap-y-medium">
      <p className="font-medium">
        Hecho con <span className="animate-pulse">💓</span> por{' '}
        <a
          href="https://www.carlosreyesweb.com"
          target="_blank"
          className="no-underline"
        >
          Carlos Reyes
        </a>
      </p>
      <Social />
    </footer>
  )
}
