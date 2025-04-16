"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import PersonalInfoForm from "@/components/personal-info-form"

export default function PersonalInfoPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>()

  const handleSubmit = (data: PersonalInfo) => {
    // In a real application, you would save this data to your backend or state management
    console.log("Personal info submitted:", data)

    // Save to local storage for demo purposes
    localStorage.setItem("personalInfo", JSON.stringify(data))

    // Show success message
    toast({
      title: "تم حفظ المعلومات الشخصية",
      description: "تم حفظ معلوماتك الشخصية بنجاح",
    })

    // Set submitted state for demo
    setSubmittedData(data)
    setIsSubmitted(true)

    // In a real application, you might redirect to the next step
    // router.push("/contact-info")
  }

  const handleContinue = () => {
    // Navigate to the next step in your application flow
    router.push("/travel-form")
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {!isSubmitted ? (
          <PersonalInfoForm onSubmit={handleSubmit} />
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-[#0a2e5c] text-white p-4 text-center">
              <h2 className="text-xl font-bold">تم حفظ المعلومات الشخصية</h2>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-right mb-4 text-[#0a2e5c] border-b pb-2">ملخص المعلومات</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-bold">{submittedData?.fullName}</span>
                    <span className="text-gray-600">الاسم الكامل</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold">{submittedData?.civilId}</span>
                    <span className="text-gray-600">الرقم المدني</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold">{submittedData?.dateOfBirth}</span>
                    <span className="text-gray-600">تاريخ الميلاد</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold">{submittedData?.nationality}</span>
                    <span className="text-gray-600">الجنسية</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-bold">{submittedData?.gender === "male" ? "ذكر" : "أنثى"}</span>
                    <span className="text-gray-600">الجنس</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="flex-1">
                  تعديل المعلومات
                </Button>
                <Button className="flex-1 bg-[#c9a96e] hover:bg-[#b89355]" onClick={handleContinue}>
                  متابعة
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
