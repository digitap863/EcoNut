import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/productsheader.png'

function ProductsHeader() {
  return (
    <div className='h-[130vh] relative rounded-sideBottom z-[1]' style={{ backgroundImage: `url(${bgImage})`,backgroundSize:'cover'}}>
    <Navbar />
    <div className=' flex flex-col text-[#006348]  font-readex justify-center h-[40%] pl-24'>
        <p className='font-semibold text-2xl mb-2'>Product Portfolio</p>
      <h1 className=' font-bold text-6xl'>OUR PRODUCTS <br /> DIFFER FROM OTHERS</h1>
    </div>
  </div>
  )
}

export default ProductsHeader