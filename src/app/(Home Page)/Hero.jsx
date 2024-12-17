"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CalculatorIcon, Calendar, LocateIcon, MapPin, MountainSnow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="relative w-full bg-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="relative mb-8">
        {/* <Image src={'https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png'}alt="zep logo  "
          width={400}
          height={400}
          /> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-6xl">
              Join us for the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2 sm:px-4 text-white">
                  World Forum
                </span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400"
                  layoutId="highlight"
                />
              </span>
              <br />
              on Climate Change and Environmental Sustainability
            </h1>
            <MountainSnow className="h-8 w-8 text-blue-200 sm:h-12 sm:w-12" />
          </motion.div>
          <div className="mt-6 font-medium text-lg ">
          <h1><span className="font-bold underline underline-offset-2 decoration-blue-400 inline-flex gap-2"><MapPin className="h-5 w-5 text-blue-700"/> Venue</span>: Kuala Lumpur, Malaysia</h1>
          <h1><span className="font-bold underline underline-offset-2 decoration-blue-400 inline-flex gap-2"><Calendar className="h-5 w-5 text-blue-700"/> Date</span>: May 22nd - 23rd, 2025</h1>
          </div>
        </div>

        {/* Main Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12"
        ><div>
         
          
        </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731911779/tdeykvmx5cg106az0vvy.avif"
              alt="Conference hall with sustainability theme"
              width={1200}
              height={600}
              className="h-[300px] w-full object-cover sm:h-[400px]"
              priority
            />
          </div>

          {/* Stats Card */}
          <Card className="mx-4 relative z-10 -mt-16 border-none bg-white p-4 shadow-lg sm:absolute sm:left-8 sm:top-1/2 sm:mt-20 sm:w-72 sm:p-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-blue-600 italic sm:text-4xl">
                  50+
                </span>
                <span className="text-base text-muted-foreground sm:text-lg italic">
                  Speakers
                </span>
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Join over 50 world-renowned experts and thought leaders in
                climate science, policy, and sustainable technologies.
              </p>
            </div>
          </Card>
          

          {/* Description Card */}
          <Card className="mx-4 mt-4 border-none bg-white p-4 shadow-lg sm:absolute sm:right-8 sm:top-1/2 sm:mt-16 sm:w-96 sm:p-6">
            <p className="text-xs text-muted-foreground sm:text-sm">
              Explore cutting-edge research, innovative solutions, and
              collaborative strategies to address the urgent challenges of
              climate change and promote global sustainability.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-4">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/about-speakers">
                  Our Speakers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Text */}
        <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold sm:text-3xl"
          >
            Shaping a sustainable future
            <br />
            through knowledge and action
          </motion.h2>

          {/* Rotating Text with Center Button */}
          <div className="relative h-32 w-32">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path
                  id="curve"
                  d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                  fill="none"
                />
                <text className="text-[8px] sm:text-xs">
                  <textPath href="#curve" textLength="230">
                    • Climate Action • Sustainability • Innovation •
                    Collaboration •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <Button
              size="sm"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              asChild
            >
              <Link href="/registration">register</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
