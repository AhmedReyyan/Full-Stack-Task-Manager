import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { open , close , completed, addnewtask } from '../context/data'
import TaskCard from './TaskCard'
import CompletedTaskCard from './CompletedTaskCard'

const TasksPage = () => {
    let modalvalue = useSelector(state => state.addTaskModal.value)
    let tasksGlobal = useSelector(state => state.taskList.value)

    const filteredPendingTasks = tasksGlobal.filter((item)=>{
        return item.status === 'pending'
    })

    const filterdCompletedTasks = tasksGlobal.filter((item)=>{
        return item.status == 'completed'
    })
    
    console.log(tasksGlobal);
    const Dispatch = useDispatch()
    
//   const [showTask , setShowTask]  = useState(false)


  return (
    <div  className='w-full  h-full flex flex-col items-center relative'>
         <div className=' mt-4 w-[95%] flex justify-between'>
            <h1 className='text-3xl font-semibold'>Tasks</h1>
            <Button onClick={()=>{
                Dispatch(open())
                Dispatch(addnewtask())
                // console.log(modalvalue);
                
            }} text={'New Task'} /> 
         </div>

        {
        
           modalvalue && <AddTaskModal/>
        
        } 

        <div className=' w-[95%] h-full     mt-5  '>
           {/* <h1>Pending</h1> */}
          <div className='w-full  md:w-[50%]  h-max flex flex-col gap-2   overflow-scroll no-scrollbar'>
               {filteredPendingTasks?.map((item , index)=>(
                
                <TaskCard 
                
                 description={item.description.length>60?item.description.slice(0,30) + ". . . ." :item.description} id={item.id}  topic={item.task.length>40?item.task.slice(0,23)  :item.task}  key={index}   date={item.deadLine.date}  time={item.deadLine.time}/>

               ))}
              {filterdCompletedTasks.length>0 &&  <h1  className='text-xl font-bold'>Completed</h1>  }
                  <div className='w-full flex flex-col gap-2'>
                      {filterdCompletedTasks?.map((item,index)=>{
                            // console.log(item)
                        
                         return <CompletedTaskCard key={index} topic={item.task} />
                      })}  
                  </div>
                
           </div>

        



        </div>

            
    </div>
  )
}

export default TasksPage 
