import React from 'react'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import Farm from '../components/Community/Farm'
import Infrastructure from '../components/Community/Infrastructure'

function Community() {
  return (
    <div>
        <Navbar/>
        <Farm/>
        <Infrastructure/>
        <Footer/>
    </div>
  )
}

export default Community