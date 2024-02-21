import { cn } from "@/lib/utils";
import toc from "@jsdevtools/rehype-toc";
import "highlight.js/styles/github-dark.min.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { Typography } from "./ui/typography";

interface ArticleContentProps {
  content: string;
}
export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[
        [rehypeHighlight, { ignoreMissing: true }],
        [rehypeExternalLinks, { target: "_blank" }],
        rehypeSlug,
        toc,
      ]}
      components={{
        h1: ({ node, ref, ...props }) => <Typography variant="h1" {...props} />,
        h2: ({ node, ref, ...props }) => (
          <Typography variant="h2" className="mt-10" {...props} />
        ),
        h3: ({ node, ref, ...props }) => (
          <Typography variant="h3" className="mt-8" {...props} />
        ),
        h4: ({ node, ref, ...props }) => (
          <Typography variant="h4" className="mt-6" {...props} />
        ),
        p: ({ node, ref, ...props }) => <Typography variant="p" {...props} />,
        code: ({ node, ref, ...props }) => (
          <Typography variant="inlineCode" {...props} />
        ),
        small: ({ node, ref, ...props }) => (
          <Typography variant="smallText" {...props} />
        ),
        blockquote: ({ node, ref, ...props }) => (
          <Typography variant="blockquote" {...props} />
        ),
        ul: ({ node, ref, ...props }) => <Typography variant="ul" {...props} />,
        ol: ({ node, ref, ...props }) => <Typography variant="ol" {...props} />,
        a: ({ node, ref, ...props }) => (
          <a
            {...props}
            className="text-primary underline-offset-4 hover:underline"
          />
        ),
        pre: ({ node, ref, className, ...props }) => (
          <pre {...props} className={cn("border mt-6", className)} />
        ),
        img: ({ src, alt, title }) => {
          if (!src) return null;
          const [width, height] = src
            .split("/")[5]
            .split("x")
            .map((dimension) => parseInt(dimension));

          return (
            <Image
              src={src}
              className="w-full"
              alt={alt ?? ""}
              title={title}
              width={width}
              height={height}
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
