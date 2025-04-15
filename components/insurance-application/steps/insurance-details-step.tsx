"use client"

import { useInsuranceForm } from "../insurance-form-context"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function InsuranceDetailsStep() {
  const { formData, updateFormData, insuranceType, errors, setErrors } = useInsuranceForm()

  const handleTravelChange = (field: string, value: string | number | boolean) => {
    updateFormData({
      travelInsurance: {
        ...formData.travelInsurance,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleCarChange = (field: string, value: string) => {
    updateFormData({
      carInsurance: {
        ...formData.carInsurance,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleHealthChange = (field: string, value: string | number | boolean) => {
    updateFormData({
      healthInsurance: {
        ...formData.healthInsurance,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handlePropertyChange = (field: string, value: string | boolean) => {
    updateFormData({
      propertyInsurance: {
        ...formData.propertyInsurance,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleLifeChange = (field: string, value: string) => {
    updateFormData({
      lifeInsurance: {
        ...formData.lifeInsurance,
        [field]: value,
      },
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateField = (field: string, value: string | number | boolean) => {
    if (value === "" || value === 0) {
      setErrors((prev) => ({
        ...prev,
        [field]: "هذا الحقل مطلوب",
      }))
      return false
    }
    return true
  }

  const renderTravelInsuranceFields = () => {
    const { travelInsurance } = formData
    if (!travelInsurance) return null

    const destinations = [
      "دول الخليج",
      "الشرق الأوسط",
      "أوروبا",
      "آسيا",
      "أمريكا الشمالية",
      "أمريكا الجنوبية",
      "أفريقيا",
      "أستراليا",
      "عالمي",
    ]

    return (
      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="destination" className="text-[#0a2e5c] font-medium">
              وجهة السفر
            </Label>
          </div>
          <Select
            value={travelInsurance.destination}
            onValueChange={(value) => handleTravelChange("destination", value)}
            onOpenChange={() => {
              if (!travelInsurance.destination) {
                validateField("destination", travelInsurance.destination)
              }
            }}
          >
            <SelectTrigger id="destination" className="text-right border-gray-300">
              <SelectValue placeholder="اختر وجهة السفر" />
            </SelectTrigger>
            <SelectContent position="popper">
              {destinations.map((destination) => (
                <SelectItem key={destination} value={destination} className="text-right">
                  {destination}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.destination && <p className="text-red-500 text-sm mt-1 text-right">{errors.destination}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="departureDate" className="text-[#0a2e5c] font-medium">
              تاريخ المغادرة
            </Label>
          </div>
          <Input
            id="departureDate"
            type="date"
            value={travelInsurance.departureDate}
            onChange={(e) => handleTravelChange("departureDate", e.target.value)}
            onBlur={(e) => validateField("departureDate", e.target.value)}
            className="text-right border-gray-300"
          />
          {errors.departureDate && <p className="text-red-500 text-sm mt-1 text-right">{errors.departureDate}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="returnDate" className="text-[#0a2e5c] font-medium">
              تاريخ العودة
            </Label>
          </div>
          <Input
            id="returnDate"
            type="date"
            value={travelInsurance.returnDate}
            onChange={(e) => handleTravelChange("returnDate", e.target.value)}
            onBlur={(e) => validateField("returnDate", e.target.value)}
            className="text-right border-gray-300"
          />
          {errors.returnDate && <p className="text-red-500 text-sm mt-1 text-right">{errors.returnDate}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="travelPurpose" className="text-[#0a2e5c] font-medium">
              غرض السفر
            </Label>
          </div>
          <Select
            value={travelInsurance.travelPurpose}
            onValueChange={(value) => handleTravelChange("travelPurpose", value)}
            onOpenChange={() => {
              if (!travelInsurance.travelPurpose) {
                validateField("travelPurpose", travelInsurance.travelPurpose)
              }
            }}
          >
            <SelectTrigger id="travelPurpose" className="text-right border-gray-300">
              <SelectValue placeholder="اختر غرض السفر" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="tourism" className="text-right">
                سياحة
              </SelectItem>
              <SelectItem value="business" className="text-right">
                عمل
              </SelectItem>
              <SelectItem value="study" className="text-right">
                دراسة
              </SelectItem>
              <SelectItem value="medical" className="text-right">
                علاج طبي
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.travelPurpose && <p className="text-red-500 text-sm mt-1 text-right">{errors.travelPurpose}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">نوع التغطية</Label>
          </div>
          <RadioGroup
            value={travelInsurance.coverageType}
            onValueChange={(value) => handleTravelChange("coverageType", value)}
            className="flex flex-row-reverse justify-end gap-8"
          >
            <div className="flex items-center">
              <Label htmlFor="individual" className="ml-2 cursor-pointer">
                فردي
              </Label>
              <RadioGroupItem id="individual" value="individual" />
            </div>
            <div className="flex items-center">
              <Label htmlFor="family" className="ml-2 cursor-pointer">
                عائلي
              </Label>
              <RadioGroupItem id="family" value="family" />
            </div>
          </RadioGroup>
          {errors.coverageType && <p className="text-red-500 text-sm mt-1 text-right">{errors.coverageType}</p>}
        </div>

        {travelInsurance.coverageType === "family" && (
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="familyMembers" className="text-[#0a2e5c] font-medium">
                عدد أفراد العائلة
              </Label>
            </div>
            <Input
              id="familyMembers"
              type="number"
              min="1"
              max="10"
              value={travelInsurance.familyMembers?.toString() || ""}
              onChange={(e) => handleTravelChange("familyMembers", Number.parseInt(e.target.value))}
              onBlur={(e) => validateField("familyMembers", Number.parseInt(e.target.value))}
              className="text-right border-gray-300"
            />
            {errors.familyMembers && <p className="text-red-500 text-sm mt-1 text-right">{errors.familyMembers}</p>}
          </div>
        )}
      </div>
    )
  }

  const renderCarInsuranceFields = () => {
    const { carInsurance } = formData
    if (!carInsurance) return null

    const carMakes = [
      "تويوتا",
      "هوندا",
      "نيسان",
      "مرسيدس",
      "بي إم دبليو",
      "أودي",
      "لكزس",
      "كيا",
      "هيونداي",
      "شيفروليه",
      "فورد",
      "مازدا",
      "ميتسوبيشي",
      "سوزوكي",
      "فولكس فاجن",
    ]

    return (
      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="vehicleMake" className="text-[#0a2e5c] font-medium">
              ماركة السيارة
            </Label>
          </div>
          <Select
            value={carInsurance.vehicleMake}
            onValueChange={(value) => handleCarChange("vehicleMake", value)}
            onOpenChange={() => {
              if (!carInsurance.vehicleMake) {
                validateField("vehicleMake", carInsurance.vehicleMake)
              }
            }}
          >
            <SelectTrigger id="vehicleMake" className="text-right border-gray-300">
              <SelectValue placeholder="اختر ماركة السيارة" />
            </SelectTrigger>
            <SelectContent position="popper">
              {carMakes.map((make) => (
                <SelectItem key={make} value={make} className="text-right">
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.vehicleMake && <p className="text-red-500 text-sm mt-1 text-right">{errors.vehicleMake}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="vehicleModel" className="text-[#0a2e5c] font-medium">
              موديل السيارة
            </Label>
          </div>
          <Input
            id="vehicleModel"
            value={carInsurance.vehicleModel}
            onChange={(e) => handleCarChange("vehicleModel", e.target.value)}
            onBlur={(e) => validateField("vehicleModel", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل موديل السيارة"
          />
          {errors.vehicleModel && <p className="text-red-500 text-sm mt-1 text-right">{errors.vehicleModel}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="vehicleYear" className="text-[#0a2e5c] font-medium">
              سنة الصنع
            </Label>
          </div>
          <Select
            value={carInsurance.vehicleYear}
            onValueChange={(value) => handleCarChange("vehicleYear", value)}
            onOpenChange={() => {
              if (!carInsurance.vehicleYear) {
                validateField("vehicleYear", carInsurance.vehicleYear)
              }
            }}
          >
            <SelectTrigger id="vehicleYear" className="text-right border-gray-300">
              <SelectValue placeholder="اختر سنة الصنع" />
            </SelectTrigger>
            <SelectContent position="popper">
              {Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() - i).toString()).map((year) => (
                <SelectItem key={year} value={year} className="text-right">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.vehicleYear && <p className="text-red-500 text-sm mt-1 text-right">{errors.vehicleYear}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="plateNumber" className="text-[#0a2e5c] font-medium">
              رقم اللوحة
            </Label>
          </div>
          <Input
            id="plateNumber"
            value={carInsurance.plateNumber}
            onChange={(e) => handleCarChange("plateNumber", e.target.value)}
            onBlur={(e) => validateField("plateNumber", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل رقم لوحة السيارة"
          />
          {errors.plateNumber && <p className="text-red-500 text-sm mt-1 text-right">{errors.plateNumber}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="estimatedValue" className="text-[#0a2e5c] font-medium">
              القيمة التقديرية للسيارة
            </Label>
          </div>
          <Input
            id="estimatedValue"
            value={carInsurance.estimatedValue}
            onChange={(e) => handleCarChange("estimatedValue", e.target.value)}
            onBlur={(e) => validateField("estimatedValue", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل القيمة التقديرية بالدينار الكويتي"
          />
          {errors.estimatedValue && <p className="text-red-500 text-sm mt-1 text-right">{errors.estimatedValue}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">نوع التغطية</Label>
          </div>
          <RadioGroup
            value={carInsurance.coverageType}
            onValueChange={(value) => handleCarChange("coverageType", value)}
            className="flex flex-row-reverse justify-end gap-8"
          >
            <div className="flex items-center">
              <Label htmlFor="comprehensive" className="ml-2 cursor-pointer">
                شامل
              </Label>
              <RadioGroupItem id="comprehensive" value="comprehensive" />
            </div>
            <div className="flex items-center">
              <Label htmlFor="thirdParty" className="ml-2 cursor-pointer">
                ضد الغير
              </Label>
              <RadioGroupItem id="thirdParty" value="thirdParty" />
            </div>
          </RadioGroup>
          {errors.coverageType && <p className="text-red-500 text-sm mt-1 text-right">{errors.coverageType}</p>}
        </div>
      </div>
    )
  }

  const renderHealthInsuranceFields = () => {
    const { healthInsurance } = formData
    if (!healthInsurance) return null

    return (
      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">نوع التغطية</Label>
          </div>
          <RadioGroup
            value={healthInsurance.coverageType}
            onValueChange={(value) => handleHealthChange("coverageType", value)}
            className="flex flex-row-reverse justify-end gap-8"
          >
            <div className="flex items-center">
              <Label htmlFor="healthIndividual" className="ml-2 cursor-pointer">
                فردي
              </Label>
              <RadioGroupItem id="healthIndividual" value="individual" />
            </div>
            <div className="flex items-center">
              <Label htmlFor="healthFamily" className="ml-2 cursor-pointer">
                عائلي
              </Label>
              <RadioGroupItem id="healthFamily" value="family" />
            </div>
          </RadioGroup>
          {errors.healthCoverageType && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.healthCoverageType}</p>
          )}
        </div>

        {healthInsurance.coverageType === "family" && (
          <div>
            <div className="flex justify-end items-center mb-1">
              <span className="text-red-500 ml-1">*</span>
              <Label htmlFor="healthFamilyMembers" className="text-[#0a2e5c] font-medium">
                عدد أفراد العائلة
              </Label>
            </div>
            <Input
              id="healthFamilyMembers"
              type="number"
              min="1"
              max="10"
              value={healthInsurance.familyMembers?.toString() || ""}
              onChange={(e) => handleHealthChange("familyMembers", Number.parseInt(e.target.value))}
              onBlur={(e) => validateField("healthFamilyMembers", Number.parseInt(e.target.value))}
              className="text-right border-gray-300"
            />
            {errors.healthFamilyMembers && (
              <p className="text-red-500 text-sm mt-1 text-right">{errors.healthFamilyMembers}</p>
            )}
          </div>
        )}

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="occupation" className="text-[#0a2e5c] font-medium">
              المهنة
            </Label>
          </div>
          <Input
            id="occupation"
            value={healthInsurance.occupation}
            onChange={(e) => handleHealthChange("occupation", e.target.value)}
            onBlur={(e) => validateField("occupation", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل المهنة"
          />
          {errors.occupation && <p className="text-red-500 text-sm mt-1 text-right">{errors.occupation}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">حالة التدخين</Label>
          </div>
          <RadioGroup
            value={healthInsurance.smokingStatus}
            onValueChange={(value) => handleHealthChange("smokingStatus", value)}
            className="flex flex-row-reverse justify-end gap-8"
          >
            <div className="flex items-center">
              <Label htmlFor="smoker" className="ml-2 cursor-pointer">
                مدخن
              </Label>
              <RadioGroupItem id="smoker" value="smoker" />
            </div>
            <div className="flex items-center">
              <Label htmlFor="nonSmoker" className="ml-2 cursor-pointer">
                غير مدخن
              </Label>
              <RadioGroupItem id="nonSmoker" value="nonSmoker" />
            </div>
          </RadioGroup>
          {errors.smokingStatus && <p className="text-red-500 text-sm mt-1 text-right">{errors.smokingStatus}</p>}
        </div>

        <div className="flex items-center justify-end space-x-2 space-x-reverse">
          <Label htmlFor="preExistingConditions" className="text-[#0a2e5c] font-medium">
            هل لديك أي حالات صحية موجودة مسبقاً؟
          </Label>
          <Switch
            id="preExistingConditions"
            checked={healthInsurance.preExistingConditions}
            onCheckedChange={(checked) => handleHealthChange("preExistingConditions", checked)}
          />
        </div>
      </div>
    )
  }

  const renderPropertyInsuranceFields = () => {
    const { propertyInsurance } = formData
    if (!propertyInsurance) return null

    return (
      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="propertyType" className="text-[#0a2e5c] font-medium">
              نوع العقار
            </Label>
          </div>
          <Select
            value={propertyInsurance.propertyType}
            onValueChange={(value) => handlePropertyChange("propertyType", value)}
            onOpenChange={() => {
              if (!propertyInsurance.propertyType) {
                validateField("propertyType", propertyInsurance.propertyType)
              }
            }}
          >
            <SelectTrigger id="propertyType" className="text-right border-gray-300">
              <SelectValue placeholder="اختر نوع العقار" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="apartment" className="text-right">
                شقة
              </SelectItem>
              <SelectItem value="house" className="text-right">
                منزل
              </SelectItem>
              <SelectItem value="villa" className="text-right">
                فيلا
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.propertyType && <p className="text-red-500 text-sm mt-1 text-right">{errors.propertyType}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="propertyAddress" className="text-[#0a2e5c] font-medium">
              عنوان العقار
            </Label>
          </div>
          <Textarea
            id="propertyAddress"
            value={propertyInsurance.propertyAddress}
            onChange={(e) => handlePropertyChange("propertyAddress", e.target.value)}
            onBlur={(e) => validateField("propertyAddress", e.target.value)}
            className="text-right border-gray-300 min-h-[100px]"
            placeholder="أدخل عنوان العقار بالتفصيل"
          />
          {errors.propertyAddress && <p className="text-red-500 text-sm mt-1 text-right">{errors.propertyAddress}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="propertyValue" className="text-[#0a2e5c] font-medium">
              قيمة العقار
            </Label>
          </div>
          <Input
            id="propertyValue"
            value={propertyInsurance.propertyValue}
            onChange={(e) => handlePropertyChange("propertyValue", e.target.value)}
            onBlur={(e) => validateField("propertyValue", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل قيمة العقار بالدينار الكويتي"
          />
          {errors.propertyValue && <p className="text-red-500 text-sm mt-1 text-right">{errors.propertyValue}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="constructionYear" className="text-[#0a2e5c] font-medium">
              سنة البناء
            </Label>
          </div>
          <Select
            value={propertyInsurance.constructionYear}
            onValueChange={(value) => handlePropertyChange("constructionYear", value)}
            onOpenChange={() => {
              if (!propertyInsurance.constructionYear) {
                validateField("constructionYear", propertyInsurance.constructionYear)
              }
            }}
          >
            <SelectTrigger id="constructionYear" className="text-right border-gray-300">
              <SelectValue placeholder="اختر سنة البناء" />
            </SelectTrigger>
            <SelectContent position="popper">
              {Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString()).map((year) => (
                <SelectItem key={year} value={year} className="text-right">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.constructionYear && <p className="text-red-500 text-sm mt-1 text-right">{errors.constructionYear}</p>}
        </div>

        <div className="flex items-center justify-end space-x-2 space-x-reverse">
          <Label htmlFor="securitySystem" className="text-[#0a2e5c] font-medium">
            هل يوجد نظام أمان في العقار؟
          </Label>
          <Switch
            id="securitySystem"
            checked={propertyInsurance.securitySystem}
            onCheckedChange={(checked) => handlePropertyChange("securitySystem", checked)}
          />
        </div>
      </div>
    )
  }

  const renderLifeInsuranceFields = () => {
    const { lifeInsurance } = formData
    if (!lifeInsurance) return null

    return (
      <div className="space-y-4">
        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="coverageAmount" className="text-[#0a2e5c] font-medium">
              مبلغ التغطية
            </Label>
          </div>
          <Input
            id="coverageAmount"
            value={lifeInsurance.coverageAmount}
            onChange={(e) => handleLifeChange("coverageAmount", e.target.value)}
            onBlur={(e) => validateField("coverageAmount", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل مبلغ التغطية بالدينار الكويتي"
          />
          {errors.coverageAmount && <p className="text-red-500 text-sm mt-1 text-right">{errors.coverageAmount}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="beneficiaries" className="text-[#0a2e5c] font-medium">
              المستفيدون
            </Label>
          </div>
          <Textarea
            id="beneficiaries"
            value={lifeInsurance.beneficiaries}
            onChange={(e) => handleLifeChange("beneficiaries", e.target.value)}
            onBlur={(e) => validateField("beneficiaries", e.target.value)}
            className="text-right border-gray-300 min-h-[100px]"
            placeholder="أدخل أسماء المستفيدين ونسبة كل منهم"
          />
          {errors.beneficiaries && <p className="text-red-500 text-sm mt-1 text-right">{errors.beneficiaries}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="term" className="text-[#0a2e5c] font-medium">
              مدة التأمين
            </Label>
          </div>
          <Select
            value={lifeInsurance.term}
            onValueChange={(value) => handleLifeChange("term", value)}
            onOpenChange={() => {
              if (!lifeInsurance.term) {
                validateField("term", lifeInsurance.term)
              }
            }}
          >
            <SelectTrigger id="term" className="text-right border-gray-300">
              <SelectValue placeholder="اختر مدة التأمين" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="10years" className="text-right">
                10 سنوات
              </SelectItem>
              <SelectItem value="20years" className="text-right">
                20 سنة
              </SelectItem>
              <SelectItem value="30years" className="text-right">
                30 سنة
              </SelectItem>
              <SelectItem value="wholeLife" className="text-right">
                مدى الحياة
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.term && <p className="text-red-500 text-sm mt-1 text-right">{errors.term}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-1">
            <span className="text-red-500 ml-1">*</span>
            <Label htmlFor="lifeOccupation" className="text-[#0a2e5c] font-medium">
              المهنة
            </Label>
          </div>
          <Input
            id="lifeOccupation"
            value={lifeInsurance.occupation}
            onChange={(e) => handleLifeChange("occupation", e.target.value)}
            onBlur={(e) => validateField("lifeOccupation", e.target.value)}
            className="text-right border-gray-300"
            placeholder="أدخل المهنة"
          />
          {errors.lifeOccupation && <p className="text-red-500 text-sm mt-1 text-right">{errors.lifeOccupation}</p>}
        </div>

        <div>
          <div className="flex justify-end items-center mb-3">
            <span className="text-red-500 ml-1">*</span>
            <Label className="text-[#0a2e5c] font-medium">حالة التدخين</Label>
          </div>
          <RadioGroup
            value={lifeInsurance.smokingStatus}
            onValueChange={(value) => handleLifeChange("smokingStatus", value)}
            className="flex flex-row-reverse justify-end gap-8"
          >
            <div className="flex items-center">
              <Label htmlFor="lifeSmoker" className="ml-2 cursor-pointer">
                مدخن
              </Label>
              <RadioGroupItem id="lifeSmoker" value="smoker" />
            </div>
            <div className="flex items-center">
              <Label htmlFor="lifeNonSmoker" className="ml-2 cursor-pointer">
                غير مدخن
              </Label>
              <RadioGroupItem id="lifeNonSmoker" value="nonSmoker" />
            </div>
          </RadioGroup>
          {errors.lifeSmokingStatus && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.lifeSmokingStatus}</p>
          )}
        </div>
      </div>
    )
  }

  const renderInsuranceFields = () => {
    switch (insuranceType) {
      case "travel":
        return renderTravelInsuranceFields()
      case "car":
        return renderCarInsuranceFields()
      case "health":
        return renderHealthInsuranceFields()
      case "property":
        return renderPropertyInsuranceFields()
      case "life":
        return renderLifeInsuranceFields()
      default:
        return renderTravelInsuranceFields()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#0a2e5c] mb-4 text-right">تفاصيل التأمين</h2>
      {renderInsuranceFields()}
    </div>
  )
}
