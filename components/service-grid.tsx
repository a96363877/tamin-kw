import { CreditCard, BarChart3, Building2, Car, Briefcase, Users } from "lucide-react"

export default function ServiceGrid() {
  const services = [
    { icon: <CreditCard className="h-6 w-6" />, name: "الخدمات المصرفية" },
    { icon: <BarChart3 className="h-6 w-6" />, name: "الاستثمار" },
    { icon: <Building2 className="h-6 w-6" />, name: "العقارات" },
    { icon: <Car className="h-6 w-6" />, name: "السيارات" },
    { icon: <Briefcase className="h-6 w-6" />, name: "خدمات الشركات" },
    { icon: <Users className="h-6 w-6" />, name: "خدمة العملاء" },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 p-4 border-b border-blue-900">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-3 text-center">
          <div className="bg-blue-900/50 p-3 rounded-full mb-2">{service.icon}</div>
          <span className="text-xs">{service.name}</span>
        </div>
      ))}
    </div>
  )
}
