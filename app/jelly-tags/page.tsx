import * as React from "react"

import { type Metadata } from "next"

import JellyTags from "@/components/JellyTags"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/jelly-tags/",
  title: "Jelly Tags | Interactive Interfaces",
  description: "Jelly Tags animation",
})

const JellyTagsPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <JellyTags />
    </main>
  )
}

export default JellyTagsPage
