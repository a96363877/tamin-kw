"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  name: string
  included: boolean
  value?: string
}

interface InsurancePlanCardProps {
  name: string
  price: string
  period: string
  features: Feature[]
  color: string
  recommended?: boolean
  onSelect?: () => void
}

export default function InsurancePlanCard({
  name,
  price,
  period,
  features,
  color,
  recommended = false,
  onSelect,
}: InsurancePlanCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4`} style={{ borderColor: color }}>
      {recommended && <div className="bg-[#c9a96e] text-white text-center py-1 text-sm font-bold">موصى به</div>}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 text-lg"> د.ك / {period}</span>
        </div>

        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-500 ml-2" />
                ) : (
                  <X className="h-5 w-5 text-red-500 ml-2" />
                )}
                <span className={feature.included ? "text-gray-800" : "text-gray-400"}>{feature.name}</span>
              </div>
              {feature.included && feature.value && <span className="text-sm text-gray-600">{feature.value}</span>}
            </div>
          ))}
        </div>

        <Button className="w-full" style={{ backgroundColor: color }} onClick={onSelect}>
          اختر هذه الخطة
        </Button>
      </div>
    </div>
  )
}
