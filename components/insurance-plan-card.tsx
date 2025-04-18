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
  recommended: boolean
  onSelect: () => void
  selected?: boolean
}

export default function InsurancePlanCard({
  name,
  price,
  period,
  features,
  color,
  recommended,
  onSelect,
  selected = false,
}: InsurancePlanCardProps) {
  return (
    <div
      className={`relative h-full rounded-lg shadow-lg overflow-hidden transition-all ${
        selected ? "ring-4 transform scale-102" : ""
      }`}
      style={{ borderColor: selected ? color : "transparent", boxShadow: selected ? `0 0 0 2px ${color}` : "" }}
    >
      {recommended && (
        <div
          className="absolute top-0 right-0 left-0 text-center py-2 text-white text-sm font-bold"
          style={{ backgroundColor: color }}
        >
          موصى به
        </div>
      )}
      <div className="bg-white p-6 pt-8">
        <h3 className="text-xl font-bold mb-2 mt-2">{name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">/ {period}</span>
        </div>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
              ) : (
                <X className="w-5 h-5 text-red-500 mt-0.5 ml-2 flex-shrink-0" />
              )}
              <div>
                <div className="font-medium">{feature.name}</div>
                {feature.value && feature.included && <div className="text-sm text-gray-500">{feature.value}</div>}
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-8" style={{ backgroundColor: selected ? "#0a2e5c" : color }} onClick={onSelect}>
          {selected ? "تم الاختيار" : "اختر هذه الخطة"}
        </Button>
      </div>
    </div>
  )
}
