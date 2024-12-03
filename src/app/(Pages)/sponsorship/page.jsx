"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

const sponsorshipPackages = [
  {
    id: 'platinum',
    title: 'Platinum Package',
    price: 1245000, // 15000 USD * 83
    image: 'https://illustrations.popsy.co/yellow/shaking-hands.svg',
    benefits: [
      '1 VIP participating in the conference',
      'Complementary registration for 12 Students and 5 Faculties',
      'Stage honor to the Sponsor Party',
      'Full Page add on the conference proceeding book',
      'Brand carried in all website and promotional activities',
      'Event called by title sponsor',
      'Networking opportunities with different delegates',
      'Media Coverage',
      '2 Feedback video bites featured on YouTube channel of the organizer'
    ]
  },
  {
    id: 'diamond',
    title: 'Diamond Package',
    price: 996000, // 12000 USD * 83
    image: 'https://illustrations.popsy.co/yellow/freelancer.svg',
    benefits: [
      '1 Session Chair participating from the sponsor side',
      'Complementary registration for 10 Students and 3 Faculties',
      'Full Page add on the conference proceeding book',
      'Brand carried in all website and promotional activities',
      'Public announcement recognizing the Sponsor',
      'Networking opportunities with different delegates',
      'Logo used on all website activities and campaigns',
      '5 minutes slot for media Coverage',
      '1 Feedback video featured on the YouTube channel'
    ]
  },
  {
    id: 'gold',
    title: 'Gold Package',
    price: 830000, // 10000 USD * 83
    image: 'https://illustrations.popsy.co/yellow/working-vacation.svg',
    benefits: [
      'Complementary registration for 8 Students and 2 Faculties',
      'Full page add on conference proceedings',
      'Announcement recognition of the sponsor during the valedictory function',
      'Logos used in all promotional materials',
      'One anchor can join from the sponsor side',
      'Networking opportunities with different delegates',
      'A standee of the sponsor side on the registration desk'
    ]
  },
  {
    id: 'silver',
    title: 'Silver Package',
    price: 622500, // 7500 USD * 83
    image: 'https://illustrations.popsy.co/yellow/product-launch.svg',
    benefits: [
      'Complementary registration for 5 Students and 1 Faculty',
      '2 volunteers at the registration desk from the sponsor side',
      'Half page add on Conference proceeding book',
      'Brand carried out in few promotional activities',
      'Networking opportunities with different delegates',
      'Print media coverage'
    ]
  },
]

const SponsorshipCard = ({ package: pkg, onBuyNow }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
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
          </div>
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
      </div>
      <div className="p-6 bg-blue-900/50">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-white">
            {typeof pkg.price === 'number' ? `₹${pkg.price.toLocaleString()} ` : pkg.price}
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-4 py-2 rounded-md font-semibold disabled:opacity-50"
            onClick={() => onBuyNow(pkg)}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : (typeof pkg.price === 'number' ? 'Buy Now' : 'Contact Us')}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function SponsorshipsPage() {
  const router = useRouter()
  const host = process.env.NEXT_PUBLIC_APP_URL

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const paymentCCAvenue = async (pkg) => {
    try {
      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        amount: pkg.price.toString(),
        currency: "INR",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        billing_email: "",
        billing_name: " ",
        billing_address: " ",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        language: "EN",
      }

      // First, get the encrypted order from your backend
      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) {
        throw new Error("Failed to encrypt order data")
      }

      const { encRequest } = await response.json()

      // Create form and submit
      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"

      // Add hidden fields
      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      }

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value 
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment initiation failed:", error)
      alert("Failed to initiate payment. Please try again.")
    }
  }

  const handleBuyNow = (pkg) => {
    if (typeof pkg.price === 'number') {
      paymentCCAvenue(pkg)
    } else {
      // Handle 'Contact Us' case, e.g., redirect to a contact form
      router.push('/contact')
    }
  }

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
            <SponsorshipCard key={pkg.id} package={pkg} onBuyNow={handleBuyNow} />
          ))}
        </div>
      </div>
    </section>
  )
}

