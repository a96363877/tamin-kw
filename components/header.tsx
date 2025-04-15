"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Search, Globe, Phone, Mail, User, Bell, MessageSquare } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainMenuItems = [
    {
      title: "الخدمات المصرفية",
      items: ["الحسابات", "البطاقات", "القروض", "التمويل", "الخدمات الإلكترونية"],
    },
    {
      title: "الاستثمار",
      items: ["الصناديق الاستثمارية", "المحافظ الاستثمارية", "الأسهم", "السندات", "العملات"],
    },
    {
      title: "العقارات",
      items: ["المشاريع السكنية", "المشاريع التجارية", "الاستثمار العقاري", "التمويل العقاري"],
    },
    {
      title: "الشركات",
      items: ["الخدمات المصرفية للشركات", "التمويل التجاري", "إدارة النقد", "خدمات الخزينة"],
    },
    {
      title: "عن الشركة",
      items: ["من نحن", "رؤيتنا", "قيمنا", "فريق الإدارة", "المسؤولية الاجتماعية"],
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0a1e3c] border-b border-blue-900">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#061631] text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3 text-[#c9a96e]" />
            <span>+965 9888 7777</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-3 w-3 text-[#c9a96e]" />
            <span>info@kic.com.kw</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
            <Globe className="h-3 w-3 ml-1" />
            English
          </Button>
          <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
            <Bell className="h-3 w-3 ml-1" />
            الإشعارات
          </Button>
          <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
            <MessageSquare className="h-3 w-3 ml-1" />
            المساعدة
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button className="md:hidden text-white mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
<Search className="h-5 w-5 text-white mx-1" />
         
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 space-x-reverse text-white">
          {mainMenuItems.map((item, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm">
                  {item.title}
                  <ChevronDown className="h-4 w-4 mr-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {item.items.map((subItem, subIndex) => (
                  <DropdownMenuItem key={subIndex} className="text-right">
                    {subItem}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center gap-2">
 <Link href="/" className="flex items-center">
            <Image src="/next.svg" alt="KIC Logo" width={160} height={160} className="ml-2" />
           
          </Link>

          <Button variant="ghost" size="icon" className="text-white hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1e3c] border-t border-blue-900 p-4">
          <div className="flex flex-col space-y-4">
            {mainMenuItems.map((item, index) => (
              <div key={index} className="border-b border-blue-800 pb-2">
                <div className="font-medium text-[#c9a96e] mb-2">{item.title}</div>
                <div className="flex flex-col space-y-2 pr-4">
                  {item.items.map((subItem, subIndex) => (
                    <Link href="#" key={subIndex} className="text-sm text-gray-300">
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="bg-[#c9a96e] text-white hover:bg-[#b89355] rounded-md">تسجيل الدخول</Button>
              <Button variant="outline" className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white">
                فتح حساب جديد
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
