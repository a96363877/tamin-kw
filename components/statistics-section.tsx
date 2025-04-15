import { Button } from "./ui/button";

export default function StatisticsSection() {
  return (
    <section className="p-6 bg-[#0a1e3c] text-center border-t border-blue-900">
      <h2 className="text-2xl font-bold mb-8 text-right">لماذا KIC</h2>

      <div className="flex justify-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-800">
          <span className="text-2xl">🔄</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="text-center">
          <p className="text-[#c9a96e] text-3xl font-bold">+250</p>
          <p className="text-sm text-gray-400">موظف</p>
        </div>
        <div className="text-center">
          <p className="text-[#c9a96e] text-3xl font-bold">22</p>
          <p className="text-sm text-gray-400">فرع</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[#c9a96e] text-4xl font-bold mb-2">19.4 مليون</p>
        <p className="text-sm text-gray-400">رأس المال المدفوع</p>
      </div>

      <div className="mb-8">
        <p className="text-[#c9a96e] text-4xl font-bold mb-2">80 مليون</p>
        <p className="text-sm text-gray-400">إجمالي الأصول</p>
      </div>

      <Button className="w-full bg-[#c9a96e] text-white hover:bg-[#b89355] rounded-md h-12">تعرف على المزيد</Button>
    </section>
  )
}
