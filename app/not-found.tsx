import * as React from "react"

import { type Metadata } from "next"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/404",
  title: "Not Found",
  description: "Page you're looking for cant' be found",
})

const NotFound: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <p className="text-sm tracking-tight">
        Page you&apos;re looking for can&apos;t be found, select a link from the
        navigation
      </p>
    </main>
  )
}

export default NotFound
