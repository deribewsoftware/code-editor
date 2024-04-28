import Image from 'next/image'
import React from 'react'

const FilterCourseCard = () => {
  return (
   <div className="grid 
   grid-cols-1 md:grid-cols-3

    w-full 
    hover:shadow
     dark:border-gray-700
    hover:dark:shadow
    hover:dark:shadow-green-400
    hover:dark:border-green-400
     hover:shadow-blue-400 
     gap-6 m-4
     dark:bg-slate-800
      hover:dark:bg-gray-700
      bg-slate-50
      hover:bg-slate-100
      hover:border-blue-500   
      border border-slate-300
      rounded-[10px]
       transition-all
     ">

    {/* image */}
    <div className=" md:col-span-1 overflow-hidden">
        <Image 
        className=' h-full w-full object-contain'
        height={200}
        width={500}
        src={`https://ethio-exams-academy.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3403d7fd-a0c2-4b61-b5bd-3eaf994e3bb4-et13o.png&w=256&q=75`}
        alt='Image'
        />
    </div>


    {/* Contents */}
    <div className=" space-y-2 md:col-span-2 pt-2 px-2">
    <div className=" flex justify-between ">
    <h1 className=" text-xl font-semibold leading-10 ">Next Js Complted Course Software Engineering</h1>
    <div className=""><p className='text-blue-600 leading-snug font-semibold dark:text-green-400'>Free</p></div>
    </div>
    <div className="">
    <p className='text-base leading-6 font-medium'>webDevelopment</p>
    <p className='text-sm  leading-4 text-gray-500'>Software Engineering</p>
    </div>
    <div className="">rating ***************</div>
    <div className="flex justify-end w-full pt-2">
        <div className="">
            <h6>Deribew Shimelis</h6>
            <p>Fullstack developer</p>
        </div>
    </div>
    
  </div>


   </div>
  )
}

export default FilterCourseCard