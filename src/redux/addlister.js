import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  todos: [],
}

export const counterSlice = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos = state.todos.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer