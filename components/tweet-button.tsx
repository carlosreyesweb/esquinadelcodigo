import { Twitter } from "lucide-react"
import { Button } from "./ui/button"

interface TweetButtonProps {
  url: string
  content: string
}
export default function TweetButton({ url, content }: TweetButtonProps) {
  const intent = new URL("https://twitter.com/intent/tweet")
  intent.searchParams.append("url", url)
  intent.searchParams.append("text", content)

  return (
    <div className="mt-6 flex justify-center">
      <Button asChild>
        <a href={intent.toString()} target="_blank">
          <Twitter className="mr-2 h-4 w-4" />
          <span>Compartir en Twitter</span>
        </a>
      </Button>
    </div>
  )
}
