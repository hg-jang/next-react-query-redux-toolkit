import { createReducer, createAction } from '@reduxjs/toolkit'

import { ToDo, ToDoStatus, User } from '../../types/ToDo.type';

export type ToDoState = {
  user: User | null;
  toDos: any;
}

const initialState: ToDoState = {
  user: null,
  toDos: [],
}

const logIn = createAction<User, 'logIn'>('logIn')
const logOut = createAction('logOut')

const addToDo = createAction<ToDo, 'addToDo'>('addToDo')
const removeToDo = createAction<{ id: number }, 'removeToDo'>('removeToDo')

const moveToDoing = createAction<{ id: number }, 'moveToDoing'>('moveToDoing');
const moveToDone = createAction<{ id: number }, 'moveToDone'>('moveToDone');
const moveToNone = createAction<{ id: number }, 'moveToNone'>('moveToNone');

const sampleReducer = createReducer(initialState, (builder) => 
  builder
    .addCase(logIn, (state, action) => {
      state.user = action.payload
    })
    .addCase(logOut, (state) => {
      state.user = null
    })
    .addCase(addToDo, (state, action) => {
      if(state.user) {
        state.user.toDos = [
          ...state.user.toDos,
          action.payload,
        ]
      }
    })
    .addCase(removeToDo, (state, action) => {
      if(state.user) {
        state.user.toDos = state.user.toDos.filter(t => t.id !== action.payload.id)
      }
    })
    .addCase(moveToDoing, (state, action) => {
      if(state.user) {
        const toDo = state.user.toDos.find(t => t.id === action.payload.id);
  
        if(toDo) toDo.status = ToDoStatus.DOING;
      }
    })
    .addCase(moveToDone, (state, action) => {
      if(state.user) {
        const toDo = state.user.toDos.find(t => t.id === action.payload.id);
  
        if(toDo) toDo.status = ToDoStatus.DONE;
      }
    })
    .addCase(moveToNone, (state, action) => {
      if(state.user) {
        const toDo = state.user.toDos.find(t => t.id === action.payload.id);
  
        if(toDo) toDo.status = ToDoStatus.NONE;
      }
    })
)

export default sampleReducer
export {
  logIn,
  logOut,
  addToDo,
  removeToDo,
  moveToDoing,
  moveToDone,
  moveToNone,
}