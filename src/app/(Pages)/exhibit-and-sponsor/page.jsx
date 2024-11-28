import React from 'react'
import ExhibitionHero from './components/Hero'
import NetworkSection from './components/network-section'
import BoothSteps from './components/booth-steps'
import ValueProposition from './components/value-proposition'
import PricingPackages from './components/pricing-packages'

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
