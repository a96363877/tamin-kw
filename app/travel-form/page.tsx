"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function TravelInsuranceForm() {
  const router = useRouter()
  const [personalInfo, setPersonalInfo] = useState<any>(null)
  const [formData, setFormData] = useState<any>({
    travelers: [],
    destination: "",
    startDate: "",
    endDate: "",
    selectedPlan: "",
  })
  const [isDestinationOpen, setIsDestinationOpen] = useState(false)
  const [isTravelersOpen, setIsTravelersOpen] = useState(false)

  // Load personal info from localStorage
  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem("personalInfo")
    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo))
    } else {
      // Redirect to personal info page if no data is found
      router.push("/personal-info")
    }
  }, [router])

  const handleTravelerSelection = (travelerType: string) => {
    const updatedTravelers = [...formData.travelers]

    if (updatedTravelers.includes(travelerType)) {
      // Remove if already selected
      const index = updatedTravelers.indexOf(travelerType)
      updatedTravelers.splice(index, 1)
    } else {
      // Add if not selected
      updatedTravelers.push(travelerType)
    }

    setFormData({ ...formData, travelers: updatedTravelers })
  }

  const handleDestinationChange = (destination: string) => {
    setFormData({ ...formData, destination })
    setIsDestinationOpen(false)
  }

  const handleDateChange = (field: "startDate" | "endDate", value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handlePlanSelection = (planId: string) => {
    setFormData({ ...formData, selectedPlan: planId })
  }

  const handleSubmit = () => {
    // Process form submission
    console.log("Form submitted:", formData)
    // Navigate to next step or confirmation page
    router.push("/travel-form/confirmation")
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {personalInfo && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
          >
            <div className="bg-[#0a2e5c] text-white p-3 flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-[#0a1e3c]"
                onClick={() => router.push("/personal-info")}
              >
                تعديل
              </Button>
              <h2 className="font-bold">معلومات المسافر</h2>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="font-bold">{personalInfo.fullName}</span>
                <span className="text-gray-600">الاسم:</span>
              </div>
              <div className="flex justify-between">
                <span>{personalInfo.civilId}</span>
                <span className="text-gray-600">الرقم المدني:</span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-[#0a2e5c] text-white p-4 text-center">
            <h1 className="text-xl font-bold">تفاصيل تأمين السفر</h1>
          </div>

          {/* Travelers Section */}
          <div className="p-4 border-b">
            <div
              className="bg-[#0a2e5c] text-white p-3 rounded-md flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsTravelersOpen(!isTravelersOpen)}
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isTravelersOpen ? "transform rotate-180" : ""}`}
              />
              <h2 className="font-bold">من مع المسافر</h2>
            </div>

            {isTravelersOpen && (
              <div className="space-y-3 py-2">
                <div
                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                    formData.travelers.includes("adult18") ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleTravelerSelection("adult18")}
                >
                  {formData.travelers.includes("adult18") && <Check className="h-5 w-5 text-[#0a2e5c]" />}
                  <span>مسافر أكبر من 18 سنة</span>
                </div>
                <div
                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                    formData.travelers.includes("child2_17") ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleTravelerSelection("child2_17")}
                >
                  {formData.travelers.includes("child2_17") && <Check className="h-5 w-5 text-[#0a2e5c]" />}
                  <span>مسافر بين 2 و 17 سنة</span>
                </div>
                <div
                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                    formData.travelers.includes("child75_85") ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleTravelerSelection("child75_85")}
                >
                  {formData.travelers.includes("child75_85") && <Check className="h-5 w-5 text-[#0a2e5c]" />}
                  <span>مسافر بين 75 و 85 سنة</span>
                </div>
                <div
                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                    formData.travelers.includes("childUnder2") ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleTravelerSelection("childUnder2")}
                >
                  {formData.travelers.includes("childUnder2") && <Check className="h-5 w-5 text-[#0a2e5c]" />}
                  <span>مسافر تحت سن 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Destination Section */}
          <div className="p-4 border-b">
            <div
              className="bg-[#0a2e5c] text-white p-3 rounded-md flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsDestinationOpen(!isDestinationOpen)}
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isDestinationOpen ? "transform rotate-180" : ""}`}
              />
              <h2 className="font-bold">اختر منطقة السفر</h2>
            </div>

            {isDestinationOpen && (
              <div className="space-y-3 py-2">
                <div className="text-right mb-2">
                  <p className="text-sm text-gray-600">يرجى اختيار المنطقة التي ستسافر إليها</p>
                </div>
                <RadioGroup value={formData.destination} className="space-y-2">
                  <div className="flex items-center justify-end space-x-2 space-x-reverse">
                    <Label htmlFor="worldwide" className="cursor-pointer">
                      جميع أنحاء العالم باستثناء الولايات المتحدة وكندا
                    </Label>
                    <RadioGroupItem
                      id="worldwide"
                      value="worldwide"
                      onClick={() => handleDestinationChange("worldwide")}
                    />
                  </div>
                  <div className="flex items-center justify-end space-x-2 space-x-reverse">
                    <Label htmlFor="worldwide-us" className="cursor-pointer">
                      جميع أنحاء العالم بما في ذلك الولايات المتحدة وكندا
                    </Label>
                    <RadioGroupItem
                      id="worldwide-us"
                      value="worldwide-us"
                      onClick={() => handleDestinationChange("worldwide-us")}
                    />
                  </div>
                </RadioGroup>
              </div>
            )}
          </div>

          {/* Travel Dates Section */}
          <div className="p-4 border-b">
            <div className="bg-[#0a2e5c] text-white p-3 rounded-md flex justify-between items-center mb-4">
              <h2 className="font-bold">اختر تاريخ السفر</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 py-2">
              <div className="flex-1">
                <Label htmlFor="startDate" className="block text-right mb-2">
                  تاريخ المغادرة
                </Label>
                <div className="relative">
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleDateChange("startDate", e.target.value)}
                    className="text-right pr-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="flex-1">
                <Label htmlFor="endDate" className="block text-right mb-2">
                  تاريخ العودة
                </Label>
                <div className="relative">
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleDateChange("endDate", e.target.value)}
                    className="text-right pr-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Plans Section */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-right mb-6">تفاصيل الخطة</h2>

            {/* Plan 1 */}
            <div
              className={`border rounded-md mb-6 overflow-hidden ${formData.selectedPlan === "max150k" ? "border-[#0a2e5c] border-2" : ""}`}
            >
              <div className="bg-gray-100 p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="plan1"
                    name="plan"
                    checked={formData.selectedPlan === "max150k"}
                    onChange={() => handlePlanSelection("max150k")}
                    className="ml-2"
                  />
                  <Label htmlFor="plan1" className="cursor-pointer">
                    TRAVEL MAX USD 150,000
                  </Label>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <div className="text-left">
                    <p className="font-bold">KD 6.200</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">150,000 دولار أمريكي</p>
                    <p className="text-sm text-gray-600">الحد الأقصى للتغطية</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p>• 150,000 دولار أمريكي: الحد الأقصى للتغطية</p>
                  <p>• تغطية طبية على مدار 24 ساعة في أي مكان</p>
                  <p>• المساعدة: خدمة المساعدة على مدار 24 ساعة</p>
                  <p>• مدة التغطية: حتى 7 أيام</p>
                  <p>• تغطية شاملة في جميع أنحاء العالم أثناء السفر</p>
                  <p>• 50,000 دولار أمريكي: تغطية الحوادث الشخصية</p>
                  <p>• 50,000 دولار أمريكي: تغطية المسؤولية الشخصية</p>
                </div>
                <div className="mt-4">
                  <Button
                    className="w-full bg-[#c9a96e] hover:bg-[#b89355]"
                    onClick={() => handlePlanSelection("max150k")}
                  >
                    اختر الخطة
                  </Button>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div
              className={`border rounded-md mb-6 overflow-hidden ${formData.selectedPlan === "plus50k" ? "border-[#0a2e5c] border-2" : ""}`}
            >
              <div className="bg-gray-100 p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="plan2"
                    name="plan"
                    checked={formData.selectedPlan === "plus50k"}
                    onChange={() => handlePlanSelection("plus50k")}
                    className="ml-2"
                  />
                  <Label htmlFor="plan2" className="cursor-pointer">
                    TRAVEL+ USD 50,000
                  </Label>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <div className="text-left">
                    <p className="font-bold">KD 4.250</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">50,000 دولار أمريكي</p>
                    <p className="text-sm text-gray-600">الحد الأقصى للتغطية</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p>• 50,000 دولار أمريكي: الحد الأقصى للتغطية</p>
                  <p>• تغطية طبية على مدار 24 ساعة في أي مكان</p>
                  <p>• المساعدة: خدمة المساعدة على مدار 24 ساعة</p>
                  <p>• مدة التغطية: حتى 7 أيام</p>
                  <p>• تغطية شاملة في جميع أنحاء العالم أثناء السفر</p>
                  <p>• 25,000 دولار أمريكي: تغطية الحوادث الشخصية</p>
                  <p>• 25,000 دولار أمريكي: تغطية المسؤولية الشخصية</p>
                </div>
                <div className="mt-4">
                  <Button
                    className="w-full bg-[#c9a96e] hover:bg-[#b89355]"
                    onClick={() => handlePlanSelection("plus50k")}
                  >
                    اختر الخطة
                  </Button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button className="w-full bg-[#0a2e5c] hover:bg-[#0a1e3c]" onClick={handleSubmit}>
                متابعة
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
