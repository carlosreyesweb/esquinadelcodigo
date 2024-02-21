import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "La Esquina del Código"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  try {
    const robotoBlackFontData = await fetch(
      new URL("../assets/Roboto-Black.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer())
    const robotoRegularFontData = await fetch(
      new URL("../assets/Roboto-Regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0d1017",
            textAlign: "center",
            color: "#bfbdb6",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              letterSpacing: "-0.025em",
              color: "#e6b673",
              fontFamily: '"Roboto-Black"',
            }}
          >
            La Esquina del Código
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "2rem",
              display: "flex",
              fontFamily: '"Roboto-Regular"',
            }}
          >
            <span>Un blog de</span>
            <span style={{ color: "#33DFBD", marginLeft: "0.5rem" }}>
              Carlos Reyes Web
            </span>
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
