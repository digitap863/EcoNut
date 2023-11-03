import React from 'react'
import Footer from '../components/Shared/Footer'
import AboutHeader from '../components/About/AboutHeader'
import WantToKnowMore from '../components/Products/WantToKnowMore'
import VisionMission from '../components/About/VisionMission'
import MeetTeam from '../components/About/MeetTeam'
import Partners from '../components/About/Partners'

function About() {
  return (
    <div>
        <AboutHeader/>
        <VisionMission/>
        <MeetTeam/>
        <Partners/>
        <WantToKnowMore/>
        <Footer/>
    </div>
  )
}

export default About