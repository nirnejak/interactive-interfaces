import * as React from "react"

import { type Metadata } from "next"

import getMetadata from "@/utils/metadata"
import AskAI from "@/components/AskAI"

export const metadata: Metadata = getMetadata({
  path: "/ask-ai/",
  title: "Ask AI | Interactive Interfaces",
  description: "Ask AI interactive input form animation",
})

const AskAIPage: React.FC = () => {
  return (
    <main className="grid h-full place-content-center">
      <div className="w-100">
        <AskAI />
      </div>
    </main>
  )
}

export default AskAIPage
