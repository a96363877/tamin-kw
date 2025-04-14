import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AppDownload() {
  return (
    <section className="p-6 bg-[#0a1e3c] text-right">
      <div className="flex flex-row-reverse items-center mb-6">
        <Image src="/placeholder.svg?height=100&width=100" alt="App Icon" width={100} height={100} className="ml-4" />
        <div>
          <h3 className="font-bold text-xl mb-2">حمل تطبيق KIC</h3>
          <p className="text-sm text-gray-300">استثمر بسهولة من أي مكان</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Button
          variant="outline"
          className="flex-1 bg-transparent border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-md"
        >
          Google Play
        </Button>
        <Button
          variant="outline"
          className="flex-1 bg-transparent border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-md"
        >
          App Store
        </Button>
      </div>
    </section>
  )
}
