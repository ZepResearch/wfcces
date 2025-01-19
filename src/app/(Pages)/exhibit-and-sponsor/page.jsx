import React from 'react'
import ExhibitionHero from './components/Hero'
import NetworkSection from './components/network-section'
import BoothSteps from './components/booth-steps'
import ValueProposition from './components/value-proposition'
import PricingPackages from './components/pricing-packages'

export const metadata = {
  title: "exhibit & sponsor WFCCES | World Forum on Climate Change and Environmental Sustainability",
  description: "Join WFCCES in Kuala Lumpur (May 22-23, 2025) - A global platform uniting climate scientists, policymakers, and innovators to address environmental challenges. Connect with 50+ world-renowned experts and shape sustainable solutions.",
  keywords: [
    "climate change forum",
    "environmental sustainability",
    "WFCCES",
    "climate science conference",
    "sustainability experts",
    "climate action",
    "Kuala Lumpur climate conference",
    "environmental leadership",
    "sustainability conference 2025",
    "climate change solutions"
  ],
  openGraph: {
    title: "exhibit & sponsor  WFCCES - Global Climate Change & Sustainability Forum",
    description: "Connect with 50+ world-renowned climate experts in Kuala Lumpur. Join leaders, scientists, and innovators in shaping sustainable solutions at WFCCES 2025.",
    type: "website",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "About WFCCES - Global Climate Change & Sustainability Forum 2025",
    description: "Join global environmental leaders in Kuala Lumpur (May 22-23, 2025). Network with 50+ experts, explore sustainable solutions, and drive climate action.",
  },
  alternates: {
    canonical: "https://www.wfcces.com/exhibit-and-sponsor",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Structured data for events
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "World Forum on Climate Change and Environmental Sustainability 2025",
    description: "Global conference bringing together climate scientists, policymakers, and sustainability experts to address environmental challenges and promote sustainable solutions.",
    startDate: "2025-05-22",
    endDate: "2025-05-23",
    location: {
      "@type": "Place",
      name: "Kuala Lumpur",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kuala Lumpur",
        addressCountry: "MY"
      }
    },
    organizer: {
      "@type": "Organization",
      name: "World Forum on Climate Change and Environmental Sustainability",
      alternateName: "WFCCES"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock"
    },
    audience: {
      "@type": "Audience",
      audienceType: "Climate Scientists, Policymakers, Sustainability Advocates, Industry Leaders, NGOs, Students"
    }
  }
};
function page() {
  return (
    <main>
      <ExhibitionHero/>
      <NetworkSection/>
      <BoothSteps/>
      <ValueProposition/>
      <PricingPackages/>
    </main>
  )
}

export default page
