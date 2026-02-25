import type { Metadata } from "next"
import type * as React from "react"
import RadarChartAnimation from "@/components/RadarChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/radar-chart-animation/",
  title: "Radar Chart Animation Component | Interactive Interfaces",
  description: "Animated Radar Chart Component",
})

const RadarChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <RadarChartAnimation />
      </div>
    </main>
  )
}

export default RadarChartAnimationPage
