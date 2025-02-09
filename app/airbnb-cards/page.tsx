import * as React from "react"

import { type Metadata } from "next"

import AirbnbCards from "@/components/AirbnbCards"
import getMetadata from "@/utils/seo"

export const metadata: Metadata = getMetadata({
  path: "/airbnb-cards/",
  title: "Airbnb Cards | Interactive Interfaces",
  description: "Airbnb cards loading animation",
})

const AirbnbCardsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <AirbnbCards />
    </main>
  )
}

export default AirbnbCardsPage
