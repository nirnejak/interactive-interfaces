import * as React from "react"

import type { Viewport } from "next"

import {
  Inter,
  IBM_Plex_Serif,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google"

import classNames from "@/utils/classNames"

import { ArrowRight } from "akar-icons"
import Link from "next/link"

import "../styles/main.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const serifFont = IBM_Plex_Serif({
  variable: "--serif-font",
  weight: ["400", "500"],
  subsets: ["latin"],
})

const monoFont = JetBrains_Mono({
  variable: "--mono-font",
  weight: ["400"],
  subsets: ["latin"],
})

const instrumentSerifFont = Instrument_Serif({
  variable: "--instrument-serif-font",
  weight: ["400"],
  subsets: ["latin"],
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

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html
      lang="en"
      className={classNames(
        monoFont.variable,
        sansFont.variable,
        serifFont.variable,
        instrumentSerifFont.variable
      )}
    >
      <head>
        <script
          defer
          data-domain="interactive-interfaces.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>

      <body className="overflow-x-hidden font-sans bg-zinc-100 flex">
        <aside className="w-3/12 flex flex-col px-8 pt-12">
          <h1 className="mb-2 font-serif text-3xl text-zinc-900 tracking-tighter">
            Interactive Interfaces
          </h1>
          <p className="mb-6 max-w-[260px] font-serif text-base text-zinc-600 tracking-tight">
            A collection of interactive interfaces crafted with React,
            TypeScript, TailwindCSS, Framer Motion, and a tiny bit of CSS
            animations.
          </p>
          <p className="mb-12 font-serif text-sm text-zinc-600">
            Crafted by{" "}
            <a
              target="_blank"
              href="https://nirnejak.com/"
              className="text-zinc-900 underline underline-offset-2"
            >
              Jitendra Nirnejak
            </a>
          </p>
          <div className="mt-auto mb-5">
            {components.map((component, i) => (
              <Link
                key={i}
                href={component.link}
                className="group flex items-center gap-2 py-1.5 text-zinc-500 hover:text-zinc-900 transition-colors tracking-tighter"
              >
                <span>{component.title}</span>
                <div className="flex-1 border-t border-dashed border-zinc-300" />
                <ArrowRight
                  size={16}
                  className="group-hover:rotate-0 -rotate-45 transition-transform"
                />
              </Link>
            ))}
          </div>
        </aside>
        <main className="w-9/12 p-4 min-h-dvh flex">
          <div className="bg-white rounded-xl w-full">{children}</div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
