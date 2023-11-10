import React from 'react'
import Navbar from '../Shared/Navbar'
import logo from '../../assets/Shared/eco-logo.png'
import bgImage from '../../assets/HeaderImages/productsheader.png'
import bgImage2 from '../../assets/HeaderImages/productsheader2.png'

function ProductsHeader() {
  return (
    <div className='h-[130vh] relative z-[1]'>
      <img src={bgImage} className='hidden lg:block absolute z-[-1] rounded-sideBottom w-full' alt="" />
      <img src={logo} className=' absolute lg:w-[7%] z-[-1] w-[25%] left-4 lg:left-16 top-4 lg:top-6' alt="" />
      <img src={bgImage2} className=' absolute lg:hidden z-[-1] w-full' alt="" />
      <Navbar />
      <div className=' flex flex-col text-[#006348] mx-2 lg:mx-0 font-readex justify-center h-[40%] lg:pl-24'>
        <p className='font-semibold text-lg lg:text-2xl mb-2'>Product Portfolio</p>
        <h1 className=' font-semibold  text-4xl lg:text-6xl'>OUR PRODUCTS</h1>
        <h1 className=' font-semibold  text-4xl lg:text-6xl'>DIFFER FROM OTHERS</h1>
      </div>
    </div>
  )
}

export default ProductsHeader