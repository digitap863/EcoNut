import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import leafc from '../../assets/Shared/leafc.png'

function ContactMain() {
    return (
        <div className='relative font-readex lg:mx-20 my-16'>
        <img src={leafc} alt="" className='absolute md:-top-[10%] lg:-top-[35%]' />
            <div className='flex flex-col px-5 mx-6 md:mx-20 lg:px-0 lg:flex-row justify-center gap-4 lg:gap-10 mt-10 lg:mt-20 relative'>
                <div className='shadow-xl bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10 h-32'>
                    <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
                        <IoIosMail />   
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Mail Us</h3>
                        <p>support@econut.in</p>
                        <p>support@econut.in</p>
                    </div>
                </div>
                <div className='shadow-xl bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10 h-32'>
                    <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
                        <BsTelephoneFill />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Call Us</h3>
                        <p>+91 9088 787 767</p>
                        <p>+91 9088 787 767</p>
                    </div>
                </div>
                <div className='shadow-xl bg-white flex pl-3 lg:pl-6  lg:w-1/3 gap-7 items-center rounded-xl py-4 lg:py-10 h-32'>
                    <div className='bg-[#1A5D1A] text-2xl md:text-3xl lg:text-4xl text-white rounded-full flex items-center justify-center w-12 h-12 md:h-16 md:w-16 lg:w-20 lg:h-20'>
                        <ImLocation />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold md:font-bold lg:font-semibold text-lg md:text-2xl lg:text-lg'>Locate Us</h3>
                        <p>Head Office - #143/C, 15th <br /> Cross Street, T K Layout, <br /> Anikethana Road</p>
                    </div>
                </div>
            </div>
            <div className='bg-white items-center flex flex-col gap-10 relative mx-3 lg:mx-20 mt-10 py-10 shadow-xl rounded-xl'>
                <h1 className='text-[#006348] font-semibold text-2xl md:text-4xl lg:text-5xl'>ASK YOUR QUERIES</h1>
                <div className='flex flex-col lg:flex-row gap-10 w-full justify-center items-center'>
                    <input type="text" className='w-[93%] lg:w-[45%] py-2 pl-5 rounded-lg h-12 border-[1px] border-gray-200 placeholder:font-light' placeholder='Your Name' />
                    <input type="text" className='w-[93%] lg:w-[45%] py-2 pl-5 rounded-lg h-12 border-[1px] border-gray-200 placeholder:font-light' placeholder='Your Email' />
                </div>
                <input type="text" className='w-[93%] py-2 pl-5 rounded-lg h-12 border-[1px] border-gray-200 placeholder:font-light' placeholder='Subject' />
                <textarea className='h-48 w-[93%] py-2 pl-5 rounded-lg border-[1px] border-gray-200 placeholder:font-light' placeholder='Your Message' />
                <button className='bg-[#006348] text-white font-light px-20 py-4 rounded-xl hover:bg-[#52a390] transition duration-300 ease-in-out'>Submit</button>
            </div>
        </div>
    )
}

export default ContactMain