import Image from "next/image"
import { Button } from "@/components/ui/button"
import ServiceGrid from "@/components/service-grid"
import StatisticsSection from "@/components/statistics-section"
import FeatureCard from "@/components/feature-card"
import AppDownload from "@/components/app-download"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a1e3c] text-white">
      {/* Hero Section */}
      <section className="p-6 text-right bg-[#0a1e3c]">
        <div className="flex flex-row-reverse items-center justify-between">
          <Image
            src="/12MascotImage.png"
            alt="Cartoon Character"
            width={120}
            height={120}
            className="mb-4"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">أين ما كنت، قريبين من قلبك</h1>
            <p className="text-sm text-gray-300 mb-4">استثمر بسهولة مع KIC</p>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <ServiceGrid />

      {/* CTA Buttons */}
      <section className="px-4 py-6">
        <Button
          variant="outline"
          className="w-full mb-3 bg-transparent border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-md h-12"
        >
          تسجيل الدخول
        </Button>
        <Button className="w-full bg-[#c9a96e] text-white hover:bg-[#b89355] rounded-md h-12">فتح حساب جديد</Button>
      </section>

      {/* Feature Cards */}
      <FeatureCard
        title="خدمة توصيل المركبات"
        description="نقدم لك خدمة توصيل المركبات إلى مكان تواجدك"
        imageSrc="/placeholder.svg?height=200&width=400"
        buttonText="حجز موعد التوصيل"
        imagePosition="right"
      />

      <FeatureCard
        title="كن أول من يستفيد من عروض السيارة الأحدث"
        description="اكتشف أحدث العروض على السيارات الجديدة"
        imageSrc="/placeholder.svg?height=200&width=400"
        buttonText="استكشف العروض"
        imagePosition="left"
      />

      <FeatureCard
        title="أحصل عليها عندما تكون جاهزاً"
        description="استلم سيارتك في الوقت المناسب لك"
        imageSrc="/placeholder.svg?height=200&width=400"
        buttonText="معرفة المزيد"
        imagePosition="right"
      />

      <FeatureCard
        title="سافر بأمان مع عائلتك"
        description="استمتع برحلات آمنة مع عائلتك في سيارة جديدة"
        imageSrc="/placeholder.svg?height=200&width=400"
        buttonText="اكتشف المزيد"
        imagePosition="left"
      />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* App Download Section */}
      <AppDownload />
    </main>
  )
}
