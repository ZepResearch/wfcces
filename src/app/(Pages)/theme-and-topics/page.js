'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, BirdIcon, File } from 'lucide-react'
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
    {
      title: "Climate Science and Policy",
      content: [
        "Advances in Climate Modeling and Prediction",
        "Global Climate Policy: Challenges and Opportunities",
        "Climate Justice and Equity"
      ]
    },
    {
      title: "Mitigation Strategies",
      content: [
        "Renewable Energy Innovations and Integration",
        "Carbon Sequestration and Negative Emissions Technologies",
        "Sustainable Transportation Solutions"
      ]
    },
    {
      title: "Adaptation and Resilience",
      content: [
        "Climate-Resilient Infrastructure Development",
        "Community-Based Adaptation Strategies",
        "Disaster Risk Reduction and Management"
      ]
    },
    {
      title: "Biodiversity and Ecosystem Conservation",
      content: [
        "Protecting Endangered Species and Habitats",
        "Restoration Ecology and Reforestation Initiatives",
        "The Role of Oceans in Climate Regulation"
      ]
    },
    {
      title: "Sustainable Urban Development",
      content: [
        "Green Cities: Innovations in Urban Planning",
        "Sustainable Housing and Circular Construction",
        "Smart Cities and IoT for Environmental Management"
      ]
    },
    {
      title: "Environmental Economics and Finance",
      content: [
        "Carbon Pricing and Market Mechanisms",
        "Green Investment and Financing Sustainable Projects",
        "Economic Impacts of Climate Change"
      ]
    },
    {
      title: "Technological Innovations for Sustainability",
      content: [
        "Artificial Intelligence for Climate Solutions",
        "Advancements in Clean Water and Sanitation Technologies",
        "Waste Management and Recycling Innovations"
      ]
    },
    {
      title: "Education and Awareness",
      content: [
        "Climate Change Communication and Outreach",
        "Integrating Sustainability into Curricula",
        "Citizen Science and Public Participation"
      ]
    },
    {
      title: "Sectoral Approaches to Sustainability",
      content: [
        "Agriculture and Food Systems under Climate Stress",
        "The Role of Industry in Emission Reductions",
        "Tourism and Sustainable Practices"
      ]
    },
    {
      title: "Youth and Climate Action",
      content: [
        "Empowering Young Leaders for Climate Advocacy",
        "Innovative Solutions from Youth and Startups",
        "Climate Entrepreneurship and Social Innovation"
      ]
    }
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
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
                All abstract submissions will undergo rigorous peer review to ensure originality, technical merit, and relevance to the conference themes.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-slate-100 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="bg-white text-secondary-foreground p-6">
              <CardTitle className="text-3xl underline underline-offset-2 decoration-primary">Session and Tracks</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-black">
                The forum encourages submissions on the following topics related to climate change and environmental sustainability. Other relevant areas will also be considered.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-800 font-medium text-base">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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

