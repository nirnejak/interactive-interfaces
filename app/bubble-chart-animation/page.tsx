import type { Metadata } from "next"
import type * as React from "react"
import BubbleChartAnimation from "@/components/BubbleChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/bubble-chart-animation/",
  title: "Bubble Chart Animation Component | Interactive Interfaces",
  description: "Animated Bubble Chart Component",
})

const BubbleChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <BubbleChartAnimation />
      </div>
    </main>
  )
}

export default BubbleChartAnimationPage
