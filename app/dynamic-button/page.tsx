import type { Metadata } from "next"
import type * as React from "react"

import DynamicButton from "@/components/DynamicButton"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/dynamic-button/",
  title: "Dynamic Button | Interactive Interfaces",
  description: "Button with dynamic state and content",
})

const DynamicButtonPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <DynamicButton />
    </main>
  )
}

export default DynamicButtonPage
