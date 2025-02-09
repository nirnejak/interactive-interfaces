import * as React from "react"

import { type Metadata } from "next"

import { ArrowRight } from "akar-icons"
import Link from "next/link"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Interactive Interfaces",
  description:
    "A collection of interactive interfaces crafted with React, TailwindCSS, Framer Motion, and TypeScript.",
})

const components = [
  { title: "Jelly Tags", link: "/jelly-tags/" },
  { title: "Slider Tabs", link: "/slider-tabs/" },
  { title: "Airbnb Cards", link: "/airbnb-cards/" },
  { title: "Breaking Bulb", link: "/breaking-bulb/" },
  { title: "Upvote Button", link: "/upvote-button/" },
  { title: "Exit Animation", link: "/exit-animation/" },
  { title: "Dynamic Island", link: "/dynamic-island/" },
  { title: "Animate Height", link: "/animate-height/" },
  { title: "Dynamic Button", link: "/dynamic-button/" },
  { title: "Gradual Content Loading", link: "/gradual-content-loading/" },
]

const Home: React.FC = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="max-w-[820px] px-5 md:px-0">
        <h1 className="mb-4 font-serif text-3xl text-zinc-100">
          Interactive Interfaces
        </h1>
        <p className="mb-24 max-w-[380px] font-serif text-base text-zinc-300">
          A collection of interactive interfaces crafted with React, TypeScript,
          TailwindCSS, Framer Motion, and a tiny bit of CSS animations.
        </p>
        <div>
          {components.map((component, i) => (
            <Link
              key={i}
              href={component.link}
              className="flex items-center gap-2 py-1.5 text-zinc-200 transition-all hover:scale-110"
            >
              <span>{component.title}</span>
              <div className="flex-1 border-t border-dashed border-zinc-700" />
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
