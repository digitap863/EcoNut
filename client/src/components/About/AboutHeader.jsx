import React from 'react'
import Navbar from '../Shared/Navbar'
import bgImage from '../../assets/HeaderImages/aboutheader.png'
import tick from '../../assets/Shared/tick.png'
import tickg from '../../assets/Shared/tickg.png'
import logo from '../../assets/Shared/eco-logo.png'
import coc from '../../assets/Shared/aboutheadercoc.png'

function AboutHeader() {
  return (
    <div className='h-[130vh] md:h-[100vh] lg:h-[130vh] relative z-[1] bg-gradient-to-b from-[#80A39A] to-white lg:bg-transparent'>
      <img src={bgImage} className='hidden lg:block absolute z-[-1] rounded-sideBottom w-full' alt="" />
      <img src={logo} className=' absolute lg:hidden z-[-1] w-[25%] left-4 top-8' alt="" />
      <img src={coc} className=' absolute lg:hidden z-[-1] w-[80%] right-0 bottom-[32%] md:bottom-[25%]' alt="" />
    <Navbar />
    <div className=' flex flex-col text-[#006348] mx-3 lg:mx-0 mt-32 md:mt-40 lg:mt-0 font-readex justify-center lg:h-[65%] lg:pl-24'>
        <p className='font-semibold text-lglg:text-2xl mb-2'>About Us</p>
      <h1 className=' font-bold text-4xl md:text-5xl lg:text-6xl text-white'>{`IT'S ALL ABOUT COCONUT`}</h1>
        <p className='font-[500] lg:text-2xl mb-5 font-raleway text-white md:w-[70%] lg:w-[60%] mt-8'>Econut Coconut Producer Company Limited (ECPCL) is a Farmer Producer Organisation which is a joint initiative of the farmers of mysore and Coconut Development Board(CDB), Ministry of Agriculture and Farmers welfare (Government of India)</p>
        <p className='font-[500] lg:text-2xl mb-2 font-raleway flex mt-60 md:mt-[30rem] lg:mt-0 lg:w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='hidden lg:block w-[3rem]'/><img src={tickg} alt=""  className='w-[3rem] lg:hidden'/></span> Econut CPC has been very innovative in approach to market the produce of its farmers from the very beginning</p>
        <p className='font-[500] lg:text-2xl mb-2 font-raleway flex  lg:w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='hidden lg:block w-[3rem]'/><img src={tickg} alt=""  className='w-[3rem] lg:hidden'/></span> Econut aspires to make a bond between farmer and consumer which leads to long term dependencies.</p>
        <p className='font-[500] lg:text-2xl mb-2 font-raleway flex  lg:w-[55%] my-2 gap-5'><span><img src={tick} alt=""  className='hidden lg:block w-[3rem]'/><img src={tickg} alt=""  className='w-[3rem] lg:hidden'/></span> Kiosks are run by full time professional who are trained by ECONUT, highest priority is ensured regarding cleaniess & hygiene.</p>

    </div>
  </div>
  )
}

export default AboutHeader  