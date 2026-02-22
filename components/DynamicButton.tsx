"use client"

import { ArrowCycle } from "akar-icons"
import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

const buttonCopy = {
  idle: "Submit Form",
  loading: <ArrowCycle size={16} className="animate-spin" />,
  success: "Submitted!",
}

const variants = {
  initial: { opacity: 0, y: -25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
}

const DynamicButton: React.FC = () => {
  const [buttonState, setButtonState] = React.useState<
    "loading" | "success" | "idle"
  >("idle")

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="grid h-64 w-96 place-content-center text-center text-sm">
        <button
          className="h-10 w-32 overflow-hidden rounded-full bg-zinc-800 py-1.5 font-medium text-sm text-zinc-50 tracking-tight"
          disabled={buttonState === "loading"}
          onClick={() => {
            if (buttonState === "success") return

            setButtonState("loading")

            setTimeout(() => {
              setButtonState("success")
            }, 1750)

            setTimeout(() => {
              setButtonState("idle")
            }, 3500)
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              key={buttonState}
              className="flex w-full items-center justify-center"
            >
              {buttonCopy[buttonState]}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </div>
  )
}

export default DynamicButton
