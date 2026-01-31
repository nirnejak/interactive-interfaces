"use client"
import * as React from "react"

import { AnimatePresence, motion, AnimationGeneratorType } from "motion/react"

import classNames from "@/utils/classNames"

import useDynamicHeight from "@/hooks/useDynamicHeight"
import useClickOutside from "@/hooks/useClickOutside"

const BASE_TRANSITION = {
  duration: 0.15,
  type: "spring" as AnimationGeneratorType,
  stiffness: 200,
  damping: 15,
}

const AskAI: React.FC = () => {
  const { ref, height } = useDynamicHeight()

  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [isAsking, setIsAsking] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const containerRef = useClickOutside(() => {
    if (title.length === 0 && description.length === 0) {
      setIsFocused(false)
    }
  })

  React.useEffect(() => {
    if (title.length) {
      setIsFocused(true)
    }
  }, [title])

  const sendQuery = () => {
    setIsAsking(true)
    setTimeout(() => {
      setIsAsking(false)

      setTitle("")
      setDescription("")
      setIsFocused(false)
    }, 1500)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    sendQuery()
  }

  return (
    <div ref={containerRef}>
      <motion.form
        animate={{ height: height + 16 }} // added 16px for the padding
        onSubmit={handleFormSubmit}
        onClick={() => setIsFocused(true)}
        className="
          group relative mb-8 flex flex-col items-center rounded-3xl
          bg-neutral-200 p-2 font-mono-secondary shadow-heavy
          md:mb-12
          dark:bg-neutral-800 dark:shadow-md
        "
      >
        <div ref={ref} className="w-full">
          <input
            type="text"
            value={title}
            className={classNames(
              "relative w-full rounded-2xl py-2.5 px-3 text-sm shadow-heavy focus:outline-hidden dark:shadow-md",
              "bg-neutral-50 text-neutral-700 placeholder:text-neutral-500",
              "dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder:text-neutral-400"
            )}
            placeholder="Ask anything..."
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            required
          />
          <AnimatePresence mode="popLayout" initial={false}>
            {isFocused && (
              <motion.textarea
                transition={BASE_TRANSITION}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                value={description}
                className={classNames(
                  "relative w-full flex mt-2 rounded-2xl py-2.5 px-3 text-sm shadow-heavy focus:outline-hidden dark:shadow-md",
                  "bg-neutral-50 text-neutral-700 placeholder:text-neutral-500",
                  "dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder:text-neutral-400"
                )}
                placeholder="Give additional context..."
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                rows={3}
              />
            )}
          </AnimatePresence>
          <div
            className="
              absolute right-3.5 bottom-3.5 z-5 flex items-center gap-1.5
            "
          >
            <button
              type="submit"
              disabled={isAsking}
              onClick={(e) => e.stopPropagation()}
              className={classNames(
                "flex items-center gap-1 rounded-xl pl-3 pr-2.5 py-1.5 text-xs shadow-heavy outline-hidden transition-colors dark:shadow-md disabled:opacity-80",
                "bg-neutral-600 text-neutral-100 hover:bg-neutral-700 focus:bg-neutral-700",
                "dark:bg-neutral-300 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
              )}
            >
              {isAsking ? (
                <>
                  <span>Asking</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="animate-spin"
                  >
                    <path
                      d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"
                      opacity="0.2"
                    ></path>
                    <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>
                  </svg>
                </>
              ) : (
                <>
                  <span>Ask</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z"
                      opacity="0.2"
                    ></path>
                    <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  )
}

export default AskAI
