import * as React from "react"

import { type Metadata } from "next"

import CSSTabs from "@/components/CSSTabs"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/css-tabs/",
  title: "CSS Tabs | Interactive Interfaces",
  description: "Tabs with active state indicator that moves",
})

const CSSTabsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <CSSTabs />
    </main>
  )
}

export default CSSTabsPage
