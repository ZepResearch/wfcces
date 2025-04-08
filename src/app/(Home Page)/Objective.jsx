"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
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

  const objectives = [
    {
      title: "Facilitating Knowledge Exchange",
      description: "Provide a forum for sharing innovative research, ideas, and best practices related to climate change mitigation, adaptation, and resilience."
    },
    {
      title: "Encouraging Multidisciplinary Collaboration",
      description: "Foster partnerships among stakeholders from academia, industry, government, and civil society to develop holistic approaches to environmental sustainability."
    },
    {
      title: "Driving Policy Development",
      description: "Advocate for evidence-based policies and frameworks to combat climate change and ensure sustainable resource management."
    },
    {
      title: "Promoting Technological Innovation",
      description: "Highlight cutting-edge technologies and solutions that can accelerate the transition to low-carbon economies and enhance environmental conservation."
    },
    {
      title: "Raising Awareness and Advocacy",
      description: "Engage the global community in dialogues to raise awareness of the urgent need for climate action and environmental stewardship."
    },
    {
      title: "Focusing on Equity and Inclusion",
      description: "Ensure that discussions and strategies prioritize social justice, equity, and the needs of vulnerable populations disproportionately affected by climate change."
    },
    {
      title: "Monitoring Progress and Accountability",
      description: "Encourage the adoption of measurable targets and frameworks to track progress in achieving global sustainability goals."
    },
    {
      title: "Supporting the United Nations Sustainable Development Goals (SDGs)",
      description: "Align conference objectives with key SDGs, particularly SDG 13 (Climate Action), SDG 7 (Affordable and Clean Energy), and SDG 15 (Life on Land)."
    }
  ];

  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(155, 155, 155, 0.5);
      border-radius: 20px;
      border: transparent;
    }
  `;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <style jsx global>{scrollbarStyles}</style>
      <div className="grid gap-8 md:grid-cols-3">
        {/* First Column */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-4"
        >
          <h1 className="text-xl tracking-normal text-blue-500 font-bold">
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
The World Forum on Climate Change and Environmental Sustainability aims to serve as a global platform for thought leaders, policymakers, researchers, industry experts, and environmental advocates to address pressing climate challenges and promote actionable solutions for a sustainable future              </p>
              {/* <p className="text-muted-foreground">
                Focused on action, collaboration, and knowledge-sharing, the forum aims to raise awareness, explore sustainable solutions, and foster partnerships for impactful strategies, driving global efforts toward a sustainable and resilient future.
              </p> */}
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
            src="/assets/objective.webp"
            alt="Conference theme illustration"
            width={800}
            height={700}
            className="object-cover rounded-lg"
          />
          <Card className="absolute bottom-4 left-4 right-4 w-1/3">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 text-sm">Powerful </h3>
              <p className="text-xs text-muted-foreground">
                Gain valuable knowledge
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
          {/* <h3 className="font-semibold text-lg mb-2">Conference Objectives</h3> */}
          <div className="h-[600px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200 ease-in-out border-0 bg-gray-50 drop-shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">{objective.title}</h4>
                  <p className="text-sm text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

