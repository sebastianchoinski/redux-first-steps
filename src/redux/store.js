import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './addlister.js'

export const store = configureStore({
  reducer: {
    task: taskReducer
  },
})