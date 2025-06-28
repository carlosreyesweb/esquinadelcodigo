import Script from "next/script"

interface AdSenseProps {
  client?: string
}
export function AdSense({ client }: AdSenseProps) {
  if (!client) return null

  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  )
}
