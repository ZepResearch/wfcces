'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import PocketBase from 'pocketbase'

const categories = ["Guest Speaker", "Keynote Speaker", "Conference Chair", "Conference Co-Chair", "Session Chair"]

export default function SpeakersPage() {
  const [speakersByCategory, setSpeakersByCategory] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const pb = new PocketBase('https://wfcces.pockethost.io')
        const records = await pb.collection('speakers').getFullList({
          sort: 'created',
        })

        // Group speakers by category
        const grouped = records.reduce((acc, speaker) => {
          const category = speaker.category
          if (!acc[category]) {
            acc[category] = []
          }
          acc[category].push({
            id: speaker.id,
            name: speaker.name,
            role: speaker.role,
            bio: speaker.bio,
            image: speaker.image ? pb.getFileUrl(speaker, speaker.image) : '/placeholder.svg?height=100&width=100'
          })
          return acc
        }, {})

        setSpeakersByCategory(grouped)
      } catch (error) {
        console.error('Error fetching speakers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-xl">Loading speakers...</p>
      </div>
    )
  }

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

        {categories.map((category, index) => (
          speakersByCategory[category] && speakersByCategory[category].length > 0 && (
            <motion.section 
              key={category}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {speakersByCategory[category].map((speaker) => (
                  <Card key={speaker.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={speaker.image} alt={speaker.name} />
                        <AvatarFallback>{speaker.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-blue-700">{speaker.name}</CardTitle>
                        <CardDescription>{speaker.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{category}</Badge>
                      <p className="mt-4 text-gray-600">
                        {speaker.bio || 'No biography available.'}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          )
        ))}
      </main>
    </div>
  )
}