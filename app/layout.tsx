import * as React from "react"

import type { Viewport } from "next"
import localFont from "next/font/local"
import Link from "next/link"
import {
  Inter,
  IBM_Plex_Serif,
  Instrument_Serif,
  JetBrains_Mono,
  Geist_Mono,
} from "next/font/google"
import { ArrowUpRight } from "akar-icons"

import classNames from "@/utils/classNames"

import "./main.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const sansSecondaryFont = localFont({
  variable: "--sans-secondary-font",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
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

const monoSecondaryFont = Geist_Mono({
  variable: "--mono-secondary-font",
  weight: ["400"],
  subsets: ["latin"],
})

const instrumentSerifFont = Instrument_Serif({
  variable: "--instrument-serif-font",
  weight: ["400"],
  subsets: ["latin"],
})

const components = [
  { title: "Ask AI", link: "/ask-ai/" },
  { title: "Jelly Tags", link: "/jelly-tags/" },
  { title: "Airbnb Cards", link: "/airbnb-cards/" },
  { title: "Poker Widget", link: "/poker-widget/" },
  { title: "Breaking Bulb", link: "/breaking-bulb/" },
  { title: "Upvote Button", link: "/upvote-button/" },
  { title: "Dynamic Island", link: "/dynamic-island/" },
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
        monoSecondaryFont.variable,
        sansFont.variable,
        sansSecondaryFont.variable,
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

      <body
        className="
          flex flex-col overflow-x-hidden bg-zinc-100 font-sans
          md:flex-row
        "
      >
        <aside
          className="
            flex flex-col px-8 pt-12
            md:w-3/12
          "
        >
          <h1 className="mb-2 font-serif text-3xl tracking-tighter text-zinc-900">
            Interactive Interfaces
          </h1>
          <p
            className="
              mb-6 max-w-65 font-serif text-base tracking-tight text-zinc-600
            "
          >
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
              Jeet
            </a>
          </p>
          <div className="mt-auto mb-5">
            {components.map((component, i) => (
              <Link
                key={i}
                href={component.link}
                className="
                  group flex items-center gap-2 py-1.5 tracking-tighter
                  text-zinc-500 transition-colors
                  hover:text-zinc-900
                "
              >
                <span>{component.title}</span>
                <div className="flex-1 border-t border-dashed border-zinc-300" />
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:rotate-45
                  "
                />
              </Link>
            ))}
          </div>
        </aside>
        <main
          className="
            flex min-h-dvh p-4
            md:w-9/12
          "
        >
          <div className="w-full rounded-xl bg-white">{children}</div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
