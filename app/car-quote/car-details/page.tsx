"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

export default function CarDetailsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    year: "",
    manufacturer: "",
    model: "",
    value: "",
    usage: "new",
  })

  const [errors, setErrors] = useState({
    year: false,
    manufacturer: false,
    value: false,
  })

  // Load saved data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("carDetailsForm")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("carDetailsForm", JSON.stringify(formData))
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    const newErrors = {
      year: !formData.year,
      manufacturer: !formData.manufacturer,
      value: !formData.value,
    }

    setErrors(newErrors)

    // If no errors, proceed to next step
    if (!Object.values(newErrors).some(Boolean)) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      toast({
        title: "تم حفظ البيانات",
        description: "تم حفظ تفاصيل السيارة بنجاح",
      })

      router.push("/car-quote/inquiry")
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

  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString())
  const manufacturers = ["تويوتا", "هوندا", "نيسان", "مرسيدس", "بي إم دبليو", "أودي", "لكزس", "كيا", "هيونداي"]

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
        <motion.form variants={container} initial="hidden" animate="show" onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={item} className="space-y-4">
            <div>
              <div className="flex justify-end items-center mb-1">
                <span className="text-red-500 ml-1">*</span>
                <Label htmlFor="year" className="text-[#0a1e3c] font-medium">
                  حدد سنة التصنيع
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto mr-1">
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent align="start" className="bg-[#0a1e3c] text-white">
                      <p>اختر سنة تصنيع السيارة</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={formData.year} onValueChange={(value) => handleChange("year", value)}>
                <SelectTrigger
                  id="year"
                  className={`text-right border-gray-300 ${errors.year ? "border-red-500" : ""} transition-all`}
                >
                  <div className="flex items-center justify-between w-full">
                    <ChevronDown className="h-4 w-4" />
                    <SelectValue placeholder="اختر سنة التصنيع" />
                  </div>
                </SelectTrigger>
                <SelectContent position="popper" className="max-h-[300px]">
                  {years.map((year) => (
                    <SelectItem key={year} value={year} className="text-right">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.year && (
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
                <span className="text-red-500 ml-1">*</span>
                <Label htmlFor="manufacturer" className="text-[#0a1e3c] font-medium">
                  صناعة المركبات
                </Label>
              </div>
              <Select value={formData.manufacturer} onValueChange={(value) => handleChange("manufacturer", value)}>
                <SelectTrigger
                  id="manufacturer"
                  className={`text-right border-gray-300 ${errors.manufacturer ? "border-red-500" : ""} transition-all`}
                >
                  <div className="flex items-center justify-between w-full">
                    <ChevronDown className="h-4 w-4" />
                    <SelectValue placeholder="اختر الشركة المصنعة" />
                  </div>
                </SelectTrigger>
                <SelectContent position="popper">
                  {manufacturers.map((manufacturer) => (
                    <SelectItem key={manufacturer} value={manufacturer} className="text-right">
                      {manufacturer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.manufacturer && (
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
                <Label htmlFor="model" className="text-[#0a1e3c] font-medium">
                  موديل السيارة
                </Label>
              </div>
              <Select value={formData.model} onValueChange={(value) => handleChange("model", value)}>
                <SelectTrigger id="model" className="text-right border-gray-300 transition-all">
                  <div className="flex items-center justify-between w-full">
                    <ChevronDown className="h-4 w-4" />
                    <SelectValue placeholder="اختر موديل السيارة" />
                  </div>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="camry" className="text-right">
                    كامري
                  </SelectItem>
                  <SelectItem value="corolla" className="text-right">
                    كورولا
                  </SelectItem>
                  <SelectItem value="land-cruiser" className="text-right">
                    لاند كروزر
                  </SelectItem>
                  <SelectItem value="rav4" className="text-right">
                    راف فور
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex justify-end items-center mb-1">
                <span className="text-red-500 ml-1">*</span>
                <Label htmlFor="value" className="text-[#0a1e3c] font-medium">
                  القيمة السوقية للمركبة
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto mr-1">
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent align="start" className="bg-[#0a1e3c] text-white">
                      <p>أدخل القيمة التقديرية للسيارة بالدينار الكويتي</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="value"
                type="text"
                value={formData.value}
                onChange={(e) => handleChange("value", e.target.value)}
                className={`text-right border-gray-300 ${errors.value ? "border-red-500" : ""} transition-all`}
                placeholder="أدخل القيمة بالدينار الكويتي"
              />
              {errors.value && (
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
              <div className="flex justify-end items-center mb-3">
                <Label className="text-[#0a1e3c] font-medium">حدد استخدام السيارة</Label>
              </div>
              <RadioGroup
                value={formData.usage}
                onValueChange={(value) => handleChange("usage", value)}
                className="flex flex-row-reverse justify-end gap-8"
              >
                <div className="flex items-center">
                  <Label htmlFor="new" className="ml-2 cursor-pointer">
                    جديد
                  </Label>
                  <RadioGroupItem id="new" value="new" />
                </div>
                <div className="flex items-center">
                  <Label htmlFor="used" className="ml-2 cursor-pointer">
                    مستخدم
                  </Label>
                  <RadioGroupItem id="used" value="used" />
                </div>
              </RadioGroup>
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
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  جاري المعالجة...
                </div>
              ) : (
                "التالي"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}
