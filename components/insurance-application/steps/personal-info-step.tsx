"use client"

import { useInsuranceForm } from "../insurance-form-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PersonalInfoStep() {
  const { formData, updateFormData, errors, setErrors } = useInsuranceForm()
  const { personalInfo } = formData

  const handleChange = (field: string, value: string) => {
    updateFormData({
      personalInfo: {
        ...personalInfo,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateField = (field: string, value: string) => {
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [field]: "هذا الحقل مطلوب",
      }))
      return false
    }

    if (field === "civilId" && !/^\d{12}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "يجب أن يتكون الرقم المدني من 12 رقمًا",
      }))
      return false
    }

    return true
  }

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

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#0a2e5c] mb-4 text-right">المعلومات الشخصية</h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="fullName" className="text-[#0a2e5c] font-medium">
              الاسم الكامل
            </Label>
          </div>
          <Input
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            onBlur={(e) => validateField("fullName", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل الاسم الكامل"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1 text-right">{errors.fullName}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="civilId" className="text-[#0a2e5c] font-medium">
              الرقم المدني
            </Label>
          </div>
          <Input
            id="civilId"
            value={personalInfo.civilId}
            onChange={(e) => handleChange("civilId", e.target.value)}
            onBlur={(e) => validateField("civilId", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل الرقم المدني"
          />
          {errors.civilId && <p className="text-red-500 text-sm mt-1 text-right">{errors.civilId}</p>}
        </div>

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
            value={personalInfo.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            onBlur={(e) => validateField("dateOfBirth", e.target.value)}
            className="text-right border-gray-300"
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1 text-right">{errors.dateOfBirth}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="nationality" className="text-[#0a2e5c] font-medium">
              الجنسية
            </Label>
          </div>
          <Select
            value={personalInfo.nationality}
            onValueChange={(value) => handleChange("nationality", value)}
            onOpenChange={() => {
              if (!personalInfo.nationality) {
                validateField("nationality", personalInfo.nationality)
              }
            }}
          >
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

        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">الجنس</Label>
          </div>
          <RadioGroup
            value={personalInfo.gender}
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
    </div>
  )
}
