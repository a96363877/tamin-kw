import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Kuwait Investment Company",
  description: "Kuwait Investment Company (KIC) - Your trusted investment partner",
  keywords:"insurance, Kuwait, medical, travel, motor, car, policy, comprehensive, protection, value, service, coverage, تأمين، الكويت، طبي، سفر، سيارات، بوليصة، شامل، حماية، قيمة، خدمة، تغطية",
  openGraph:["https://www.kic-kw.com/images/SharingImage.png"]as any
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
      </body>
    </html>
  )
}

