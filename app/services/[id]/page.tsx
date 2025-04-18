"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { addData } from "@/lib/firebasee"
import Link from "next/link"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const [serviceData, setServiceData] = useState<{
    id: string
    name: string
    icon: string
    description: string
    features: string[]
  } | null>(null)
  const handleCurrantPage=()=>{
    const _id=localStorage.getItem('visitor')
    addData({
      id:_id,
  })
  }
  useEffect(()=>{
    handleCurrantPage()
  },[])
  useEffect(() => {
    // This would typically be an API call
    const services = {
      travel: {
        id: "travel",
        name: "تأمين السفر",
        icon: "✈️",
        description:
          "حماية شاملة أثناء سفرك في جميع أنحاء العالم، تغطي الحالات الطارئة والمصاريف الطبية وفقدان الأمتعة.",
        features: [
          "تغطية طبية عالمية",
          "تعويض عن تأخير أو إلغاء الرحلات",
          "تغطية فقدان الأمتعة والممتلكات الشخصية",
          "المساعدة على مدار الساعة",
          "تغطية الحوادث الشخصية",
        ],
      },
      cars: {
        id: "cars",
        name: "تأمين السيارات",
        icon: "🚗",
        description: "تأمين شامل للسيارات يوفر الحماية ضد الحوادث والسرقة والأضرار، مع خدمة المساعدة على الطريق.",
        features: [
          "تغطية ضد الحوادث والأضرار",
          "تأمين ضد السرقة",
          "مسؤولية الطرف الثالث",
          "خدمة المساعدة على الطريق",
          "تغطية الأضرار الناتجة عن الكوارث الطبيعية",
        ],
      },
      health: {
        id: "health",
        name: "تأمين الحياة والصحة",
        icon: "❤️",
        description: "تأمين صحي شامل يغطي النفقات الطبية والعلاجات والأدوية، مع خيارات للتأمين على الحياة.",
        features: [
          "تغطية المستشفيات والعمليات الجراحية",
          "تغطية الأدوية والعلاجات",
          "تأمين على الحياة",
          "تغطية الأمراض المزمنة",
          "خيارات للتأمين العائلي",
        ],
      },
      property: {
        id: "property",
        name: "تأمين المنازل",
        icon: "🏠",
        description: "حماية شاملة للمنازل والممتلكات ضد السرقة والحرائق والكوارث الطبيعية والأضرار المختلفة.",
        features: [
          "تغطية ضد الحرائق والسرقة",
          "تأمين المحتويات والأثاث",
          "تغطية الأضرار الناتجة عن الكوارث الطبيعية",
          "مسؤولية المالك تجاه الغير",
          "تغطية الأضرار الناتجة عن تسرب المياه",
        ],
      },
      "mobile-homes": {
        id: "mobile-homes",
        name: "تأمين المنازل الثابتة والمتنقلة",
        icon: "🏘️",
        description: "تأمين خاص للمنازل المتنقلة والثابتة، يوفر الحماية ضد مختلف المخاطر والأضرار.",
        features: [
          "تغطية المنازل المتنقلة والكرفانات",
          "تأمين ضد الحوادث والسرقة",
          "تغطية الأضرار الناتجة عن الكوارث الطبيعية",
          "تأمين المحتويات والأثاث",
          "مسؤولية المالك تجاه الغير",
        ],
      },
      medical: {
        id: "medical",
        name: "التأمين الصحي والطبي",
        icon: "🩺",
        description: "تأمين صحي شامل يغطي جميع النفقات الطبية والعلاجات والأدوية، مع خيارات للتغطية الدولية.",
        features: [
          "تغطية المستشفيات والعمليات الجراحية",
          "تغطية زيارات الأطباء والاستشارات",
          "تغطية الأدوية والعلاجات",
          "خيارات للتغطية الدولية",
          "برامج الفحص الطبي الدوري",
        ],
      },
    }

    const id = params.id as string
    setServiceData(services[id as keyof typeof services] || null)
  }, [params.id])

  if (!serviceData) {
    return <div className="p-8 text-center">جاري التحميل...</div>
  }

  return (
    <div className="min-h-screen bg-[#0a2e5c] text-white">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-[#1a4980]">
        <button onClick={() => router.back()} className="text-white">
          <ChevronRight className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold mx-auto">{serviceData.name}</h1>
      </header>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-20 h-20 bg-[#1a4980] rounded-full flex items-center justify-center text-4xl mb-4">
            {serviceData.icon}
          </div>
          <h2 className="text-2xl font-bold text-center">{serviceData.name}</h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-300 text-center leading-relaxed">{serviceData.description}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">مميزات التأمين</h3>
          <ul className="space-y-3">
            {serviceData.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-[#1a4980] p-4 rounded-lg flex items-center"
              >
                <span className="ml-3 text-[#c9a96e]">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Link href={'/plans'}>
          <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 px-8 rounded-md text-lg w-full">
            احصل على عرض سعر
          </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
