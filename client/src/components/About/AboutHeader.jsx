import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/aboutheader.png'
import tick from '../../assets/Shared/tick.png'

function AboutHeader() {
  return (
    <div className='h-[130vh] relative rounded-sideBottom z-[1]' style={{ backgroundImage: `url(${bgImage})`,backgroundSize:'cover'}}>
    <Navbar />
    <div className=' flex flex-col text-[#006348]  font-readex justify-center h-[65%] pl-24'>
        <p className='font-semibold text-2xl mb-2'>About Us</p>
      <h1 className=' font-bold text-6xl text-white'>{`IT'S ALL ABOUT COCONUT`}</h1>
        <p className='font-[500] text-2xl mb-5 font-raleway text-white w-[60%] mt-8'>Econut Coconut Producer Company Limited (ECPCL) is a Farmer Producer Organisation which is a joint initiative of the farmers of mysore and Coconut Development Board(CDB), Ministry of Agriculture and Farmers welfare (Government of India)</p>
        <p className='font-[500] text-2xl mb-2 font-raleway flex w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='w-[3rem]'/></span> Econut CPC has been very innovative in approach to market the produce of its farmers from the very beginning</p>
        <p className='font-[500] text-2xl mb-2 font-raleway flex w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='w-[3rem]'/></span> Econut aspires to make a bond between farmer and consumer which leads to long term dependencies.</p>
        <p className='font-[500] text-2xl mb-2 font-raleway flex w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='w-[3rem]'/></span> Kiosks are run by full time professional who are trained by ECONUT, highest priority is ensured regarding cleaniess & hygiene.</p>

    </div>
  </div>
  )
}

export default AboutHeader