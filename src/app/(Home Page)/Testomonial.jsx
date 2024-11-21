"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sample data for climate conference reviews
const reviews = [
  {
    name: "Dr. Sarah Chen",
    location: "Singapore",
    date: "Jan 15",
    rating: 5,
    text: "Exceptional conference on climate innovation. The discussions on renewable energy solutions were particularly enlightening. Great networking opportunities with leading sustainability experts.",
  },
  {
    name: "Prof. Michael Torres",
    location: "Barcelona",
    date: "Jan 14",
    rating: 4,
    text: "Valuable insights on sustainable urban planning. The workshop sessions were interactive and practical. Would have appreciated more time for Q&A.",
  },
  {
    name: "Emma Thompson",
    location: "London",
    date: "Jan 12",
    rating: 5,
    text: "Brilliant organization of the climate summit. The diversity of speakers and topics covered was impressive. The virtual networking platform worked seamlessly.",
  },
  {
    name: "Dr. Ahmed Hassan",
    location: "Dubai",
    date: "Jan 10",
    rating: 4,
    text: "Informative sessions on renewable energy transition. The case studies presented were relevant and actionable. Looking forward to next year's conference.",
  },
  {
    name: "Lisa Wagner",
    location: "Berlin",
    date: "Jan 8",
    rating: 5,
    text: "Outstanding presentation on carbon capture technologies. The conference exceeded my expectations in terms of content quality and expert engagement.",
  },
];

export default function Testomonial() {
  const [scrollY, setScrollY] = useState(0);

  // Animate scroll position for infinite scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => (prev + 1) % (reviews.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full bg-white py-12">
      <div className="mx-auto max-w-7xl ">
        <div className=" pb-12 ml-4">
          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl underline-offset-2 underline decoration-blue-400">
            Review and ratings
          </motion.h2>
          <motion.p className="mt-4 text-xl ">
            Explore key aspects of our Climate Change and Sustainability
            Conference
          </motion.p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side - Summary Card */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">
                Reviews and ratings
              </CardTitle>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-6xl font-bold">4.8</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${
                        star <= 4.8
                          ? "fill-yellow-300 text-yellow-300"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">Based on 2349 ratings</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Content Quality</span>
                  <span className="text-sm text-muted-foreground">4.9</span>
                </div>
                <Progress value={98} className="h-2  " />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Organization</span>
                  <span className="text-sm text-muted-foreground">4.7</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Networking</span>
                  <span className="text-sm text-muted-foreground">4.6</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Right side - Scrolling Reviews */}
          <div className="relative overflow-hidden h-[600px]">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10" />
            <motion.div
              animate={{ y: -scrollY }}
              transition={{ type: "tween", ease: "linear" }}
              className="space-y-4"
            >
              {[...reviews, ...reviews].map((review, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-shadow hover:border-spacing-2 hover:border-blue-400/50"
                >
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "fill-yellow-300 text-yellow-300"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
