"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PersonalInfoFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  onCancel?: () => void
  submitLabel?: string
}

export default function PersonalInfoForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "متابعة",
}: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<any>(
    initialData || {
      fullName: "",
      civilId: "",
      dateOfBirth: "",
      nationality: "",
      gender: "",
    },
  )

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: keyof any, value: string) => {
    setFormData((prev:any) => ({ ...prev, [field]: value }))

    // Clear error when field is edited
    if (errors[field as any]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field as any]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب"
    }

    // Validate civil ID
    if (!formData.civilId.trim()) {
      newErrors.civilId = "الرقم المدني مطلوب"
    } else if (!/^\d{12}$/.test(formData.civilId)) {
      newErrors.civilId = "الرقم المدني يجب أن يتكون من 12 رقم"
    }

    // Validate date of birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "تاريخ الميلاد مطلوب"
    }

    // Validate nationality
    if (!formData.nationality) {
      newErrors.nationality = "الجنسية مطلوبة"
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "الجنس مطلوب"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSubmit(formData)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors((prev) => ({ ...prev, form: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى." }))
    } finally {
      setIsSubmitting(false)
    }
  }

  // List of nationalities
  const nationalities = [
    "كويتي",
    "سعودي",
    "إماراتي",
    "بحريني",
    "قطري",
    "عماني",
    "مصري",
    "أردني",
    "لبناني",
    "سوري",
    "عراقي",
    "فلسطيني",
    "يمني",
    "سوداني",
    "مغربي",
    "تونسي",
    "جزائري",
    "ليبي",
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="bg-[#0a2e5c] text-white p-4 text-center">
        <h2 className="text-xl font-bold">المعلومات الشخصية</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {errors.form && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center">
            <AlertCircle className="h-5 w-5 ml-2" />
            <span>{errors.form}</span>
          </div>
        )}

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="fullName" className="text-[#0a2e5c] font-medium">
                الاسم الكامل
              </Label>
            </div>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="text-right border-gray-300"
              placeholder="أدخل الاسم الكامل"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1 text-right">{errors.fullName}</p>}
          </div>

          {/* Civil ID */}
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="civilId" className="text-[#0a2e5c] font-medium">
                الرقم المدني
              </Label>
            </div>
            <Input
              id="civilId"
              value={formData.civilId}
              onChange={(e) => handleChange("civilId", e.target.value)}
              className="text-right border-gray-300"
              placeholder="أدخل الرقم المدني"
            />
            {errors.civilId && <p className="text-red-500 text-sm mt-1 text-right">{errors.civilId}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="dateOfBirth" className="text-[#0a2e5c] font-medium">
                تاريخ الميلاد
              </Label>
            </div>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="text-right border-gray-300"
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1 text-right">{errors.dateOfBirth}</p>}
          </div>

          {/* Nationality */}
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="nationality" className="text-[#0a2e5c] font-medium">
                الجنسية
              </Label>
            </div>
            <Select value={formData.nationality} onValueChange={(value) => handleChange("nationality", value)}>
              <SelectTrigger id="nationality" className="text-right border-gray-300">
                <SelectValue placeholder="اختر الجنسية" />
              </SelectTrigger>
              <SelectContent position="popper" className="max-h-[300px]">
                {nationalities.map((nationality) => (
                  <SelectItem key={nationality} value={nationality} className="text-right">
                    {nationality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.nationality && <p className="text-red-500 text-sm mt-1 text-right">{errors.nationality}</p>}
          </div>

          {/* Gender */}
          <div>
            <div className="flex justify-end items-center mb-3">
              <span className="text-red-500 ml-1">*</span>
              <Label className="text-[#0a2e5c] font-medium">الجنس</Label>
            </div>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => handleChange("gender", value)}
              className="flex flex-row-reverse justify-end gap-8"
            >
              <div className="flex items-center">
                <Label htmlFor="male" className="ml-2 cursor-pointer">
                  ذكر
                </Label>
                <RadioGroupItem id="male" value="male" />
              </div>
              <div className="flex items-center">
                <Label htmlFor="female" className="ml-2 cursor-pointer">
                  أنثى
                </Label>
                <RadioGroupItem id="female" value="female" />
              </div>
            </RadioGroup>
            {errors.gender && <p className="text-red-500 text-sm mt-1 text-right">{errors.gender}</p>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              إلغاء
            </Button>
          )}
          <Button type="submit" className="flex-1 bg-[#c9a96e] hover:bg-[#b89355]" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                <span>جاري المعالجة...</span>
              </div>
            ) : (
              submitLabel
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
