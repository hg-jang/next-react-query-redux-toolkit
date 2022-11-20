import { combineReducers } from '@reduxjs/toolkit'

import sampleReducer from './sample'

const combinedReducer = combineReducers({
  sample: sampleReducer,
})

export default combinedReducer