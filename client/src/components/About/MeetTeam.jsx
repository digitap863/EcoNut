import React from 'react'
import { team } from '../../assets/constants'
import bg from '../../assets/team/bg.png'

function MeetTeam() {
  return (
    <div className='font-raleway flex flex-col items-center mx-20 relative my-32'>
        <img src={bg} className='absolute opacity-70' alt="" />
        <h1 className='text-[#006348] font-extrabold tracking-wider relative text-6xl'>MEET OUT TEAM</h1>
        <div className='flex flex-wrap justify-center  mt-40 gap-16'>
            {
                team.map((elem)=>(
                    <div className='bg-white relative pb-20 border pt-28 rounded-[3rem] w-[20rem] text-center' key={elem.name}>
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