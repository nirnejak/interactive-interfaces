import * as React from "react"

import { type Metadata } from "next"

import CSSTabs from "@/components/CSSTabs"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
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
