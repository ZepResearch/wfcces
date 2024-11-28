"use client"

import { motion } from "framer-motion"
import { Store, FileImage, Users } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const lineVariant = {
  hidden: { width: 0 },
  show: { 
    width: "100%",
    transition: { 
      duration: 0.8,
      delay: 0.5 
    }
  }
}

export default function BoothSteps() {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            WE BUILD YOUR BOOTH FOR YOU!
          </h2>
          <p className="text-blue-300 text-sm">
            * Does not apply to Self Build Custom A-D build options *
          </p>
          <p className="text-xl text-blue-100 mt-8">
            Exhibiting couldn&apos;t be easier. It only takes three steps:
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Step 1 */}
          <motion.div variants={item} className="text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-6 bg-blue-900">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <Store className="w-20 h-20 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">STEP ONE</h3>
              <p className="text-blue-100">Choose your booth</p>
            </div>
          </motion.div>

          {/* Connecting Line 1 */}
          <motion.div 
            variants={lineVariant}
            className="hidden md:block absolute top-[3rem] left-[25%] w-[25%] h-[2px]"
          >
            <div className="relative w-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-[2px] bg-gradient-to-r from-yellow-400/50 to-yellow-400/50 dotted-line"></div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={item} className="text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-6 bg-blue-900">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <FileImage className="w-20 h-20 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">STEP TWO</h3>
              <p className="text-blue-100">Send your artworks</p>
            </div>
          </motion.div>

          {/* Connecting Line 2 */}
          <motion.div 
            variants={lineVariant}
            className="hidden md:block absolute top-[3rem] right-[25%] w-[25%] h-[2px]"
          >
            <div className="relative w-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-[2px] bg-gradient-to-r from-yellow-400/50 to-yellow-400/50 dotted-line"></div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={item} className="text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center mb-6 bg-blue-900">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <Users className="w-20 h-20 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">STEP THREE</h3>
              <p className="text-blue-100">Exhibit at Climate Forum</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .dotted-line {
          background-image: linear-gradient(to right, rgb(250 204 21 / 0.5) 50%, transparent 50%);
          background-size: 20px 1px;
          background-repeat: repeat-x;
        }
      `}</style>
    </section>
  )
}

