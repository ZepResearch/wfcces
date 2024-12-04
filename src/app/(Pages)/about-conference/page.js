'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">About the World Forum on Climate Change and Environmental Sustainability</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>About Wfcces</CardTitle>
                <CardDescription>Shaping a Sustainable Future Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                Welcome to the World Forum on Climate Change and Environmental Sustainability (WFCCES). We are a global platform dedicated to bringing together leaders, scientists, activists, innovators, and change-makers to address the urgent environmental challenges facing our world. At WFCCES, we believe that collective action and shared knowledge are key to creating a sustainable future for all.
                </p>
                <p className="text-gray-600">
                Our mission is to inspire collaboration, share innovative research, and develop practical strategies to combat climate change and promote sustainability. Whether through discussions, workshops, or shared insights, we aim to empower individuals and organizations to take meaningful steps toward protecting our planet. WFCCES is a space where ideas turn into action. Together, we can create a healthier, more sustainable world for future generations.

                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-64 md:h-full"
          >
            <Image
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726482086/uli2ntgqkw22vfigdtkt.png"
              alt="Animated illustration of climate change and sustainability concepts"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-row justify-start gap-14 "
        >
          <Card className='max-w-3xl' >
            <CardHeader>
              <CardTitle>Join Us in Making a Difference</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                By participating in our forum, you&apos;ll have the opportunity to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Engage with world-renowned experts and thought leaders</li>
                <li>Explore innovative solutions to environmental challenges</li>
                <li>Network with like-minded individuals and organizations</li>
                <li>Contribute to shaping global environmental policies</li>
                <li>Learn about the latest advancements in sustainable technologies</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='max-w-3xl'>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>Driving global action for a sustainable future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The World Forum on Climate Change and Environmental Sustainability brings together leaders, scientists, activists, and innovators from around the globe to address the most pressing environmental challenges of our time.
                </p>
                <p className="text-gray-600">
                  Our goal is to foster collaboration, share cutting-edge research, and develop actionable strategies to combat climate change and promote sustainable practices across all sectors of society.
                </p>
              </CardContent>
            </Card>
        </motion.div>
      </div>
    </section>
  )
}