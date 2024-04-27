"use client"

import AboutComponent from "@/components/about";
import FormComponent from "@/components/form";

import Logo from "@/components/logo";
import ServicesComponent from "@/components/services/services";
import Projects from "@/components/smanubeer/projects";





export default function Home() {
 
  return (
   <div className="w-full">
    <div className="flex   border-b-2 shadow-md p-2 h-12 w-full"><Logo/></div>
    <FormComponent/>
   </div>
  );
}
