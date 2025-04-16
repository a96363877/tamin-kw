"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, Home, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TravelInsuranceSuccess() {
  const router = useRouter()
  const referenceNumber = `TRV-${Math.floor(100000 + Math.random() * 900000)}`

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-white rounded-lg shadow-md overflow-hidden text-center"
        >
          <motion.div variants={item} className="bg-[#0a2e5c] text-white p-6">
            <h1 className="text-2xl font-bold">تم إتمام الطلب بنجاح</h1>
          </motion.div>

          <div className="p-8">
            <motion.div variants={item} className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">شكراً لك!</h2>
              <p className="text-gray-600">تم إتمام طلب تأمين السفر الخاص بك بنجاح</p>
            </motion.div>

            <motion.div variants={item} className="mb-8 bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">رقم المرجع الخاص بك</h3>
              <p className="text-2xl font-bold text-[#c9a96e]">{referenceNumber}</p>
              <p className="text-sm text-gray-500 mt-2">يرجى الاحتفاظ بهذا الرقم للرجوع إليه في المستقبل</p>
            </motion.div>

            <motion.div variants={item} className="mb-8">
              <h3 className="text-lg font-bold mb-4">الخطوات التالية</h3>
              <ul className="text-right space-y-4">
                <li className="flex items-center justify-end">
                  <span>سيتم إرسال تفاصيل وثيقة التأمين إلى بريدك الإلكتروني</span>
                  <FileText className="h-5 w-5 text-[#0a2e5c] ml-2" />
                </li>
                <li className="flex items-center justify-end">
                  <span>يمكنك طباعة وثيقة التأمين من حسابك الشخصي</span>
                  <FileText className="h-5 w-5 text-[#0a2e5c] ml-2" />
                </li>
                <li className="flex items-center justify-end">
                  <span>في حالة وجود أي استفسارات، يرجى التواصل مع خدمة العملاء</span>
                  <FileText className="h-5 w-5 text-[#0a2e5c] ml-2" />
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="flex flex-col md:flex-row gap-4">
              <Button className="flex-1 bg-[#c9a96e] hover:bg-[#b89355]" onClick={() => window.print()}>
                طباعة التفاصيل
              </Button>
              <Button className="flex-1 bg-[#0a2e5c] hover:bg-[#0a1e3c]" onClick={() => router.push("/")}>
                <Home className="h-4 w-4 ml-2" />
                العودة للرئيسية
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
