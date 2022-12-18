import { createReducer, createAction } from '@reduxjs/toolkit'

import { ToDo, ToDoStatus, User } from '../../types/ToDo.type';

export type ToDoState = {
  user: User | null;
  toDos: Array<ToDo>;
}

const initialState: ToDoState = {
  user: null,
	toDos: []
}

const addToDo = createAction<ToDo, 'addToDo'>('addToDo')
const removeToDo = createAction<{ id: number }, 'removeToDo'>('removeToDo')

const moveToDoing = createAction<{ id: number }, 'moveToDoing'>('moveToDoing');
const moveToDone = createAction<{ id: number }, 'moveToDone'>('moveToDone');
const moveToNone = createAction<{ id: number }, 'moveToNone'>('moveToNone');

const sampleReducer = createReducer(initialState, (builder) => 
  builder
    .addCase(addToDo, (state, action) => {
      state.toDos = [
        ...state.toDos,
        action.payload
      ]
    })
    .addCase(removeToDo, (state, action) => {
      state.toDos = state.toDos.filter(t => t.id !== action.payload.id)
    })
    .addCase(moveToDoing, (state, action) => {
      const toDo = state.toDos.find(t => t.id === action.payload.id);

      if(toDo) toDo.status = ToDoStatus.DOING;
    })
    .addCase(moveToDone, (state, action) => {
      const toDo = state.toDos.find(t => t.id === action.payload.id);

      if(toDo) toDo.status = ToDoStatus.DONE;
    })
    .addCase(moveToNone, (state, action) => {
      const toDo = state.toDos.find(t => t.id === action.payload.id);

      if(toDo) toDo.status = ToDoStatus.NONE;
    })
)

export default sampleReducer
export {
  addToDo,
  removeToDo,
  moveToDoing,
  moveToDone,
  moveToNone,
}