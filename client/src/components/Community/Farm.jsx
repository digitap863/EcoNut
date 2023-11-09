import React from 'react'
import logo from '../../assets/Shared/eco-logo.png'
import leafi from '../../assets/illustrartions/leaf.png'

function Farm() {
  return (
    <div className='mx-5 mt-36 lg:mt-0 lg:mx-0 lg:ml-40 my-20 lg:mr-20 flex flex-col gap-5 font-readex font-light relative'>
      <img src={leafi} className='absolute rotate-180 -right-[10%] top-[20%] w-[25%] z-[-1]' alt="" />
      <img src={leafi} className='absolute -left-[20%] top-[70%] w-[25%] z-[-1]' alt="" />
      <img src={logo} className=' absolute lg:w-[7%] z-[-1] w-[25%] left-4 lg:-left-[7%] -top-[7%]' alt="" />
      <h1 className='text-[#006348] text-4xl lg:text-5xl font-semibold'>FARM</h1>
      <h3 className='text-[#4A4A4A] font-bold text-2xl'>Our Community</h3>
      <p className='leading-relaxed text-justify'>{`Agriculture being primery occupation of rural people, makes it as predominantly the base of nation's economy. Agriculture and farmers continue to face challenges that have hindered its capacity to spur economic growth. Some important factors are climate change, globalization and unfavourable market conditions. Agriculture has been very slow to evolve compared to other sectors. Due the slow growth it resulted in fragile infrastructure, weak institutions, limited access to technology, marginal productivity of land owners, exploitation and lack of general awareness. In order to address these challenges Econut has adopted many innovative approaches. Startegies are being piloted for promoting competitive business models in agriculture sectors.`}</p>
      <h3 className='text-[#4A4A4A] font-bold text-2xl'>The Farms</h3>
      <p className='leading-relaxed text-justify'>{`Econut major priority has always been in supporting and guiding our members through teaching them about the most suitable farming practice and providing them farm inputs. The company is involved in a lot of farm level activities, ensuring better yields & best returns to the producers. Also, we regularly visit our shareholders to train and make them aware of the best practices.`}</p>
      <h3 className='text-[#4A4A4A] font-bold text-2xl'>Farmer Training Initiative</h3>
      <p className='leading-relaxed text-justify'>{`One of the most successful of all of our training programs is FOCT ( Friends of Coconut Tree) in which we train unemployed youth to climb coconut treeto coconut tree. By this time 400 unemployed youth of the area have been trained to climb coconut trees using coconut climbing machines, which has effectively increased the number of skilled tree climbing personnel and also significantly improved the skill sets, livelihood and income of the trained youth. This new skill has provided steady employment opportunity and better livelihoods in our regions. Some of our other successful training activities are : Bio Pest Control New age farming awareness Intercropping and Income enhancement in Coconut Gardens Neera Training`}</p>
      <h3 className='text-[#4A4A4A] font-bold text-2xl'>Farmer Training Initiative</h3>
      <p className='leading-relaxed text-justify'>{`One of the most successful of all of our training programs is FOCT ( Friends of Coconut Tree) in which we train unemployed youth to climb coconut treeto coconut tree. By this time 400 unemployed youth of the area have been trained to climb coconut trees using coconut climbing machines, which has effectively increased the number of skilled tree climbing personnel and also significantly improved the skill sets, livelihood and income of the trained youth. This new skill has provided steady employment opportunity and better livelihoods in our regions. Some of our other successful training activities are : Bio Pest Control New age farming awareness Intercropping and Income enhancement in Coconut Gardens Neera Training`}</p>
    </div>
  )
}

export default Farm