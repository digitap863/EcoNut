import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/homeHeader.png'

function HomeHeader() {
  return (
    <div className='h-[130vh] bg-red-500 relative rounded-sideBottom' style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'repeat' }}>
      <Navbar />
      <div className=' flex justify-center items-center h-[30%]'>
        <h1 className='text-[#006348] font-bold text-6xl text-center'>REVOLUTIONIZING <br /> RURAL EMPOWERMENT</h1>
      </div>
    </div>
  )
}

export default HomeHeader