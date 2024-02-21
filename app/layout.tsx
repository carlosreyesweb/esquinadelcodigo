import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { clientEnvironment } from "@/environment"
import { cn } from "@/lib/utils"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Metadata } from "next"
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
      </body>
      {clientEnvironment.gaMeasurementId ? (
        <GoogleAnalytics gaId={clientEnvironment.gaMeasurementId} />
      ) : null}
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: "%s | La Esquina del Código",
    default: "La Esquina del Código",
  },
  metadataBase: new URL(clientEnvironment.baseUrl),
  creator: "Carlos Reyes Web",
}
