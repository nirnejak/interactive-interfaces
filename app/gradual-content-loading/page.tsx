import type { Metadata } from "next"
import type * as React from "react"

import GradualContentLoading from "@/components/GradualContentLoading"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/gradual-content-loading/",
  title: "Gradual Content Loading | Interactive Interfaces",
  description: "Gradual Content Loading",
})

const GradualContentLoadingPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <GradualContentLoading />
    </main>
  )
}

export default GradualContentLoadingPage
