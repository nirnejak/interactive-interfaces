import type { Metadata } from "next"
import type * as React from "react"
import BarChartAnimation from "@/components/BarChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/bar-chart-animation/",
  title: "Bar Chart Animation Component | Interactive Interfaces",
  description: "Bar Chart Animation Component animation",
})

const BarChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <BarChartAnimation />
      </div>
    </main>
  )
}

export default BarChartAnimationPage
