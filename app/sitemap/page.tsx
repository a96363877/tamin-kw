import SiteMap from "@/components/site-map"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#0a2e5c] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="bg-[#1a4980] rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4 text-center">خريطة الموقع</h1>
          <p className="text-center text-gray-300 mb-6">
            استخدم خريطة الموقع للعثور بسهولة على جميع صفحات موقع شركة الكويت للتأمين
          </p>

          <div className="flex justify-center mb-8">
            <Link href="/">
              <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white">العودة للصفحة الرئيسية</Button>
            </Link>
          </div>
        </div>

        <SiteMap />
      </div>
    </div>
  )
}
