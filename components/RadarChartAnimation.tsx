"use client"

import { motion } from "motion/react"
import * as React from "react"

const CHART_COLOR_PRIMARY = "oklch(58% 0.16 165)"
const CHART_COLOR_SECONDARY = "oklch(62% 0.2 350)"

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 80,
  damping: 15,
}

const HOLD_DURATION = 1500

const SIZE = 180
const CENTER = SIZE / 2
const MAX_RADIUS = 70
const AXES = 5

const RADAR_DATA_SETS_A = [
  [0.9, 0.6, 0.8, 0.5, 0.7],
  [0.5, 0.9, 0.6, 0.8, 0.4],
  [0.7, 0.4, 0.9, 0.7, 0.9],
  [0.6, 0.8, 0.5, 0.9, 0.6],
  [0.8, 0.7, 0.4, 0.6, 0.8],
]

const RADAR_DATA_SETS_B = [
  [0.5, 0.8, 0.4, 0.7, 0.6],
  [0.7, 0.5, 0.8, 0.4, 0.9],
  [0.4, 0.7, 0.5, 0.9, 0.5],
  [0.8, 0.4, 0.7, 0.5, 0.8],
  [0.6, 0.5, 0.9, 0.8, 0.4],
]

function dataToPath(data: number[]): string {
  const points = data.map((value, i) => {
    const angle = (i / AXES) * 2 * Math.PI - Math.PI / 2
    const r = value * MAX_RADIUS
    return `${CENTER + r * Math.cos(angle)} ${CENTER + r * Math.sin(angle)}`
  })
  return `M${points.join("L")}Z`
}

function gridPath(scale: number): string {
  const points = Array.from({ length: AXES }, (_, i) => {
    const angle = (i / AXES) * 2 * Math.PI - Math.PI / 2
    const r = scale * MAX_RADIUS
    return `${CENTER + r * Math.cos(angle)} ${CENTER + r * Math.sin(angle)}`
  })
  return `M${points.join("L")}Z`
}

const GRID_LEVELS = [0.25, 0.5, 0.75, 1]

const RadarChartAnimation: React.FC = () => {
  const [dataIndex, setDataIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % RADAR_DATA_SETS_A.length)
    }, HOLD_DURATION)
    return () => clearInterval(interval)
  }, [])

  const primaryPath = dataToPath(RADAR_DATA_SETS_A[dataIndex])
  const secondaryPath = dataToPath(RADAR_DATA_SETS_B[dataIndex])

  return (
    <div
      style={{ boxShadow: "10px 50px 70px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col rounded-3xl bg-white p-5 md:mb-12"
    >
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="h-3.5 w-20 rounded-full bg-[#EAEAEA]" />
        <div className="ml-auto h-3.5 w-14 rounded-full bg-[#F4F4F4]" />
      </div>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {GRID_LEVELS.map((level) => (
          <path
            key={level}
            d={gridPath(level)}
            stroke="#E5E5E5"
            strokeWidth={1}
            fill="none"
          />
        ))}
        {Array.from({ length: AXES }, (_, i) => {
          const angle = (i / AXES) * 2 * Math.PI - Math.PI / 2
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={CENTER + MAX_RADIUS * Math.cos(angle)}
              y2={CENTER + MAX_RADIUS * Math.sin(angle)}
              stroke="#E5E5E5"
              strokeWidth={1}
            />
          )
        })}
        <motion.path
          initial={false}
          animate={{ d: primaryPath }}
          transition={SPRING_TRANSITION}
          fill={CHART_COLOR_PRIMARY}
          fillOpacity={0.3}
          stroke={CHART_COLOR_PRIMARY}
          strokeWidth={2}
        />
        <motion.path
          initial={false}
          animate={{ d: secondaryPath }}
          transition={SPRING_TRANSITION}
          fill={CHART_COLOR_SECONDARY}
          fillOpacity={0.2}
          stroke={CHART_COLOR_SECONDARY}
          strokeWidth={2}
        />
        {RADAR_DATA_SETS_A[dataIndex].map((value, i) => {
          const angle = (i / AXES) * 2 * Math.PI - Math.PI / 2
          const r = value * MAX_RADIUS
          return (
            <motion.circle
              key={`a-${i}`}
              initial={false}
              animate={{
                cx: CENTER + r * Math.cos(angle),
                cy: CENTER + r * Math.sin(angle),
              }}
              transition={SPRING_TRANSITION}
              r={3.5}
              fill={CHART_COLOR_PRIMARY}
            />
          )
        })}
        {RADAR_DATA_SETS_B[dataIndex].map((value, i) => {
          const angle = (i / AXES) * 2 * Math.PI - Math.PI / 2
          const r = value * MAX_RADIUS
          return (
            <motion.circle
              key={`b-${i}`}
              initial={false}
              animate={{
                cx: CENTER + r * Math.cos(angle),
                cy: CENTER + r * Math.sin(angle),
              }}
              transition={SPRING_TRANSITION}
              r={3.5}
              fill={CHART_COLOR_SECONDARY}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default RadarChartAnimation
