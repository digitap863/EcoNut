import React from 'react'
import { team } from '../../assets/constants'
import bg from '../../assets/team/bg.png'
import teamimg from '../../assets/Shared/team.png'

function MeetTeam() {
  return (
    <div className='font-raleway flex flex-col items-center lg:mx-20 relative lg:mt-32 mb-20'>
        <img src={bg} className='hidden lg:block absolute -top-[7%]' alt="" />
        <h1 className='text-[#006348] font-extrabold tracking-wider relative text-3xl lg:text-6xl'>MEET OUR TEAM</h1>
        <img src={teamimg} alt="" className='w-full relative z-10 mt-10 lg:hidden' />
        <div className=' flex-wrap justify-center  mt-40 gap-16 hidden lg:flex'>
            {
                team.map((elem)=>(
                    <div className='bg-white relative pb-20 border pt-28 rounded-[3rem] lg:w-[20rem] text-center' key={elem.name}>
                        <img src={elem.img} className='absolute -top-[20%] left-[30%]' alt="" />
                            <h1 className='font-bold text-2xl'>{elem.name}</h1>
                            <p>{elem.role}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MeetTeam