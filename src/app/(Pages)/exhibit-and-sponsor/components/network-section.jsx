"use client"

import { motion } from "framer-motion"
import { Users2, TreePine, Wind, Leaf, Building2, Siren, Projector } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const cardHover = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

export default function NetworkSection() {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16"
        >
          WHO WILL YOU MEET AT THE
          <br />
          CLIMATE FORUM?
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Left Card */}
          <motion.div 
            whileHover="hover"
            variants={cardHover}
            className="bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-800/50"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-blue-500 rounded-full p-4">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Environmental Leaders and Industry Experts</h3>
                <p className="text-blue-100">Where the world&apos;s leading climate scientists and sustainability experts network to drive environmental change.</p>
              </div>
            </div>

            <div className="space-y-6 border-l-2 border-white pl-6">
              <motion.div 
                className="flex items-center gap-4"
                variants={item}
              >
                <Building2 className="text-white"/>
                <p className="text-sm text-blue-100">Backed by Glob al Environmental Organizations</p>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={item}
              >
                 <Siren className="text-white"/>
                <p className="text-sm text-blue-100">Government and policy maker attendance</p>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={item}
              >
                <Projector className="text-white"/>
                <p className="text-sm text-blue-100">Average project budget of attending organizations</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <div className="space-y-4">
            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-blue-900/40 backdrop-blur-md rounded-xl p-6 border border-blue-800/50"
            >
              <div className="flex items-center gap-6">
                <div className="bg-orange-500 rounded-full p-4">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Conservation Organizations</h3>
                  <p className="text-sm text-blue-100">Connect with leading conservation groups and environmental protection agencies.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-blue-900/40 backdrop-blur-md rounded-xl p-6 border border-blue-800/50"
            >
              <div className="flex items-center gap-6">
                <div className="bg-purple-500 rounded-full p-4">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Renewable Energy Pioneers</h3>
                  <p className="text-sm text-blue-100">Meet innovative companies leading the transition to sustainable energy solutions.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover="hover"
              variants={cardHover}
              className="bg-blue-900/40 backdrop-blur-md rounded-xl p-6 border border-blue-800/50"
            >
              <div className="flex items-center gap-6">
                <div className="bg-yellow-500 rounded-full p-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Sustainability Solutions</h3>
                  <p className="text-sm text-blue-100">Discover cutting-edge technologies and solutions for environmental challenges.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white">
            245+ EXHIBITORS & SPONSORS
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

