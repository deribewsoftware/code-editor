import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import { Button } from '../ui/button'
import { BsImage } from "react-icons/bs";
import { FaFileImage } from "react-icons/fa";
import CModal from '../modal';
import CustomModal from './customModal';
import ImageCertificate from './imageCertificate';
import PdfReader from './pdfReader';


const ProjectDetailClient = () => {
  return (<div className='flex flex-col gap-10 w-full md:w-11/12 lg:w-10/12 xl:w-8/12   p-2'>
        <h1 className='text-2xl font-semibold leading-6 text-gray-300'>Arkena Coffe Market</h1>

        <div className="relative p-2"><Carousel className="w-full ">
      <CarouselContent className='w-full '>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='w-fulloverflow-hidden relative  h-80'>
           
          <Image fill src={`https://picsum.photos/600/800?random=${index+1}`} alt='imageof projects' />
          
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className=' z-10  border-2 border-green-400 hover:bg-green-400 hover:text-white text-green-400 bg-transparent' />
      <CarouselNext className=' z-10 border-2 border-green-400 hover:bg-green-400 hover:text-white text-green-400 bg-transparent' />
    </Carousel></div>



<div className=" border-x-2 border-gray-700   p-4 flex  justify-center">
    <div className="  space-y-16">
        <div className="space-y-2">
            
            <p className=' text-wrap text-gray-400 leading-5 text-base'>
Our recent project involved providing advanced air conditioning (AC) solutions for a sprawling commercial complex. The project aimed to address diverse cooling requirements while minimizing energy consumption and operational costs.</p>
        </div>


        <div className=" space-y-2">
            <h2 className='text-lg text-green-400 font-semibold  leading-6'>⚠️ Challenges Faced:</h2>
            <p className=' text-wrap text-gray-400 leading-5 text-base'>
Our recent project involved providing advanced air conditioning (AC) solutions for a sprawling commercial complex. The project aimed to address diverse cooling requirements while minimizing energy consumption and operational costs.</p>
        </div>



        <div className=" space-y-2">
            <h2 className='text-lg text-green-400 font-semibold  leading-6'>💡 Solution Offered:</h2>
            <p className=' text-wrap text-gray-400 leading-5 text-base'>
We selected high-efficiency AC units with variable-speed compressors and deployed sophisticated zoning systems for precise temperature control. Integration of smart control technologies enabled remote monitoring and adjustment of AC settings, enhancing operational efficiency.</p>
        </div>

        <div className=" space-y-2">
            <h2 className='text-lg text-green-400 font-semibold  leading-6'>🔑 Key Features:</h2>
         
              <ul className='text-gray-400 leading-5 text-base space-y-2'>
                <li> <span className='text-orange-400  font-medium'>High-Efficiency AC Units: </span> 
                <span>Selected AC units with high SEER ratings and variable-speed compressors for optimal performance and energy savings.</span></li>

                <li>
                  <span className='text-orange-400  font-medium'>Zoning Systems: </span>
                <span>Implemented zone control dampers and thermostats for customized cooling in different areas, maximizing comfort and efficiency.</span></li>

                <li>
                  <span className='text-orange-400  font-medium'>Smart Control Technologies:</span>
                 <span> Integrated IoT platforms and cloud-based software for remote monitoring and scheduling of AC operations, ensuring flexibility and convenience for facility managers.</span></li>

              
              </ul>
        
        </div>



        <div className=" space-y-2">
            <h2 className='text-lg text-green-400 font-semibold  leading-6'>📜 Certificates:</h2>
         
            <div className="flex gap-2 p-10">
           <ImageCertificate/>
           <PdfReader/>
            </div>
        
        </div>
       
    </div>
</div>

       </div>
  )
}

export default ProjectDetailClient