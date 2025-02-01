import * as React from "react"

import { type Metadata } from "next"

import UpvoteButton from "@/components/UpvoteButton"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/upvote-button/",
  title: "Upvote Button | Interactive Interfaces",
  description: "Upvote Button animations",
})

const UpvoteButtonPage: React.FC = () => {
  return (
    <main className="grid h-screen place-content-center">
      <UpvoteButton />
    </main>
  )
}

export default UpvoteButtonPage
