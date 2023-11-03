import React from 'react'
import { aboutcontq } from '../../assets/constants'
import leaf from '../../assets/Shared/leaf7.png'



function VisionMission() {
  return (
    <div className='font-raleway flex mx-20 gap-16 mt-40 mb-20 justify-center relative'>
        <img src={leaf} className='absolute -top-[15%]' alt="" />
        {aboutcontq.map((elem)=>(
            <div key={elem.title} className='relative border bg-white w-[25%] px-5 pb-12 pt-20 text-center rounded-3xl hover:-translate-y-3 duration-300'>
                <img src={elem.img} alt="" className='absolute -top-[20%] w-[45%] left-[30%]'/>
            <h1 className='font-bold text-3xl mb-4'>{elem.title}</h1>
            <p className='tracking-wid leading-relaxed text-gray-500'>{elem.content}</p>
        </div>
        ))}
    </div>
  )
}

export default VisionMission