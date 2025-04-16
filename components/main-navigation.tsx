"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "خدمات التأمين",
    items: [
      { title: "تأمين السفر", href: "/services/travel", description: "حماية شاملة أثناء سفرك في جميع أنحاء العالم" },
      { title: "تأمين السيارات", href: "/services/cars", description: "تأمين شامل للسيارات ضد الحوادث والسرقة" },
      { title: "تأمين الحياة والصحة", href: "/services/health", description: "تأمين صحي شامل يغطي النفقات الطبية" },
      { title: "تأمين المنازل", href: "/services/property", description: "حماية شاملة للمنازل والممتلكات" },
      {
        title: "تأمين المنازل المتنقلة",
        href: "/services/mobile-homes",
        description: "تأمين خاص للمنازل المتنقلة والثابتة",
      },
      {
        title: "التأمين الصحي والطبي",
        href: "/services/medical",
        description: "تأمين صحي شامل يغطي جميع النفقات الطبية",
      },
    ],
  },
  {
    title: "طلب عرض سعر",
    items: [
      {
        title: "عرض سعر تأمين السيارات",
        href: "/car-quote/product",
        description: "احصل على عرض سعر لتأمين سيارتك",
      },
      { title: "تفاصيل السيارة", href: "/car-quote/car-details", description: "أدخل تفاصيل سيارتك للحصول على عرض سعر" },
      { title: "استفسارات", href: "/car-quote/inquiry", description: "أرسل استفساراتك حول عروض التأمين" },
    ],
  },
  {
    title: "تقديم طلب",
    items: [
      { title: "طلب تأمين السفر", href: "/apply?type=travel", description: "قدم طلب للحصول على تأمين سفر" },
      { title: "طلب تأمين السيارات", href: "/apply?type=car", description: "قدم طلب للحصول على تأمين سيارة" },
      { title: "طلب تأمين صحي", href: "/apply?type=health", description: "قدم طلب للحصول على تأمين صحي" },
      { title: "طلب تأمين منازل", href: "/apply?type=property", description: "قدم طلب للحصول على تأمين منزل" },
      { title: "طلب تأمين حياة", href: "/apply?type=life", description: "قدم طلب للحصول على تأمين حياة" },
    ],
  },
  {
    title: "عن الشركة",
    href: "/about",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
  },
]

export default function MainNavigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu dir="rtl" className="justify-end">
          <NavigationMenuList>
            {navigationItems.map((item, index) => {
              // If the item has no subitems, render a simple link
              if (!item.items) {
                return (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#1a4980] hover:text-white focus:outline-none",
                          pathname === item.href ? "bg-[#1a4980] text-white" : "text-white",
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              }

              // If the item has subitems, render a dropdown
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent text-white hover:bg-[#1a4980] hover:text-white focus:bg-[#1a4980]",
                      pathname.startsWith(item.href || "#") ? "bg-[#1a4980] text-white" : "",
                    )}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items?.map((subItem, subIndex) => (
                        <li key={subIndex} className="row-span-1">
                          <Link href={subItem.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1a4980] hover:text-white focus:bg-[#1a4980] focus:text-white",
                                pathname === subItem.href ? "bg-[#1a4980] text-white" : "text-gray-100",
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-gray-400">{subItem.description}</p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm" className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? "إغلاق" : "القائمة"}
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a2e5c] border-t border-[#1a4980] p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b border-[#1a4980] pb-2">
                {!item.items ? (
                  <Link
                    href={item.href || "#"}
                    className={`block py-2 ${
                      pathname === item.href ? "text-[#c9a96e] font-medium" : "text-white"
                    } hover:text-[#c9a96e]`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <div className="font-medium text-[#c9a96e] mb-2">{item.title}</div>
                    <div className="flex flex-col space-y-2 pr-4">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`text-sm ${
                            pathname === subItem.href ? "text-[#c9a96e]" : "text-gray-300"
                          } hover:text-[#c9a96e]`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ChevronRight className="inline h-3 w-3 ml-1" />
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
