"use client"

import AboutComponent from "@/components/about";
import FormComponent from "@/components/form";
import axios from "axios"
import Logo from "@/components/logo";
import ServicesComponent from "@/components/services/services";
import Projects from "@/components/smanubeer/projects";
import { useEffect, useState } from "react";
import SearchComponent from "@/components/search";
import FilterSidebar from "@/components/filterSidebar";
import FilterCourseCard from "@/components/filterCourseCard";





export default function Home() {
 
  const [searchData,setSearchData]=useState("")
  const [courseData,setCourseData]=useState<any>([])
  useEffect(()=>{
    axios.get(`/api/search?search=${searchData}`).then((response:any)=>{
console.log("data",response.data);
setCourseData(response.data);
    }).catch((error)=>{
      console.log("error",error);
    })
  },[searchData,setCourseData])

  return ( <div className="w-full">
    <div className="flex   border-b-2 shadow-md p-2 h-12 w-full"><Logo/></div>
    <div className="border-2 w-max rounded-full bg-slate-200">
      <input className="p-2" onChange={(event)=>setSearchData(event.target.value)}/>
    </div>


<div className="p-10 w-max">
  <SearchComponent/>
</div>
    <div className=" flex gap-20 px-20">
      <FilterSidebar/>

    <div className="grid grid-cols-1  w-full md:w-11/12 lg:w-10/12 xl:w-1/2 ">
      {courseData.length&&courseData.map((course:any,index:any)=>{
        return <>{searchData?<div key={index} className="p-4 m-4 bg-slate-100  h-[200px] border border-slate-300 rounded-lg">
        <h1 className="text-lg font-medium leading-6">{course.name}</h1>
        <p>{course.code}</p>
      </div>:

        <FilterCourseCard/>}</>
      })}
    </div>
   
    </div>
   </div>
  );
}
