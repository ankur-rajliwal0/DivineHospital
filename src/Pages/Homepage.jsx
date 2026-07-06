import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import DrivenCare from '../Components/DrivenCare'
import WorldClassFacility from '../Components/WorldClassFacility'
import EminentSpecialist from '../Components/EminentSpecialist'
import OpdTiming from '../Components/OpdTiming'
import PatientStories from '../Components/PatientStories'
import Footer from '../Components/Footer'

function Homepage() {
  return (
    <div>
     
      <Hero/>
      <DrivenCare/>
      <WorldClassFacility/>
      <EminentSpecialist/>
      <OpdTiming/>
      <PatientStories/>
     
    </div>
  )
}

export default Homepage
