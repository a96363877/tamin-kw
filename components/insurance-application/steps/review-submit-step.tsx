"use client"

import { useInsuranceForm } from "../insurance-form-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ReviewSubmitStep() {
  const { formData, updateFormData, insuranceType } = useInsuranceForm()
  const { personalInfo, contactInfo, termsAccepted } = formData

  const handleTermsChange = (checked: boolean) => {
    updateFormData({
      termsAccepted: checked,
    })
  }

  const renderTravelInsuranceDetails = () => {
    const { travelInsurance } = formData
    if (!travelInsurance) return null

    return (
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">تفاصيل تأمين السفر</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">وجهة السفر</p>
            <p className="font-medium">{travelInsurance.destination}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">تاريخ المغادرة</p>
            <p className="font-medium">{travelInsurance.departureDate}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">تاريخ العودة</p>
            <p className="font-medium">{travelInsurance.returnDate}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">غرض السفر</p>
            <p className="font-medium">
              {travelInsurance.travelPurpose === "tourism"
                ? "سياحة"
                : travelInsurance.travelPurpose === "business"
                  ? "عمل"
                  : travelInsurance.travelPurpose === "study"
                    ? "دراسة"
                    : "علاج طبي"}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">نوع التغطية</p>
            <p className="font-medium">{travelInsurance.coverageType === "individual" ? "فردي" : "عائلي"}</p>
          </div>
          {travelInsurance.coverageType === "family" && (
            <div>
              <p className="text-gray-500 text-sm">عدد أفراد العائلة</p>
              <p className="font-medium">{travelInsurance.familyMembers}</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderCarInsuranceDetails = () => {
    const { carInsurance } = formData
    if (!carInsurance) return null

    return (
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">تفاصيل تأمين السيارة</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">ماركة السيارة</p>
            <p className="font-medium">{carInsurance.vehicleMake}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">موديل السيارة</p>
            <p className="font-medium">{carInsurance.vehicleModel}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">سنة الصنع</p>
            <p className="font-medium">{carInsurance.vehicleYear}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">رقم اللوحة</p>
            <p className="font-medium">{carInsurance.plateNumber}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">القيمة التقديرية</p>
            <p className="font-medium">{carInsurance.estimatedValue} د.ك</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">نوع التغطية</p>
            <p className="font-medium">{carInsurance.coverageType === "comprehensive" ? "شامل" : "ضد الغير"}</p>
          </div>
        </div>
      </div>
    )
  }

  const renderHealthInsuranceDetails = () => {
    const { healthInsurance } = formData
    if (!healthInsurance) return null

    return (
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">تفاصيل التأمين الصحي</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">نوع التغطية</p>
            <p className="font-medium">{healthInsurance.coverageType === "individual" ? "فردي" : "عائلي"}</p>
          </div>
          {healthInsurance.coverageType === "family" && (
            <div>
              <p className="text-gray-500 text-sm">عدد أفراد العائلة</p>
              <p className="font-medium">{healthInsurance.familyMembers}</p>
            </div>
          )}
          <div>
            <p className="text-gray-500 text-sm">المهنة</p>
            <p className="font-medium">{healthInsurance.occupation}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">حالة التدخين</p>
            <p className="font-medium">{healthInsurance.smokingStatus === "smoker" ? "مدخن" : "غير مدخن"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">حالات صحية موجودة مسبقاً</p>
            <p className="font-medium">{healthInsurance.preExistingConditions ? "نعم" : "لا"}</p>
          </div>
        </div>
      </div>
    )
  }

  const renderPropertyInsuranceDetails = () => {
    const { propertyInsurance } = formData
    if (!propertyInsurance) return null

    return (
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">تفاصيل تأمين العقار</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">نوع العقار</p>
            <p className="font-medium">
              {propertyInsurance.propertyType === "apartment"
                ? "شقة"
                : propertyInsurance.propertyType === "house"
                  ? "منزل"
                  : "فيلا"}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">عنوان العقار</p>
            <p className="font-medium">{propertyInsurance.propertyAddress}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">قيمة العقار</p>
            <p className="font-medium">{propertyInsurance.propertyValue} د.ك</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">سنة البناء</p>
            <p className="font-medium">{propertyInsurance.constructionYear}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">نظام أمان</p>
            <p className="font-medium">{propertyInsurance.securitySystem ? "نعم" : "لا"}</p>
          </div>
        </div>
      </div>
    )
  }

  const renderLifeInsuranceDetails = () => {
    const { lifeInsurance } = formData
    if (!lifeInsurance) return null

    return (
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">تفاصيل تأمين الحياة</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">مبلغ التغطية</p>
            <p className="font-medium">{lifeInsurance.coverageAmount} د.ك</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">المستفيدون</p>
            <p className="font-medium">{lifeInsurance.beneficiaries}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">مدة التأمين</p>
            <p className="font-medium">
              {lifeInsurance.term === "10years"
                ? "10 سنوات"
                : lifeInsurance.term === "20years"
                  ? "20 سنة"
                  : lifeInsurance.term === "30years"
                    ? "30 سنة"
                    : "مدى الحياة"}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">المهنة</p>
            <p className="font-medium">{lifeInsurance.occupation}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">حالة التدخين</p>
            <p className="font-medium">{lifeInsurance.smokingStatus === "smoker" ? "مدخن" : "غير مدخن"}</p>
          </div>
        </div>
      </div>
    )
  }

  const renderInsuranceDetails = () => {
    switch (insuranceType) {
      case "travel":
        return renderTravelInsuranceDetails()
      case "car":
        return renderCarInsuranceDetails()
      case "health":
        return renderHealthInsuranceDetails()
      case "property":
        return renderPropertyInsuranceDetails()
      case "life":
        return renderLifeInsuranceDetails()
      default:
        return renderTravelInsuranceDetails()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#0a2e5c] mb-4 text-right">مراجعة وإرسال الطلب</h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">المعلومات الشخصية</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">الاسم الكامل</p>
              <p className="font-medium">{personalInfo.fullName}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">الرقم المدني</p>
              <p className="font-medium">{personalInfo.civilId}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">تاريخ الميلاد</p>
              <p className="font-medium">{personalInfo.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">الجنسية</p>
              <p className="font-medium">{personalInfo.nationality}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">الجنس</p>
              <p className="font-medium">{personalInfo.gender === "male" ? "ذكر" : "أنثى"}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg text-[#0a2e5c] mb-2">معلومات الاتصال</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">البريد الإلكتروني</p>
              <p className="font-medium">{contactInfo.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">رقم الهاتف</p>
              <p className="font-medium">+965 {contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">العنوان</p>
              <p className="font-medium">{contactInfo.address}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">المدينة</p>
              <p className="font-medium">{contactInfo.city}</p>
            </div>
          </div>
        </div>

        {renderInsuranceDetails()}

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={handleTermsChange}
              className="data-[state=checked]:bg-[#c9a96e] data-[state=checked]:border-[#c9a96e]"
            />
            <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
              أوافق على الشروط والأحكام وسياسة الخصوصية الخاصة بشركة الكويت للتأمين
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}
