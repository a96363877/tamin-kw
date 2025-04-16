"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Phone, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PropertyInsurancePage() {
  const [isExpanded, setIsExpanded] = useState(false)

  const coverageItems = [
    {
      id: "fire",
      title: "تغطية ضد الحرائق والسرقة",
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
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
      ),
    },
    {
      id: "contents",
      title: "تأمين المحتويات والأثاث",
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
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M4 13h16"></path>
          <path d="M4 9h16"></path>
          <path d="M4 17h16"></path>
        </svg>
      ),
    },
    {
      id: "natural",
      title: "تغطية الأضرار الناتجة عن الكوارث الطبيعية",
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
          <path d="m2 12 4 10 4-10"></path>
          <path d="m12 9 3 9 3-9"></path>
          <path d="M19 4c0 1.5-.5 2-2 3"></path>
          <path d="M5 4c0 1.5.5 2 2 3"></path>
          <path d="M12 4c0 1.5 0 2 2 3"></path>
          <path d="M12 4c0 1.5 0 2-2 3"></path>
        </svg>
      ),
    },
    {
      id: "liability",
      title: "مسؤولية المالك تجاه الغير",
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
  ]

  const additionalBenefits = [
    {
      id: "water",
      title: "تغطية الأضرار الناتجة عن تسرب المياه",
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
          <path d="M7 21h10"></path>
          <path d="M12 21a8 8 0 0 0 8-8c0-4.5-7-11.5-8-11.5S4 8.5 4 13a8 8 0 0 0 8 8Z"></path>
          <path d="M12 13v.01"></path>
        </svg>
      ),
    },
    {
      id: "temporary",
      title: "تغطية السكن المؤقت في حالة الضرر",
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
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
      id: "car",
      title: "تأمين السيارات",
      image: "/road-safety-abstract.png",
      description: "حماية شاملة لسيارتك وراحة بال لك",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#0a2e5c]">
      {/* Hero Section */}
      <div className="relative h-64 bg-[#0a2e5c]">
        <img
          src="/placeholder.svg?height=400&width=800&query=modern house"
          alt="Property Insurance"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-2xl font-bold mb-2">المنازل</h1>
          <h2 className="text-3xl font-bold mb-4">تأمين المنازل</h2>
          <p className="text-xl">حماية شاملة لمنزلك وممتلكاتك</p>
        </div>
      </div>

   
      {/* Action Buttons */}
      <div className="p-4 space-y-3">
      <Link href="/apply?type=property">
        <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
          اشتري الآن
        </Button>
        </Link>

        <Link href="/apply?type=property">
          <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
            تقديم طلب
          </Button>
        </Link>

        <div className="mt-4 border border-[#c9a96e] rounded-md">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 bg-[#c9a96e] text-white rounded-t-md"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? "transform rotate-180" : ""}`} />
            <span>أنواع تأمين المنازل</span>
          </button>
          {isExpanded && (
            <div className="p-4 space-y-2">
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين المنازل الشامل
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين المحتويات فقط
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين المباني فقط
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
              <Image
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
          <Image
            src="/placeholder.svg?height=100&width=100&query=home insurance agent"
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
            <AccordionTrigger className="text-right">ما هي أنواع تأمين المنازل المتوفرة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              نقدم ثلاثة أنواع رئيسية من تأمين المنازل: التأمين الشامل الذي يغطي المبنى والمحتويات، تأمين المباني فقط،
              وتأمين المحتويات فقط. يمكنك اختيار النوع الذي يناسب احتياجاتك.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">هل يغطي التأمين الكوارث الطبيعية؟</AccordionTrigger>
            <AccordionContent className="text-right">
              نعم، يغطي تأمين المنازل لدينا الأضرار الناتجة عن الكوارث الطبيعية مثل الزلازل والفيضانات والعواصف، مع
              مراعاة الشروط والأحكام المحددة في وثيقة التأمين.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-right">كيف يتم تقييم قيمة المنزل والمحتويات؟</AccordionTrigger>
            <AccordionContent className="text-right">
              يتم تقييم قيمة المنزل بناءً على عدة عوامل منها مساحة المنزل، موقعه، سنة البناء، ونوع البناء. أما المحتويات
              فيتم تقييمها بناءً على قيمتها السوقية وقت شراء وثيقة التأمين. ننصح بالاحتفاظ بقائمة جرد وفواتير الشراء
              للمقتنيات الثمينة.
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
