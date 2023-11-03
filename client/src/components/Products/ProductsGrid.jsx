import React from 'react'
import { portfolioMain } from '../../assets/constants'
import leaf from '../../assets/Shared/leaf5.png'
import leaf2 from '../../assets/Shared/leaf6.png'

function ProductsGrid() {
    return (
        <div className='relative'>
            <img src={leaf} alt="" className='absolute w-[50%] -top-[15%]'/>
            <img src={leaf2} alt="" className='absolute w-[75%] top-[50%] left-[10%]'/>
            <div className='grid grid-cols-3 font-raleway mx-20 gap-10 my-20'>
                {
                    portfolioMain.map((elem) => (
                        <div key={elem.title} className='bg-white relative rounded-3xl border  shadow-md flex flex-col items-center pt-8 pb-8 pl-8'>
                            <img src={elem.image} alt="" className='w-[85%] mb-5' />
                            <div>
                                <h2 className='text-[#4A4A4A] text-4xl text-left w-full font-bold'>{elem.title}</h2>
                                <p className='w-[80%] leading-relaxed mt-5'>{elem.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsGrid