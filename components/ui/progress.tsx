import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string
}

const Progress = ({indicatorClassName}:ProgressProps) => {
  return (
    <div
      className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
      role="progressbar"
      aria-valuenow={25}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
        style={{ width: "25%" }}
      />
    </div>

  )
}
export { Progress }
