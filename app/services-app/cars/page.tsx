"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Phone, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { addData } from "@/lib/firebasee"

export default function CarInsurancePage() {
  const [isExpanded, setIsExpanded] = useState(false)
const handleCurrantPage=()=>{
  const _id=localStorage.getItem('visitor')
  addData({
    id:_id,
    currantPage:'تامين السيارت'
})
}
useEffect(()=>{
  handleCurrantPage()
},[])
  const coverageItems = [
    {
      id: "comprehensive",
      title: "تأمين شامل",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      id: "thirdParty",
      title: "تأمين ضد الغير",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: "roadside",
      title: "المساعدة على الطريق",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      ),
    },
    {
      id: "theft",
      title: "الحماية ضد السرقة",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
    },
  ]

  const additionalBenefits = [
    {
      id: "replacement",
      title: "سيارة بديلة أثناء الإصلاح",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      ),
    },
    {
      id: "windshield",
      title: "تغطية الزجاج الأمامي",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#0a2e5c]"
        >
          <path d="m2 22 1-1h3l9-9"></path>
          <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
          <path d="M5 14v4"></path>
          <path d="m12 12 4 10 1.7-4.3L22 16Z"></path>
        </svg>
      ),
    },
  ]

  const otherProducts = [
    {
      id: "travel",
      title: "تأمين السفر",
      image: "/carefree-travelers.png",
      description: "حماية شاملة أثناء سفرك في جميع أنحاء العالم",
    },
    {
      id: "health",
      title: "التأمين الصحي",
      image: "/diverse-hands-healthcare.png",
      description: "رعاية صحية متكاملة لك ولعائلتك",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#0a2e5c]">
      {/* Hero Section */}
      <div className="relative bg-[#0a2e5c]">
        <img src="/149BannerImage.jpg" alt="Car Insurance" 
                  className="w-full h-40 object-cover opacity-30"
                  />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-2xl font-bold mb-2">السيارات</h1>
          <h2 className="text-3xl font-bold mb-4">تأمين السيارات</h2>
          <p className="text-xl">حماية شاملة لسيارتك وراحة بال لك</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 space-y-3">
      <Link href="/apply?type=car">

        <Button className="w-full my-1 bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
          اشتري الآن
        </Button>
        </Link>

        <Link href="/apply?type=car">
          <Button className="w-full my-1 bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
            تقديم طلب
          </Button>
        </Link>
        <Link href="/plans/cars">
          <Button className="w-full  my-1 bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
            احصل على عرض سعر
          </Button>
        </Link>

        <div className="mt-4 border border-[#c9a96e] rounded-md">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 bg-[#c9a96e] text-white rounded-t-md"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? "transform rotate-180" : ""}`} />
            <span>أنواع تأمين السيارات</span>
          </button>
          {isExpanded && (
            <div className="p-4 space-y-2">
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين شامل للسيارات
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين ضد الغير
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين السيارات الفاخرة
              </Link>
            </div>
          )}
        </div>
      </div>


      {/* Coverage Section */}
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c]">ماذا يغطي التأمين</h3>
        <div className="space-y-4">
          {coverageItems.map((item) => (
            <div key={item.id} className="flex items-center p-4 border-b border-gray-200">
              <div className="ml-4 bg-gray-100 p-3 rounded-full">{item.icon}</div>
              <span className="text-[#0a2e5c] font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c]">منافع إضافية</h3>
        <div className="space-y-4">
          {additionalBenefits.map((item) => (
            <div key={item.id} className="flex items-center p-4 border-b border-gray-200">
              <div className="ml-4 bg-gray-100 p-3 rounded-full">{item.icon}</div>
              <span className="text-[#0a2e5c] font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Products */}
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c]">منتجات أخرى مثيرة للاهتمام</h3>
        <div className="space-y-4">
          {otherProducts.map((product) => (
            <div key={product.id} className="relative rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={300}
                height={150}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e5c] to-transparent flex flex-col justify-end p-4">
                <h4 className="text-white font-bold">{product.title}</h4>
                <p className="text-white text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-4 rounded-md">
            عرض جميع المنتجات
            <ChevronRight className="h-4 w-4 mr-2" />
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-1 space-x-reverse">
            <div className="w-2 h-2 rounded-full bg-[#0a2e5c]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="p-4 mt-8 bg-gray-50">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c] text-center">تحتاج مساعدة؟</h3>
        <p className="text-center mb-6">نحن في خدمتك 24/7</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-full shadow-md mb-2">
              <MapPin className="h-6 w-6 text-[#0a2e5c]" />
            </div>
            <span className="text-sm text-center">حدد موقعنا</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-full shadow-md mb-2">
              <Phone className="h-6 w-6 text-[#0a2e5c]" />
            </div>
            <span className="text-sm text-center">اتصل بنا</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-full shadow-md mb-2">
              <FileText className="h-6 w-6 text-[#0a2e5c]" />
            </div>
            <span className="text-sm text-center">تقرير مطالبة</span>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8">
          <img
            src="/helpful-support.png"
            alt="Customer Service"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c]">الأسئلة الشائعة</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">ما هي أنواع تأمين السيارات المتوفرة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              نقدم نوعين رئيسيين من تأمين السيارات: التأمين الشامل الذي يغطي سيارتك وسيارة الطرف الثالث، وتأمين ضد الغير
              الذي يغطي فقط الأضرار التي تلحق بسيارة الطرف الثالث.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">كيف يتم تحديد قسط التأمين؟</AccordionTrigger>
            <AccordionContent className="text-right">
              يتم تحديد قسط التأمين بناءً على عدة عوامل منها نوع السيارة، سنة الصنع، قيمة السيارة، سجل القيادة، والتغطية
              المختارة.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-right">كيف يمكنني تقديم مطالبة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              يمكنك تقديم مطالبة عبر الإنترنت من خلال حسابك، أو عبر تطبيق الهاتف المحمول، أو الاتصال بخدمة العملاء على
              مدار 24 ساعة.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer */}
      <div className="bg-[#0a2e5c] text-white p-4">
        <div className="flex justify-center mb-4">
          <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white">منتجات وخدمات</Button>
        </div>
        <div className="text-center mb-4">
          <p>تواصل معنا</p>
          <div className="flex justify-center space-x-4 space-x-reverse mt-2">
            <Link href="#" className="text-white hover:text-[#c9a96e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#c9a96e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#c9a96e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
