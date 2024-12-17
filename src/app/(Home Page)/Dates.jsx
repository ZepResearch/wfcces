"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Zap, Users } from "lucide-react";

const timeline = [
  {
    name: "Early bird registration deadline",
    description:
      "Submit your research papers on climate change mitigation and adaptation strategies.",
    date: "December 15, 2024",
    icon: Calendar,
  },
  {
    name: "Abstract submission deadline",
    description:
      "Register using our paperless system and receive a virtual conference kit.",
    date: "January 10, 2025",
    icon: Clock,
  },
  {
    name: "Full paper submission deadline",
    description:
      "Selected papers will be featured in our special Climate Innovation Showcase.",
    date: "February 1, 2025",
    icon: Zap,
  },
  {
    name: "Registration deadline",
    description:
      "Join us for three days of insights on climate action and sustainable development.",
    date: "February 10, 2025",
    icon: Users,
  },
];

export default function VerticalTimeline() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 className="text-3xl text-center pb-12 font-bold tracking-tighter sm:text-3xl md:text-4xl underline-offset-4 underline decoration-blue-400">
          Conference Dates
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gray-200" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-8 flex flex-col md:flex-row"
            >
              <div
                className={`flex items-center mb-2 md:mb-0 w-full ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div
                  className={`pl-16 md:pl-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                      <time className="text-sm font-medium text-primary mt-2 block">
                        {item.date}
                      </time>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
