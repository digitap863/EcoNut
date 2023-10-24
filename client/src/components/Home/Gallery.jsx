import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { galleryImages } from '../../assets/constants';
import gallerybg from '../../assets/Shared/galleryimg.png'

function Gallery() {
    return (
        <div className='font-raleway flex flex-col items-center relative'>
            <img src={gallerybg} className='absolute' alt="" />
            <h1 className='text-[#006348] font-bold text-5xl mb-10 text-center'>GALLERY</h1>
            <div className='w-[90%] mt-40'>

                <Swiper
                pagination={{
                    dynamicBullets: true,
                  }}
                    modules={[Autoplay,Pagination]}
                    className='flex'
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    centeredSlides
                    slidesPerView={1}
                >
                    {galleryImages.map((elem) => (
                        <SwiperSlide className='w-full overs pb-10' key={elem.name}>
                            <div className='flex justify-center'>
                                <img src={elem.image} alt="" className='w-[60%] rounded-3xl'/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery