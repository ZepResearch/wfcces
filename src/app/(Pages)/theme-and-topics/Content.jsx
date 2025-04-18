'use client'

import { useEffect, useRef,useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, BirdIcon, File } from 'lucide-react'
import Link from 'next/link'
import PocketBase from 'pocketbase'

export default function ThemeAndTopics() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [importantDates, setImportantDates] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const pb = new PocketBase('https://wfcces.pockethost.io')
        const records = await pb.collection('dates').getFullList({
          sort: '-created',
        })
        
        // Transform the records into the required format
    
        
        setImportantDates(records)
      } catch (error) {
        console.error('Error fetching dates:', error)
        // Fallback to default dates if there's an error
        setImportantDates([
          { date: "January 25th, 2025", event: "Early bird registration deadline", icon: <BirdIcon className="h-6 w-6" /> },
          { date: "January 30th, 2025", event: "Abstract submission deadline", icon: <UserPlus className="h-6 w-6" /> },
          { date: "February 6th, 2025", event: "Full paper submission deadline", icon: <FileText className="h-6 w-6" /> },
          { date: "February 17th, 2025", event: "Registration deadline", icon: <File className="h-6 w-6" /> },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchDates()
  }, [])

  const getIconForEvent = (eventType) => {
    const iconMap = {
      'earlyBird': <BirdIcon className="h-6 w-6" />,
      'abstract': <UserPlus className="h-6 w-6" />,
      'fullPaper': <FileText className="h-6 w-6" />,
      'registration': <File className="h-6 w-6" />
    }
    return iconMap[eventType] || <Calendar className="h-6 w-6" />
  }

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
              The World Forum on Climate Change and Environmental Sustainability, scheduled for May 22<sup>nd</sup>–23<sup>rd</sup>, 2025, in Kuala Lumpur, Malaysia, invites researchers, policymakers, innovators, and activists to present their latest work. This prestigious forum serves as an exceptional international platform to exchange groundbreaking research, innovative solutions, and actionable strategies to combat climate change and promote environmental sustainability              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
              Participants will engage in vibrant discussions and networking opportunities, addressing pressing environmental challenges and exploring collaborative pathways for a sustainable future.
              </p>
              <p className="leading-relaxed text-lg text-muted-foreground mt-4">
              All submitted abstracts will undergo a rigorous peer review process, ensuring originality, technical merit, and alignment with the conference themes. Join us in shaping the global agenda for a greener tomorrow!
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
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <ul className="flex flex-col-reverse">
                {importantDates.map((item, index) => (
                  <li key={index} className="flex items-center py-2">
                    {/* <div className="mr-2 text-primary">
                      {item.icon}
                    </div> */}
                    <span className="text-lg text-muted-foreground">
                      <strong>{item.date}:</strong> {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </motion.section>
  )
}

