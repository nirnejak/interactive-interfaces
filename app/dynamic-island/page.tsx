import * as React from "react"

import { type Metadata } from "next"

import DynamicIsland from "@/components/DynamicIsland"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/dynamic-island/",
  title: "Dynamic Island | Interactive Interfaces",
  description:
    "A Dynamic Island built for web with React, TypeScript and TailwindCSS",
})

const DynamicIslandPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <DynamicIsland />
    </main>
  )
}

export default DynamicIslandPage
