import React, { ReactNode } from 'react'

const Container = ({children}:{children:ReactNode}) => {
  return (
    <div className=' bg-black rounded-[20px] shadow-md w-full'>
      {children}

    </div>
  )
}

export default Container