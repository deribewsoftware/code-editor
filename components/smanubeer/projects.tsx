"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { serviceData } from '@/lib/services'

import ProjectCard from './projectCard'


const Projects = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (currentScrollPos > 100 && isScrollingDown) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className=' p-4 mt-6     md:mx-10  flex justify-center min-h-screen'>

  <div className="md:p-6  relative ">
  <Tabs defaultValue="all">
    <TabsList  className={`${isFixed ? 'fixed  opacity-100 z-20  drop-shadow-2xl   left-[10%] right-[10%]' :' opacity-0'}
     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-transparent  lg:gap-6 xl:gap-10 transition-all duration-300`}>


    <TabsTrigger  value="all" 
className={`
${isFixed?' shadow-2xl':''}
border hover:bg-gray-700 bg-gray-800 
text-gray-400
transition duration-300 p-1 
rounded-full
font-semibold
text-[15px]
border-gray-600

hover:text-gray-200
 data-[state=active]:bg-blue-500 
 data-[state=active]:text-white
 `}>
all services
</TabsTrigger>



     {serviceData.map(service =>{

return  <TabsTrigger key={service.id} value={service.id} 
className="
border hover:bg-gray-700 bg-gray-800 
text-gray-400
transition duration-300 p-1 
rounded-full
font-semibold
text-[15px]
border-gray-600

hover:text-gray-200
 data-[state=active]:bg-blue-500 
 data-[state=active]:text-white
 ">
{service.name}
</TabsTrigger>
     })}
     
    </TabsList>


    <TabsContent  value="all" className=' '>
      <div className=""> All</div>
          </TabsContent>

    {serviceData.map((service) => {
      return <TabsContent key={service.id} value={service.id}>
      <div className="md:p-10"> 
      
      <Tabs defaultValue="1" className='relative w-full'>
        <TabsList className={`flex ${isFixed ? 'fixed  opacity-100 z-20   drop-shadow-2xl left-[10%] right-[10%]' :' opacity-0'}
         md:gap-10 overflow-x-auto flex-wrap md:flex-nowrap bg-transparent transition-all duration-300`}>
         {service.subServices.map((subService) =>{
          return  <TabsTrigger
           key={subService.id} 
          value={subService.id}
          className=" text-sm
          p-1
           text-gray-400
           border-gray-600
           hover:border-gray-500
           hover:text-gray-200
           font-medium
           data-[state=active]:bg-transparent
           data-[state=active]:text-green-400
           data-[state=active]:border-green-400
           border-b-2
            
          rounded-none
           "
          >
            {subService.service}
          </TabsTrigger>
         })}
        </TabsList>

        {service.subServices.map((subService) =>{
          return  <TabsContent key={subService.id} value={subService.id} className=' p-2'>
            <div className="md:p-10">
            <div className="md:p-6 flex justify-center">
                <p className='text-lg w-full lg:w-11/12 xl:w-10/12  leading-6'>{subService.description}</p>
            </div>
            <div className="w-full flex justify-center">
          <div className="grid mt-6  lg:w-11/12 xl:w-10/12   grid-cols-1 gap-10">
         
         <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          
          </div>
         </div>

            </div>
          </TabsContent>
         })}
      </Tabs>
      </div>
          </TabsContent>
    })}

   


    
  </Tabs>
  </div>

    
    </div>
  )
}

export default Projects