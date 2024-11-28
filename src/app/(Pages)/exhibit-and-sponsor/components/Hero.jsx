
'use client'
import { motion } from 'framer-motion';
import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function ExhibitionHero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: yOffset,
            behavior: 'smooth'
          });
        }
      };
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white py-16">
      {/* Header */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          EXHIBIT IN FRONT OF THE WORLD&apos;S
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight underline underline-offset-8  decoration-blue-400">
          TOP CLIMATE LEADERS
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden bg-white backdrop-blur-sm p-8 flex items-center justify-center min-h-[400px]">
          <Image src={'https://illustrations.popsy.co/blue/business-analysis.svg'} alt='img' width={350}height={350}/>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">BENEFITS OF EXHIBITING:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 min-w-[24px]">
                <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Network with the world's largest climate change forum – we focus on sustainable solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 min-w-[24px]">
                <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>6,000+ environmental leaders and decision makers</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 min-w-[24px]">
                <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>245+ of the biggest environmental organizations, agencies, and service providers exhibiting</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 min-w-[24px]">
                <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>61% of attendees represent major environmental initiatives</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 min-w-[24px]">
                <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Our attendees manage over $500 million in environmental projects each year</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('package')}
          className='text-lg px-8 py-2 bg-blue-500 rounded-xl'
          >
             

                COMPARE PACKAGES NOW
         
          </motion.button>
            <Button
              asChild
              variant="outline"
              className="border-white text-blue-500 hover:text-white  hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="/contact">
                CONTACT SALES
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">6,000+</p>
            <p className="text-sm md:text-base">Attendees</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">245+</p>
            <p className="text-sm md:text-base">Exhibitors</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">61%</p>
            <p className="text-sm md:text-base">Key Decision Makers</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold">110+</p>
            <p className="text-sm md:text-base">Countries</p>
          </div>
        </div>
      </div>
    </section>
  )
}

