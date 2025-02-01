import * as React from "react"

import { type Metadata } from "next"

import MelodyPopup from "@/components/MelodyPopup"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/melody-popup/",
  title: "Melody Popup | Interactive Interfaces",
  description: "Melody Popup animation",
})

const MelodyPopupPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <MelodyPopup />
    </main>
  )
}

export default MelodyPopupPage
