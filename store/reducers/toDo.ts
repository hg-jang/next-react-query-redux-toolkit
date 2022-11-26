import { createReducer, createAction } from '@reduxjs/toolkit'

import { ToDo, ToDoStatus } from '../../types/ToDo.type';

export type ToDoState = {
  toDos: Array<ToDo>;
}

const initialState: ToDoState = {
	toDos: [
    {
      id: 1,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 2,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 3,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 4,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 5,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 6,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    },
    {
      id: 7,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 8,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 9,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 10,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 11,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    },
    {
      id: 12,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 13,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 14,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 15,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 16,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 17,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 18,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 19,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 20,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 21,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 22,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 23,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    }, {
      id: 24,
      toDo: '공부하기',
      status: ToDoStatus.NONE
    }, {
      id: 25,
      toDo: '밥 먹기',
      status: ToDoStatus.DOING,
    }, {
      id: 26,
      toDo: '방 청소',
      status: ToDoStatus.DONE,
    },
  ]
}

const addToDo = createAction<ToDo, 'addToDo'>('addToDo')
const removeToDo = createAction<{ id: number }, 'removeToDo'>('removeToDo')

const moveToDoing = createAction<{ id: number }, 'moveToDoing'>('moveToDoing');
const moveToDone = createAction<{ id: number }, 'moveToDone'>('moveToDone');
const moveToNone = createAction<{ id: number }, 'moveToNone'>('moveToNone');

// function moveToDoingPayloadType<T>() {
//   return (payload: T) => ({ payload: payload })
// }
// const moveToDoing = createAction('moveToDoing', moveToDoingPayloadType<{ id: number }>())

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