import * as React from "react"

import { type Metadata } from "next"

import Bulb from "@/components/Bulb"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/breaking-bulb/",
  title: "Breaking Bulb | Interactive Interfaces",
  description: "Tabs with active state indicator that moves",
})

const BreakingBulbPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <Bulb />
    </main>
  )
}

export default BreakingBulbPage
