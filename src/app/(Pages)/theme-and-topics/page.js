'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Calendar, FileText, UserPlus, BirdIcon, File } from "lucide-react"
import Link from 'next/link'

export default function ThemeAndTopics() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const topics = [
   "Climate Change and Global Warming","Adaptation and Mitigation Strategies","Climate Risk Assessment and Management","Carbon Sequestration and Emission Reduction","Renewable Energy Innovations (Solar, Wind, Hydropower, etc.)","Green Technology and Smart Cities","Water Scarcity and Conservation Techniques","Sustainable Agriculture and Food Security","Biodiversity and Ecosystem Conservation","Marine and Coastal Sustainability","Air Quality and Pollution Control","Circular Economy and Waste Management","Environmental Policy and Governance","Role of AI and Big Data in Environmental Monitoring","Impact of Climate Change on Public Health","Sustainable Development Goals (SDGs) and Climate Action","Environmental Justice and Ethics","Education and Awareness for Sustainability","Social and Economic Impacts of Environmental Degradation"
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">Conference Themes</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">Theme and Topics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Exploring innovative solutions, research, and strategies to combat climate change and promote sustainability.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
              The World Forum on Climate Change and Environmental Sustainability on March 10–12, 2025, in Geneva, Switzerland, invites researchers, policymakers, innovators, and activists to present their recent work. This forum is a prestigious event designed to provide an excellent international platform for sharing groundbreaking research, innovative solutions, and actionable strategies to combat climate change and foster environmental sustainability.
                        </p>
              <p className="leading-relaxed text-lg text-muted-foreground">All abstract submissions will undergo rigorous peer review to ensure originality, technical merit, and relevance to the conference themes    </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-primary">Conference Themes and Topics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-black">
              The forum encourages submissions on the following topics related to climate change and environmental sustainability. Other relevant areas will also be considered              </p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-accent-foreground p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                    }}
                  >
                    {topic}
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-muted text-blue-500 p-6 border-b-2 border-blue-400 rounded-md">
              <CardTitle className="text-3xl">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-muted-foreground">
              Submitted abstracts will be reviewed by the Scientific Committee to ensure they align with the conference objectives and themes. Submissions should report original and previously unpublished research findings. Manuscripts must adhere to the conference&apos;s format and guidelines, which will be shared with accepted participants.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
          <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="default">
            <FileText className="mr-2 h-6 w-6" />
            Submit Your Paper
          </Button>
         </Link>
         <Link href={'/registration'}>
          <Button className="flex-1 text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" variant="secondary">
            <UserPlus className="mr-2 h-6 w-6" />
            Register for the Conference
          </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-3xl flex items-center">
                <Calendar className="mr-2 h-8 w-8" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { date: "July 31, 2024", event: "Abstract Submission Deadline", icon: <FileText className="h-6 w-6" /> },
                  { date: "August 15, 2024", event: "Notification of Acceptance", icon: <UserPlus className="h-6 w-6" /> },
                  { date: "September 1, 2024", event: "Early Bird Registration", icon: <BirdIcon className="h-6 w-6" /> },
                  { date: "October 15, 2024", event: "Full Paper Submission", icon: <File className="h-6 w-6" /> },
                  { date: "November 22-24, 2024", event: "Conference Dates", icon: <Calendar className="h-6 w-6" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-lg text-muted-foreground">
                      <strong>{item.date}:</strong> {item.event}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}