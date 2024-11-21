"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {/* First Column */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-4"
        >
          <h1 className="text-xl  tracking-normal  text-blue-500 font-bold">
            Conference Objective
          </h1>

          <div className="flex flex-col items-center justify-between h-full pt-2 pb-12">
            <div>
              <h2 className="text-5xl font-bold leading-tight tracking-tighter">
                Climate Action & Sustainable Future
              </h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat, \ praesentium laboriosam adipisci reiciendis laudantium
                deleniti doloremque quo nisi,?
              </p>
              <p className="text-muted-foreground">
                Join global leaders, scientists, and activists in addressing the
                urgent challenges of climate change and exploring innovative
                solutions for a sustainable tomorrow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <Image
            src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731925299/gakro04fi0mwbjvgqesk.avif"
            alt="Conference theme illustration"
            width={800}
            height={700}
            className="object-cover rounded-lg"
          />
          <Card className="absolute bottom-4 left-4 right-4  w-1/3">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-sm">Powerful </h3>
              <p className="text-xs text-muted-foreground">
                Gain valuable knowled
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Third Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Increasing Awareness</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our conference aims to raise global awareness about the critical
                state of our environment and the urgent need for action.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500 "
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore cutting-edge technologies and practices that promote
                environmental sustainability and resilience.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore cutting-edge technologies and practices that promote
                environmental sustainability and resilience.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
