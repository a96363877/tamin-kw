"use client"

import { useInsuranceForm } from "../insurance-form-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactInfoStep() {
  const { formData, updateFormData, errors, setErrors } = useInsuranceForm()
  const { contactInfo } = formData

  const handleChange = (field: string, value: string) => {
    updateFormData({
      contactInfo: {
        ...contactInfo,
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

    if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "يرجى إدخال بريد إلكتروني صحيح",
      }))
      return false
    }

    if (field === "phone" && !/^\d{8}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "يجب أن يتكون رقم الهاتف من 8 أرقام",
      }))
      return false
    }

    return true
  }

  const cities = [
    "مدينة الكويت",
    "حولي",
    "الفروانية",
    "الأحمدي",
    "الجهراء",
    "مبارك الكبير",
    "العاصمة",
    "السالمية",
    "الفحيحيل",
    "المنقف",
    "صباح السالم",
    "الرقة",
    "الفنطاس",
    "أبو حليفة",
    "الوفرة",
    "الخيران",
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#0a2e5c] mb-4 text-right">معلومات الاتصال</h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="email" className="text-[#0a2e5c] font-medium">
              البريد الإلكتروني
            </Label>
          </div>
          <Input
            id="email"
            type="email"
            value={contactInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={(e) => validateField("email", e.target.value)}
            className="text-right border-gray-300"
            placeholder="example@domain.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="phone" className="text-[#0a2e5c] font-medium">
              رقم الهاتف
            </Label>
          </div>
          <div className="flex">
            <Input
              id="phone"
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={(e) => validateField("phone", e.target.value)}
              className="text-right border-gray-300 rounded-r-none"
              placeholder="أدخل رقم الهاتف"
            />
            <div className="flex items-center justify-between px-3 py-2 border border-gray-300 border-r-0 rounded-l-md bg-gray-50">
              <span>+965</span>
            </div>
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="address" className="text-[#0a2e5c] font-medium">
              العنوان
            </Label>
          </div>
          <Input
            id="address"
            value={contactInfo.address}
            onChange={(e) => handleChange("address", e.target.value)}
            onBlur={(e) => validateField("address", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل العنوان"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1 text-right">{errors.address}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="city" className="text-[#0a2e5c] font-medium">
              المدينة
            </Label>
          </div>
          <Select
            value={contactInfo.city}
            onValueChange={(value) => handleChange("city", value)}
            onOpenChange={() => {
              if (!contactInfo.city) {
                validateField("city", contactInfo.city)
              }
            }}
          >
            <SelectTrigger id="city" className="text-right border-gray-300">
              <SelectValue placeholder="اختر المدينة" />
            </SelectTrigger>
            <SelectContent position="popper" className="max-h-[300px]">
              {cities.map((city) => (
                <SelectItem key={city} value={city} className="text-right">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && <p className="text-red-500 text-sm mt-1 text-right">{errors.city}</p>}
        </div>
      </div>
    </div>
  )
}
