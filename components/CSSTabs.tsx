"use client"
import * as React from "react"

const CSSTabs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div
        className="
          grid h-64 w-96 place-content-center rounded-lg bg-black p-4
          text-center text-sm transition-all ease-out
        "
      >
        {/* eslint-disable-next-line better-tailwindcss/no-unknown-classes */}
        <nav className="css-tabs">
          <ul className="relative flex items-center justify-center">
            <li className="px-3.5 py-1.5">
              <a href="https://nirnejak.com/">Tab 1</a>
            </li>
            <li className="px-3.5 py-1.5">
              <a href="https://nirnejak.com/">Tab 2</a>
            </li>
            <li className="px-3.5 py-1.5">
              <a href="https://nirnejak.com/">Tab 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default CSSTabs
