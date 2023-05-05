import { FaTwitter } from 'react-icons/fa'

interface TweetButtonProps {
  url: string
  content: string
}
export default function TweetButton({ url, content }: TweetButtonProps) {
  const intent = new URL('https://twitter.com/intent/tweet')
  intent.searchParams.append('url', url)
  intent.searchParams.append('text', content)

  return (
    <a
      href={intent.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex max-w-max items-center gap-x-2 rounded-lg border-2 border-primary px-4 py-2 no-underline"
    >
      <FaTwitter />
      <span>Compartir en Twitter</span>
    </a>
  )
}
