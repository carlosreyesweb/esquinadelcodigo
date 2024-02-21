import { Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface TweetButtonProps {
  url: string;
  content: string;
}
export default function TweetButton({ url, content }: TweetButtonProps) {
  const intent = new URL("https://twitter.com/intent/tweet");
  intent.searchParams.append("url", url);
  intent.searchParams.append("text", content);

  return (
    <div className="flex justify-center mt-6">
      <Button asChild>
        <a href={intent.toString()} target="_blank">
          <Twitter className="w-4 h-4 mr-2" />
          <span>Compartir en Twitter</span>
        </a>
      </Button>
    </div>
  );
}
