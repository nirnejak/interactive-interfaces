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

const BAR_COUNT = 5
const BAR_WIDTH = 30
const BAR_GAP = 12
const CHART_HEIGHT = 130
const CHART_WIDTH = BAR_COUNT * BAR_WIDTH + (BAR_COUNT - 1) * BAR_GAP

const BAR_DATA_SETS = [
  [85, 55, 100, 40, 70],
  [50, 90, 65, 80, 35],
  [70, 40, 80, 95, 60],
  [40, 75, 50, 60, 95],
  [90, 60, 35, 75, 50],
]

const BarChartAnimation: React.FC = () => {
  const [dataIndex, setDataIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % BAR_DATA_SETS.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  const bars = BAR_DATA_SETS[dataIndex]

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
        {bars.map((height, i) => (
          <motion.rect
            key={i}
            x={i * (BAR_WIDTH + BAR_GAP)}
            initial={false}
            animate={{ y: CHART_HEIGHT - height, height }}
            transition={SPRING_TRANSITION}
            width={BAR_WIDTH}
            rx={4}
            fill={CHART_COLOR}
          />
        ))}
      </svg>
    </div>
  )
}

export default BarChartAnimation
