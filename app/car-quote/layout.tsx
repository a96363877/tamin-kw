"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface QuoteLayoutProps {
  children: React.ReactNode
}

export default function QuoteLayout({ children }: QuoteLayoutProps) {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)

  // Determine current step based on pathname
  const currentStep = pathname.includes("inquiry") ? 3 : pathname.includes("car-details") ? 2 : 1

  useEffect(() => {
    // Update progress based on current step
    setProgress((currentStep / 3) * 100)
  }, [currentStep])

  const steps = [
    {
      id: 1,
      title: "حدد المنتج لطلب عرض أسعار",
      path: "/car-quote/product",
      completed: currentStep > 1,
    },
    {
      id: 2,
      title: "أدخل تفاصيل سيارتك",
      path: "/car-quote/car-details",
      completed: currentStep > 2,
    },
    {
      id: 3,
      title: "أدخل استفساراتك",
      path: "/car-quote/inquiry",
      completed: false,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header with progress */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[#0a1e3c] text-xl font-bold">طلب عرض سعر</h1>
            <span className="text-[#c9a96e] font-medium">{progress.toFixed(0)}% مكتمل</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200"   />
        </motion.div>

        {/* Steps */}
        <div className="mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                    step.completed ? "bg-[#c9a96e]" : currentStep === step.id ? "bg-[#0a1e3c]" : "bg-gray-300"
                  }`}
                >
                  {step.completed ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
                </div>
                <div
                  className={`mr-3 font-bold ${
                    currentStep === step.id ? "text-[#0a1e3c]" : step.completed ? "text-[#c9a96e]" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </div>
              </div>
              {step.completed && (
                <Link href={step.path} className="text-[#c9a96e] hover:text-[#b89355] transition-colors">
                  <span className="flex items-center">
                    <span className="ml-1">تعديل</span>
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
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    </svg>
                  </span>
                </Link>
              )}
            </motion.div>
          ))}

          {/* Main Content */}
          <motion.div
            key={pathname}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-[#0a1e3c] border-t border-[#c9a96e] shadow-lg"
      >
        <div className="flex justify-center">
          <Link
            href="/products-services"
            className="flex flex-col items-center justify-center py-3 px-6 bg-[#c9a96e] text-white w-full max-w-md hover:bg-[#b89355] transition-colors"
          >
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
              className="mb-1"
            >
              <polyline points="17 11 12 6 7 11" />
              <polyline points="17 18 12 13 7 18" />
            </svg>
            منتجات وخدمات
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
