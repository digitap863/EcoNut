import React from 'react'
import { logos } from '../../assets/constants'
import leaf from '../../assets/Shared/leaf1.png'
import coconut from '../../assets/Shared/leaf2.png'

function FarmerOwned() {
  return (
    <div className='flex flex-col relative -mt-[86%] overflow-hidden lg:overflow-visible'>
        <img src={leaf} alt="" className='absolute right-0 md:-top-[13%] lg:-top-[35%] z-[-1] w-[65%]'/>
            <div className='bg-white flex justify-between lg:mx-60 py-4 lg:px-12 rounded-[2rem] lg:rounded-[3rem] shadow-md lg:mt-5'>
                {
                    logos.map((elem)=>(
                        <img src={elem.image} alt="" key={elem.image} className='object-contain'/>
                    ))
                }
            </div>
            <div className='mx-3 lg:mx-20 mt-24 lg:mt-40 font-raleway'>
                <h2 className='text-[#006348] text-3xl md:text-4xl font-bold font-raleway'>FARMERS OWNED COMPANY</h2>
                <p className='font-[500] lg:text-xl mt-5 lg:w-[60%]'>At Econut, we believe that the true empowerment of farmers happens only if they are actively involved in all stages of agriculture, from cultivation to marketing</p>
                <div className='flex flex-col lg:flex-row items-center gap-10'>
                <img src={coconut} alt="" />
                <p className='text-[#333] lg:w-[35%] md:mb-10 lg:mb-40'>Econut Coconut Producer Company Limited (ECPCL) is a Farmer Producer Organisation which is a joint initiative of the farmers of mysore and Coconut Development Board(CDB), Ministry of Agriculture and Farmers welfare (Government of India)</p>
                </div>
            </div>
    </div>
  )
}

export default FarmerOwned