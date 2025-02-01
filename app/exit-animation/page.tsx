import * as React from "react"

import { type Metadata } from "next"

import ExitAnimation from "@/components/ExitAnimation"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/exit-animation/",
  title: "Exit Animation | Interactive Interfaces",
  description: "Exit and Entry animation for elements",
})

const ExitAnimationPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <ExitAnimation />
    </main>
  )
}

export default ExitAnimationPage
