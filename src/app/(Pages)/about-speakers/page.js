'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const speakerCategories = [
  {
    title: "Guest Speaker",
    speakers: [
      { name: "Dr. Jane Smith", role: "Climate Scientist", avatar: "/placeholder.svg?height=100&width=100" }
    ]
  },
  {
    title: "Keynote Speaker",
    speakers: [
      { name: "Prof. John Doe", role: "Environmental Policy Expert", avatar: "/placeholder.svg?height=100&width=100" }
    ]
  },
  {
    title: "Conference Chair",
    speakers: [
      { name: "Dr. Emily Johnson", role: "Sustainability Researcher", avatar: "/placeholder.svg?height=100&width=100" }
    ]
  },
  {
    title: "Conference Co-Chair",
    speakers: [
      { name: "Dr. Michael Chen", role: "Renewable Energy Specialist", avatar: "/placeholder.svg?height=100&width=100" }
    ]
  },
  {
    title: "Session Chair",
    speakers: [
      { name: "Dr. Sarah Brown", role: "Marine Biologist", avatar: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Robert Green", role: "Atmospheric Scientist", avatar: "/placeholder.svg?height=100&width=100" }
    ]
  }
]

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold underline underline-offset-4 decoration-blue-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Speakers
        </motion.h1>

        {speakerCategories.map((category, index) => (
          <motion.section 
            key={category.title}
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.speakers.map((speaker) => (
                <Card key={speaker.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={speaker.avatar} alt={speaker.name} />
                      <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-blue-700">{speaker.name}</CardTitle>
                      <CardDescription>{speaker.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{category.title}</Badge>
                    <p className="mt-4 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  )
}