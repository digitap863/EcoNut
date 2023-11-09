import { Button, Input } from '@nextui-org/react'
import React from 'react'
import leafi from '../../assets/illustrartions/leaf.png'

function WantToKnowMore() {
  return (
    <div className='font-readex flex flex-col items-center my-16 gap-5 relative'>
      <img src={leafi} className='absolute -rotate-90 z-[-2] left-[10%] -top-[10%] w-[25%]' alt="" />
        <h1 className='text-[#006348] font-bold text-3xl w-[60%] text-center lg:w-auto lg:text-left md:text-4xl lg:text-5xl'>WANT TO KNOW MORE ?</h1>
        <p className='font-raleway text-lg lg:text-xl font-semibold'>Subscribe to  us with your mail id</p>
        <input className='w-[85%] lg:w-[35%] my-4 py-4 px-5 bg-white border-gray-300 border rounded-lg'  placeholder='Type your email'/>
        <Button className='bg-[#006348] text-white font-semibold font-raleway px-10' radius='sm' size='lg'>Subscribe</Button>
    </div>
  )
}

export default WantToKnowMore