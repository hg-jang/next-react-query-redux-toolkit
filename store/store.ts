import { configureStore, AnyAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import combinedReducer from './reducers'

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = () => (
  configureStore({
    // @ts-ignore
    reducer: reducer,
  })
)

type Store = ReturnType<typeof store>;

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>;
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export const wrapper = createWrapper(store, { debug: true });