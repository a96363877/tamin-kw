"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import InsurancePlanCard from "@/components/insurance-plan-card"

export default function InsuranceTypePlansPage() {
  const params = useParams()
  const router = useRouter()
  const [planView, setPlanView] = useState<"cards" | "table">("cards")
  const [insuranceType, setInsuranceType] = useState<string>("travel")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    if (params.type && typeof params.type === "string") {
      if (["travel", "car", "health", "property", "life"].includes(params.type)) {
        setInsuranceType(params.type)
      } else {
        // Redirect to default if invalid type
        router.push("/plans/travel")
      }
    }
  }, [params.type, router])

  // Insurance type data
  const insuranceData = {
    travel: {
      title: "خطط تأمين السفر",
      description: "اختر خطة تأمين السفر المناسبة لاحتياجاتك",
      image: "/carefree-travelers.png",
      plans: [
        {
          id: "basic",
          name: "الخطة الأساسية",
          price: "15",
          period: "يوم",
          features: [
            { name: "التغطية الطبية الطارئة", included: true, value: "حتى 50,000 د.ك" },
            { name: "تأخير الرحلة", included: true, value: "حتى 500 د.ك" },
            { name: "فقدان الأمتعة", included: true, value: "حتى 1,000 د.ك" },
            { name: "إلغاء الرحلة", included: false },
            { name: "المسؤولية الشخصية", included: false },
            { name: "تغطية الرياضات والمغامرات", included: false },
          ],
          color: "#0a2e5c",
          recommended: false,
        },
        {
          id: "premium",
          name: "الخطة المميزة",
          price: "25",
          period: "يوم",
          features: [
            { name: "التغطية الطبية الطارئة", included: true, value: "حتى 100,000 د.ك" },
            { name: "تأخير الرحلة", included: true, value: "حتى 1,000 د.ك" },
            { name: "فقدان الأمتعة", included: true, value: "حتى 2,000 د.ك" },
            { name: "إلغاء الرحلة", included: true, value: "حتى 1,500 د.ك" },
            { name: "المسؤولية الشخصية", included: true, value: "حتى 50,000 د.ك" },
            { name: "تغطية الرياضات والمغامرات", included: false },
          ],
          color: "#c9a96e",
          recommended: true,
        },
        {
          id: "elite",
          name: "الخطة الذهبية",
          price: "35",
          period: "يوم",
          features: [
            { name: "التغطية الطبية الطارئة", included: true, value: "حتى 300,000 د.ك" },
            { name: "تأخير الرحلة", included: true, value: "حتى 2,000 د.ك" },
            { name: "فقدان الأمتعة", included: true, value: "حتى 3,000 د.ك" },
            { name: "إلغاء الرحلة", included: true, value: "حتى 3,000 د.ك" },
            { name: "المسؤولية الشخصية", included: true, value: "حتى 100,000 د.ك" },
            { name: "تغطية الرياضات والمغامرات", included: true },
          ],
          color: "#1a4980",
          recommended: false,
        },
      ],
    },
    car: {
      title: "خطط تأمين السيارات",
      description: "اختر خطة تأمين السيارات المناسبة لاحتياجاتك",
      image: "/sleek-city-cruiser.png",
      plans: [
        {
          id: "basic",
          name: "التأمين ضد الغير",
          price: "120",
          period: "سنة",
          features: [
            { name: "المسؤولية تجاه الغير", included: true, value: "حتى 500,000 د.ك" },
            { name: "الإصابات الشخصية", included: true, value: "حتى 10,000 د.ك" },
            { name: "المساعدة على الطريق", included: true },
            { name: "تغطية الأضرار الخاصة بسيارتك", included: false },
            { name: "تغطية السرقة", included: false },
            { name: "سيارة بديلة", included: false },
          ],
          color: "#0a2e5c",
          recommended: false,
        },
        {
          id: "premium",
          name: "التأمين الشامل",
          price: "250",
          period: "سنة",
          features: [
            { name: "المسؤولية تجاه الغير", included: true, value: "حتى 750,000 د.ك" },
            { name: "الإصابات الشخصية", included: true, value: "حتى 20,000 د.ك" },
            { name: "المساعدة على الطريق", included: true },
            { name: "تغطية الأضرار الخاصة بسيارتك", included: true },
            { name: "تغطية السرقة", included: true },
            { name: "سيارة بديلة", included: false },
          ],
          color: "#c9a96e",
          recommended: true,
        },
        {
          id: "elite",
          name: "التأمين الشامل بلس",
          price: "350",
          period: "سنة",
          features: [
            { name: "المسؤولية تجاه الغير", included: true, value: "حتى 1,000,000 د.ك" },
            { name: "الإصابات الشخصية", included: true, value: "حتى 30,000 د.ك" },
            { name: "المساعدة على الطريق", included: true },
            { name: "تغطية الأضرار الخاصة بسيارتك", included: true },
            { name: "تغطية السرقة", included: true },
            { name: "سيارة بديلة", included: true, value: "حتى 14 يوم" },
          ],
          color: "#1a4980",
          recommended: false,
        },
      ],
    },
    health: {
      title: "خطط التأمين الصحي",
      description: "اختر خطة التأمين الصحي المناسبة لاحتياجاتك",
      image: "/diverse-hands-healthcare.png",
      plans: [
        {
          id: "basic",
          name: "الخطة الأساسية",
          price: "50",
          period: "شهر",
          features: [
            { name: "تغطية المستشفيات", included: true, value: "حتى 10,000 د.ك سنوياً" },
            { name: "زيارات الأطباء", included: true, value: "حتى 500 د.ك سنوياً" },
            { name: "الأدوية", included: true, value: "حتى 300 د.ك سنوياً" },
            { name: "طب الأسنان", included: false },
            { name: "النظارات والعدسات", included: false },
            { name: "العلاج الطبيعي", included: false },
          ],
          color: "#0a2e5c",
          recommended: false,
        },
        {
          id: "premium",
          name: "الخطة الفضية",
          price: "100",
          period: "شهر",
          features: [
            { name: "تغطية المستشفيات", included: true, value: "حتى 25,000 د.ك سنوياً" },
            { name: "زيارات الأطباء", included: true, value: "حتى 1,000 د.ك سنوياً" },
            { name: "الأدوية", included: true, value: "حتى 750 د.ك سنوياً" },
            { name: "طب الأسنان", included: true, value: "حتى 500 د.ك سنوياً" },
            { name: "النظارات والعدسات", included: true, value: "حتى 200 د.ك سنوياً" },
            { name: "العلاج الطبيعي", included: false },
          ],
          color: "#c9a96e",
          recommended: true,
        },
        {
          id: "elite",
          name: "الخطة الذهبية",
          price: "150",
          period: "شهر",
          features: [
            { name: "تغطية المستشفيات", included: true, value: "حتى 50,000 د.ك سنوياً" },
            { name: "زيارات الأطباء", included: true, value: "حتى 2,000 د.ك سنوياً" },
            { name: "الأدوية", included: true, value: "حتى 1,500 د.ك سنوياً" },
            { name: "طب الأسنان", included: true, value: "حتى 1,000 د.ك سنوياً" },
            { name: "النظارات والعدسات", included: true, value: "حتى 400 د.ك سنوياً" },
            { name: "العلاج الطبيعي", included: true, value: "حتى 500 د.ك سنوياً" },
          ],
          color: "#1a4980",
          recommended: false,
        },
      ],
    },
    property: {
      title: "خطط تأمين المنازل",
      description: "اختر خطة تأمين المنازل المناسبة لاحتياجاتك",
      image: "/sleek-urban-residence.png",
      plans: [
        {
          id: "basic",
          name: "تأمين المحتويات",
          price: "75",
          period: "سنة",
          features: [
            { name: "تغطية المحتويات", included: true, value: "حتى 10,000 د.ك" },
            { name: "تغطية السرقة", included: true },
            { name: "تغطية الحريق", included: true },
            { name: "تغطية المبنى", included: false },
            { name: "تغطية المسؤولية تجاه الغير", included: false },
            { name: "تغطية تسرب المياه", included: false },
          ],
          color: "#0a2e5c",
          recommended: false,
        },
        {
          id: "premium",
          name: "التأمين الشامل",
          price: "150",
          period: "سنة",
          features: [
            { name: "تغطية المحتويات", included: true, value: "حتى 25,000 د.ك" },
            { name: "تغطية السرقة", included: true },
            { name: "تغطية الحريق", included: true },
            { name: "تغطية المبنى", included: true, value: "حتى 100,000 د.ك" },
            { name: "تغطية المسؤولية تجاه الغير", included: true, value: "حتى 50,000 د.ك" },
            { name: "تغطية تسرب المياه", included: false },
          ],
          color: "#c9a96e",
          recommended: true,
        },
        {
          id: "elite",
          name: "التأمين الشامل بلس",
          price: "250",
          period: "سنة",
          features: [
            { name: "تغطية المحتويات", included: true, value: "حتى 50,000 د.ك" },
            { name: "تغطية السرقة", included: true },
            { name: "تغطية الحريق", included: true },
            { name: "تغطية المبنى", included: true, value: "حتى 200,000 د.ك" },
            { name: "تغطية المسؤولية تجاه الغير", included: true, value: "حتى 100,000 د.ك" },
            { name: "تغطية تسرب المياه", included: true },
          ],
          color: "#1a4980",
          recommended: false,
        },
      ],
    },
    life: {
      title: "خطط تأمين الحياة",
      description: "اختر خطة تأمين الحياة المناسبة لاحتياجاتك",
      image: "/placeholder.svg?key=xkasq",
      plans: [
        {
          id: "basic",
          name: "الخطة الأساسية",
          price: "30",
          period: "شهر",
          features: [
            { name: "تغطية الوفاة", included: true, value: "50,000 د.ك" },
            { name: "تغطية العجز الكلي", included: true, value: "50,000 د.ك" },
            { name: "تغطية الأمراض المستعصية", included: false },
            { name: "تغطية العجز الجزئي", included: false },
            { name: "تغطية المصاريف الطبية", included: false },
            { name: "خيار الاستثمار", included: false },
          ],
          color: "#0a2e5c",
          recommended: false,
        },
        {
          id: "premium",
          name: "الخطة المميزة",
          price: "60",
          period: "شهر",
          features: [
            { name: "تغطية الوفاة", included: true, value: "100,000 د.ك" },
            { name: "تغطية العجز الكلي", included: true, value: "100,000 د.ك" },
            { name: "تغطية الأمراض المستعصية", included: true, value: "50,000 د.ك" },
            { name: "تغطية العجز الجزئي", included: true, value: "50,000 د.ك" },
            { name: "تغطية المصاريف الطبية", included: false },
            { name: "خيار الاستثمار", included: false },
          ],
          color: "#c9a96e",
          recommended: true,
        },
        {
          id: "elite",
          name: "الخطة الذهبية",
          price: "100",
          period: "شهر",
          features: [
            { name: "تغطية الوفاة", included: true, value: "200,000 د.ك" },
            { name: "تغطية العجز الكلي", included: true, value: "200,000 د.ك" },
            { name: "تغطية الأمراض المستعصية", included: true, value: "100,000 د.ك" },
            { name: "تغطية العجز الجزئي", included: true, value: "100,000 د.ك" },
            { name: "تغطية المصاريف الطبية", included: true, value: "50,000 د.ك" },
            { name: "خيار الاستثمار", included: true },
          ],
          color: "#1a4980",
          recommended: false,
        },
      ],
    },
  }

  const currentInsurance = insuranceData[insuranceType as keyof typeof insuranceData]

  // When insurance type changes, reset selected plan
  useEffect(() => {
    setSelectedPlan(null)
  }, [insuranceType])

  // Animation variants
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

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleProceedToApply = () => {
    router.push(`/apply?type=${insuranceType}${selectedPlan ? `&plan=${selectedPlan}` : ""}`)
  }

  const handleInsuranceTypeChange = (type: string) => {
    router.push(`/plans/${type}`)
  }

  // Get selected plan details if any
  const selectedPlanDetails = selectedPlan ? currentInsurance.plans.find((plan) => plan.id === selectedPlan) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-[#0a2e5c]">
        <Image
          src={currentInsurance.image || "/placeholder.svg"}
          alt={currentInsurance.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-3xl font-bold mb-4">{currentInsurance.title}</h1>
          <p className="text-xl">{currentInsurance.description}</p>
        </div>
      </div>

      {/* Insurance Type Select */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end max-w-xs mr-auto">
            <Select value={insuranceType} onValueChange={handleInsuranceTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="اختر نوع التأمين" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(insuranceData).map((type) => (
                  <SelectItem key={type} value={type}>
                    {insuranceData[type as keyof typeof insuranceData].title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
        
          <Button className="bg-[#c9a96e] hover:bg-[#b89355]" onClick={handleProceedToApply} disabled={!selectedPlan}>
            {selectedPlan ? "متابعة الطلب" : "اختر خطة أولاً"}
            <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-4 mb-6 border-2"
            style={{ borderColor: selectedPlanDetails?.color || "#0a2e5c" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <h3 className="text-xl font-bold">الخطة المختارة:</h3>
                <div className="flex items-center mt-2">
                  <div
                    className="w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: selectedPlanDetails?.color || "#0a2e5c" }}
                  ></div>
                  <span className="text-lg font-semibold">{selectedPlanDetails?.name}</span>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="text-2xl font-bold">{selectedPlanDetails?.price} د.ك</div>
                <div className="text-gray-600">/ {selectedPlanDetails?.period}</div>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0" onClick={() => setSelectedPlan(null)}>
                تغيير الخطة
              </Button>
            </div>
          </motion.div>
        )}

        {/* Cards View */}
        {planView === "cards" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {currentInsurance.plans.map((plan) => (
              <motion.div key={plan.id} variants={item}>
                <InsurancePlanCard
                  name={plan.name}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  color={plan.color}
                  recommended={plan.recommended}
                  onSelect={() => handleSelectPlan(plan.id)}
                  selected={selectedPlan === plan.id}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Table View */}
        {planView === "table" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-[#0a2e5c] text-white">
                  <th className="py-4 px-6 text-right">الميزات</th>
                  {currentInsurance.plans.map((plan) => (
                    <th key={plan.id} className="py-4 px-6 text-center">
                      {plan.name}
                      {plan.recommended && (
                        <div className="bg-[#c9a96e] text-white text-center py-1 text-xs font-bold mt-2 rounded">
                          موصى به
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 text-right font-bold">السعر</td>
                  {currentInsurance.plans.map((plan) => (
                    <td key={plan.id} className="py-4 px-6 text-center">
                      <div className="font-bold text-xl">{plan.price} د.ك</div>
                      <div className="text-gray-500">/ {plan.period}</div>
                    </td>
                  ))}
                </tr>

                {/* Feature rows */}
                {currentInsurance.plans[0].features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b">
                    <td className="py-4 px-6 text-right font-medium">{feature.name}</td>
                    {currentInsurance.plans.map((plan) => {
                      const planFeature = plan.features[featureIndex]
                      return (
                        <td key={plan.id} className="py-4 px-6 text-center">
                          {planFeature.included ? (
                            <div>
                              <Check className="h-5 w-5 text-green-500 mx-auto mb-1" />
                              {planFeature.value && <div className="text-sm">{planFeature.value}</div>}
                            </div>
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}

                {/* Action row */}
                <tr>
                  <td className="py-4 px-6"></td>
                  {currentInsurance.plans.map((plan) => (
                    <td key={plan.id} className="py-4 px-6 text-center">
                      <Button
                        className={`w-full ${selectedPlan === plan.id ? "ring-2 ring-offset-2" : ""}`}
                        style={{
                          backgroundColor: plan.color,
                        }}
                        onClick={() => handleSelectPlan(plan.id)}
                      >
                        {selectedPlan === plan.id ? "تم الاختيار" : "اختر هذه الخطة"}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">كيف أختار الخطة المناسبة لي؟</h3>
              <p className="text-gray-600">
                يعتمد اختيار الخطة المناسبة على احتياجاتك الشخصية وميزانيتك. ننصحك بمراجعة تفاصيل كل خطة ومقارنة الميزات
                والأسعار. يمكنك أيضاً التواصل مع فريق خدمة العملاء للحصول على المشورة.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">هل يمكنني تغيير خطتي لاحقاً؟</h3>
              <p className="text-gray-600">
                نعم، يمكنك ترقية خطتك أو تغييرها عند تجديد وثيقة التأمين. في بعض الحالات، يمكن تغيير الخطة خلال فترة
                التأمين مع مراعاة بعض الشروط.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">هل هناك فترة انتظار قبل بدء التغطية؟</h3>
              <p className="text-gray-600">
                تختلف فترات الانتظار حسب نوع التأمين والخطة المختارة. بشكل عام، تبدأ تغطية تأمين السفر والسيارات فوراً،
                بينما قد تتضمن خطط التأمين الصحي وتأمين الحياة فترات انتظار لبعض الحالات.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#0a2e5c] rounded-lg shadow-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة في اختيار الخطة المناسبة؟</h2>
          <p className="mb-6">
            فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك ومساعدتك في اختيار الخطة المناسبة
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#c9a96e] hover:bg-[#b89355]">اتصل بنا</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#0a2e5c]">
              طلب استشارة
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-12">
          <Button variant="outline" className="flex items-center" onClick={() => router.back()}>
            <ChevronRight className="mr-2 h-4 w-4" />
            العودة
          </Button>
          <Button
            className="bg-[#c9a96e] hover:bg-[#b89355] flex items-center"
            onClick={handleProceedToApply}
            disabled={!selectedPlan}
          >
            {selectedPlan ? "متابعة الطلب" : "اختر خطة أولاً"}
            <ChevronLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
