"use client"

import { motion } from "motion/react"
import * as React from "react"

const CHART_COLOR = "oklch(50.8% 0.118 165.612)"

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 80,
  damping: 15,
}

const HOLD_DURATION = 1500

const CHART_PATHS = [
  "M0 90L63.5 80L127 95L190.5 55L254 68V154.43H0Z",
  "M0 65L63.5 45L127 70L190.5 30L254 50V154.43H0Z",
  "M0 50L63.5 75L127 40L190.5 65L254 35V154.43H0Z",
  "M0 80L63.5 40L127 60L190.5 85L254 45V154.43H0Z",
  "M0 55L63.5 70L127 15L190.5 50L254 75V154.43H0Z",
]

const AreaChartAnimation: React.FC = () => {
  const [pathIndex, setPathIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPathIndex((prev) => (prev + 1) % CHART_PATHS.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{ boxShadow: "10px 50px 70px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col rounded-3xl bg-white p-5"
    >
      <div className="mb-12 flex w-full items-center justify-between">
        <div className="h-3.5 w-20 rounded-full bg-[#EAEAEA]" />
        <div className="ml-auto h-3.5 w-14 rounded-full bg-[#F4F4F4]" />
      </div>
      <svg viewBox="0 0 255 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={false}
          animate={{ d: CHART_PATHS[pathIndex] }}
          transition={SPRING_TRANSITION}
          fill={CHART_COLOR}
        />
      </svg>
    </div>
  )
}

export default AreaChartAnimation
