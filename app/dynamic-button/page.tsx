import * as React from "react"

import { type Metadata } from "next"

import DynamicButton from "@/components/DynamicButton"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/dynamic-button/",
  title: "Dynamic Button | Interactive Interfaces",
  description: "Button with dynamic state and content",
})

const DynamicButtonPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <DynamicButton />
    </main>
  )
}

export default DynamicButtonPage
