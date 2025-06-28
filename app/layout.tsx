import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { clientEnvironment } from "@/environment"
import { cn } from "@/lib/utils"
import { GoogleTagManager } from "@next/third-parties/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata, Viewport } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"

const sansFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
})
const monoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(sansFont.variable, monoFont.variable)}>
      {clientEnvironment.gtmId ? (
        <GoogleTagManager gtmId={clientEnvironment.gtmId} />
      ) : null}
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  themeColor: "#0d1017",
}

export const metadata: Metadata = {
  title: {
    template: "%s | La Esquina del Código",
    default: "La Esquina del Código",
  },
  metadataBase: new URL(clientEnvironment.baseUrl),
  creator: "Carlos Reyes Web",
  twitter: {
    card: "summary_large_image",
    creator: "@carlosreyesweb",
  },
  generator: "Next.js",
}
