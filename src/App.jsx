import React from 'react'
import SideBar from './components/SideBar'
import TasksPage from './components/TasksPage'

const App = () => {
  return (
    <div className='w-full h-[100vh] flex'>
      <SideBar/>
      <TasksPage />
    </div>
  )
}

export default App
