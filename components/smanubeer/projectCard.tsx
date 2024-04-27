import React from 'react'
import Container from './container'
import Image from 'next/image'
import Electro from "../../public/electro.png"
import Link from 'next/link'

const ProjectCard = () => {
  return (
   <Container>
     <div className="  min-h-full justify-center items-center  h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-2 md:p-4">

            
        <div className="   md:pl-10 space-y-2">
            <div className=" py-2  md:p-4 ">
                <div className=" h-10 md:h-16 rotate-45 relative border-2 border-green-400  w-10  md:w-16 flex justify-center items-center ">
                    <h4 className=' leading-10 tabular-nums  -rotate-45 font-bold text-xl md:text-3xl text-orange-400'>65</h4>
                </div>
            </div>

            <div>

          <div className="flex gap-4 md:gap-10 ml-3 md:ml-5">
          <div className="flex flex-col gap-2 md:gap-4">
                <div className="h-20 w-4 md:w-6 bg-blue-500 rounded-full"></div>
                <div className="h-4 md:h-6 w-4 md:w-6 bg-orange-500 rounded-full"></div>
                <div className="h-4 md:h-6 w-4 md:w-6 bg-green-500 rounded-full"></div>
            </div>

            <div className="">
            <h1 className='text-2xl font-bold text-gray-100 leading-10'>Arkena Coffe Market</h1>
            <p className='text-[15px] font-semibold text-gray-400'>
            The Arkena coffee marketplace is a system built to overhaul the 
            traditional way of sourcing smallholder coffee. It brings producers 
            to the spotlight, who previously were occulted by middlemen, by…</p>
            </div>
          </div>

          <div className="ml-3 md:ml-10 py-10 md:px-10">
                <h6 className=' text-xl text-gray-400 font-medium leading-6'>Project Category</h6>

                <div className="flex mt-6 gap-4 flex-wrap">
                    <div className='px-2 py-1 rounded-full border border-gray-600 text-sm text-gray-400 left-8 '>Android</div>
                    <div className='px-2 py-1 rounded-full border border-gray-600 text-sm text-gray-400 left-8 '>Ios</div>
                    <div className='px-2 py-1 rounded-full border border-gray-600 text-sm text-gray-400 left-8 '>Web App</div>
                    <div className='px-2 py-1 rounded-full border border-gray-600 text-sm text-gray-400 left-8 '>Game</div>
                    <div className='px-2 py-1 rounded-full border border-gray-600 text-sm text-gray-400 left-8 '>Edu-Tech</div>
                   
                </div>
            </div>

            <div className="w-full p-6 px-10 flex justify-end">
        <Link href="/" className=' leading-6 text-lg font-medium text-green-400'>
            Read More
        </Link>
     </div>
          </div>
        
        </div>

        <div className=" w-full ">
            <Image   
            width={300}
            height={200}
             src={Electro} alt='projects portfolio'
             className=' object-contain  w-full'
             />
        </div>
     </div>
     

   </Container>
  )
}

export default ProjectCard