"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ProductSelectionPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load saved selection from localStorage if available
  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct")
    if (savedProduct) {
      setSelectedProduct(savedProduct)
    }
  }, [])

  const products = [
    { id: "car-insurance", name: "تأمين السيارات", icon: "🚗", description: "حماية شاملة لسيارتك ضد الحوادث والسرقة" },
    { id: "car-loan", name: "قرض السيارة", icon: "💰", description: "تمويل ميسر لشراء سيارة جديدة أو مستعملة" },
    { id: "car-lease", name: "تأجير السيارات", icon: "🔑", description: "خيارات مرنة لتأجير السيارات لفترات مختلفة" },
    { id: "car-maintenance", name: "خدمات الصيانة", icon: "🔧", description: "باقات صيانة متكاملة للحفاظ على سيارتك" },
  ]

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId)
    localStorage.setItem("selectedProduct", productId)

    // Show toast notification
    toast({
      title: "تم اختيار المنتج",
      description: `تم اختيار ${products.find((p) => p.id === productId)?.name}`,
    })
  }

  const handleSubmit = async () => {
    if (selectedProduct) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      setIsSubmitting(false)
      router.push("/car-quote/car-details")
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
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <h2 className="text-[#0a1e3c] text-lg font-medium mb-2 text-right">اختر المنتج المناسب لاحتياجاتك</h2>
            <p className="text-gray-500 text-sm mb-6 text-right">
              يمكنك اختيار واحد من المنتجات التالية للحصول على عرض سعر
            </p>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card
                  className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                    selectedProduct === product.id
                      ? "border-[#c9a96e] bg-[#fffaf0]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#0a1e3c] flex items-center justify-center text-white text-xl">
                        <span>{product.icon}</span>
                      </div>
                      <div className="mr-3 text-right">
                        <h3 className="text-[#0a1e3c] font-medium">{product.name}</h3>
                        <p className="text-gray-500 text-xs mt-1">{product.description}</p>
                      </div>
                    </div>
                    {selectedProduct === product.id && (
                      <div className="w-6 h-6 rounded-full bg-[#c9a96e] flex items-center justify-center text-white">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button
              onClick={handleSubmit}
              disabled={!selectedProduct || isSubmitting}
              className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 rounded-md text-lg transition-all disabled:opacity-50"
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
        </motion.div>
      </div>
    </div>
  )
}
