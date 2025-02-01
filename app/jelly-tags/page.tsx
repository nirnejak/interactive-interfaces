import * as React from "react"

import { type Metadata } from "next"

import JellyTags from "@/components/JellyTags"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/jelly-tags/",
  title: "Jelly Tags | Interactive Interfaces",
  description: "Jelly Tags animation",
})

const JellyTagsPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <JellyTags />
    </main>
  )
}

export default JellyTagsPage
