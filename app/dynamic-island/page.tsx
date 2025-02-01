import * as React from "react"

import { type Metadata } from "next"

import DynamicIsland from "@/components/DynamicIsland"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/dynamic-island/",
  title: "Dynamic Island | Interactive Interfaces",
  description:
    "A Dynamic Island built for web with React, TypeScript and TailwindCSS",
})

const DynamicIslandPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <DynamicIsland />
    </main>
  )
}

export default DynamicIslandPage
