import React from 'react'
import { reviews } from '../../assets/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import leaf from '../../assets/Shared/leaf3.png'
import leafi from '../../assets/illustrartions/leaf.png'

function CustomerReviews() {
    return (
        <div className='flex flex-col items-center font-raleway relative my-20'>
            <img src={leafi} className='absolute -rotate-[70deg] -bottom-[30%] right-[40%] w-[15%]' alt="" />
            <img src={leaf} alt="" className='absolute right-0 top-0 w-[32%]' />
            <h1 className='text-[#006348] font-bold text-4xl mb-10'>CUSTOMER REVIEWS</h1>
            <div className='w-[90%]'>
                <Swiper
                    modules={[Autoplay]}
                    className='flex'
                    spaceBetween={25}
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((elem) => (
                        <SwiperSlide className='w-full pt-20 pb-10  lg:py-20  overs' key={elem.name}>
                            <div key={elem.name} className='shadow-lg hover:-translate-y-3 transition duration-300 border-t-[2px] ease-in-out w-full flex flex-col justify-center py-16 px-7 rounded-2xl lg:rounded-[2rem] relative bg-white'>
                                <h2 className='text-xl mt-5 font-bold mb-2'>{elem.name}</h2>
                                <img src={elem.image} alt="user" className=' lg:w-[25%] absolute lg:left-[15%] -top-[20%] z-10' />
                                <p className='z-10 '>{elem.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CustomerReviews