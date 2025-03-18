"use client"

import React, { useState } from 'react'

import { MdCancel, MdCancelPresentation, MdMenu } from "react-icons/md";
  

const SideBar = () => {

    const [mobile, setMobile] = useState(() => window.innerWidth < 576 ? true : false)
     
    const [expanded , setExpanded] = useState(!mobile)



  return ( 
    <>
      {expanded ? (<div className='h-[100vh] w-[60%] md:w-[23%] lg:w-[20%] text-white bg-black  flex flex-col  items-center justify-between'>
        <div className='w-[80%] mt-4 flex flex-col gap-6'>
             <div className='flex justify-between items-center'>
            <h1>Logo</h1>
               { mobile &&  <MdCancel
                onClick={()=>{
                    setExpanded(false)
                }}
                 
                size={30}/>}
             </div>
      
      <ul className='text-white  flex flex-col  items-start w-[100%] '>
        <li>Dashboard</li>
        <li>Schedule</li>
        <li>Projects</li>
        <li>Teams</li>
        <li>Organizations</li>
      </ul>
        </div>
       

      <div className='w-[80%] mb-8'>
        <li>Logout</li>
        </div>
    </div>):  <div className='absolute top-2 left-2 '
       onClick={()=>{
        setExpanded(true)
       }}
    ><MdMenu   size={28}/></div> 
      
      }   
    </>


    )
   
  
}

export default SideBar
