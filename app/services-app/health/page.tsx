"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Phone, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HealthInsurancePage() {
  const [isExpanded, setIsExpanded] = useState(false)

  const coverageItems = [
    {
      id: "hospital",
      title: "تغطية المستشفيات والعمليات الجراحية",
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
          <path d="M19 4v16H5V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"></path>
          <path d="M9 8h6"></path>
          <path d="M12 8v6"></path>
          <path d="M9 16h6"></path>
        </svg>
      ),
    },
    {
      id: "doctor",
      title: "زيارات الأطباء والاستشارات",
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
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
          <path d="M13 13h4"></path>
          <path d="M15 15v.01"></path>
        </svg>
      ),
    },
    {
      id: "medicine",
      title: "تغطية الأدوية والعلاجات",
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
          <path d="m19.8 9.7-4.5-4.5a1 1 0 0 0-1.4 0l-2.6 2.6c-.6.6-.6 1.5 0 2.1l5.8 5.8c.6.6 1.5.6 2.1 0l2.6-2.6a1 1 0 0 0 0-1.4l-2-2Z"></path>
          <path d="m9.2 17.4-5.9 2.2c-.7.3-1.5-.5-1.2-1.2l2.2-5.9a1 1 0 0 1 .3-.5L12 4.7"></path>
          <path d="m14.5 14.5 5.3 5.3"></path>
        </svg>
      ),
    },
    {
      id: "chronic",
      title: "تغطية الأمراض المزمنة",
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
  ]

  const additionalBenefits = [
    {
      id: "dental",
      title: "تغطية طب الأسنان",
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
          <path d="M12 5.5c-1.5-1-4-1.5-4 .5a2 2 0 0 0 2 2"></path>
          <path d="M12 5.5c1.5-1 4-1.5 4 .5a2 2 0 0 1-2 2"></path>
          <path d="M12 5.5V16"></path>
          <path d="M9 12a2 2 0 0 0-2 2c0 1.5 1.5 2 3 2"></path>
          <path d="M15 12a2 2 0 0 1 2 2c0 1.5-1.5 2-3 2"></path>
        </svg>
      ),
    },
    {
      id: "vision",
      title: "تغطية النظر والنظارات",
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
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
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
      <div className="relative  bg-[#0a2e5c]">
        <img
          src="/146BannerImage.jpg"
          alt="Health Insurance"
          className="w-full h-40 object-cover opacity-30"

        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-2xl font-bold mb-2">الصحة</h1>
          <h2 className="text-3xl font-bold mb-4">التأمين الصحي</h2>
          <p className="text-xl">رعاية صحية متكاملة لك ولعائلتك</p>
        </div>
      </div>
{/* Action Buttons */}
<div className="p-4 space-y-3">
<Link href="/apply?type=health">
        <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
          اشتري الآن
        </Button>
        </Link>

        <Link href="/apply?type=health">
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
            <span>أنواع التأمين الصحي</span>
          </button>
          {isExpanded && (
            <div className="p-4 space-y-2">
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين صحي فردي
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين صحي عائلي
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين صحي للشركات
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
            src="/placeholder.svg?height=100&width=100&query=doctor"
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
            <AccordionTrigger className="text-right">ما هي أنواع التأمين الصحي المتوفرة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              نقدم ثلاثة أنواع رئيسية من التأمين الصحي: التأمين الصحي الفردي، التأمين الصحي العائلي، والتأمين الصحي
              للشركات. كل نوع يوفر تغطية شاملة مع خيارات مختلفة تناسب احتياجاتك.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">هل يغطي التأمين الصحي الأمراض المزمنة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              نعم، تغطي خطط التأمين الصحي لدينا الأمراض المزمنة مثل السكري وارتفاع ضغط الدم وغيرها، مع مراعاة فترة
              انتظار محددة للحالات الموجودة مسبقاً.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-right">كيف يمكنني استخدام التأمين الصحي في المستشفيات؟</AccordionTrigger>
            <AccordionContent className="text-right">
              يمكنك استخدام بطاقة التأمين الصحي الخاصة بك في أي من المستشفيات والعيادات المعتمدة في شبكتنا. في حالات
              الطوارئ، يمكنك الذهاب إلى أي مستشفى ثم تقديم المطالبة لاحقاً.
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
