import { createSlice } from "@reduxjs/toolkit";


export const addtaskmodal= createSlice({
    name : 'addtaskmodal',
    initialState: {
        value: false
    },

    reducers:{
        open: (state) => { state.value = true },
        close: (state) => { state.value = false },
       
    },
})
export const tasksList = createSlice({
    name: 'taskList',
    initialState: {
        value: []
    },

    reducers: {
        addTask: (state, action) => { state.value.push(action.payload) },
        removeTask: (state, action) => { state.value.splice(action.payload, 1) },
        completed: (state, action) => { state.value[action.payload].status = 'completed' },
        replace: (state, action) => {
            const { id, task } = action.payload;
            const index = state.value.findIndex(item => item.id === id);
            if (index !== -1) {
                state.value[index] = task;
            }
        },
    }
})


export const addtaskpurpose = createSlice({
    name : 'taskPurpose',
    initialState:{
        value : 'New Task'
    },


    reducers:{
        addnewtask :(state)=>{ state.value = 'New Task'},
        editTask : (state) => {state.value = 'Edit Task'}
    }
})


const tasktobeedited = createSlice({
    name : 'tasktobeedited',
    initialState:{
        value : "",
    },
    reducers:{
        settask : (state , action) => {state.value = action.payload},
        clearTask : (state) => {state.value = ""}
    }
})

// export const edittask = createSlice({
//     initialState:{
//         value: {}
//     }
// })


export const  {settask ,clearTask} = tasktobeedited.actions
export const     setTaskForEdit = tasktobeedited.reducer


export const {addTask , removeTask,completed,replace} =  tasksList.actions
export const tasklist =  tasksList.reducer


export const taskpurpose = addtaskpurpose.reducer
export const {addnewtask , editTask} = addtaskpurpose.actions

export const {open , close} =  addtaskmodal.actions
export default  addtaskmodal.reducer