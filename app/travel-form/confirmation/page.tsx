"use client"

import { useState, useEffect, Key } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TravelInsuranceConfirmation() {
  const router = useRouter()
  const [formData, setFormData] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would get this data from a context, state management library, or API
    // For demo purposes, we're simulating loading the data
    setTimeout(() => {
      // This would be replaced with actual data retrieval
      const mockData: any = {
        travelers: ["adult18", "child2_17"],
        destination: "worldwide",
        startDate: "2025-05-01",
        endDate: "2025-05-07",
        selectedPlan: "max150k",
      }
      setFormData(mockData)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleSubmit = () => {
    // Process final submission
    console.log("Final submission:", formData)
    // Navigate to success page
    router.push("/apply?type=trvel")
  }

  const getTravelerLabel = (type: string): string => {
    switch (type) {
      case "adult18":
        return "مسافر أكبر من 18 سنة"
      case "child2_17":
        return "مسافر بين 2 و 17 سنة"
      case "child75_85":
        return "مسافر بين 75 و 85 سنة"
      case "childUnder2":
        return "مسافر تحت سن 2"
      default:
        return type
    }
  }

  const getPlanDetails = (planId: string) => {
    switch (planId) {
      case "max150k":
        return {
          name: "TRAVEL MAX USD 150,000",
          price: "6.200",
          coverage: "150,000",
          currency: "دولار أمريكي",
        }
      case "plus50k":
        return {
          name: "TRAVEL+ USD 50,000",
          price: "4.250",
          coverage: "50,000",
          currency: "دولار أمريكي",
        }
      default:
        return {
          name: "غير معروف",
          price: "0",
          coverage: "0",
          currency: "دولار أمريكي",
        }
    }
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0a2e5c] border-t-[#c9a96e] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0a2e5c] font-bold">جاري تحميل البيانات...</p>
        </div>
      </div>
    )
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">حدث خطأ</h2>
          <p className="mb-6">لم نتمكن من استرداد بيانات طلبك. يرجى المحاولة مرة أخرى.</p>
          <Button className="bg-[#0a2e5c] hover:bg-[#0a1e3c]" onClick={() => router.push("/travel-form")}>
            العودة إلى النموذج
          </Button>
        </div>
      </div>
    )
  }

  const planDetails = getPlanDetails(formData.selectedPlan)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-[#0a2e5c] text-white p-4 text-center">
            <h1 className="text-xl font-bold">تأكيد تفاصيل تأمين السفر</h1>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-bold text-right mb-4 text-[#0a2e5c] border-b pb-2">المسافرون</h2>
              <ul className="space-y-2 text-right">
                {formData.travelers.map((traveler: string, index: Key | null | undefined) => (
                  <li key={index} className="flex items-center justify-end">
                    <span>{getTravelerLabel(traveler)}</span>
                    <Check className="h-5 w-5 text-green-500 ml-2" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-right mb-4 text-[#0a2e5c] border-b pb-2">وجهة السفر</h2>
              <p className="text-right">
                {formData.destination === "worldwide"
                  ? "جميع أنحاء العالم باستثناء الولايات المتحدة وكندا"
                  : "جميع أنحاء العالم بما في ذلك الولايات المتحدة وكندا"}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-right mb-4 text-[#0a2e5c] border-b pb-2">تاريخ السفر</h2>
              <div className="flex justify-between">
                <div className="text-left">
                  <p className="text-gray-600">تاريخ العودة</p>
                  <p className="font-bold">{formData.endDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">تاريخ المغادرة</p>
                  <p className="font-bold">{formData.startDate}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-right mb-4 text-[#0a2e5c] border-b pb-2">خطة التأمين المختارة</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-4">
                  <div className="text-left">
                    <p className="font-bold">KD {planDetails.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{planDetails.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="mb-2">
                    الحد الأقصى للتغطية: {planDetails.coverage} {planDetails.currency}
                  </p>
                  <p className="text-sm text-gray-600">مدة التغطية: 7 أيام</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Button variant="outline" className="flex-1" onClick={() => router.push("/travel-form")}>
                تعديل البيانات
              </Button>
              <Button className="flex-1 bg-[#c9a96e] hover:bg-[#b89355]" onClick={handleSubmit}>
                تأكيد وإتمام الطلب
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
