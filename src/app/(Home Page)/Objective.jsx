"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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

          <div className="flex flex-col items-center justify-start h-full pt-2 pb-12">
            <div>
              <h2 className="text-5xl font-bold leading-tight tracking-tighter">
                Climate Action & Sustainable Future
              </h2>
            </div>
            <div className="text-justify mt-8">
              <p>
              The World Forum on Climate Change and Environmental Sustainability brings together global leaders, scientists, activists, and innovators to address urgent climate challenges. 
              </p>
              <p className="text-muted-foreground">
                Focused on action, collaboration, and knowledge-sharing, the forum aims to raise awareness, explore sustainable solutions, and foster partnerships for impactful strategies, driving global efforts toward a sustainable and resilient future.

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
          className="space-y-12"
        >
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2"> Raise Global Awareness</h3>
              <p className="text-sm text-muted-foreground mb-4">
              Shed light on the environments critical condition, emphasizing the urgency for immediate and impactful climate action.

              </p>
              {/* <Link href={'/about-conference'}>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500 "
                >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
              </Link> */}
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Explore Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground mb-4">
              Highlight advanced technologies, research, and practices promoting environmental resilience, sustainability, and global eco-friendly development.

              </p>
              {/* <Link href={'/about-conference'}>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
              </Link> */}
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow-md  transition-all duration-200 ease-in-out">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Foster Collaboration</h3>
              <p className="text-sm text-muted-foreground mb-4">
              Encourage partnerships among policymakers, researchers, and organizations to develop innovative, impactful strategies for long-term sustainability.
              </p>
              {/* <Link href={'/about-conference'}>
              <Button
                variant="outline"
                size="sm"
                className="border-spacing-1 border-blue-500"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
              </Button>
              </Link> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
