import { clientEnvironment } from "@/environment";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sansFont = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sansFont.variable}>
      <body>{children}</body>
      {clientEnvironment.gaMeasurementId ? (
        <GoogleAnalytics gaId={clientEnvironment.gaMeasurementId} />
      ) : null}
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | La Esquina del Código",
    default: "La Esquina del Código",
  },
  metadataBase: new URL(clientEnvironment.baseUrl),
  creator: "Carlos Reyes Web",
};
