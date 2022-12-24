export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
  toDos: Array<ToDo>
}

export interface ToDo {
  id: number;
  toDo: string;
  status: ToDoStatus
}

export enum ToDoStatus {
  NONE = 'NONE',
  DOING = 'DOING',
  DONE = 'DONE',
  REMOVED = 'REMOVED',
}

export enum ToDoStatusChange {
  NONE_TO_REMOVED = 'NONE_TO_REMOVED',
  NONE_TO_DOING = 'NONE_TO_DOING',
  // NONE_TO_DONE = 'NONE_TO_DONE',

  DOING_TO_NONE = 'DOING_TO_NONE',
  DOING_TO_DONE = 'DOING_TO_DONE',

  DONE_TO_DOING = 'DONE_TO_DOING'
}