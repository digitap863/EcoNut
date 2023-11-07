import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/homeHeader.png'
import bgImage2 from '../../assets/HeaderImages/homeHeader2.png'
import logo from '../../assets/Shared/eco-logo.png'

function HomeHeader() {
  return (
    <div className='h-[100vh] md:h-[130vh] relative z-10 overflow-hidden'>
      <img src={bgImage} className='hidden lg:block absolute z-[-1] rounded-sideBottom w-full' alt="" />
      <img src={bgImage2} className=' absolute lg:hidden z-[-1] w-full' alt="" />
      <img src={logo} className=' absolute lg:hidden z-[-1] w-[25%] left-4 top-4' alt="" />
      <Navbar />
      <div className=' flex justify-center items-center h-[50%] lg:h-[30%]'>
        <h1 className='text-[#006348] font-bold text-3xl md:text-5xl lg:text-6xl text-center uppercase'>Igniting change, <br /> Empowering lives</h1>
      </div>
    </div>
  )
}

export default HomeHeader 