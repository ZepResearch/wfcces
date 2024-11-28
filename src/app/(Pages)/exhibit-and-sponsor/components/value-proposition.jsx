"use client"

import { motion } from "framer-motion"
import { Check, Quote } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

const quote = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.3
    }
  }
}

export default function ValueProposition() {
  return (
    <section className="bg-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16"
        >
          WHAT YOUR INVESTMENT BRINGS
        </motion.h2>

        <div className="grid md:grid-cols-[1fr,400px] gap-8 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div 
              variants={item}
              className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4"
            >
              <div className="mt-1">
                <Check className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-lg">
                Exposure to world-leading climate initiatives and sustainability experts
                <span className="text-red-500">*</span>
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4"
            >
              <div className="mt-1">
                <Check className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-lg">
                All-inclusive package – no hidden facility or equipment fees!
                <span className="text-red-500">*</span>
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4"
            >
              <div className="mt-1">
                <Check className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-lg">
                Effortless setup – we handle the booth construction for you!
                <span className="text-red-500">*</span>
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4"
            >
              <div className="mt-1">
                <Check className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-lg">
                Highest environmental impact in the sector. See the proof 👉
                <span className="text-red-500">*</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={quote}
            initial="hidden"
            animate="show"
            className="relative bg-blue-900/40 backdrop-blur-sm rounded-xl p-8 border border-blue-800"
          >
            <div className="absolute -top-4 -left-4">
              <Quote className="w-8 h-8 text-yellow-400" />
            </div>
            <blockquote className="relative">
              <p className="text-white text-xl italic mb-4">
                We are seeing unprecedented engagement levels. We are projecting 30% increase in environmental impact after this conference.
              </p>
              <footer className="text-blue-400 font-semibold">
                GREEN INITIATIVES
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
p