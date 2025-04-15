import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"

export default function Footer() {
//  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#061631] text-white"  dir="rtl">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {/* Column 1 - About */}
          <div dir="rtl">
            <div className="flex items-center mb-6">
              <Image src="/next.svg" alt="KIC Logo" width={180} height={90} className="ml-3" />
             
            </div>
            <p className="text-sm text-gray-300 mb-4">
              شركة الكويت للإستثمار هي شركة استثمارية رائدة في الكويت، تأسست عام 1961، وتقدم مجموعة متكاملة من الخدمات
              المالية والاستثمارية.
            </p>
            <div className="flex justify-end space-x-3 space-x-reverse">
              <Link href="#" className="bg-blue-900 p-2 rounded-full hover:bg-[#c9a96e] transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-blue-900 p-2 rounded-full hover:bg-[#c9a96e] transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-blue-900 p-2 rounded-full hover:bg-[#c9a96e] transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-blue-900 p-2 rounded-full hover:bg-[#c9a96e] transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-blue-900 p-2 rounded-full hover:bg-[#c9a96e] transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#c9a96e]">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                "الخدمات المصرفية",
                "الاستثمار",
                "العقارات",
                "التمويل",
                "الشركات",
                "الأفراد",
                "المركز الإعلامي",
                "الوظائف",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm text-gray-300 hover:text-[#c9a96e] flex items-center justify-end">
                    <ArrowRight className="h-3 w-3 mr-1 inline" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div dir="rtl" >
            <h3 className="font-bold text-lg mb-6 text-[#c9a96e]">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-end">
                <div className="text-right">
                  <p className="text-sm font-semibold">المقر الرئيسي</p>
                  <p className="text-sm text-gray-300">شارع الشهداء، برج الحمراء، الكويت</p>
                </div>
                <div className="bg-[#c9a96e] p-2 rounded-md ml-3 mt-1">
                  <Image src="/placeholder.svg?height=16&width=16" alt="Location" width={16} height={16} />
                </div>
              </li>
              <li className="flex items-start justify-end">
                <div className="text-right">
                  <p className="text-sm font-semibold">البريد الإلكتروني</p>
                  <p className="text-sm text-gray-300">info@kic.com.kw</p>
                </div>
                <div className="bg-[#c9a96e] p-2 rounded-md ml-3 mt-1">
                  <Image src="/placeholder.svg?height=16&width=16" alt="Email" width={16} height={16} />
                </div>
              </li>
              <li className="flex items-start justify-end">
                <div className="text-right">
                  <p className="text-sm font-semibold">رقم الهاتف</p>
                  <p className="text-sm text-gray-300">+965 1234 5678</p>
                </div>
                <div className="bg-[#c9a96e] p-2 rounded-md ml-3 mt-1">
                  <Image src="/placeholder.svg?height=16&width=16" alt="Phone" width={16} height={16} />
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#c9a96e]">النشرة الإخبارية</h3>
            <p className="text-sm text-gray-300 mb-4">
              اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والعروض الخاصة.
            </p>
            <div className="flex mb-4">
              <Button className="bg-[#c9a96e] hover:bg-[#b89355] rounded-r-none">اشتراك</Button>
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="rounded-l-none text-right border-[#c9a96e] bg-transparent"
              />
            </div>
            <div className="flex justify-end space-x-3 space-x-reverse mt-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Certification 1"
                width={40}
                height={40}
                className="opacity-70 hover:opacity-100"
              />
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Certification 2"
                width={40}
                height={40}
                className="opacity-70 hover:opacity-100"
              />
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Certification 3"
                width={40}
                height={40}
                className="opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#051124] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-right order-2 md:order-1 mt-3 md:mt-0">
            © {2025} شركة الكويت للإستثمار. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 space-x-reverse order-1 md:order-2">
            {["سياسة الخصوصية", "الشروط والأحكام", "سياسة أمن المعلومات", "خريطة الموقع"].map((item, index) => (
              <Link key={index} href="#" className="text-xs text-gray-400 hover:text-[#c9a96e]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
