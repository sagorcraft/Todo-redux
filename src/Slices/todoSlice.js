import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    arr: []
  },
  task: "",
  updateIndex: null,
  isUpdate: false
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state,action)=> {
      state.value.arr.push(action.payload)
      state.task = ""
    },
    deleteTodo: (state,action)=> {
      state.value.arr.splice(action.payload, 1)
    },
    updateTodo: (state,action)=> {
      state.value.arr[action.payload.index] = action.payload.text
      state.task = ""
      state.isUpdate = false
      state.updateIndex = null
    },
    setTask: (state,action) => {
      state.task = action.payload
    },
    setEditMode: (state,action) => {
      state.task = action.payload.item
      state.updateIndex = action.payload.index
      state.isUpdate = true
    }
  },
})


export const {addtodo,deleteTodo,updateTodo,setTask,setEditMode} = todoSlice.actions

export default todoSlice.reducer