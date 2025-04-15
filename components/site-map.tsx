import Link from "next/link"

export default function SiteMap() {
  const siteStructure = [
    {
      title: "الصفحات الرئيسية",
      links: [
        { name: "الرئيسية", href: "/" },
        { name: "عن الشركة", href: "/about" },
        { name: "اتصل بنا", href: "/contact" },
      ],
    },
    {
      title: "خدمات التأمين",
      links: [
        { name: "تأمين السفر", href: "/services/travel" },
        { name: "تأمين السيارات", href: "/services/cars" },
        { name: "تأمين الحياة والصحة", href: "/services/health" },
        { name: "تأمين المنازل", href: "/services/property" },
        { name: "تأمين المنازل المتنقلة", href: "/services/mobile-homes" },
        { name: "التأمين الصحي والطبي", href: "/services/medical" },
      ],
    },
    {
      title: "طلب عرض سعر",
      links: [
        { name: "اختيار المنتج", href: "/car-quote/product" },
        { name: "تفاصيل السيارة", href: "/car-quote/car-details" },
        { name: "استفسارات", href: "/car-quote/inquiry" },
      ],
    },
    {
      title: "تقديم طلب",
      links: [
        { name: "طلب تأمين السفر", href: "/apply?type=travel" },
        { name: "طلب تأمين السيارات", href: "/apply?type=car" },
        { name: "طلب تأمين صحي", href: "/apply?type=health" },
        { name: "طلب تأمين منازل", href: "/apply?type=property" },
        { name: "طلب تأمين حياة", href: "/apply?type=life" },
      ],
    },
  ]

  return (
    <div className="bg-[#081d3a] text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">خريطة الموقع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteStructure.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#c9a96e] font-bold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-[#c9a96e]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
