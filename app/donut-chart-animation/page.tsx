import type { Metadata } from "next"
import type * as React from "react"
import DonutChartAnimation from "@/components/DonutChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/donut-chart-animation/",
  title: "Donut Chart Animation Component | Interactive Interfaces",
  description: "Animated Donut Chart Component",
})

const DonutChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <DonutChartAnimation />
      </div>
    </main>
  )
}

export default DonutChartAnimationPage
