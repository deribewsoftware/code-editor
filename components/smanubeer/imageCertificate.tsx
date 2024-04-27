import React from 'react'
import CustomModal from './customModal'
import { BsImage } from 'react-icons/bs'
import Image from 'next/image'

const ImageCertificate = () => {
  return (
    <CustomModal modalName={<BsImage size={40} className=''/>} title='Certificate Image'>
    <div className=" flex justify-center relative overflow-hidden">
     <Image height={800} width={600} src='https://picsum.photos/600/800?random=1' alt='image certificate'/>
    </div>
  </CustomModal>
  )
}

export default ImageCertificate