import * as React from "react"

import { type Metadata } from "next"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Interactive Interfaces",
  description:
    "A collection of interactive interfaces crafted with React, TailwindCSS, Framer Motion, and TypeScript.",
})

const Home: React.FC = () => {
  return <main></main>
}

export default Home
