import { Button, Input } from '@nextui-org/react'
import React from 'react'

function WantToKnowMore() {
  return (
    <div className='font-readex flex flex-col items-center my-16 gap-5 relative'>
        <h1 className='text-[#006348] font-bold text-5xl'>WANT TO KNOW MORE ?</h1>
        <p className='font-raleway text-xl font-semibold'>Subscribe to  is with your mail id</p>
        <Input className='w-[35%] my-4' radius='sm' size='lg' placeholder='Type your email'/>
        <Button className='bg-[#006348] text-white font-raleway px-10' radius='sm' size='lg'>Subscribe</Button>
    </div>
  )
}

export default WantToKnowMore