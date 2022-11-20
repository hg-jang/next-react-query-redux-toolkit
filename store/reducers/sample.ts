import { createReducer, createAction } from '@reduxjs/toolkit'

export type SampleState = {
  count: number;
}

const initialState: SampleState = {
	count: 0
}

const increment = createAction<number, 'increment'>('increment')
const decrement = createAction<number, 'decrement'>('decrement')

const sampleReducer = createReducer(initialState, (builder) => 
  builder
    .addCase(increment, (state, action) => {
      state.count += action.payload
    })
    .addCase(decrement, (state, action) => {
      state.count -= action.payload
    })
)

export default sampleReducer
export {
  increment,
  decrement,
}