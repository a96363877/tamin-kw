"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useInsuranceForm } from "./insurance-form-context"
import { useToast } from "@/hooks/use-toast"

// Step components
import PersonalInfoStep from "./steps/personal-info-step"
import ContactInfoStep from "./steps/contact-info-step"
import InsuranceDetailsStep from "./steps/insurance-details-step"
import ReviewSubmitStep from "./steps/review-submit-step"

export default function InsuranceApplicationForm() {
  const { currentStep, setCurrentStep, totalSteps, isStepValid } = useInsuranceForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else if (!isStepValid(currentStep)) {
      toast({
        title: "يرجى إكمال جميع الحقول المطلوبة",
        description: "هناك بعض المعلومات المفقودة أو غير صحيحة",
        variant: "destructive",
      })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    if (isStepValid(currentStep)) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitting(false)
      router.push("/knet")


      // Redirect to success page
    } else {
      toast({
        title: "يرجى الموافقة على الشروط والأحكام",
        description: "يجب الموافقة على الشروط والأحكام قبل إرسال الطلب",
        variant: "destructive",
      })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />
      case 2:
        return <ContactInfoStep />
      case 3:
        return <InsuranceDetailsStep />
      case 4:
        return <ReviewSubmitStep />
      default:
        return <PersonalInfoStep />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Progress bar */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            الخطوة {currentStep} من {totalSteps}
          </span>
          <span className="text-sm font-medium text-[#c9a96e]">{progress.toFixed(0)}% مكتمل</span>
        </div>
        <Progress value={progress} className="h-2" indicatorClassName="bg-[#c9a96e]" />
      </div>

      {/* Steps indicator */}
      <div className="p-4 border-b">
        <div className="flex justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 === currentStep
                    ? "bg-[#0a2e5c] text-white"
                    : index + 1 < currentStep
                      ? "bg-[#c9a96e] text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1 < currentStep ? <Check className="h-5 w-5" /> : index + 1}
              </div>
              <span
                className={`text-xs mt-1 ${
                  index + 1 === currentStep
                    ? "text-[#0a2e5c] font-medium"
                    : index + 1 < currentStep
                      ? "text-[#c9a96e]"
                      : "text-gray-500"
                }`}
              >
                {index === 0
                  ? "المعلومات الشخصية"
                  : index === 1
                    ? "معلومات الاتصال"
                    : index === 2
                      ? "تفاصيل التأمين"
                      : "المراجعة والدفع"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form content */}
      <div className="p-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <div className="p-6 border-t flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="flex items-center">
          <ChevronRight className="h-4 w-4 ml-2" />
          السابق
        </Button>

        {currentStep < totalSteps ? (
          <Button onClick={handleNext} className="bg-[#c9a96e] hover:bg-[#b89355] flex items-center">
            التالي
            <ChevronLeft className="h-4 w-4 mr-2" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#c9a96e] hover:bg-[#b89355]">
            {isSubmitting ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري المعالجة...
              </div>
            ) : (
              "الدفع كي نت"
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
