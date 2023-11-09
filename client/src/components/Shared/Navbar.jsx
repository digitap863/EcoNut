/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { Button } from '@nextui-org/react';

function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Community", link: "/community" },
  ];
  let [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <div className='w-full  top-0 left-0 z-30 font-mont'>
      <div className='lg:flex items-center justify-center  py-4 md:px-16 px-7'>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7 z-50'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <div className='flex justify-center'>
          <ul className={`flex flex-col gap-16  lg:flex-row items-center justify-center lg:justify-start lg:pb-0 pb-12 absolute lg:static lg:z-auto left-0 w-full lg:w-auto ${path==='/contact'||path==='/about' || path==='/'?"text-white":'text-[#006348]'} transition-all duration-500 ease-in-out  ${open ? ' top-0 gap-10 text-2xl md:text-4xl h-screen bg-white !text-[#006348] z-[10]' : 'top-[-570px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className={`hover:text-[#EAB600] ${path===link.link?'border-b-[2px] pb-1':''} ${path==='/products'|| path==='/community'?'border-[#006348]':''} font-bold duration-500`}>{link.name}</a>
                </li>))
            }
            <Button className={`${path==='/contact'?"bg-white":'bg-transparent'} ${path==='/'?'border-white text-white':'border-[#006348]'}  border-[2px] rounded-lg py-5 px-8 hover:bg-white hover:text-black font-bold`} onClick={()=>navigate('/contact')}>Contact</Button>
            <div className='flex gap-5 mt-10 text-4xl  lg:hidden'>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaFacebook />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300  transition ease-in-out duration-300'>
                <BiLogoInstagramAlt />
              </span>
              <span className='rounded-full flex items-center justify-center p-1 h-[4rem] w-[4rem] border-[3px] hover:text-orange-700 hover:bg-white border-gray-300 transition ease-in-out duration-300'>
                <FaLinkedinIn />
              </span></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar