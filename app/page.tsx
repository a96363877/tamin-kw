"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Search, Menu, ChevronRight, Phone, Shield, Clock, Award, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Loader from "@/components/loader"
import { LiveChatWidget } from '@livechat/widget-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const partnersRef = useRef(null)
  const contactRef = useRef(null)
  const newsRef = useRef(null)
  const appRef = useRef(null)

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.3 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 })
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.3 })
  const isAppInView = useInView(appRef, { once: true, amount: 0.3 })
const [isloading, setLoading]=useState(true)
  const services = [
    { id: "travel", name: "السفر", icon: "1" },
    { id: "cars", name: "السيارات", icon: "2" },
    { id: "health", name: "حماية الحياة والصحة", icon: "3" },
    { id: "property", name: "المنازل", icon: "4" },
    { id: "mobile-homes", name: "ثابت ومتنقل سكني", icon: "5" },
    { id: "medical", name: "الصحة والطبية", icon: "6" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "صاحب شركة",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "تجربتي مع شركة الكويت للتأمين كانت ممتازة. استجابة سريعة وخدمة عملاء متميزة. أنصح بها بشدة لجميع احتياجات التأمين.",
    },
    {
      id: 2,
      name: "فاطمة علي",
      role: "طبيبة",
      image: "/placeholder.svg?height=80&width=80",
      content: "سعيدة جداً بالتعامل مع شركة الكويت للتأمين. التغطية الصحية شاملة والإجراءات سهلة وسريعة.",
    },
    {
      id: 3,
      name: "خالد العنزي",
      role: "مهندس",
      image: "/placeholder.svg?height=80&width=80",
      content: "تأمين السيارات من الكويت للتأمين وفر لي الحماية الكاملة وخدمة المساعدة على الطريق كانت سريعة جداً.",
    },
  ]

  const partners = [
    { id: 1, name: "GIG", logo: "/vercel.svg" },
    { id: 2, name: " 2", logo: "/logo.png" },
    { id: 3, name: " 3", logo: "/" },
    { id: 4, name: " 4", logo: "/" },
    { id: 5, name: " 5", logo: "/" },
    { id: 6, name: " 6", logo: "/" },
  ]

  const news = [
    {
      id: 1,
      title: "إطلاق خدمات تأمينية جديدة للشركات",
      date: "15 أبريل 2025",
      image: "/13Imagebb5b.jpg",
      excerpt: "أعلنت شركة الكويت للتأمين عن إطلاق باقة جديدة من الخدمات التأمينية المخصصة للشركات الصغيرة والمتوسطة.",
    },
    {
      id: 2,
      title: "افتتاح فرع جديد في منطقة الفروانية",
      date: "10 أبريل 2025",
      image: "/31Imaged3a5.jpg",
      excerpt: "تم افتتاح فرع جديد لشركة الكويت للتأمين في منطقة الفروانية لتقديم خدمات أفضل للعملاء في المنطقة.",
    },
    {
      id: 3,
      title: "تحديث تطبيق الهاتف المحمول بميزات جديدة",
      date: "5 أبريل 2025",
      image: "/656Image244e3.jpg",
      excerpt:
        "تم تحديث تطبيق الهاتف المحمول لشركة الكويت للتأمين بميزات جديدة تسهل على العملاء إدارة وثائق التأمين الخاصة بهم.",
    },
  ]

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
useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
  }, 2500);
},[])
  return (
    <main className="flex min-h-screen flex-col bg-[#0a2e5c] text-white">
  

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center px-6 py-8 text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="/12MascotImage.png"
            alt="Insurance Character"
            width={300}
            height={300}
            className="mx-auto mb-6"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold mb-2"
        >
          أمن كل ما هو قريب من قلبك
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm text-gray-300 mb-8"
        >
          مع خدماتنا التأمينية الموثوقة والمدروسة
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section variants={container} initial="hidden" animate="show" className="px-4 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Link href={`/services/${service.id}`}>
                <div className="border border-[#1a4980] rounded-lg p-4 flex flex-col items-center justify-center text-center h-24 hover:bg-[#1a4980] transition-colors">
                  <img src={`/${service.icon}.png`} width={50}/>
                  <span className="text-sm">{service.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div variants={item} className="mt-6 flex justify-center">
          <Button variant="secondary" className="border-[#1a4980]  hover:bg-[#1a4980]">
            <span>أكثر</span>
            <ChevronRight className="h-4 w-4 mr-2" />
          </Button>
        </motion.div>
      </motion.section>

      {/* About Us / Why Choose Us Section */}
      <section ref={aboutRef} className="py-12 px-4 bg-[#0a2e5c]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">لماذا تختار شركة الكويت للتأمين؟</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a4980] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-[#0a2e5c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">حماية شاملة</h3>
                  <p className="text-gray-300 text-sm">
                    نقدم تغطية تأمينية شاملة تحميك وتحمي ممتلكاتك من جميع المخاطر المحتملة.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a4980] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-[#0a2e5c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">خدمة سريعة</h3>
                  <p className="text-gray-300 text-sm">
                    نلتزم بتقديم خدمة سريعة وفعالة، مع معالجة المطالبات في أسرع وقت ممكن.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a4980] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-[#0a2e5c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">خبرة واسعة</h3>
                  <p className="text-gray-300 text-sm">
                    نتمتع بخبرة تزيد عن 50 عاماً في مجال التأمين، مما يجعلنا الخيار الأمثل لعملائنا.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a4980] p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#0a2e5c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">دعم على مدار الساعة</h3>
                  <p className="text-gray-300 text-sm">
                    فريق خدمة العملاء متاح على مدار الساعة للرد على استفساراتك وتقديم المساعدة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white">تعرف على المزيد عنا</Button>
          </div>
        </motion.div>
      </section>
    {/* Statistics Section */}
    <section ref={testimonialsRef} className="py-12 px-4 bg-[#081d3a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">إحصائيات الشركة</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Statistic Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1a4980] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0a2e5c]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">25,000+</h3>
              <p className="text-gray-300">عميل نشط</p>
            </motion.div>

            {/* Statistic Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1a4980] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0a2e5c]"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">15</h3>
              <p className="text-gray-300">فرع في الكويت</p>
            </motion.div>

            {/* Statistic Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1a4980] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0a2e5c]"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">80 مليون</h3>
              <p className="text-gray-300">دينار كويتي إجمالي الأصول</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Statistic Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1a4980] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0a2e5c]"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">نسبة رضا العملاء</p>
            </motion.div>

            {/* Statistic Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#1a4980] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c9a96e] p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0a2e5c]"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">60+</h3>
              <p className="text-gray-300">سنة من الخبرة</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-12 px-4 bg-[#0a2e5c]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">شركاؤنا</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isPartnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section ref={newsRef} className="py-12 px-4 bg-[#0a2e5c]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">أحدث الأخبار</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isNewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a4980] rounded-lg overflow-hidden"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-[#c9a96e] text-sm mb-2">{item.date}</p>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.excerpt}</p>
                  <Link href="#" className="text-[#c9a96e] flex items-center text-sm hover:underline">
                    اقرأ المزيد
                    <ArrowRight className="h-4 w-4 mr-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-[#1a4980] text-black hover:bg-[#1a4980]">
              جميع الأخبار
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-12 px-4 bg-[#081d3a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-2 text-center">تواصل معنا</h2>
          <p className="text-gray-300 text-center mb-8">نحن هنا للإجابة على جميع استفساراتك</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a4980] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#c9a96e] p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a2e5c]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">رقم الهاتف</p>
                    <p className="text-gray-300">+965 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#c9a96e] p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a2e5c]"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">البريد الإلكتروني</p>
                    <p className="text-gray-300">info@kic.com.kw</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#c9a96e] p-2 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0a2e5c]"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">العنوان</p>
                    <p className="text-gray-300">شارع الشهداء، برج الحمراء، الكويت</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">ساعات العمل</h4>
                <p className="text-gray-300">الأحد - الخميس: 8:00 صباحاً - 4:00 مساءً</p>
                <p className="text-gray-300">الجمعة - السبت: مغلق</p>
              </div>
            </div>

            <div className="bg-[#1a4980] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">أرسل رسالة</h3>

              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="bg-[#0a2e5c] border-[#1a4980] text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="bg-[#0a2e5c] border-[#1a4980] text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="bg-[#0a2e5c] border-[#1a4980] text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="الرسالة"
                    className="bg-[#0a2e5c] border-[#1a4980] text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-[#c9a96e] hover:bg-[#b89355] text-white">إرسال الرسالة</Button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* News Section */}
   
      {/* App Download Section */}
      <section ref={appRef} className="py-12 px-4 bg-[#081d3a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAppInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">حمل تطبيقنا الآن</h2>
              <p className="text-gray-300 mb-6">
                احصل على جميع خدمات التأمين في جيبك. قم بتحميل تطبيق الكويت للتأمين الآن وتمتع بتجربة سهلة وسريعة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-900 text-white flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  <div className="text-right">
                    <p className="text-xs">تحميل من</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </Button>

                <Button className="bg-black hover:bg-gray-900 text-white flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  <div className="text-right">
                    <p className="text-xs">تحميل من</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
            <img
                src="/appstore2.png"
                alt="Mobile App"
                width={200}
                height={400}
                className="h-80 object-contain"
              />
               <img
              src="/google-play-badge.png"
              alt="Mobile App"
              width={200}
              height={400}
              className="h-80 object-contain"
            />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0a2e5c] z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <button className="text-white" onClick={() => setIsMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Image
              src="/sailing-assurance.png"
              alt="Kuwait Insurance Logo"
              width={120}
              height={40}
              className="h-10 object-contain"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="py-2 border-b border-[#1a4980]">
              الرئيسية
            </Link>
            <Link href="/about" className="py-2 border-b border-[#1a4980]">
              عن الشركة
            </Link>
            <Link href="/services" className="py-2 border-b border-[#1a4980]">
              خدماتنا
            </Link>
            <Link href="/contact" className="py-2 border-b border-[#1a4980]">
              اتصل بنا
            </Link>
            <Link href="/login" className="py-2 border-b border-[#1a4980]">
              تسجيل الدخول
            </Link>
          </nav>
        </div>
      )}
          {isloading && <Loader/>}
          <LiveChatWidget license="19131098"   visibility="maximized"/>

    </main>
  )
}
