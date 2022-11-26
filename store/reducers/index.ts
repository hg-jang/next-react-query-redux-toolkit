import { combineReducers } from '@reduxjs/toolkit'

import toDoReducer from './toDo'

const combinedReducer = combineReducers({
  toDo: toDoReducer,
})

export default combinedReducer