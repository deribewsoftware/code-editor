import { ethioServices } from '@/lib/servicesData'
import Image from 'next/image';
import React from 'react'
const ServicesComponent = () => {
  return (
    <div className='bg-zinc-100 p-4 md:p-10 flex justify-center w-full'>
        <div className="">
   <h1 className='text-3xl font-semibold leading-10 p-4'>Services</h1>
            <div className="flex justify-center w-full">
            <div className="flex flex-col gap-10 w-full md:w-11/12 lg:w-10/12 xl:w-8/12 ">
                {
                   ethioServices.map((service,index) =>{
                    const isEven = index % 2 === 0;
                    return  <div key={index} className="bg-white shadow-md rounded-[10px] space-y-6 p-4">
                    <h2 className='text-xl leading-6 font-semibold'>{service.title}</h2>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10  w-full `}>
                        <div className={`${isEven ? '' : 'lg:order-last'} flex justify-center items-center`}>
                         <ul className=' space-y-4 list-disc list-inside'>
                            {service.description.map((des,ind)=>{
                                return <li className='flex items-center' key={ind}>
                                    <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
                                    {des.content}</li>
                            })}
                         </ul>
                        </div>

                        <div className="w-full">
                            <Image height={400} width={400} src={service.image} alt='service image'/>
                        </div>
                    </div>
                </div>
                   })
                }
            </div>

            </div>
        </div>
    </div>
  )
}

export default ServicesComponent