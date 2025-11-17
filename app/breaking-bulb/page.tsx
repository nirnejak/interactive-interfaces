import * as React from "react"

import { type Metadata } from "next"

import Bulb from "@/components/Bulb"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/breaking-bulb/",
  title: "Breaking Bulb | Interactive Interfaces",
  description: "Tabs with active state indicator that moves",
})

const BreakingBulbPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <Bulb />
    </main>
  )
}

export default BreakingBulbPage
