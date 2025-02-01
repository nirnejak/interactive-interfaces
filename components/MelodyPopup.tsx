"use client"
import * as React from "react"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"

import PeerlistMelodyPopup from "assets/peerlist-melody-popup.png"
import classNames from "@/utils/classNames"

const MelodyPopup: React.FC = () => {
  const elementRef = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  console.log(height)
  console.log(progress)

  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect()

        setHeight(rect.height)
      }
    })

    if (elementRef.current !== null) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsPlaying(false)
            return 0
          }
          return prevProgress + 1
        })
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        mass: 0.8,
        stiffness: 400,
        damping: 25,
      }}
      onMouseEnter={() => {
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
      className="w-[400px]"
    >
      <motion.div
        className={classNames(
          isPlaying ? "flex-col" : "gap-4",
          "flex items-center rounded-lg bg-white p-4 text-sm shadow-md"
        )}
      >
        <motion.div
          initial={false}
          animate={{
            height: isPlaying ? 368 : 80,
            width: isPlaying ? 368 : 80,
          }}
          transition={{
            type: "spring",
            mass: 0.8,
            stiffness: 400,
            damping: 25,
          }}
          style={{
            justifySelf: "start",
          }}
          className={classNames(isPlaying ? "" : "w-full")}
        >
          <Image
            src={PeerlistMelodyPopup}
            alt="Tore Up - Don Toliver Cover"
            quality={100}
            width={368}
            height={368}
            className="rounded-lg"
          />
        </motion.div>
        {/* Progress */}
        {isPlaying && (
          <AnimatePresence>
            <motion.div className="my-4">
              <svg
                width="368"
                height="13"
                viewBox="0 0 368 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="5.53442" width="0.0001" height="2" fill="#0D0D0D" />
                <circle cx="6.00012" cy="6.53442" r="6" fill="#0D0D0D" />
                <rect
                  x="12.0001"
                  y="5.53442"
                  width="356"
                  height="2"
                  fill="#E1E4E8"
                />
              </svg>
            </motion.div>
          </AnimatePresence>
        )}
        {/* Details */}
        {!isPlaying && (
          <AnimatePresence>
            <motion.div
              layout
              className="flex w-full items-center justify-between"
            >
              <div>
                <p className="mb-1 text-lg font-semibold leading-6 text-black">
                  Tore Up
                </p>
                <p className="text-base leading-[22px] text-gray-700">
                  Don Toliver
                </p>
              </div>
              <motion.button
                layout
                initial={false}
                transition={{
                  type: "spring",
                  mass: 0.8,
                  stiffness: 400,
                  damping: 25,
                }}
                className="flex items-center gap-1 rounded-full bg-gray-900 px-3.5 py-2 text-white"
                onClick={() => {
                  setIsPlaying(!isPlaying)
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.64026 2.72596C4.57589 2.68779 4.50256 2.66734 4.42772 2.66669C4.35288 2.66603 4.2792 2.6852 4.21417 2.72224C4.14914 2.75928 4.09507 2.81287 4.05745 2.87757C4.01983 2.94227 4.00001 3.01577 4 3.09061V12.9094C4.00001 12.9842 4.01983 13.0577 4.05745 13.1224C4.09507 13.1871 4.14914 13.2407 4.21417 13.2778C4.2792 13.3148 4.35288 13.334 4.42772 13.3333C4.50256 13.3327 4.57589 13.3122 4.64026 13.274L12.9248 8.36466C12.9881 8.32711 13.0405 8.27375 13.0769 8.20982C13.1133 8.14588 13.1325 8.07358 13.1325 8C13.1325 7.92643 13.1133 7.85413 13.0769 7.79019C13.0405 7.72626 12.9881 7.6729 12.9248 7.63535L4.64026 2.72596Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {isHovering && <span>Play</span>}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
        {isPlaying && (
          <AnimatePresence>
            <motion.div
              initial={{ translateY: "100%" }}
              animate={{ translateY: 0 }}
              className="flex w-full items-center justify-between gap-[107px]"
            >
              <div>
                <p className="mb-1 text-lg font-semibold leading-6 text-black">
                  Tore Up
                </p>
                <p className="text-base leading-[22px] text-gray-700">
                  Don Toliver
                </p>
              </div>
              <motion.button
                initial={false}
                transition={{
                  type: "spring",
                  mass: 0.8,
                  stiffness: 400,
                  damping: 25,
                }}
                // whileHover={}
                className="flex items-center gap-1 rounded-full bg-gray-900 px-3.5 py-2 text-white"
                onClick={() => {
                  setIsPlaying(!isPlaying)
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.2667V3.73334C4 3.62726 4.04214 3.52552 4.11716 3.4505C4.19217 3.37549 4.29391 3.33334 4.4 3.33334H6.26667C6.37275 3.33334 6.4745 3.37549 6.54951 3.4505C6.62452 3.52552 6.66667 3.62726 6.66667 3.73334V12.2667C6.66667 12.3728 6.62452 12.4745 6.54951 12.5495C6.4745 12.6245 6.37275 12.6667 6.26667 12.6667H4.4C4.29391 12.6667 4.19217 12.6245 4.11716 12.5495C4.04214 12.4745 4 12.3728 4 12.2667ZM9.33333 12.2667V3.73334C9.33333 3.62726 9.37548 3.52552 9.45049 3.4505C9.52551 3.37549 9.62725 3.33334 9.73333 3.33334H11.6C11.7061 3.33334 11.8078 3.37549 11.8828 3.4505C11.9579 3.52552 12 3.62726 12 3.73334V12.2667C12 12.3728 11.9579 12.4745 11.8828 12.5495C11.8078 12.6245 11.7061 12.6667 11.6 12.6667H9.73333C9.62725 12.6667 9.52551 12.6245 9.45049 12.5495C9.37548 12.4745 9.33333 12.3728 9.33333 12.2667Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
                <span>Pause</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  )
}

export default MelodyPopup
