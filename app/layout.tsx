import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Header } from "@/components/header"
import { clientEnvironment } from "@/environment"
import { cn } from "@/lib/utils"
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
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
      {clientEnvironment.gaMeasurementId ? (
        <GoogleAnalytics gaID={clientEnvironment.gaMeasurementId} />
      ) : null}
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
