"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ReserveForm } from "./reserve-form"

export function ReserveButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-open form after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000) // 4000 milliseconds = 4 seconds

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0px 0px 0px rgba(0, 200, 100, 0.3)",
              "0px 0px 15px rgba(0, 200, 100, 0.6)",
              "0px 0px 0px rgba(0, 200, 100, 0.3)",
            ],
          }}
          transition={{
            boxShadow: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Reserve Your Seat
        </motion.button>
      </motion.div>

      <ReserveForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}