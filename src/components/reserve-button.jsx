"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ReserveForm } from "./reserve-form"
import { AuroraButton } from "./aurora-button"

export function ReserveButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Auto-open form after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmitSuccess = () => {
    setIsOpen(false)
    setShowThankYou(true)
  }

  return (
    <>
      <motion.div
        className=""
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
        >
            <AuroraButton>

          Reserve Your Seat
            </AuroraButton>
        </motion.button>
      </motion.div>

      <ReserveForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSubmitSuccess={handleFormSubmitSuccess}
      />

      {/* Thank You Popup */}
      {showThankYou && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for submitting your reservation. Our team will get back to you shortly with confirmation details.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}