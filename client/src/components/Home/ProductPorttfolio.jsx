import React from 'react'
import { portfolio } from '../../assets/constants'
import { Button } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import bgImage from '../../assets/portfolio/bannerbg.png'
import leaf from '../../assets/Shared/leaf4.png'

function ProductPorttfolio() {
    return (
        <div className='bg-gradient-to-b from-slate-200 to-white mb-10 lg:mb-20 relative'>
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-auto'/>
            <div className='bg-[#009970]  text-white flex relative px-2 lg:px-0 justify-center py-2 md:py-5 lg:py-8 md:gap-20 lg:gap-36 mb-20'  style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'repeat' }}>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>1507</h2>
                    <p className='text-green-100 text-tiny lg:text-base font-raleway'>Farmer/Shareholders</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>50</h2>
                    <p className='text-green-100 text-tiny lg:text-base font-raleway'>Rural Youth Employed</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>17</h2>
                    <p className='text-green-100 text-tiny lg:text-base font-raleway'>IT Parks/ Apartments</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>8</h2>
                    <p className='text-green-100 text-tiny lg:text-base font-raleway'>Partners</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#006348] font-semibold text-3xl relative lg:text-5xl mb-10 text-center font-readex'>PRODUCT PORTFOLIO</h1>
                <div className='grid-cols-3 gap-x-10 mx-24 font-raleway hidden lg:grid'>
                    {
                        portfolio.map((elem) => (
                            <div key={elem.title} className='bg-white relative rounded-3xl shadow-md flex flex-col items-center pt-8 pb-12 px-5'>
                                <img src={elem.image} alt="" className='w-[90%] mb-5' />
                                <div>
                                    <h2 className='text-[#4A4A4A] text-4xl text-left w-full font-bold'>{elem.title}</h2>
                                    <p className='w-[90%] leading-relaxed mt-5'>{elem.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[90%] lg:hidden'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className='flex'
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    centeredSlides
                    slidesPerView={1}
                >
                    {portfolio.map((elem) => (
                        <SwiperSlide className='w-full overs pb-10' key={elem.name}>
                             <div key={elem.title} className='bg-white relative rounded-3xl shadow-md flex flex-col items-center pt-8 pb-12 px-5'>
                                <img src={elem.image} alt="" className='w-[90%] mb-5' />
                                <div>
                                    <h2 className='text-[#4A4A4A] text-4xl text-left w-full font-bold'>{elem.title}</h2>
                                    <p className='w-[90%] leading-relaxed mt-5'>{elem.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
                <Button size='lg' className='bg-[#006348] text-white font-raleway mt-5 lg:mt-16 px-10 text-lg font-semibold'>View More</Button>
            </div>
        </div>
    )
}

export default ProductPorttfolio