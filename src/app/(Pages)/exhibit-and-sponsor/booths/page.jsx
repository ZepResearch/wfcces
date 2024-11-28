"use client"

import { motion } from "framer-motion"
import { Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function PricingTable() {
  return (
    <section className="bg-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="overflow-x-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="min-w-[800px]"
          >
            {/* Header Tabs */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {['BOOTH SELECTION', 'BOOTH FEATURES', 'SIZE BRANDING', 'EQUIPMENT SPECIFICATIONS'].map((tab, index) => (
                <motion.div
                  key={tab}
                  variants={item}
                  className={`text-center p-2 rounded-t-lg text-sm font-medium ${
                    index === 0 ? 'bg-purple-600' :
                    index === 1 ? 'bg-red-500' :
                    index === 2 ? 'bg-blue-600' :
                    'bg-yellow-400'
                  }`}
                >
                  {tab}
                </motion.div>
              ))}
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-4 gap-4">
              {/* Column Headers */}
              <motion.div variants={item} className="bg-white/10 p-6 rounded-t-lg text-center">
                <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                <div className="aspect-square relative mb-4 bg-white/90 justify-center items-center flex rounded-xl">
                  <Image
                    src="https://illustrations.popsy.co/purple/student-going-to-school.svg"
                    alt="Basic booth layout"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-blue-200 mb-2">Ideal for smaller-sized projects</p>
                <p className="text-sm text-blue-200">1.5m x 1.5m booth</p>
              </motion.div>

              <motion.div variants={item} className="bg-white/10 p-6 rounded-t-lg text-center">
                <h3 className="text-xl font-bold text-white mb-2">Classic</h3>
                <div className="aspect-square relative mb-4  bg-white/90 justify-center items-center flex rounded-xl" >
                  <Image
                    src="https://illustrations.popsy.co/red/remote-work.svg"
                    alt="Classic booth layout"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-blue-200 mb-2">Great branding opportunity</p>
                <p className="text-sm text-blue-200">2m x 2m booth</p>
              </motion.div>

              <motion.div variants={item} className="bg-white/10 p-6 rounded-t-lg text-center">
                <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                <div className="aspect-square relative mb-4 bg-white/90 justify-center items-center flex rounded-xl">
                  <Image
                    src="https://illustrations.popsy.co/blue/man-riding-a-rocket.svg"
                    alt="Premium booth layout"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-blue-200 mb-2">Bigger branding for more impact and visibility</p>
                <p className="text-sm text-blue-200">3m x 2m booth</p>
              </motion.div>

              <motion.div variants={item} className="bg-white/10 p-6 rounded-t-lg text-center">
                <h3 className="text-xl font-bold text-white mb-2">Super</h3>
                <div className="aspect-square relative mb-4 bg-white/90 justify-center items-center flex rounded-xl">
                  <Image
                    src="https://illustrations.popsy.co/amber/rich.svg"
                    alt="Super booth layout"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-sm text-blue-200 mb-2">Largest booth with unlimited visibility</p>
                <p className="text-sm text-blue-200">4.5m x 3m booth</p>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={container} className="col-span-5 mt-8">
                <div className="space-y-4">
                  {[
                    { label: 'Floor size', values: ['1.5m x 1.5m booth', '2m x 2m booth', '3m x 2m booth', '4.5m x 3m booth'] },
                    { label: 'Wall', values: ['Printed rigid wall', 'Premium custom wall', 'Large custom wall', 'Deluxe custom wall'] },
                    { label: 'Company ticket inclusion', values: [2, 4, 6, 10] },
                    { label: 'High chairs', values: [1, 2, 3, 4] },
                    { label: 'High table', values: [1, 1, 1, 2] },
                    { label: 'Extra chairs', values: ['×', 'Optional extra', 'Optional extra', 'Optional extra'] },
                    { label: 'Lounge chairs', values: ['×', '×', '×', '✓'] },
                    { label: 'Coffee table', values: ['×', '✓', '✓', '✓'] },
                    { label: 'Sofa', values: ['×', '×', '✓', '✓'] },
                    { label: 'TV screen', values: ['×', 'Optional extra', '✓', '✓'] },
                    { label: 'Pull-up banner', values: ['×', 'Optional extra', 'Optional extra', '✓'] },
                    { label: 'Storage', values: ['×', '×', '×', '✓'] },
                    { label: 'Power', values: ['×', '✓', '✓', '✓'] },
                  ].map((row, index) => (
                    <motion.div
                    key={row.label}
                    variants={item}
                    className="grid grid-cols-5 items-center bg-white/5 rounded-lg"
                    >
                    <div className="p-4 font-medium text-white">{row.label}</div>
                      {row.values.map((value, i) => (
                        <div key={i} className="p-4 text-center text-blue-100">
                          {value === '✓' ? (
                            <Check className="w-5 h-5 mx-auto text-green-400" />
                          ) : value === '×' ? (
                            <X className="w-5 h-5 mx-auto text-red-400" />
                          ) : (
                            value
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Pricing and CTAs */}
              
              
            </div>
          </motion.div>
          <div className="flex flex-row w-full justify-between sm:justify-center sm:pl-72 sm:gap-16 mx-auto items-end ">
              <motion.div variants={item} className="p-6 text-center ">
                <p className="text-3xl font-bold text-white mb-4">$8,998</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Building Now
                </Button>
              </motion.div>

              <motion.div variants={item} className="p-6 text-center">
                <p className="text-3xl font-bold text-white mb-4">$17,998</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Building Now
                </Button>
              </motion.div>

              <motion.div variants={item} className="p-6 text-center">
                <p className="text-3xl font-bold text-white mb-4">$27,998</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  View Locations
                </Button>
              </motion.div>

              <motion.div variants={item} className="p-6 text-center">
                <p className="text-3xl font-bold text-white mb-4">$54,998</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Building Now
                </Button>
              </motion.div>

              </div>
        </div>
      </div>
    </section>
  )
}

