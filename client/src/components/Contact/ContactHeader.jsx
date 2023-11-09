import React from 'react'
import Navbar from '../Shared/Navbar'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { ImTwitter } from 'react-icons/im'
import ellipse from '../../assets/Shared/contactellipse.png'
import logo from '../../assets/Shared/eco-logo.png'

function  ContactHeader() {

  return (
    <div className='h-screen bg-[#006348] font-readex relative overflow-hidden rounded-sideBottom'>
      {/* <img src={logo} className=' absolute lg:hidden  w-[25%] left-4 top-8' alt="" /> */}
      <img src={logo} className=' absolute lg:w-[7%] z-10 w-[25%] left-4 lg:left-16 top- lg:top-6' alt="" />
      <Navbar />
      <img src={ellipse} alt="" className='absolute -top-[40%] w-[30%] -left-20 opacity-40' />
      <img src={ellipse} alt="" className='absolute top-[15%] w-[10%] right-[35%] rotate-180' />
      <img src={ellipse} alt="" className='absolute top-[30%] w-[20%] right-[30%] rotate-180' />
      <img src={ellipse} alt="" className='absolute bottom-0 w-[20%] -right-20 opacity-70' />
      <div className='flex flex-col mt-36 lg:mt-0 lg:flex-row ml-5 md:ml-28 lg:mr-80 justify-between lg:items-center'>
        <div className='text-white flex flex-col gap-2'>
          <p className='text-lg lg:text-2xl font-extralight text-gray-300 mb-3'>Contact Us</p>
          <h1 className='font-semibold text-4xl md:text-6xl relative mb-10 lg:mb-28'>GET IN TOUCH</h1>
          <h1 className='text-[#A3DACB] text-3xl flex items-center gap-7 font-semibold'>Email <a className='text-white text-lg font-light tracking-wider' href="mail:support@econut.in">support@econut.in</a></h1>
          <h1 className='text-[#A3DACB] text-3xl flex items-center gap-7 font-semibold '>Phone <a className='text-white text-lg font-light tracking-wider' href="tel:+919088787767">+91 9088787767</a></h1>
          <div className='text-4xl flex gap-6 mt-4 lg:mt-8'>
            <BsFacebook />
            <AiFillInstagram />
            <ImTwitter />
          </div>
        </div>
        <div className='relative ml-10 md:-ml-10'>
          <iframe className='w-[80%] md:w-[90%] flex justify-center lg:w-[180%] mt-20 h-[15rem] md:h-[30rem] rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.787274493794!2d77.53003064193118!3d12.991233155817762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3da2b2d16bbb%3A0x63ad6fc3882f2d67!2sBasaveshwar%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560079!5e0!3m2!1sen!2sin!4v1698211312368!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader