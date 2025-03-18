import React from 'react'
import { MdCancel } from 'react-icons/md'

const MobileSidebar = () => {
  return (
    <div className='h-[100vh] w-[70%] text-white bg-black  flex flex-col  items-center justify-between'>
        <div className='w-[80%] mt-4 flex flex-col gap-6'>
             <div className='flex justify-between items-center'>
            <h1>Logo</h1>
                <MdCancel size={30}/>
             </div>
      
      <ul className='text-white  flex flex-col gap-2 items-start w-[80%]  '>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Teams</li>
        <li>Organizations</li>
      </ul>
        </div>
       

      <div>Logout</div>
    </div>
  )
}

export default MobileSidebar
