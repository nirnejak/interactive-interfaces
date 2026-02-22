import type { Metadata } from "next"
import type * as React from "react"

import PokerWidget from "@/components/PokerWidget"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/poker-widget/",
  title: "Poker Widget | Interactive Interfaces",
  description: "Poker Widget animations",
})

const UpvoteButtonPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <PokerWidget />
    </main>
  )
}

export default UpvoteButtonPage
