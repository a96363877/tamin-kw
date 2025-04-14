import Image from "next/image"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
  imagePosition: "left" | "right"
}

export default function FeatureCard({ title, description, imageSrc, buttonText, imagePosition }: FeatureCardProps) {
  return (
    <div className="p-4 border-b border-blue-900">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="text-right">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <Button className="w-full bg-[#c9a96e] text-white hover:bg-[#b89355] rounded-md">{buttonText}</Button>
      </div>
    </div>
  )
}
