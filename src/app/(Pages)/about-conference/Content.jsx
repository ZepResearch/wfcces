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
            className="relative h-64 md:h-full rounded-2xl overflow-hidden "
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Animated illustration of climate change and sustainability concepts"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-row justify-start gap-14"
        >
          <Card className="max-w-3xl">
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
          <Card className="max-w-3xl">
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

        {/* Why Attend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Why Attend the WFCCES 2025</CardTitle>
              <CardDescription>A unique opportunity to engage with global leaders and pioneers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Learn from Leading Experts</h3>
                  <p className="text-gray-600 mb-6">
                    Connect with 50+ world-renowned specialists in climate science, policy, and sustainable technologies. Gain valuable insights into the latest research, innovations, and policies driving climate action worldwide.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Discover Cutting-Edge Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Explore groundbreaking research and practical strategies aimed at mitigating climate change and advancing sustainability. Learn actionable solutions to implement in your organization, community, or personal initiatives.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Collaborate for Impact</h3>
                  <p className="text-gray-600 mb-6">
                    Foster collaborations with thought leaders, policymakers, and like-minded attendees. Build connections that can lead to impactful projects and global sustainability initiatives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Engage in Interactive Sessions</h3>
                  <p className="text-gray-600 mb-6">
                    Participate in dynamic workshops, panel discussions, and Q&A sessions on topics like climate action, sustainability, and innovation. Equip yourself with practical tools to address environmental challenges effectively.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Shape a Greener Future</h3>
                  <p className="text-gray-600 mb-6">
                    Contribute to shaping sustainable and resilient societies. Your ideas, insights, and engagement can drive meaningful change for our planets future.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Gain a Global Perspective</h3>
                  <p className="text-gray-600 mb-6">
                    Network with experts and participants from diverse backgrounds and regions. Broaden your understanding of global environmental issues and explore a variety of innovative solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Who Can Attend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Who Can Attend</CardTitle>
              <CardDescription>Join our diverse community of environmental champions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Climate Scientists & Researchers",
                    description: "Present your findings, exchange ideas, and collaborate on pioneering solutions for a sustainable future."
                  },
                  {
                    title: "Policymakers & Government Officials",
                    description: "Stay informed about the latest policies and strategies to drive climate action and environmental protection."
                  },
                  {
                    title: "Sustainability Advocates",
                    description: "Network with individuals and organizations dedicated to creating a greener, more sustainable world."
                  },
                  {
                    title: "Industry Leaders & Innovators",
                    description: "Explore new sustainable technologies and strategies to integrate into your business practices."
                  },
                  {
                    title: "NGOs & Nonprofits",
                    description: "Discover collaborative approaches to advance environmental missions and promote climate resilience."
                  },
                  {
                    title: "Students & Emerging Leaders",
                    description: "Gain knowledge, build networks, and contribute to global sustainability dialogues."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-blue-600">
                  Join us in Kuala Lumpur on May 22<sup>nd</sup> - 23<sup>rd</sup>, 2025 for a transformative experience that empowers you to lead climate action and advance environmental sustainability!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}