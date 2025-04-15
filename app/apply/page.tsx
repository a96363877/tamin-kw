"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import InsuranceApplicationForm from "@/components/insurance-application/insurance-application-form"
import { InsuranceFormProvider } from "@/components/insurance-application/insurance-form-context"

export default function ApplyPage() {
  const searchParams = useSearchParams()
  const [insuranceType, setInsuranceType] = useState<string>("")
  const [insuranceName, setInsuranceName] = useState<string>("")

  useEffect(() => {
    const type = searchParams.get("type") || "travel"
    setInsuranceType(type)

    // Set the insurance name based on the type
    switch (type) {
      case "travel":
        setInsuranceName("تأمين السفر")
        break
      case "car":
        setInsuranceName("تأمين السيارات")
        break
      case "health":
        setInsuranceName("التأمين الصحي")
        break
      case "property":
        setInsuranceName("تأمين المنازل")
        break
      case "life":
        setInsuranceName("تأمين الحياة")
        break
      default:
        setInsuranceName("تأمين السفر")
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a2e5c] text-white p-4 flex items-center">
        <Button variant="ghost" className="mr-2" onClick={() => window.history.back()}>
          <ChevronRight className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">{`طلب ${insuranceName}`}</h1>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 max-w-3xl"
      >
        <InsuranceFormProvider insuranceType={insuranceType}>
          <InsuranceApplicationForm />
        </InsuranceFormProvider>
      </motion.div>
    </div>
  )
}
