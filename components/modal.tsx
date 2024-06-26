"use client"
import React, { ReactNode, useState } from 'react'
import {motion} from "framer-motion"
import { GrClose } from "react-icons/gr";
import { Button } from './ui/button';
interface ModalProps{
  children:ReactNode;
  title:string;
  buttonLabel:string;
  onClick:() => void;
  modalName:string;
}
const CModal:React.FC<ModalProps> = ({children,title,buttonLabel,onClick,modalName}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(prev => !prev)} className='text-lg'>
       {modalName}
      </Button>
      {isOpen && (
        <div  className="fixed z-50 inset-0 overflow-y-auto w-full  ">
          <div className="flex  items-center justify-center min-h-screen w-full pt-4 pb-20 text-center">
            <div onClick={() => setOpen(prev => !prev)}  className="fixed  inset-0 transition-opacity " aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-65"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <motion.div 
            initial={{opacity:0 ,y:40}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0 ,y:40}}
            transition={{delay:0.25,duration:0.25}}
            className=" z-40 flex justify-center  align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle m-4   lg:max-w-6xl ">
              <div className=" bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <div className="w-full flex justify-between p-4">
                      <h3 className="text-lg leading-6 font-semibold text-gray-900 mt-2">{title}</h3>
                      <Button variant="ghost" onClick={() => setOpen(prev => !prev)} className="text-red-500 hover:text-red-700  font-bold py-2 px-4 rounded">
                        <GrClose size={24}/>
                      </Button>
                      
                      </div>
                    <div className=" text-wrap"> {children}</div>
                      <div className="mt-4 p-4 w-full flex justify-end gap-6">
                        <Button onClick={() => setOpen(prev => !prev)} variant="destructive">Cancel</Button>
                        <Button onClick={()=>onClick}>{buttonLabel}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default CModal;
