import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const SideBar = () => {

  const [show, setShow] = useState(false)
  const [closing , setClosing] = useState(false)


   function handleClose(){
             setClosing(true)
              setTimeout(()=>{
                setShow(false)
                setClosing(false)
              },1000)
   }


  return (
  
    show?<div className={`h-full w-[60%] md:relative z-10 absolute lg:relative bg-black md:w-[25%] text-white flex flex-col  items-center   
       ${closing ?  ' animateShowingDown' :'animateShowingUp' }
    `}>
    <div className='w-[90%] h-max  bg-lime-400 p-4 mt-8 rounded-2xl' >
      <img src={"../assets/react.svg"} alt="text" />
    </div>
    <BiMenu
     onClick={handleClose}
     size={30} className='absolute  right-0 md:hidden' />
    <div className=' w-full h-full flex flex-col items-center mt-12 justify-between mb-12'>
      <ul className='w-[90%] flex flex-col items-center  gap-3'>
        <li className='bg-gray-400 text-black w-full p-2 rounded-xl'>Tasks</li>
        <li className='bg-gray-400 text-black w-full p-2 rounded-xl'>Asssigned</li>
      </ul>


      <div className='w-[90%] flex flex-col items-center  gap-3'>


        <li className='bg-gray-400 text-black w-full p-2 rounded-xl '>Logout</li>
      </div>

    </div>
  </div>:<BiMenu   
      onClick={()=>{
        setShow(true)
      }}
  size={30} className='p-2  md:hidden' />
  
  
)

}

export default SideBar
