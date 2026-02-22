import type { Metadata } from "next"
import type * as React from "react"
import ChartAnimation from "@/components/ChartAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/chart-animation/",
  title: "Chart Animation Component | Interactive Interfaces",
  description: "Chart Animation Component animation",
})

const ChartAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center bg-[#E9E9E9]">
      <div className="w-100">
        <ChartAnimation />
      </div>
    </main>
  )
}

export default ChartAnimationPage
