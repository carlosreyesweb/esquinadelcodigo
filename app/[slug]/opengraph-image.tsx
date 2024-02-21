import { postsModule } from "@/modules/posts"
import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Imagen del post"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const robotoBlackFontData = await fetch(
      new URL("../../assets/Roboto-Black.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer())
    const robotoRegularFontData = await fetch(
      new URL("../../assets/Roboto-Regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer())

    const slug = params.slug
    const post = await postsModule.getPostBySlug(slug)

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "4rem",
            backgroundColor: "#0d1017",
            padding: "6rem",
            lineHeight: 1,
          }}
        >
          <div
            style={{
              width: 500,
              display: "flex",
              flexDirection: "column",
              color: "#bfbdb6",
            }}
          >
            <div
              style={{
                fontFamily: '"Roboto-Black"',
                fontSize: "2rem",
                color: "#e6b673",
              }}
            >
              La Esquina del Código
            </div>
            <div
              style={{
                fontFamily: '"Roboto-Black"',
                fontSize: "3rem",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                margin: "1.5rem 0",
              }}
            >
              {post?.title}
            </div>
            <div
              style={{
                fontFamily: '"Roboto-Regular"',
                fontSize: "1.5rem",
                lineHeight: 1.5,
              }}
            >
              {post?.teaser}
            </div>
          </div>
          <div
            style={{
              width: 500,
              height: "100%",
              display: "flex",
            }}
          >
            {post?.cover && (
              <img
                src={post.cover.src}
                alt={post.cover.alt}
                width={post.cover.width}
                height={post.cover.height}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            data: robotoBlackFontData,
            name: "Roboto-Black",
            style: "normal",
          },
          {
            data: robotoRegularFontData,
            name: "Roboto-Regular",
            style: "normal",
          },
        ],
      },
    )
  } catch (error) {
    console.error(error)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
