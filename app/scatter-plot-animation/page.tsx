import type { Metadata } from "next"
import type * as React from "react"
import ScatterPlotAnimation from "@/components/ScatterPlotAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/scatter-plot-animation/",
  title: "Scatter Plot Animation Component | Interactive Interfaces",
  description: "Animated Scatter Plot Component",
})

const ScatterPlotAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <ScatterPlotAnimation />
      </div>
    </main>
  )
}

export default ScatterPlotAnimationPage
