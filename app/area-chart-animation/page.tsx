import type { Metadata } from "next"
import type * as React from "react"
import AreaChartAnimation from "@/components/AreaChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/area-chart-animation/",
  title: "Area Chart Animation Component | Interactive Interfaces",
  description: "Animated Area Chart Component",
})

const AreaChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <AreaChartAnimation />
      </div>
    </main>
  )
}

export default AreaChartAnimationPage
