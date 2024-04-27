import React from 'react'
import CustomModal from './customModal'
import { FaFileImage } from 'react-icons/fa'


const PdfReader = () => {
  return (
    <CustomModal modalName={<FaFileImage size={40} className=''/>} title='Certificate Image'>
    <div className=" flex justify-center relative overflow-hidden">
    <embed src="../public/electroMechnical.pdf" type="application/pdf" width="800px" height="800px" />

    </div>
  </CustomModal>
  )
}

export default PdfReader