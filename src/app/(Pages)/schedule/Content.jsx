"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { addDays } from "date-fns"
import Image from "next/image"

const scheduleData = [
  {
    date: "May 22 | Day 1",
    imageUrl1: "/schedule/d1p1.jpg", // Path to your first image
    imageUrl2: "/schedule/d1p2.jpg" // Path to your second image
  },
  {
    date: "May 23 | Day 2",
    imageUrl1: "/schedule/d2p1.jpg", // Path to your first image
    imageUrl2: "/schedule/d2p2.jpg", 
  }
]

export default function ConferenceSchedule() {
  const startDate = new Date(2025, 4, 22) // May 22, 2025
  const [selectedDates, setSelectedDates] = useState([
    startDate,
    addDays(startDate, 1),
  ])

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            World Forum on Climate Change and Environmental Sustainability
          </h1>
          <h2 className="text-muted-foreground">
            Join us May 22nd-23rd, 2025 in Kuala Lumpur, Malaysia for two days of cutting-edge insights and networking.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>May 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="multiple"
                selected={selectedDates}
                onSelect={setSelectedDates}
                month={startDate}
                className="w-full"
                classNames={{
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 mr-0.5",
                  day_today: "bg-orange-100 text-orange-900",
                }}
              />
            </CardContent>
          </Card>

          <ScrollArea className="h-[600px]">
            <div className="space-y-8">
              {scheduleData.map((day, index) => (
                <Card key={index} className="border-primary/50">
                  <CardHeader>
                    <CardTitle>{day.date}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full h-auto">
                      <Image 
                        src={day.imageUrl1}
                        alt={`${day.date} Schedule`}
                        width={800}
                        height={1000}
                        className="w-full h-auto rounded-lg"
                      />
                       <Image 
                        src={day.imageUrl2}
                        alt={`${day.date} Schedule`}
                        width={800}
                        height={1000}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}