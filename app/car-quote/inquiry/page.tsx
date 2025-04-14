"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function InquiryPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    civilId: "",
    email: "",
    phone: "",
    question: "",
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  })

  // Load saved data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("inquiryForm")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("inquiryForm", JSON.stringify(formData))
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const newErrors = {
      name: !formData.name,
      email: !formData.email && !/^\S+@\S+\.\S+$/.test(formData.email),
    }

    setErrors(newErrors)

    // If no errors, submit form
    if (!Object.values(newErrors).some(Boolean)) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitting(false)

      toast({
        title: "تم إرسال الطلب بنجاح",
        description: "سنقوم بالتواصل معك في أقرب وقت ممكن",
      })

      // Clear localStorage
      localStorage.removeItem("carDetailsForm")
      localStorage.removeItem("inquiryForm")

      // Redirect to success page or home
      router.push("/")
    } else {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      })
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: false }))
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        <motion.form 
          variants={container}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <motion.div variants={item} className="space-y-4">
            <div>
              <div className="flex justify-end items-center mb-1">
                <span className="text-red-500 ml-1">*</span>
                <Label htmlFor="name" className="text-[#0a1e3c] font-medium">
                  اسم
                </Label>
              </div>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`text-right border-gray-300 ${errors.name ? "border-red-500" : ""} transition-all`}
                placeholder="أدخل الاسم الكامل"
              />
              {errors.name && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-right mt-1"
                >
                  هذا الحقل مطلوب
                </motion.p>
              )}
            </div>

            <div>
              <div className="flex justify-end items-center mb-1">
                <Label htmlFor="civilId" className="text-[#0a1e3c] font-medium">
                  البطاقة المدنية
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto mr-1">
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent align="start" className="bg-[#0a1e3c] text-white">
                      <p>أدخل رقم البطاقة المدنية الخاص بك</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="civilId"
                type="text"
                value={formData.civilId}
                onChange={(e) => handleChange("civilId", e.target.value)}
                className="text-right border-gray-300 transition-all"
                placeholder="أدخل رقم البطاقة المدنية"
              />
            </div>

            <div>
              <div className="flex justify-end items-center mb-1">
                <span className="text-red-500 ml-1">*</span>
                <Label htmlFor="email" className="text-[#0a1e3c] font-medium">
                  البريد الإلكتروني
                </Label>
              </div>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`text-right border-gray-300 ${errors.email ? "border-red-500" : ""} transition-all`}
                placeholder="example@domain.com"
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-right mt-1"
                >
                  يرجى إدخال بريد إلكتروني صحيح
                </motion.p>
              )}
            </div>

            <div>
              <div className="flex justify-end items-center mb-1">
                <Label htmlFor="phone" className="text-[#0a1e3c] font-medium"></Label>
              </div>
              <div className="flex">
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="text-right border-gray-300 rounded-r-none transition-all"
                  placeholder="أدخل رقم الهاتف"
                />
                <div className="flex items-center justify-between px-3 py-2 border border-gray-300 border-r-0 rounded-l-md bg-gray-50">
                  <Image
                    src="/placeholder.svg?height=20&width=30"
                    alt="Kuwait Flag"
                    width={30}
                    height={20}
                    className="ml-2"
                  />
                  <span>+965</span>
                  <ChevronDown className="h-4 w-4 mr-1" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-end items-center mb-1">
                <Label htmlFor="question" className="text-[#0a1e3c] font-medium">
                  سؤال
                </Label>
              </div>
              <Textarea
                id="question"\
                value={formData.question}
                onChange={(e) => handleChange("question", e.target.value)}
                className="text-right border-gray-300 min-h-[150px] transition-all"
                placeholder="أدخل استفسارك هنا..."
              />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <Button 
              type="submit" 
              className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري الإرسال...
                </div>
              ) : (
                "إرسال"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}
