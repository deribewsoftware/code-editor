"use client"
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'

const FormComponent = () => {
    const [selectedData, setSelectedData] = useState<any[]>([]);

    const handleCheckboxChange = (event:any) => {
        console.log("Checkbox is selected")
      const isChecked = event.target.checked;
      const value = event.target.value;
  
      if (isChecked) {
        // Add the value to the selectedData array
        setSelectedData((prev) => [...prev, value]);
      } else {
        // Remove the value from the selectedData array
        setSelectedData((prev) => prev.filter((item) => item !== value));
      }
    }


    console.log(`Selected Value`,selectedData)
  return ( <div className='p-20'>
    <Checkbox value="deribew" onChange={handleCheckboxChange} />
  </div>


  )
}

export default FormComponent