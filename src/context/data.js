import { createSlice } from "@reduxjs/toolkit";


export const addtaskmodal= createSlice({
    name : 'addtaskmodal',
    initialState: {
        value: false
    },

    reducers:{
        open: (state) => { state.value = true },
        close: (state) => { state.value = false }
    }
})
export const     tasksList = createSlice({
    name : 'taskList',
    initialState: {
        value: []
    },

    reducers:{
        addTask  : (state , action) => { state.value.push(action.payload) },
       removeTask  : (state , action) => { state.value.splice(action.payload,1) },
       completed : (state , action) => { state.value[action.payload].status = 'completed' }
        
    }
})


export const {addTask , removeTask,completed} =  tasksList.actions
export const tasklist =  tasksList.reducer



export const {open , close} =  addtaskmodal.actions
export default  addtaskmodal.reducer