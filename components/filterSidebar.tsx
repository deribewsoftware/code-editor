import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { filterData } from '@/lib/filterData'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const FilterSidebar = () => {
  return (
    <div className='w-[300px] flex pl-10  h-screen  justify-center overflow-y-auto  left-0'>
        
        <div className="w-full space-y-2">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <Accordion type="single" collapsible className="w-full">
      {filterData.map((data,index)=>{
        return <AccordionItem key={index} value={`${index}`}>
        <AccordionTrigger>{data.name}</AccordionTrigger>
        <AccordionContent>

        <RadioGroup >

        {data.subCategory.map((category:any,ind:number)=>{
          
          return <div key={ind}  className="flex items-center space-x-2">
        <RadioGroupItem value={category.value} id={`${ind+index}`} />
        <Label htmlFor={`${ind+index}`}>{category.name}</Label>
      </div>
             
         })
         }
     
    </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      })}
     
    </Accordion>

        </div>
        </div>
  )
}

export default FilterSidebar