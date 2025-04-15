"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type InsuranceType = "travel" | "car" | "health" | "property" | "life"

interface PersonalInfo {
  fullName: string
  civilId: string
  dateOfBirth: string
  nationality: string
  gender: "male" | "female" | ""
}

interface ContactInfo {
  email: string
  phone: string
  address: string
  city: string
}

interface TravelInsuranceDetails {
  destination: string
  departureDate: string
  returnDate: string
  travelPurpose: "tourism" | "business" | "study" | "medical" | ""
  coverageType: "individual" | "family" | ""
  familyMembers?: number
}

interface CarInsuranceDetails {
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  plateNumber: string
  estimatedValue: string
  coverageType: "comprehensive" | "thirdParty" | ""
}

interface HealthInsuranceDetails {
  coverageType: "individual" | "family" | ""
  preExistingConditions: boolean
  familyMembers?: number
  smokingStatus: "smoker" | "nonSmoker" | ""
  occupation: string
}

interface PropertyInsuranceDetails {
  propertyType: "apartment" | "house" | "villa" | ""
  propertyAddress: string
  propertyValue: string
  constructionYear: string
  securitySystem: boolean
}

interface LifeInsuranceDetails {
  coverageAmount: string
  beneficiaries: string
  term: "10years" | "20years" | "30years" | "wholeLife" | ""
  occupation: string
  smokingStatus: "smoker" | "nonSmoker" | ""
}

export interface InsuranceFormData {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  travelInsurance?: TravelInsuranceDetails
  carInsurance?: CarInsuranceDetails
  healthInsurance?: HealthInsuranceDetails
  propertyInsurance?: PropertyInsuranceDetails
  lifeInsurance?: LifeInsuranceDetails
  termsAccepted: boolean
}

interface InsuranceFormContextType {
  formData: InsuranceFormData
  updateFormData: (data: Partial<InsuranceFormData>) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
  insuranceType: InsuranceType
  isStepValid: (step: number) => boolean
  errors: Record<string, string>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const defaultFormData: InsuranceFormData = {
  personalInfo: {
    fullName: "",
    civilId: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
  },
  contactInfo: {
    email: "",
    phone: "",
    address: "",
    city: "",
  },
  travelInsurance: {
    destination: "",
    departureDate: "",
    returnDate: "",
    travelPurpose: "",
    coverageType: "",
    familyMembers: 0,
  },
  carInsurance: {
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    plateNumber: "",
    estimatedValue: "",
    coverageType: "",
  },
  healthInsurance: {
    coverageType: "",
    preExistingConditions: false,
    familyMembers: 0,
    smokingStatus: "",
    occupation: "",
  },
  propertyInsurance: {
    propertyType: "",
    propertyAddress: "",
    propertyValue: "",
    constructionYear: "",
    securitySystem: false,
  },
  lifeInsurance: {
    coverageAmount: "",
    beneficiaries: "",
    term: "",
    occupation: "",
    smokingStatus: "",
  },
  termsAccepted: false,
}

const InsuranceFormContext = createContext<InsuranceFormContextType | undefined>(undefined)

export const useInsuranceForm = () => {
  const context = useContext(InsuranceFormContext)
  if (!context) {
    throw new Error("useInsuranceForm must be used within an InsuranceFormProvider")
  }
  return context
}

interface InsuranceFormProviderProps {
  children: React.ReactNode
  insuranceType: string
}

export const InsuranceFormProvider: React.FC<InsuranceFormProviderProps> = ({ children, insuranceType }) => {
  const [formData, setFormData] = useState<InsuranceFormData>(defaultFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Total steps depends on the insurance type
  const totalSteps = 4 // Personal info, Contact info, Insurance-specific details, Review & Submit

  // Load form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem(`${insuranceType}InsuranceForm`)
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [insuranceType])

  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(`${insuranceType}InsuranceForm`, JSON.stringify(formData))
  }, [formData, insuranceType])

  const updateFormData = (data: Partial<InsuranceFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // Personal Info
        const { fullName, civilId, dateOfBirth, nationality, gender } = formData.personalInfo
        return !!fullName && !!civilId && !!dateOfBirth && !!nationality && !!gender
      case 2: // Contact Info
        const { email, phone, address, city } = formData.contactInfo
        return !!email && !!phone && !!address && !!city
      case 3: // Insurance-specific details
        switch (insuranceType) {
          case "travel":
            if (!formData.travelInsurance) return false
            const { destination, departureDate, returnDate, travelPurpose, coverageType } = formData.travelInsurance
            return !!destination && !!departureDate && !!returnDate && !!travelPurpose && !!coverageType
          case "car":
            if (!formData.carInsurance) return false
            const {
              vehicleMake,
              vehicleModel,
              vehicleYear,
              plateNumber,
              estimatedValue,
              coverageType: carCoverageType,
            } = formData.carInsurance
            return (
              !!vehicleMake && !!vehicleModel && !!vehicleYear && !!plateNumber && !!estimatedValue && !!carCoverageType
            )
          case "health":
            if (!formData.healthInsurance) return false
            const { coverageType: healthCoverageType, occupation, smokingStatus } = formData.healthInsurance
            return !!healthCoverageType && !!occupation && !!smokingStatus
          case "property":
            if (!formData.propertyInsurance) return false
            const { propertyType, propertyAddress, propertyValue, constructionYear } = formData.propertyInsurance
            return !!propertyType && !!propertyAddress && !!propertyValue && !!constructionYear
          case "life":
            if (!formData.lifeInsurance) return false
            const {
              coverageAmount,
              beneficiaries,
              term,
              occupation: lifeOccupation,
              smokingStatus: lifeSmokingStatus,
            } = formData.lifeInsurance
            return !!coverageAmount && !!beneficiaries && !!term && !!lifeOccupation && !!lifeSmokingStatus
          default:
            return false
        }
      case 4: // Review & Submit
        return formData.termsAccepted
      default:
        return false
    }
  }

  return (
    <InsuranceFormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        setCurrentStep,
        totalSteps,
        insuranceType: insuranceType as InsuranceType,
        isStepValid,
        errors,
        setErrors,
      }}
    >
      {children}
    </InsuranceFormContext.Provider>
  )
}
