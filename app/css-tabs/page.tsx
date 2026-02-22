import type { Metadata } from "next"
import type * as React from "react"

import CSSTabs from "@/components/CSSTabs"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/css-tabs/",
  title: "CSS Tabs | Interactive Interfaces",
  description: "Tabs with active state indicator that moves",
})

const CSSTabsPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <CSSTabs />
    </main>
  )
}

export default CSSTabsPage
