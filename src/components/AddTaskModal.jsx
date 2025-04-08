import React, { useEffect, useState } from 'react'
import Button from './Button'
import { open , close ,addTask ,  removeTask , replace, clearTask, taskpurpose} from '../context/data'
import { useDispatch , useSelector} from 'react-redux'


const AddTaskModal = () => {

   const modalValue = useSelector(state => state.addTaskModal.value)
  const idSetter = useSelector(state => state.taskList.value.length)
  const taskList = useSelector(state => state.taskList.value)
  const addTaskPurpose   = useSelector(state => state.taskPurpose.value)
  const selectedTaskForEdit = useSelector(state => state.setTaskForEdit.value)
  // console.log(idSetter);
  console.log(addTaskPurpose);
  console.log(selectedTaskForEdit);
  

  
  
  
  
  const [taskData ,setTaskData ]= useState({
    task : '',
    description : '',
    deadLine : {
      date : '',
      time : ''
    },
    status: 'pending',
    id:idSetter
  }) 



  // if(addTaskPurpose === 'Edit Task'){
  //   console.log(true);
    
  // }


 
 const Dispatch = useDispatch()




 
//  if (selectedTaskForEdit) {
//   console.log('exits id');
  
  
 
// }
// setTaskData(taskList[selectedTaskForEdit])
  console.log(taskData);
  console.log('checking id');

useEffect(()=>{

  if (addTaskPurpose === 'Edit Task') {
    console.log('worked');
    
  setTaskData(taskList[selectedTaskForEdit])
  }
},[])


if(addTaskPurpose === 'Add Task'){
     Dispatch(clearTask())
}

  return (
    <form    
       onSubmit={(e)=>{
                 e.preventDefault()
       }}
    className=' p-2 flex flex-col items-center w-[90%] text-white  md:w-[50%]  bg-black  h-max rounded-md  absolute justify-between  mt-6 '>
        <button  className='absolute right-6 text-2xl'
          onClick={()=>{
            modalValue && Dispatch(close())
          }}
        >X</button>
      <h1 className='text-2xl font-semibold'>Add Task</h1>

      <div className='w-full flex flex-col items-center gap-4 mt-6'>
      <div className='w-[90%]   gap-2'>
        <h1 className='ml-2'>Task</h1>
      <input value={taskData?.task} 
        onChange={(e)=>{
              setTaskData({...taskData , task : e.target.value})
        }}
      className='bg-gray-200   text-black w-full p-2 rounded-xl border-2 ' type="text" />
      </div>
      <div className='w-[90%]   gap-2'>
        <h1 className='ml-2'>Description</h1>
      {/* <input  className='bg-gray-200 w-full p-2 rounded-xl border-2 ' type="text" /> */}
      <textarea
      value={taskData?.description}
      onChange={(e)=>{
        setTaskData({...taskData , description : e.target.value})
  }}
      className='bg-gray-200 text-black w-full h-30 p-2 rounded-xl border-2  resize-none' name="" placeholder='Enter the Description . . . ' />
      </div>
      <div className='w-[90%]   gap-2'>
        <h1 className='ml-2'>Dead Line</h1>
        <div className='flex  flex-col md:flex-row gap-3'>

      <input  
          value={taskData?.deadLine?.date}
          onChange={(e)=>{
            setTaskData({...taskData , deadLine : {...taskData.deadLine , date : e.target.value}})
      }}
      className='bg-gray-200  text-black w-full p-2 rounded-xl border-2 ' type="date" />
      <input 
         value={taskData?.deadLine.time}
         onChange={(e)=>{
          setTaskData({...taskData , deadLine : {...taskData?.deadLine , time : e.target.value}})
    }}
      className='bg-gray-200  text-black w-full p-2 rounded-xl border-2 ' type="time" />
        </div>
      {/* <textarea className='bg-gray-200 w-full h-30 p-2 rounded-xl border-2  resize-none' name="" id="">Hello</textarea> */}
      </div> 
      

      </div>
      <div className='w-full  p-4  ml-2 '>
        <select name="priority" id="priority">
          <option className='bg-black' value="1">Priority 1</option>
          <option value="2  ">Priority 2</option>
          <option value="3">Priority 3</option>
        </select>
      </div>
<div className='absolute bottom-4 right-2  text-black '>
      <Button  onClick={
        ()=>{
          // console.log(taskData);
          if(addTaskPurpose === 'Edit Task'){
            Dispatch(replace({id : selectedTaskForEdit , task: taskData} ))
            Dispatch(clearTask())
            Dispatch(close())
          }else{
            Dispatch(addTask(taskData))
               Dispatch(close())}
        }
      } type={'submit'} text={"+ Add Task"}/>
      </div>
      
    </form>
  )
}

export default AddTaskModal
