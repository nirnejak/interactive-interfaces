import * as React from "react"

import { type Metadata } from "next"

import ExitAnimation from "@/components/ExitAnimation"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/exit-animation/",
  title: "Exit Animation | Interactive Interfaces",
  description: "Exit and Entry animation for elements",
})

const ExitAnimationPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <ExitAnimation />
    </main>
  )
}

export default ExitAnimationPage
