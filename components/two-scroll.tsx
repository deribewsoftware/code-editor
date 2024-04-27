
import React from 'react'
import { IoIosSend } from 'react-icons/io'

const TwoScroll = () => {
  return (<div className='w-full  bg-slate-100 min-h-screen  grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6 xl:gap-10 '>

    <div className="relative flex justify-center">

      <div className="w-full md:w-5/12   md:fixed ">
       <div className="w-full p-4 shadow-md  dark:shadow-black bg-white py-6 flex flex-col justify-center items-center gap-20 border dark:border-gray-700 h-screen overflow-y-auto">
      
       <div className="grid grid-cols-2 w-full justify-center gap-1">
      <input
      className='border p-2 w-full'
      id="action"/>
      <button className="text-gray-500 dark:text-gray-400 font-bold hover:text-blue-500 hover:dark:text-blue-400 transition  duration-300"><IoIosSend size={40}/></button>
      </div>
        
        
          </div>
      </div>
    </div>



    <div className="relative flex justify-center ">
    <div className="w-full md:w-5/12    md:fixed  ">
    <div className="p-4 h-screen overflow-y-auto flex flex-col justify-center items-center gap-20 bg-white py-6 shadow-md dark:shadow-black border dark:border-gray-700 ">
    
    <div className="grid grid-cols-2 w-full justify-center gap-1">
      <input
      className='border p-2 w-full'
      id="action"/>
      <button className="text-gray-500 dark:text-gray-400 font-bold hover:text-blue-500 hover:dark:text-blue-400 transition  duration-300"><IoIosSend size={40}/></button>
      </div>


      <div className="grid grid-cols-2 w-full justify-center gap-1">
      <input
      className='border p-2 w-full'
      id="action"/>
      <button className="text-gray-500 dark:text-gray-400 font-bold hover:text-blue-500 hover:dark:text-blue-400 transition  duration-300"><IoIosSend size={40}/></button>
      </div>


        </div>
      </div>
      </div>
    </div>
 
  )
}

export default TwoScroll