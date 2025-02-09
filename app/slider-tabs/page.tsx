import * as React from "react"

import { type Metadata } from "next"

import SliderTabs from "@/components/SliderTabs"
import getMetadata from "@/utils/seo"

export const metadata: Metadata = getMetadata({
  path: "/slider-tabs/",
  title: "Slider Tabs | Interactive Interfaces",
  description: "Tabs with active state indicator that moves",
})

const SliderTabsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <SliderTabs />
    </main>
  )
}

export default SliderTabsPage
