"use client"

import { motion } from "motion/react"
import * as React from "react"

const CHART_COLOR = "oklch(50.8% 0.118 165.612)"

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
}

const HOLD_DURATION = 1500

const CHART_WIDTH = 240
const CHART_HEIGHT = 140

const BUBBLE_DATA_SETS = [
  [
    { cx: 25, cy: 95, r: 16 },
    { cx: 70, cy: 50, r: 12 },
    { cx: 120, cy: 75, r: 20 },
    { cx: 170, cy: 40, r: 10 },
    { cx: 210, cy: 65, r: 14 },
  ],
  [
    { cx: 30, cy: 60, r: 12 },
    { cx: 80, cy: 100, r: 18 },
    { cx: 130, cy: 40, r: 10 },
    { cx: 175, cy: 85, r: 20 },
    { cx: 215, cy: 35, r: 12 },
  ],
  [
    { cx: 25, cy: 45, r: 18 },
    { cx: 75, cy: 85, r: 10 },
    { cx: 125, cy: 30, r: 14 },
    { cx: 170, cy: 70, r: 12 },
    { cx: 210, cy: 95, r: 18 },
  ],
  [
    { cx: 30, cy: 75, r: 10 },
    { cx: 80, cy: 35, r: 20 },
    { cx: 135, cy: 95, r: 14 },
    { cx: 180, cy: 55, r: 16 },
    { cx: 215, cy: 105, r: 10 },
  ],
  [
    { cx: 25, cy: 40, r: 14 },
    { cx: 75, cy: 70, r: 12 },
    { cx: 130, cy: 100, r: 18 },
    { cx: 175, cy: 45, r: 20 },
    { cx: 215, cy: 80, r: 10 },
  ],
]

const BubbleChartAnimation: React.FC = () => {
  const [dataIndex, setDataIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % BUBBLE_DATA_SETS.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  const bubbles = BUBBLE_DATA_SETS[dataIndex]

  return (
    <div
      style={{ boxShadow: "10px 50px 70px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col rounded-3xl bg-white p-5 md:mb-12"
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
        {bubbles.map((bubble, i) => (
          <motion.circle
            key={i}
            initial={false}
            animate={{ cx: bubble.cx, cy: bubble.cy, r: bubble.r }}
            transition={SPRING_TRANSITION}
            fill={CHART_COLOR}
            opacity={0.75}
          />
        ))}
      </svg>
    </div>
  )
}

export default BubbleChartAnimation
