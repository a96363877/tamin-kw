"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  const router = useRouter()

  // Generate a random reference number
  const referenceNumber = `KIC-${Math.floor(100000 + Math.random() * 900000)}`

  // Redirect to home after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 10000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="h-20 w-20 text-green-500" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold text-[#0a2e5c] mb-4"
        >
          تم إرسال طلبك بنجاح!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-600 mb-6"
        >
          شكراً لك على تقديم طلب التأمين. سيقوم فريقنا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-gray-50 p-4 rounded-lg mb-6"
        >
          <p className="text-sm text-gray-500 mb-1">رقم المرجع الخاص بك</p>
          <p className="text-xl font-bold text-[#c9a96e]">{referenceNumber}</p>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-sm text-gray-500 mb-6"
        >
          تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني.
          <br />
          سيتم توجيهك تلقائياً إلى الصفحة الرئيسية خلال 10 ثوانٍ.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Button onClick={() => router.push("/")} className="bg-[#c9a96e] hover:bg-[#b89355] text-white">
            <Home className="h-4 w-4 ml-2" />
            العودة للصفحة الرئيسية
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
