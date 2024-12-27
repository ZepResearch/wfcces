"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  MapPin,
  Users,
  Handshake,
  UserPlus,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ConferenceCTASections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const ctaCards = [
    {
      title: "Awards",
      description:
        "Recognizing excellence in climate change and sustainability efforts",
      icon: <Award className="w-10 h-10 mb-4 text-blue-500" />,
      link: "/awards",
    },
    {
      title: "Venue",
      description: "Join us at the Stockholm International Conference Center",
      icon: <MapPin className="w-10 h-10 mb-4 text-blue-500" />,
      link: "/venue",
    },

    {
      title: "Sponsorship",
      description:
        "Partner with us to showcase your commitment to climate action",
      icon: <Handshake className="w-10 h-10 mb-4 text-blue-500" />,
      link: "/sponsorship",
    },
    {
      title: "Committee",
      description: "Meet the experts shaping our climate change conference",
      icon: <Users className="w-10 h-10 mb-4 text-blue-500" />,
      link: "/committee",
    },
    {
      title: "Schedule",
      description: "View the full program of events and sessions.",
      icon: <Calendar className="w-10 h-10 mb-4 text-blue-500" />,
      link: "/schedule",
    },
  ];

  return (
    <>
      <section className="  py-24 bg-white ">
        <div className="container relative  md:px-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-3xl bg-gradient-to-tr from-violet-500 to-orange-300 drop-shadow-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row gap-3 items-center justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4 drop-shadow-md">
                Be Part of the Climate Solution
              </h2>
              <p className="text-xl text-slate-50 max-w-2xl drop-shadow">
                Join leaders, innovators, and changemakers at the forefront of
                climate action and sustainability.
              </p>
              <Link href={'/registration'}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 mt-4"
                >
                Register Now <UserPlus className="ml-2 h-5 w-5" />
              </Button>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image
                src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1714292838/xpfwjplsj81rkrkndvac.png"
                alt="Conference Image"
                height={300}
                width={350}
                className="drop-shadow-xl relative z-10"
              />
            </motion.div>
          </motion.div>
          <DotPattern
            width={30}
            height={30}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
            )}
          />
        </div>
      </section>
      <section ref={ref} className="w-full py-8 md:py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl underline-offset-2 underline decoration-blue-400"
            >
              Conference Highlights
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-xl ">
              Explore key aspects of our Climate Change and Sustainability
              Conference
            </motion.p>
          </motion.div>
          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
>
  {ctaCards.map((card, index) => (
    <motion.div 
      key={index} 
      variants={itemVariants}
      className={`${
        index === ctaCards.length - 1 ? 'sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:col-end-4' : ''
      }`}
    >
      <Card className="h-full bg-slate-50 dark:bg-blue-800 hover:shadow-lg transition-shadow duration-300 border-none">
        <CardContent className="p-6 flex flex-col items-center text-center">
          {card.icon}
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-blue-100 mb-4">
            {card.description}
          </p>
          <Button
            size="sm"
            className="mt-auto bg-blue-400 hover:bg-blue-500/90 text-white inline-flex"
          >
            <Link href={card.link}>
              Learn More
            </Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>
    </>
  );
}
