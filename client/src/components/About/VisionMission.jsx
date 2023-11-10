import React from 'react'
import { aboutcontq } from '../../assets/constants'
import leaf from '../../assets/Shared/leaf7.png'
import leafi from '../../assets/illustrartions/leaf.png'



function VisionMission() {
  return (
    <div className='font-raleway flex flex-col lg:flex-row mx-2 md:mx-32 lg:mx-20 gap-16 mt-20 lg:mt-40 mb-20 justify-center relative'>
      <img src={leafi} className='absolute rotate-90 -left-[20%] -top-[50%] w-[35%]' alt="" />
      <img src={leafi} className='absolute  -right-[10%] -bottom-[50%] w-[25%]' alt="" />
      <img src={leaf} className='absolute top-[15%] lg:-top-[15%] -right-[10%]' alt="" />
      {aboutcontq.map((elem) => (
        <div key={elem.title} className='relative shadow-xl bg-white lg:w-[25%] px-2 md:px-5 pb-12 pt-20 text-center rounded-3xl hover:-translate-y-3 duration-300'>
          <img src={elem.img} alt="" className='absolute -top-[13%] md:-top-[20%] left-[35%]  lg:w-[45%] md:left-[40%] lg:left-[30%]' />
          <h1 className='font-bold text-3xl mb-4'>{elem.title}</h1>
          <p className='tracking-wid leading-relaxed text-gray-500'>{elem.content}</p>
        </div>
      ))}
    </div>
  )
}

export default VisionMission