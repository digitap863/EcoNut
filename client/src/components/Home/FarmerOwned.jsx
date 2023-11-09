import React from 'react'
import { logos } from '../../assets/constants'
import leaf from '../../assets/Shared/leaf1.png'
import coconut from '../../assets/Shared/leaf2.png'
import { Button } from '@nextui-org/react'
import coconuti from '../../assets/illustrartions/coconut.png'
import leafi from '../../assets/illustrartions/leaf.png'

function FarmerOwned() {
    return (
        <div className='flex flex-col relative -mt-[100%] lg:-mt-[2%] overflow-hidden lg:overflow-visible'>
            <img src={leaf} alt="" className='absolute right-0 md:-top-[13%] lg:-top-[35%] z-[-1] w-[65%]' />
            <div className='bg-white flex justify-between relative z-10 lg:mx-60 py-3 lg:py-5  px-5 lg:px-12 rounded-[2rem] lg:rounded-[3rem] shadow-md lg:mt-5 items-center'>
                {
                    logos.map((elem) => (
                        <img src={elem.image} alt="" key={elem.image} className='object-contain w-10 h-10 lg:w-24 lg:h20' />
                    ))
                }
            </div>
            <div className='mx-3 lg:mx-20 mt-24 lg:mt-40 font-raleway relative'>
                <img src={leafi} className='absolute rotate-90 bottom-0 -right-[20%]' alt="" />
                <h2 className='text-[#006348] text-3xl md:text-4xl font-bold font-raleway'>FARMERS OWNED COMPANY</h2>
                <p className='font-[500] lg:text-xl mt-5 lg:w-[60%]'>{`We are an initiative spearheaded by the farmers of Mysore, in collaboration with the Coconut Development Board under the Ministry of Agriculture and Farmers' Welfare (Government of India), dedicated to bringing about transformation in the agriculture sector`}</p>
                <div className='flex flex-col lg:flex-row items-center gap-10'>
                    <img src={coconut} alt="" />
                    <div className='flex flex-col justify-center relative items-center  md:mb-10 lg:mb-32'>
                        <img src={coconuti} className='absolute z-[-1]' alt="" />
                        <p className='text-[#333] text-lg lg:w-[85%] mb-12'>We started out on 1st May 2015 with 1046 active coconut farmers as our shareholders with a strong conviction to better the coconut farming sector by using a sustainable, farmer-driven and farmer centric model. With years of hands-on experience and a rich repository of knowledge gained through learning by doing, farmers and producers possess an innate understanding of their land and crops.</p>
                        <Button className='bg-[#006348] text-white px-10' size='lg' radius='sm'>Learn More</Button>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default FarmerOwned