import type { Metadata } from "next"
import type * as React from "react"

import AirbnbCards from "@/components/AirbnbCards"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/airbnb-cards/",
  title: "Airbnb Cards | Interactive Interfaces",
  description: "Airbnb cards loading animation",
})

const AirbnbCardsPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <AirbnbCards />
    </main>
  )
}

export default AirbnbCardsPage
