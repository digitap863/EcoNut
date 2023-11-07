import React from 'react'
import { ImTwitter } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

function Footer() {
    return (
        <div className='pb-10 lg:pb-20 pt-16 lg:pt-32 flex items-center justify-end text-white bg-[#006348] rounded-side font-raleway'>
            <div className='flex justify-between lg:mr-40 mx-3 lg:mx-0'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='flex flex-col gap-4 lg:gap-8'>
                        <h1 className='font-bold text-xl lg:text-3xl'>QUICK LINKS</h1>
                        <a href="" className='lg:text-xl'>About Us</a>
                        <a href="" className='lg:text-xl'>Products</a>
                        <a href="" className='lg:text-xl'>Community</a>
                        <a href="" className='lg:text-xl'>Contact</a>
                    </div>
                    <div className='flex flex-col gap-5 mt-10  lg:mt-0 lg:w-[50%]'>
                        <h1 className='font-bold text-xl lg:text-3xl'>CONTACT US</h1>
                        <p className='text-lg w-[85%] leading-10 tracking-wider'>Corporate Office, Basaveshwara Nagar, Bengaluru, KarnatakaIndia</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-xl lg:text-3xl'>SOCIAL</h1>
                    <div className='flex gap-8 text-3xl lg:text-5xl'>
                        <BsFacebook />
                        <AiFillInstagram />
                        <ImTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer