"use client"

import { motion } from "framer-motion"
import { Check, X, Store, Megaphone, Users, Share2, Volume2, Coffee } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function PricingPackages() {
  return (
    <section id="package" className="bg-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            HOW BIG DO YOU WANT TO GO?
          </h2>
          <p className="text-blue-200">
            Build your package to maximize your impact at the Climate Forum.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Exhibitor Card */}
          <motion.div variants={item}>
            <Card className="bg-purple-500 text-white overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="text-lg font-semibold mb-2">EXHIBITOR</div>
                <h3 className="text-3xl font-bold mb-6">BOOTH ONLY</h3>
                <div className="w-32 h-32 mx-auto bg-white/10 rounded-xl p-6">
                  <Store className="w-full h-full" />
                </div>
              </CardHeader>
              <CardContent className="bg-gradient-to-b from-purple-500 to-purple-600 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Standard Booths (Basic, Classic, Premium, Super)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Custom Booth (Custom A 4x2sqm)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Up to 14 tickets included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Branding on the app</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Branding on social media</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Event-wide physical branding</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Exposure to email list</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Speech packages</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Lounge packages</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <X className="w-5 h-5" />
                    <span>Networking drinks packages</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-purple-600 p-6">
                    <Link href={'/exhibit-and-sponsor/booths'} className="w-full">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold" size="lg">
                  I ONLY WANT A BOOTH
                </Button>
                    </Link>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Sponsor Card */}
          <motion.div variants={item}>
            <Card className="bg-blue-600 text-white overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="text-lg font-semibold mb-2">OFFICIAL SPONSOR</div>
                <h3 className="text-3xl font-bold mb-6">SPONSORSHIPS</h3>
                <div className="w-32 h-32 mx-auto bg-white/10 rounded-xl p-6 relative">
                  <div className="grid grid-cols-2 gap-2">
                    <Share2 className="w-full h-full" />
                    <Volume2 className="w-full h-full" />
                    <Users className="w-full h-full" />
                    <Coffee className="w-full h-full" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="bg-gradient-to-b from-blue-600 to-blue-700 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Standard Booths (Basic, Classic, Premium, Super)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Custom Booth (Custom A 4x2sqm)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Up to 22 tickets included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white" />
                    <span>Branding on the app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Branding on social media</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Event-wide physical branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Exposure to email list</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Speech packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Lounge packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>Networking drinks packages</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-blue-700 p-6">
                <Link className="w-full" href={'/sponsorship'}>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold" size="lg">
                  VIEW SPONSORSHIP PACKAGES
                </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

