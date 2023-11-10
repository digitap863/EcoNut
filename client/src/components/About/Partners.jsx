import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import leaf from '../../assets/Shared/leaf8.png'
import { logos } from '../../assets/constants';


function Partners() {
    return (
        <div className='relative flex flex-col items-center'>
            <img src={leaf} className='absolute z-[-1] -top-[180%] lg:-top-[110%] right-0' alt=""/>
            <h1 className='text-[#006348] font-bold text-4xl lg:text-5xl mb-10 lg:mb-20 relative'>PARTNERS</h1>
            <div className='flex justify-center w-[90%] lg:w-[40%]'> 
            <Swiper
                modules={[Autoplay]}
                className=''
                spaceBetween={25}
                autoplay={{ delay: 1500 }}
                slidesPerView={2}
                loop={true}
            >
                {
                    logos.map((elem) => (
                       
                        <SwiperSlide className='bg-transparent' key={elem.name}>
                        <div key={elem.image} className='flex justify-center lg:py-5 border rounded-[2rem] h-[6rem] md:h-[8rem] lg:h-[10rem] border-slate-200 bg-white'>
                            <img src={elem.image} alt="" className='w-[50%] object-contain'/>
                        </div>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}

export default Partners