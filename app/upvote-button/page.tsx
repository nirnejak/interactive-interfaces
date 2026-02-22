import type { Metadata } from "next"
import type * as React from "react"

import UpvoteButton from "@/components/UpvoteButton"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/upvote-button/",
  title: "Upvote Button | Interactive Interfaces",
  description: "Upvote Button animations",
})

const UpvoteButtonPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <UpvoteButton />
    </main>
  )
}

export default UpvoteButtonPage
