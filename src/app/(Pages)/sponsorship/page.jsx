"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import Image from "next/image"

const sponsorshipPackages = [
  {
    id: 'raffle',
    title: 'Raffle Sponsorship',
    remaining: 2,
    price: 19999,
    description: 'This is a standalone sponsorship with no booth included! Reach out to support to purchase a booth add-on at a discount.',
    image: 'https://illustrations.popsy.co/yellow/shaking-hands.svg',
    benefits: [
     'Exclusive branding during lunch hours',
      'Custom branded lunch area',
      'Recognition in event schedule',
      'Six (6) Company Tickets included',
      'Social media promotion'
    ],
    disclaimer: 'These tickets shall be valid for the Event in this agreement only and shall not be transferable to another iStack event.'
  },
  {
    id: 'lunch',
    title: 'Lunch Sponsorship',
    remaining: 1,
    price: 24999,
    description: 'Exclusive lunch sponsorship opportunity for maximum brand visibility during the event.',
    image: 'https://illustrations.popsy.co/yellow/freelancer.svg',
    benefits: [
      'Exclusive branding during lunch hours',
      'Custom branded lunch area',
      'Recognition in event schedule',
      'Six (6) Company Tickets included',
      'Social media promotion'
    ],
    disclaimer: 'These tickets shall be valid for the Event in this agreement only and shall not be transferable to another iStack event.'

  },
  {
    id: 'pro',
    title: 'Pro Sponsorship',
    remaining: 1,
    price: 24999,
    description: 'Exclusive lunch sponsorship opportunity for maximum brand visibility during the event.',
    image: 'https://illustrations.popsy.co/yellow/working-vacation.svg',
    benefits: [
      'Exclusive branding during lunch hours',
      'Custom branded lunch area',
      'Recognition in event schedule',
      'Six (6) Company Tickets included',
      'Social media promotion'
    ],
    disclaimer: 'These tickets shall be valid for the Event in this agreement only and shall not be transferable to another iStack event.'

  },
]

const SponsorshipCard = ({ package: pkg }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden bg-blue-950 border border-blue-800 rounded-lg flex flex-col justify-between"
  >
    <div className="p-0">
      <div className="relative justify-center mx-auto flex bg-white">
        <Image
          src={pkg.image}
          alt={pkg.title}
          height={300}
          width={300}
          
          className="object-fit"
        />
      </div>
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
          <span className="bg-blue-900 text-blue-100 px-3 py-1 rounded-full text-sm">
            {pkg.remaining} remaining
          </span>
        </div>
        <p className="text-blue-200 text-sm">{pkg.description}</p>
      </div>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {pkg.benefits.map((benefit, index) => (
          <li key={index} className="flex gap-3 text-blue-100">
            <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
      {pkg.disclaimer && (
        <p className="mt-4 text-xs text-blue-300 italic">
          {pkg.disclaimer}
        </p>
      )}
    </div>
    <div className="p-6 bg-blue-900/50">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-white">
          ${pkg.price.toLocaleString()}
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-4 py-2 rounded-md font-semibold">
         Buy Now
        </button>
      </div>
    </div>
  </motion.div>
)

export default function SponsorshipsPage() {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sponsorship Opportunities
          </h1>
          <p className="text-xl text-blue-200">
            Maximize your impact at the Climate Forum with our exclusive sponsorship packages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipPackages.map((pkg) => (
            <SponsorshipCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

