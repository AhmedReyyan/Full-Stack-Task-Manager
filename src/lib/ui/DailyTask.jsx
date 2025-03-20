import React from 'react'
import Task from './Task'

const DailyTask = () => {
  return (
    <div
     className="bg-white min-w-[350px] h-full p-2 rounded-xl flex flex-col gap-2"
    >
          <Task />  
          <Task />  
          <Task />  
             
              
         </div>
  )
}

export default DailyTask
