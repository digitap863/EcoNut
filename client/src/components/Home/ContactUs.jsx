import React from 'react'
import image from '../../assets/Shared/cocfooter.png'
import { Button, Input } from '@nextui-org/react'

function ContactUs() {
  return (
    <div className='flex gap-5 flex-col items-end bg-gradient-to-br overflow-hidden relative font-raleway my-16 shadow-lg rounded-2xl mx-20 pr-12 py-16 from-[#94f1d884] to-white'>
        <h1 className='text-[#006348] text-5xl font-bold w-[40%] text-right tracking-wider leading-snug'>CONNECT US IF ANY QUERIES</h1>
        <img src={image} className='absolute left-0 top-0 w-[50%]' alt="" />
        <p className='font-semibold text-xl tracking-wider mr-1'>Subscribe to us with your mail id</p>
        <Input placeholder='Type your email' size='lg' className=' mt-3 w-[50%]' color='warning' />
        <Button size='lg' className='bg-[#0F795D] mt-3 text-white font-semibold px-10'>Subscribe</Button>
    </div> 
  )
}

export default ContactUs