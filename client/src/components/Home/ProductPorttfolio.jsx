import React, { useEffect, useRef, useState } from 'react'
import { portfolio } from '../../assets/constants'
import { Button } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import leafi from '../../assets/illustrartions/leaf.png'
import bgImage from '../../assets/portfolio/bannerbg.png'
import leaf from '../../assets/Shared/leaf4.png'

function ProductPorttfolio() {
    const [counting, setCounting] = useState(false);
    const observerRef = useRef();
    const [counts, setCounts] = useState([0, 0, 0, 0]);

    const data = [
        { label: 'Farmer/Shareholders', count: 1507 },
        { label: 'Rural Youth Employed', count: 50 },
        { label: 'IT Parks/ Apartments', count: 17 },
        { label: 'Partners', count: 8 },
    ];

    const handleIntersection = (entries) => {
  
        if (entries[0].isIntersecting) {
            setCounting(true);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust the threshold as needed
        });
        observer.observe(observerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        if (counting) {
          const countdownTimers = data.map((item, index) => {
            let count = 0;
            const increment = item.count > 50 ? 45 : 1;
      
            const timer = setInterval(() => {
              if (count < item.count) {
                count += increment;
                if (count > item.count) {
                  count = item.count; // Ensure it doesn't overshoot the final value
                }
                setCounts((prevCounts) => {
                  const newCounts = [...prevCounts];
                  newCounts[index] = count;
                  return newCounts;
                });
              } else {
                clearInterval(timer);
              }
            },50); // Adjust the interval as needed
      
            return timer;
          });
      
          return () => {
            countdownTimers.forEach((timer) => clearInterval(timer));
          };
        }
      }, [counting]);
      

    return (
        <div className='bg-[#14604f32] mt-10 lg:mt-0 mb-10 lg:mb-20 relative'>
            <img src={leafi} className='absolute rotate-90 right-[0%] bottom-0' alt="" />
            <img src={leaf} alt="" className='absolute w-[30%] lg:w-auto' />
            <div ref={observerRef} className='bg-[#009970]  text-white flex relative px-2 lg:px-0 justify-center py-2 md:py-5 lg:py-8 md:gap-20 lg:gap-36 mb-20' style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'repeat' }}>
                {data.map((item, index) => (
                    <div key={index} className='text-center'>
                        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>{counts[index]}</h2>
                        <p className='text-green-100 text-tiny lg:text-base font-raleway'>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#006348] font-semibold text-3xl relative lg:text-5xl mb-10 text-center font-readex'>PRODUCT PORTFOLIO</h1>
                <div className='grid-cols-3 gap-x-10 mx-24 font-raleway hidden lg:grid'>
                    {
                        portfolio.map((elem) => (
                            <div key={elem.title} className='bg-white relative rounded-3xl shadow-md flex flex-col items-center pt-8 pb-12 px-5'>
                                <img src={elem.image} alt="" className='w-[90%] mb-5' />
                                <div className='pl-6'>
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
                                    <div className='pl-5'>
                                        <h2 className='text-[#4A4A4A] text-4xl text-left w-full font-bold'>{elem.title}</h2>
                                        <p className='w-[90%] leading-relaxed mt-5'>{elem.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Button size='lg' radius='sm' className='bg-[#006348] text-white font-raleway my-5 lg:mt-16 py-7 px-12 text-lg font-semibold'>View More</Button>
            </div>
        </div>
    )
}

export default ProductPorttfolio