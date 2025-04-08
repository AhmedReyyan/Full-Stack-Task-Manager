  import { configureStore } from "@reduxjs/toolkit";
  import addtaskmodal from './data'
  import {tasklist, taskpurpose , setTaskForEdit} from   './data'
  


  export const store = configureStore({
    reducer: {
        addTaskModal: addtaskmodal,
        taskList : tasklist,
        taskPurpose : taskpurpose,
        setTaskForEdit : setTaskForEdit
    }
  })