import React from 'react'
import image from '../../assets/Shared/cocfooter.png'
import { Button } from '@nextui-org/react'

function ContactUs() {
  return (
    <div className='flex gap-5 flex-col items-end bg-gradient-to-br overflow-hidden relative font-raleway mb-16 lg:mb-16 lg:my-16 shadow-lg rounded-2xl mx-2 lg:mx-20 lg:pr-12 pt-16 pb-12 from-[#94f1d884] to-white'>
        <h1 className='text-[#006348] mt-60 lg:mt-0 text-3xl lg:text-5xl font-bold lg:w-[40%] text-right lg:tracking-wider lg:leading-snug'>CONNECT US IF ANY QUERIES</h1>
        <img src={image} className='absolute left-0 top-0 w-[80%] lg:w-[35%]' alt="" />
        <p className='font-semibold text-lg lg:text-xl tracking-wider mr-1'>Subscribe to us with your mail id</p>
        <input placeholder='Type your email' size='lg' className='bg-white mt-3 w-[95%] mr-2 lg:mr-0 lg:w-[40%] rounded-xl py-4 px-3 shadow-md' />
        <Button size='lg' radius='sm' className='bg-[#0F795D] mt-3 text-white font-semibold px-12 py-7 mr-2 lg:mr-0'>Subscribe</Button>
    </div> 
  )
}

export default ContactUs