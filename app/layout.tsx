import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"
import { GoogleTagManager } from "@next/third-parties/google"
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Kuwait Investment Company",
  description: "Kuwait Investment Company (KIC) - Your trusted investment partner",
  keywords:"التأمين، الكويت، طبي، سفر، سيارات، بوليصة، شامل، حماية، قيمة، خدمة، تغطية",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
        <Toaster />
        <GoogleTagManager gtmId="AW-410329319" />


      </body>
    </html>
  )
}

