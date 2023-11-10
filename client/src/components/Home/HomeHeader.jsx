import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/homeHeader.png'
import bgImage2 from '../../assets/HeaderImages/homeHeader2.png'
import logo from '../../assets/Shared/eco-logo.png'

function HomeHeader() {
  return (
    <div className='h-[100vh] md:h-[130vh] relativ overflow-hidden'>
      <img src={bgImage} className='hidden lg:block absolute z-[-1] rounded-sideBottom w-full' alt="" />
      <img src={bgImage2} className=' absolute lg:hidden z-[-1] w-full' alt="" />
      <img src={logo} className=' absolute lg:w-[7%] z-[-1] w-[25%] left-4 lg:left-16 top-4 lg:top-6' alt="" />
      <Navbar />
      <div className=' flex flex-col justify-center items-center h-[35%]'>
        <h1 className='text-white font-readex font-semibold text-3xl md:text-5xl lg:text-7xl text-center uppercase lg:mb-4'>Igniting change,</h1>
        <h1 className='text-white font-readex font-semibold text-3xl md:text-5xl lg:text-7xl text-center uppercase lg:mb-3'>Empowering lives</h1>
        <p className='text-white  lg:text-xl font-raleway lg:tracking-widest'>Breaking barriers in the agriculture industry</p>
      </div>
    </div>
  )
}

export default HomeHeader 