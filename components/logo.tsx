import React from 'react'
import{Lugrasimo,Oleo_Script} from "next/font/google"
import { Weight } from 'lucide-react'
const lugrasimo=Lugrasimo({style:["normal"],subsets:["latin"],weight:["400"]} )
const Oscript=Oleo_Script({style:["normal"],subsets:["latin"],weight:["400"]} )
const Logo = () => {
  return (
    <div className={`text-xl lg:text-3xl flex  gap-2 lg:font-extrabold ${Oscript.className}`}>
        <div className="  text-green-400 border rounded-full drop-shadow-2xl text-4xl">EEA</div>
        <div className={`text-green-400 leading-10 drop-shadow-2xl ${lugrasimo.className}`}>
            <h1>Ethio Exams Academy</h1>
        </div>
    </div>
  )
}

export default Logo