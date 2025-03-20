import React from 'react'

const Task = () => {
  return (
    <div className="w-full bg-black text-white p-2 rounded-xl flex  justify-between">
    <div  className=" w-full   flex  items-center gap-2">
    <input type="checkbox" />
        <h1>do your work at time</h1> 
    </div>

        <button  className="p-2">X</button>
  </div>
  )
}

export default Task
