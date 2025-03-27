  import { configureStore } from "@reduxjs/toolkit";
  import addtaskmodal from './data'
  import {tasklist} from   './data'


  export const store = configureStore({
    reducer: {
        addTaskModal: addtaskmodal,
        taskList : tasklist,
    }
  })