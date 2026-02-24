"use client"

import { motion } from "motion/react"
import * as React from "react"

const TRANSITION = {
  type: "tween" as const,
  duration: 0.8,
  ease: "easeInOut" as const,
}

const HOLD_DURATION = 1500

const SIZE = 100
const CENTER = SIZE / 2
const RADIUS = 36
const STROKE_WIDTH = 14
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const SEGMENT_COLORS = [
  "oklch(57% 0.19 165)",
  "oklch(63% 0.19 145)",
  "oklch(67% 0.15 200)",
  "oklch(55% 0.20 250)",
  "oklch(50% 0.20 290)",
] as const

const DONUT_DATA_SETS = [
  [30, 25, 20, 15, 10],
  [15, 30, 10, 25, 20],
  [20, 10, 35, 20, 15],
  [10, 20, 15, 30, 25],
  [25, 15, 20, 10, 30],
]

const DonutChartAnimation: React.FC = () => {
  const [dataIndex, setDataIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % DONUT_DATA_SETS.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  const segments = DONUT_DATA_SETS[dataIndex]
  const total = segments.reduce((sum, v) => sum + v, 0)

  return (
    <div
      style={{ boxShadow: "10px 50px 70px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col rounded-3xl bg-white p-4 md:mb-12"
    >
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="h-3.5 w-20 rounded-full bg-[#EAEAEA]" />
        <div className="ml-auto h-3.5 w-14 rounded-full bg-[#F4F4F4]" />
      </div>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {segments.map((_, i) => {
          const cumulative = segments.slice(i).reduce((sum, v) => sum + v, 0)
          const dashLength = (cumulative / total) * CIRCUMFERENCE

          return (
            <motion.circle
              key={SEGMENT_COLORS[i]}
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={SEGMENT_COLORS[i]}
              strokeWidth={STROKE_WIDTH}
              initial={false}
              animate={{
                strokeDasharray: `${dashLength} ${CIRCUMFERENCE}`,
              }}
              transition={TRANSITION}
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default DonutChartAnimation
