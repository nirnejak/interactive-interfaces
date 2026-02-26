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

const CHART_WIDTH = 240
const CHART_HEIGHT = 140
const DOT_RADIUS = 5

const SCATTER_DATA_SETS = [
  [
    { x: 20, y: 110 },
    { x: 55, y: 40 },
    { x: 85, y: 80 },
    { x: 120, y: 25 },
    { x: 145, y: 95 },
    { x: 170, y: 55 },
    { x: 200, y: 70 },
    { x: 225, y: 30 },
  ],
  [
    { x: 30, y: 50 },
    { x: 60, y: 100 },
    { x: 90, y: 30 },
    { x: 115, y: 75 },
    { x: 150, y: 45 },
    { x: 180, y: 110 },
    { x: 205, y: 20 },
    { x: 230, y: 85 },
  ],
  [
    { x: 25, y: 80 },
    { x: 50, y: 25 },
    { x: 80, y: 105 },
    { x: 110, y: 60 },
    { x: 140, y: 35 },
    { x: 175, y: 90 },
    { x: 195, y: 45 },
    { x: 220, y: 115 },
  ],
  [
    { x: 35, y: 30 },
    { x: 65, y: 85 },
    { x: 95, y: 55 },
    { x: 125, y: 110 },
    { x: 155, y: 20 },
    { x: 185, y: 70 },
    { x: 210, y: 100 },
    { x: 228, y: 50 },
  ],
  [
    { x: 22, y: 65 },
    { x: 58, y: 115 },
    { x: 88, y: 40 },
    { x: 118, y: 90 },
    { x: 148, y: 70 },
    { x: 172, y: 25 },
    { x: 202, y: 105 },
    { x: 232, y: 45 },
  ],
]

const ScatterPlotAnimation: React.FC = () => {
  const [dataIndex, setDataIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % SCATTER_DATA_SETS.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  const dots = SCATTER_DATA_SETS[dataIndex]

  return (
    <div
      style={{ boxShadow: "10px 50px 70px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col rounded-3xl bg-white p-5"
    >
      <div className="mb-12 flex w-full items-center justify-between">
        <div className="h-3.5 w-20 rounded-full bg-[#EAEAEA]" />
        <div className="ml-auto h-3.5 w-14 rounded-full bg-[#F4F4F4]" />
      </div>
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            initial={false}
            animate={{ cx: dot.x, cy: dot.y }}
            transition={SPRING_TRANSITION}
            r={DOT_RADIUS}
            fill={CHART_COLOR}
          />
        ))}
      </svg>
    </div>
  )
}

export default ScatterPlotAnimation
