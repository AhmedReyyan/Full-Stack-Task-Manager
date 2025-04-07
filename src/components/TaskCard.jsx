import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { completed } from '../context/data'
import { open } from '../context/data'
import { useSelector } from 'react-redux'

const TaskCard = (props) => {
   
     const {topic , description, date ,time ,id }  = props
     const Dispatch = useDispatch()
  return (
    <div className=' flex flex-col w-full h-max gap-2 bg-white justify-between items-center rounded-md p-2 '>

      <div className=' flex w-full justify-between items-center  '>
      <input  
       onClick={()=>{
                          console.log(id);
                          // console.log(item);
                          
                          Dispatch(completed(id))
                      }}  
      type="checkbox" name="" id=""  className='w-4 h-4'/>
      <div className='w-[80%]'>
        <h1  className='text-xl'>{topic}</h1>
        <p   className='text-gray-500'>{description}</p>
      </div>
      <div className='flex gap-2'>
        <button 
            onClick={()=>{
              Dispatch(open())
             
            }}
        
        ><BiEdit  size={24}/></button>
        <button><MdDelete  size={24}/></button>
      </div>
      </div>
      <div  className='w-full   flex justify-between'>
        <h3>Priority 1</h3>
        <p>deadLine : {date} at ({time})</p>
      </div>
    </div>
  )
}

export default TaskCard
